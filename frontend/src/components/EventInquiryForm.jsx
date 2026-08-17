import { useState } from "react";
import axios from "axios";
import { Send, MessageCircle, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { copy } from "../copy";
import { restaurant } from "../config/restaurant";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialForm = { name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "", website: "" };

const EventInquiryForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | fallback
  const f = copy.eventsPage.form;

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = f.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = f.required;
    if (!form.eventType) next.eventType = f.required;
    if (!form.date) next.date = f.required;
    if (!form.guests || Number(form.guests) < 1) next.guests = f.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await axios.post(`${API}/event-inquiry`, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        event_type: form.eventType,
        date: form.date,
        guests: Number(form.guests),
        message: form.message.trim(),
        website: form.website, // honeypot
      });
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("fallback");
    }
  };

  if (status === "success") {
    return (
      <div data-testid="event-form-success" className="rounded-sm border border-deep/20 bg-ivory p-10 text-center sm:p-14">
        <p className="headline-serif text-3xl text-deep sm:text-4xl">{f.success}</p>
      </div>
    );
  }

  return (
    <div>
      <SectionHeading eyebrow={copy.eventsPage.heroCta} title={f.headline} copy={f.copy} />
      <Reveal className="mt-12">
        <form onSubmit={onSubmit} noValidate data-testid="event-inquiry-form" className="grid gap-6 sm:grid-cols-2">
          {/* Honeypot — invisible to humans */}
          <div className="absolute left-[-9999px] top-0" aria-hidden="true">
            <label htmlFor="event-website">Website</label>
            <input id="event-website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
          </div>

          <div>
            <label htmlFor="event-name" className="field-label">{f.name} *</label>
            <input id="event-name" data-testid="event-form-name" type="text" required autoComplete="name" value={form.name} onChange={set("name")} className="field-input" />
            {errors.name && <p className="mt-1.5 text-xs text-red-700">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="event-email" className="field-label">{f.email} *</label>
            <input id="event-email" data-testid="event-form-email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} className="field-input" />
            {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="event-phone" className="field-label">{f.phone}</label>
            <input id="event-phone" data-testid="event-form-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className="field-input" />
          </div>
          <div>
            <label htmlFor="event-type" className="field-label">{f.type} *</label>
            <select id="event-type" data-testid="event-form-type" required value={form.eventType} onChange={set("eventType")} className="field-input">
              <option value="">—</option>
              {f.typeOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {errors.eventType && <p className="mt-1.5 text-xs text-red-700">{errors.eventType}</p>}
          </div>
          <div>
            <label htmlFor="event-date" className="field-label">{f.date} *</label>
            <input id="event-date" data-testid="event-form-date" type="date" required value={form.date} onChange={set("date")} className="field-input" />
            {errors.date && <p className="mt-1.5 text-xs text-red-700">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="event-guests" className="field-label">{f.guests} *</label>
            <input id="event-guests" data-testid="event-form-guests" type="number" min="1" required value={form.guests} onChange={set("guests")} className="field-input" />
            {errors.guests && <p className="mt-1.5 text-xs text-red-700">{errors.guests}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="event-message" className="field-label">{f.message}</label>
            <textarea id="event-message" data-testid="event-form-message" rows={4} value={form.message} onChange={set("message")} className="field-input resize-y" />
          </div>

          {status === "fallback" && (
            <div data-testid="event-form-fallback" className="rounded-sm border border-ocean/40 bg-ocean/10 p-5 text-sm leading-relaxed text-ink sm:col-span-2">
              {f.errorFallback}
              <span className="mt-3 flex flex-wrap gap-3">
                <a href={restaurant.whatsappHref} target="_blank" rel="noopener noreferrer" data-testid="event-form-whatsapp-fallback" className="link-underline inline-flex items-center gap-2 font-semibold text-deep">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> WhatsApp {restaurant.whatsapp}
                </a>
                <a href={`mailto:${restaurant.email}`} data-testid="event-form-email-fallback" className="link-underline inline-flex items-center gap-2 font-semibold text-deep">
                  <Mail className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> {restaurant.email}
                </a>
              </span>
            </div>
          )}

          <div className="sm:col-span-2">
            <button type="submit" data-testid="event-form-submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
              <Send className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              {status === "sending" ? f.sending : f.submit}
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  );
};

export default EventInquiryForm;
