/**
 * ITACAN Events — structured event data.
 *
 * type Event = {
 *   id: string
 *   title: string
 *   date: string        // ISO date, e.g. "2026-08-14" — past events disappear automatically
 *   startTime?: string  // e.g. "21:00"
 *   endTime?: string
 *   description?: string
 *   image?: string
 *   ctaUrl?: string
 *   active: boolean
 * }
 *
 * No events are currently published by ITACAN — the page automatically shows
 * the "Neue Events folgen bald." empty state. Add upcoming events here.
 * Do NOT invent events.
 */

export const events = [];

export const activeEvents = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => e.active && new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};
