# ITACAN Website V1 — PRD

## Original Problem Statement
Definitive V1 website for ITACAN (Restaurant • Bar • Pinseria, Obernauerstrasse 41, 6010 Kriens, CH) per MASTER PROMPT V1: premium editorial hospitality site using the official asset package (logo SVG, favicon, 37 approved photos, menu source graphics as content reference only). Approved 4-color UI palette (#074169 Deep Blue, #237FAE Ocean, #F4F2EC Ivory, #D8D0C4 Sand), Cormorant Garamond 500/600 headings + Montserrat 400/500/600 UI, German-only V1, navbar signature wave with subtle scroll reaction, 12-section homepage, centralized menu dataset powering both /speisekarte and homepage Menu Discovery rails, events/group-dining commercial focus with inquiry form → email, MyLOCALINA reservations, mobile sticky action bar, legacy redirects, legal shells (no fabricated content).

## Architecture
- Stack (preserved): React 19 + react-router-dom v7 + Tailwind + framer-motion (subtle reveals only). No scroll hijacking, no WebGL/3D, no Lenis in V1.
- Assets: `/public/assets/itacan/` — brand (official logo SVG, favicon, variants) + photos (optimized WebP, max 1920px).
- DATA / CONTENT / MEDIA / UI fully separated:
  - `src/config/restaurant.js` — all business data (address, phone, WhatsApp, email, MyLOCALINA URL, Just Eat/Uber Eats, Instagram, TikTok, opening hours)
  - `src/config/media.js` — image registry with per-image objectPosition (photos replaceable without layout changes)
  - `src/copy/de.js` — all German interface copy (en.js can be added later with same shape)
  - `src/data/menu.js` — single menu dataset (dishes, wine, lunch, group offers) + discovery rail mapping
  - `src/data/events.js` — public events (empty → section auto-hides)
- Backend: FastAPI `/api/event-inquiry` → Emergent managed Resend (env: EMERGENT_EMAIL_KEY, EVENT_INQUIRY_TO_EMAIL, EMAIL_FROM_NAME, EMAIL_REPLY_TO), honeypot + IP rate limit + safety gates; 503 → frontend shows WhatsApp/email fallback, never fakes success.

## Routes
/, /speisekarte, /ueber-uns, /events, /kontakt, /impressum, /datenschutz, /agb
Legacy redirects: /speisekarten→/speisekarte, /ueber-itacan→/ueber-uns, /experiences→/events, /refer-friends→/, /tisch-reservieren→MyLOCALINA (external)

## Implemented (2026-08-17, V1 rebuild)
- Exact 12-section homepage: Hero (desktop 17/mobile 06 interior images, masked headline reveal, 1→1.03 slow scale) → Intro → Worlds (4× 4:5 cards) → Menu Discovery (5 horizontal rails, snap scroll, peek next card, desktop arrows) → Pinsa → Caribbean Soul → Bar (Deep Blue) → Atmosphere → Our Story → Events & Private Dining (Tavolata CHF 45 / Giro Pinsa CHF 35) → Visit & Contact + lazy Google Map → Footer
- Navbar: transparent over hero → solid Deep Blue on scroll; delicate wave bottom edge (8–14px) with sub-conscious scroll-reactive phase shift; static under prefers-reduced-motion
- Menu page: 9 categories incl. Pinse (Classiche/Bianche/Speciali) with real transcribed ingredients, Carne & Pesce, Dominican specialties, Desserts, full Wine list (glass/bottle from official source), Lunch CHF 20 block, group offers, allergen note
- Events page: public events (auto-hidden when none), 4 event types, group offers, validated inquiry form → real email to info@itacan.ch (verified end-to-end)
- About: hero, philosophy, Italy×Caribbean, team (3 real portraits), brand line
- Contact: utility page with actions, hours, lazy map
- Mobile sticky Speisekarte/Reservieren action bar (after scroll, hides at footer, safe-area)
- SEO per page + JSON-LD Restaurant + favicon.svg + sitemap/robots
- Verified: yarn build passes, console clean, desktop+mobile screenshots, form E2E success, backend validation/honeypot/rate-limit tested

## Content Integrity
- No invented dishes/prices/cocktails; no AI food photos; menu source graphics never displayed
- Confirmed dish photos only (Bufala & Mortadella, Pica Pollo, Babà); other cards use category editorial photography; dessert cards without photo use branded "Dolci" tile

## NEEDS CLIENT CONFIRMATION
1. Final legal texts (Impressum/Datenschutz/AGB) — shells ready
2. Cocktail list — bar section intentionally editorial until supplied
3. Two test inquiry emails were sent to info@itacan.ch during verification (labeled "Testanfrage")
4. New professional photo shoot drops into /public/assets/itacan/photos with same filenames — zero layout changes needed

## Backlog
- P0: Legal texts, production launch/DNS (not deployed per spec)
- P1: Cocktail menu when supplied; first real public events; EN version (copy architecture ready)
- P2: OG share image from final photography
