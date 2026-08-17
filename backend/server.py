from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import time
import ipaddress
import logging
import httpx
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# ————————————————— Event inquiry email (Emergent managed Resend) —————————————————

EMAIL_BASE_URL = "https://integrations.emergentagent.com"  # constant by design
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "ITACAN")
EVENT_INQUIRY_TO_EMAIL = os.environ.get("EVENT_INQUIRY_TO_EMAIL")
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)

def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)

def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)

class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []
    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []
    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)
    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []

def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan(); scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} ≠ real link host {real!r} (G3)")

async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="email_send_failed")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="email_send_failed")


class EventInquiry(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(default="", max_length=40)
    event_type: str = Field(min_length=1, max_length=80)
    date: str = Field(min_length=4, max_length=20)
    guests: int = Field(ge=1, le=500)
    message: str = Field(default="", max_length=3000)
    website: str = Field(default="", max_length=200)  # honeypot

_inquiry_rate: dict = {}

def _rate_limit(ip: str, limit: int = 5, window: int = 600) -> None:
    now = time.time()
    hits = [t for t in _inquiry_rate.get(ip, []) if now - t < window]
    if len(hits) >= limit:
        raise HTTPException(status_code=429, detail="too_many_requests")
    hits.append(now)
    _inquiry_rate[ip] = hits

@api_router.post("/event-inquiry")
async def event_inquiry(inquiry: EventInquiry, request: Request):
    if inquiry.website:  # honeypot tripped — silently accept, send nothing
        return {"status": "ok"}

    client_ip = request.client.host if request.client else "unknown"
    _rate_limit(client_ip)

    if not EMAIL_KEY or not EVENT_INQUIRY_TO_EMAIL:
        logger.warning("Event inquiry received but email service is not configured")
        raise HTTPException(status_code=503, detail="email_not_configured")

    row = lambda label, value: (
        f'<tr><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;'
        f'vertical-align:top;width:140px">{label}</td>'
        f'<td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#111820">'
        f'{escape(value)}</td></tr>'
    )
    html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif">'
        '<h2 style="font-family:Georgia,serif;color:#074169;margin:0 0 16px">Neue Event-Anfrage — ITACAN</h2>'
        '<table role="presentation">'
        + row("Name", inquiry.name)
        + row("E-Mail", inquiry.email)
        + row("Telefon", inquiry.phone or "—")
        + row("Art des Events", inquiry.event_type)
        + row("Wunschdatum", inquiry.date)
        + row("Anzahl Personen", str(inquiry.guests))
        + "</table>"
        + (
            '<p style="font-family:Arial,sans-serif;font-size:14px;color:#111820;margin:16px 0 0">'
            f'<strong>Nachricht:</strong><br>{escape(inquiry.message).replace(chr(10), "<br>")}</p>'
            if inquiry.message else ""
        )
        + '<p style="font-size:12px;color:#888;margin:24px 0 0">Gesendet über das Kontaktformular auf itacan.ch — ITACAN Restaurant • Bar • Pinseria, Kriens</p>'
        "</td></tr></table>"
    )
    email_id = await send_email(
        to=EVENT_INQUIRY_TO_EMAIL,
        subject=f"Event-Anfrage: {inquiry.event_type} — {inquiry.name}",
        html=html,
        reply_to=inquiry.email,
    )
    return {"status": "ok", "email_id": email_id}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
