import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import MediaImage from "../components/MediaImage";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import GroupOffers from "../components/GroupOffers";
import EventInquiryForm from "../components/EventInquiryForm";
import { copy } from "../copy";
import { activeEvents } from "../data/events";
import { media } from "../config/media";

const EventsPage = () => {
  const upcoming = activeEvents();

  return (
    <>
      <SEO title={copy.seo.events.title} description={copy.seo.events.desc} path="/events" />

      {/* Private events hero — the commercial core of this page */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-deep" data-testid="events-hero">
        <div className="absolute inset-0">
          <img src={media.eventsFireplace.src} alt={media.eventsFireplace.alt} style={{ objectPosition: media.eventsFireplace.position }} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-deep/60" aria-hidden="true" />
        <div className="container-site relative pb-16 pt-44 text-ivory sm:pb-20">
          <Reveal>
            <h1 className="headline-serif max-w-3xl text-4xl sm:text-6xl">{copy.eventsPage.heroHeadline}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">{copy.eventsPage.heroCopy}</p>
          </Reveal>
          <Reveal delay={0.22} className="mt-9">
            <a href="#anfrage" data-testid="events-hero-cta" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
              {copy.eventsPage.heroCta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Public events — renders only when active events exist */}
      {upcoming.length > 0 && (
        <section className="py-24 sm:py-28" data-testid="public-events-section">
          <div className="container-site">
            <SectionHeading eyebrow={copy.eventsPage.publicEyebrow} title={copy.eventsPage.publicHeadline} />
            <div className="mt-12 grid gap-8">
              {upcoming.map((e) => (
                <Reveal key={e.id}>
                  <EventCard event={e} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <main className="container-site py-24 sm:py-28" data-testid="events-content">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.eventsPage.types.map((type, i) => (
            <Reveal key={type.title} delay={i * 0.08}>
              <article data-testid={`event-type-${i}`} className="h-full border-t-2 border-deep pt-6">
                <span className="font-serif text-4xl font-semibold italic text-ocean/50" aria-hidden="true">0{i + 1}</span>
                <h2 className="headline-serif mt-3 text-2xl text-ink">{type.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{type.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <GroupOffers />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <MediaImage image={media.atmospherePrimary} ratio="aspect-[16/9]" className="rounded-sm" />
          </Reveal>
          <Reveal delay={0.1}>
            <MediaImage image={media.barSecondaryA} ratio="aspect-[16/9]" className="rounded-sm" />
          </Reveal>
        </div>

        <div id="anfrage" className="mt-24 scroll-mt-36 rounded-sm border border-sand-dark/60 bg-sand/25 p-7 sm:p-12 lg:p-16">
          <EventInquiryForm />
        </div>
      </main>
    </>
  );
};

export default EventsPage;
