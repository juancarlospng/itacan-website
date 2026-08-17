/**
 * ITACAN public events — data-driven.
 * Event = { id, title, date (ISO), time?, description?, image?, ctaUrl?, status: "active" | "inactive" }
 * Expired or inactive events are automatically hidden. No events → the whole
 * public-events section hides itself. Do NOT invent events.
 */

export const events = [];

export const activeEvents = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => e.status === "active" && new Date(`${e.date}T23:59:59`) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};
