import { Instagram } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import WaveDivider from "../components/WaveDivider";
import EventCard from "../components/EventCard";
import ReservationCTA from "../components/ReservationCTA";
import EditorialMarquee from "../components/EditorialMarquee";
import { useLanguage } from "../i18n/LanguageContext";
import { activeEvents } from "../data/events";
import { restaurant } from "../config/restaurant";
import { images } from "../config/images";

const EventsPage = () => {
  const { t, lang } = useLanguage();
  const upcoming = activeEvents();

  return (
    <>
      <SEO title={t("seo.events.title")} description={t("seo.events.desc")} path="/events" />
      <section className="bg-deep pb-20 pt-40 text-ivory sm:pt-48" data-testid="events-header">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow text-ocean-light">{t("events.eyebrow")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline-serif mt-5 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{t("events.pageTitle")}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <WaveDivider className="mt-7 w-28 text-ocean-light" />
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{t("events.pageCopy")}</p>
          </Reveal>
        </div>
      </section>

      <EditorialMarquee tone="deep" />

      <main className="container-site py-20 sm:py-28" data-testid="events-content">
        {upcoming.length > 0 ? (
          <div className="grid gap-8">
            {upcoming.map((e) => (
              <Reveal key={e.id}>
                <EventCard event={e} lang={lang} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="relative overflow-hidden rounded-sm bg-deep p-10 text-ivory sm:p-16" data-testid="events-empty-state">
              <img src={images.nightlife.url} alt={images.nightlife.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="relative">
                <h2 className="headline-serif max-w-lg text-4xl sm:text-5xl">{t("events.emptyTitle")}</h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/75">{t("events.emptyCopy")}</p>
                <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" data-testid="events-instagram-button" className="btn-primary mt-9 !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
                  <Instagram className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> {t("events.followInstagram")}
                </a>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-16">
          <div className="grid items-center gap-8 rounded-sm border border-sand-dark/60 bg-sand/30 p-10 sm:p-14 md:grid-cols-[1fr_auto]" data-testid="private-event-section">
            <div>
              <h2 className="headline-serif text-3xl text-ink sm:text-4xl">{t("events.privateTitle")}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{t("events.privateCopy")}</p>
            </div>
            <a
              href={`mailto:${restaurant.email}?subject=${encodeURIComponent("Event-Anfrage ITACAN")}`}
              data-testid="private-event-button"
              className="btn-primary"
            >
              {t("events.privateCta")}
            </a>
          </div>
        </Reveal>
      </main>

      <ReservationCTA />
    </>
  );
};

export default EventsPage;
