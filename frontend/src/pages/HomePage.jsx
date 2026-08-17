import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import MediaImage from "../components/MediaImage";
import SectionHeading from "../components/SectionHeading";
import MenuDiscovery from "../components/MenuDiscovery";
import GroupOffers, { EventsHomeCtas } from "../components/GroupOffers";
import BusinessHours from "../components/BusinessHours";
import { copy } from "../copy/de";
import { media } from "../config/media";
import { restaurant } from "../config/restaurant";

/* ————————————————— 01 HERO ————————————————— */
const Hero = () => (
  <section data-testid="hero-section" className="relative flex min-h-[92svh] items-end overflow-hidden bg-deep">
    <div className="absolute inset-0">
      <motion.img
        src={media.heroDesktop.src}
        alt={media.heroDesktop.alt}
        fetchPriority="high"
        style={{ objectPosition: media.heroDesktop.position }}
        className="hidden h-full w-full object-cover sm:block"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 9, ease: "easeOut" }}
      />
      <motion.img
        src={media.heroMobile.src}
        alt={media.heroMobile.alt}
        fetchPriority="high"
        style={{ objectPosition: media.heroMobile.position }}
        className="h-full w-full object-cover sm:hidden"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 9, ease: "easeOut" }}
      />
    </div>
    <div className="absolute inset-0 bg-deep/55" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-deep/85 to-transparent" aria-hidden="true" />

    <div className="container-site relative pb-24 pt-44 sm:pb-28">
      <h1 className="headline-serif text-ivory" data-testid="hero-headline">
        <span className="block overflow-hidden pb-1">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-5xl sm:text-7xl lg:text-8xl"
          >
            {copy.hero.headline1}
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-2">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.52, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block font-serif text-5xl italic text-ocean-light sm:text-7xl lg:text-8xl"
          >
            {copy.hero.headline2}
          </motion.span>
        </span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
      >
        {copy.hero.sub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="hero-reserve-button" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
          {copy.hero.ctaPrimary}
        </a>
        <Link to="/#intro" data-testid="hero-discover-button" className="btn-outline-light">
          {copy.hero.ctaSecondary} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ————————————————— 02 ITACAN INTRODUCTION ————————————————— */
const Intro = () => (
  <section id="intro" data-testid="intro-section" className="scroll-mt-28 py-24 sm:py-32">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
      <Reveal>
        <MediaImage image={media.introFlame} ratio="aspect-[4/5]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
      </Reveal>
      <div>
        <SectionHeading eyebrow={copy.intro.eyebrow} title={copy.intro.headline} />
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">{copy.intro.body}</p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ————————————————— 03 ITACAN WORLDS ————————————————— */
const worldImages = { pinsa: media.worldPinsa, kitchen: media.worldKitchen, bar: media.worldBar, caribbean: media.worldCaribbean };

const Worlds = () => (
  <section id="welten" data-testid="worlds-section" className="scroll-mt-28 py-24 sm:py-32">
    <div className="container-site">
      <SectionHeading title={copy.worlds.headline} />
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {copy.worlds.cards.map((card, i) => (
          <Reveal key={card.id} delay={i * 0.1} className={i % 2 === 1 ? "lg:mt-14" : ""}>
            <article data-testid={`world-card-${card.id}`} className="group">
              <div className="relative overflow-hidden rounded-sm">
                <MediaImage
                  image={worldImages[card.id]}
                  ratio="aspect-[4/5]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                  imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mt-6">{card.title}</p>
              <h3 className="headline-serif mt-2 text-2xl text-ink sm:text-[1.7rem]">{card.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ————————————————— 05 THE PINSA ————————————————— */
const Pinsa = () => (
  <section data-testid="pinsa-section" className="py-24 sm:py-32">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="grid grid-cols-2 gap-5">
        <Reveal className="col-span-2">
          <MediaImage image={media.pinsaPrimary} ratio="aspect-[3/2]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
        </Reveal>
        <Reveal delay={0.1}>
          <MediaImage image={media.pinsaSecondaryA} ratio="aspect-[4/5]" className="rounded-sm" />
        </Reveal>
        <Reveal delay={0.18}>
          <MediaImage image={media.pinsaSecondaryB} ratio="aspect-[4/5]" className="rounded-sm" />
        </Reveal>
      </div>
      <div>
        <SectionHeading eyebrow={copy.pinsa.eyebrow} title={copy.pinsa.headline} copy={copy.pinsa.copy} />
        <Reveal delay={0.24} className="mt-9">
          <Link to="/speisekarte#pinsa" data-testid="pinsa-discover-cta" className="btn-primary">
            {copy.pinsa.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ————————————————— 06 CARIBBEAN SOUL ————————————————— */
const CaribbeanSoul = () => (
  <section data-testid="caribbean-section" className="bg-sand/30 py-24 sm:py-32">
    <div className="container-site">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading eyebrow={copy.caribbean.eyebrow} title={copy.caribbean.headline} copy={copy.caribbean.copy} />
        </div>
        <div className="order-1 grid grid-cols-2 items-start gap-5 lg:order-2">
          <Reveal>
            <MediaImage image={media.caribbeanPrimary} ratio="aspect-[4/5]" className="rounded-sm" />
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <MediaImage image={media.caribbeanSecondary} ratio="aspect-[3/4]" className="rounded-sm" />
          </Reveal>
        </div>
      </div>
      <Reveal className="mt-20 sm:mt-28">
        <p className="max-w-4xl font-serif text-3xl font-semibold italic leading-snug text-deep sm:text-5xl" data-testid="caribbean-editorial-line">
          «{copy.caribbean.editorialLine}»
        </p>
      </Reveal>
    </div>
  </section>
);

/* ————————————————— 07 BAR EXPERIENCE ————————————————— */
const BarExperience = () => (
  <section data-testid="bar-section" className="bg-deep py-24 text-ivory sm:py-32">
    <div className="container-site">
      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={copy.bar.eyebrow} title={copy.bar.headline} copy={copy.bar.copy} tone="dark" />
          <Reveal delay={0.24} className="mt-9">
            <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="bar-reserve-cta" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
              {copy.bar.cta}
            </a>
          </Reveal>
        </div>
        <Reveal>
          <MediaImage image={media.barPrimary} ratio="aspect-[16/10]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
        </Reveal>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5 lg:w-1/2 lg:pl-[8%]">
        <Reveal delay={0.1}>
          <MediaImage image={media.barSecondaryA} ratio="aspect-[4/5]" className="rounded-sm" />
        </Reveal>
        <Reveal delay={0.18} className="mt-8">
          <MediaImage image={media.barSecondaryB} ratio="aspect-[4/5]" className="rounded-sm" />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ————————————————— 08 ATMOSPHERE ————————————————— */
const Atmosphere = () => (
  <section data-testid="atmosphere-section" className="py-24 sm:py-32">
    <div className="container-site">
      <SectionHeading title={copy.atmosphere.headline} copy={copy.atmosphere.copy} />
      <div className="mt-16 grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <MediaImage image={media.atmospherePrimary} ratio="aspect-[16/10]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 58vw" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          <Reveal delay={0.1}>
            <MediaImage image={media.atmosphereSecondaryA} ratio="aspect-[3/2]" className="rounded-sm" />
          </Reveal>
          <Reveal delay={0.18}>
            <MediaImage image={media.atmosphereSecondaryB} ratio="aspect-[3/2]" className="rounded-sm lg:aspect-[21/9]" />
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

/* ————————————————— 09 OUR STORY ————————————————— */
const Story = () => (
  <section data-testid="story-section" className="bg-sand/30 py-24 sm:py-32">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
      <div>
        <SectionHeading eyebrow={copy.story.eyebrow} title={copy.story.headline} copy={copy.story.copy} />
        <Reveal delay={0.24} className="mt-9">
          <Link to="/ueber-uns" data-testid="story-about-cta" className="btn-outline-dark">
            {copy.story.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
      <Reveal>
        <MediaImage image={media.story} ratio="aspect-[3/2]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
      </Reveal>
    </div>
  </section>
);

/* ————————————————— 10 EVENTS & PRIVATE DINING ————————————————— */
const EventsPrivate = () => (
  <section data-testid="events-private-section" className="py-24 sm:py-32">
    <div className="container-site">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <MediaImage image={media.eventsFireplace} ratio="aspect-[3/2]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
        </Reveal>
        <div>
          <SectionHeading eyebrow={copy.eventsHome.eyebrow} title={copy.eventsHome.headline} copy={copy.eventsHome.copy} />
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">{copy.eventsHome.copySecondary}</p>
          </Reveal>
          <Reveal delay={0.28} className="mt-9">
            <EventsHomeCtas />
          </Reveal>
        </div>
      </div>
      <div className="mt-16">
        <GroupOffers />
      </div>
    </div>
  </section>
);

/* ————————————————— 11 VISIT & CONTACT + MAP ————————————————— */
const Visit = () => (
  <section data-testid="visit-section" className="bg-deep py-24 text-ivory sm:py-32">
    <div className="container-site">
      <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={copy.visit.eyebrow} title={copy.visit.headline} copy={copy.visit.copy} tone="dark" />
          <Reveal delay={0.2} className="mt-9">
            <address className="not-italic">
              <p className="font-serif text-2xl font-semibold leading-snug text-ivory">
                {restaurant.name}
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
              </p>
            </address>
            <div className="mt-4 space-y-1.5 text-sm text-ivory/75">
              <p>
                <a href={restaurant.phoneHref} data-testid="visit-phone-link" className="link-underline">{restaurant.phone}</a>
              </p>
              <p>
                <a href={restaurant.whatsappHref} target="_blank" rel="noopener noreferrer" data-testid="visit-whatsapp-link" className="link-underline">WhatsApp {restaurant.whatsapp}</a>
              </p>
              <p>
                <a href={`mailto:${restaurant.email}`} data-testid="visit-email-link" className="link-underline">{restaurant.email}</a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.26} className="mt-9">
            <h3 className="eyebrow text-ocean-light">{copy.visit.hoursTitle}</h3>
            <div className="mt-4">
              <BusinessHours tone="dark" />
            </div>
          </Reveal>
          <Reveal delay={0.32} className="mt-9 flex flex-wrap gap-4">
            <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="visit-reserve-cta" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
              {copy.visit.ctaPrimary}
            </a>
            <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" data-testid="visit-directions-cta" className="btn-outline-light">
              {copy.visit.ctaSecondary}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="h-[350px] overflow-hidden rounded-sm sm:h-[450px] lg:h-[560px]">
            <iframe
              title={copy.visit.mapTitle}
              src={restaurant.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              data-testid="visit-map"
              className="h-full w-full grayscale-[20%]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ————————————————— HOMEPAGE — exact V1 section order ————————————————— */
const HomePage = () => (
  <>
    <SEO title={copy.seo.home.title} description={copy.seo.home.desc} path="/" />
    <Hero />
    <Intro />
    <Worlds />
    <MenuDiscovery />
    <Pinsa />
    <CaribbeanSoul />
    <BarExperience />
    <Atmosphere />
    <Story />
    <EventsPrivate />
    <Visit />
  </>
);

export default HomePage;
