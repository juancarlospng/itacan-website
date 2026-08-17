import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import MediaImage from "./MediaImage";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("de-CH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const EventCard = ({ event }) => (
  <article data-testid={`event-card-${event.id}`} className="group grid overflow-hidden rounded-sm border border-sand-dark/50 bg-ivory md:grid-cols-[280px_1fr]">
    {event.image && (
      <MediaImage image={event.image} ratio="aspect-[16/10] md:aspect-auto md:h-full" imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
    )}
    <div className="flex flex-col justify-between gap-6 p-7 sm:p-9">
      <div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-ocean">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            {formatDate(event.date)}
          </span>
          {event.time && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
              {event.time}
            </span>
          )}
        </div>
        <h3 className="headline-serif mt-4 text-3xl text-ink">{event.title}</h3>
        {event.description && <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{event.description}</p>}
      </div>
      {event.ctaUrl && (
        <a href={event.ctaUrl} target="_blank" rel="noopener noreferrer" data-testid={`event-cta-${event.id}`} className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-deep">
          Mehr erfahren <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </a>
      )}
    </div>
  </article>
);

export default EventCard;
