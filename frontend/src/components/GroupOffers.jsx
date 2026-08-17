import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "./SEO";
import Reveal from "./Reveal";
import MediaImage from "./MediaImage";
import { copy } from "../copy/de";
import { groupOffers } from "../data/menu";
import { restaurant } from "../config/restaurant";

/**
 * Tavolata ITACAN & Giro Pinsa — commercial group products.
 * Shared by Home (Events & Private Dining), Events page and Menu page.
 */
const GroupOffers = ({ tone = "light" }) => {
  const dark = tone === "dark";
  return (
    <div className="grid gap-6 md:grid-cols-2" data-testid="group-offers">
      {groupOffers.map((offer, i) => (
        <Reveal key={offer.id} delay={i * 0.1}>
          <article
            data-testid={`group-offer-${offer.id}`}
            className={`flex h-full flex-col justify-between gap-8 rounded-sm border p-8 sm:p-10 ${
              dark ? "border-ivory/15 bg-deep-dark" : "border-sand-dark/60 bg-ivory"
            }`}
          >
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className={`headline-serif text-3xl sm:text-4xl ${dark ? "text-ivory" : "text-ink"}`}>{offer.name}</h3>
                <p className={`text-right font-sans ${dark ? "text-ocean-light" : "text-deep"}`}>
                  <span className="block text-xl font-semibold tabular-nums">CHF {offer.price}</span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] opacity-70">{offer.priceSuffix}</span>
                </p>
              </div>
              <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-ivory/70" : "text-ink-soft"}`}>{offer.description}</p>
              <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-ocean-light" : "text-ocean"}`}>{offer.note}</p>
            </div>
            <div>
              {offer.id === "tavolata" ? (
                <a
                  href={`mailto:${restaurant.email}?subject=${encodeURIComponent("Tavolata ITACAN — Anfrage")}`}
                  data-testid="tavolata-inquiry-button"
                  className={dark ? "btn-outline-light" : "btn-outline-dark"}
                >
                  {offer.cta}
                </a>
              ) : (
                <a
                  href={restaurant.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="giro-pinsa-reserve-button"
                  className={dark ? "btn-outline-light" : "btn-outline-dark"}
                >
                  {offer.cta}
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
};

export const EventsHomeCtas = ({ dark = false }) => (
  <div className="flex flex-wrap gap-4">
    <Link to="/events#anfrage" data-testid="events-home-inquiry-cta" className={dark ? "btn-outline-light" : "btn-primary"}>
      {copy.eventsHome.ctaPrimary}
    </Link>
    <Link to="/speisekarte#gruppen" data-testid="events-home-group-cta" className={dark ? "btn-outline-light" : "btn-outline-dark"}>
      {copy.eventsHome.ctaSecondary} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
    </Link>
  </div>
);

export default GroupOffers;
