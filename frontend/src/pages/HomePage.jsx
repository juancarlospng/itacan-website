import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import EditorialMarquee from "../components/EditorialMarquee";
import ReservationCTA from "../components/ReservationCTA";
import WaveDivider from "../components/WaveDivider";
import EventCard from "../components/EventCard";
import { useLanguage } from "../i18n/LanguageContext";
import { images } from "../config/images";
import { restaurant } from "../config/restaurant";
import { activeEvents } from "../data/events";

const lineReveal = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { delay: 0.45 + i * 0.18, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative flex min-h-[100svh] items-end overflow-hidden bg-deep">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <motion.img
          src={images.hero.url}
          alt={images.hero.alt}
          fetchPriority="high"
          className="h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-deep/60" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep/80 to-transparent" aria-hidden="true" />

      <motion.div style={{ opacity: fade }} className="container-site relative pb-24 pt-40 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-ocean-light"
          data-testid="hero-eyebrow"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <h1 className="headline-serif mt-6 text-ivory" data-testid="hero-headline">
          <span className="block overflow-hidden pb-1">
            <motion.span custom={0} variants={lineReveal} initial="hidden" animate="show" className="block text-5xl sm:text-7xl lg:text-8xl">
              {t("hero.line1")}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span custom={1} variants={lineReveal} initial="hidden" animate="show" className="block font-serif text-5xl italic text-ocean-light sm:text-7xl lg:text-8xl">
              {t("hero.line2")}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="hero-reserve-button" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
            {t("hero.ctaPrimary")}
          </a>
          <Link to="/speisekarte" data-testid="hero-menu-button" className="btn-outline-light">
            {t("hero.ctaSecondary")} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 text-ivory/60 lg:flex"
      >
        <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">{t("hero.scroll")}</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }} className="h-10 w-px bg-ivory/40" />
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const { t } = useLanguage();
  const pillars = t("experience.pillars");
  return (
    <section data-testid="experience-section" className="py-28 sm:py-36">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t("experience.eyebrow")}
              title={<>{t("experience.title1")}<br /><span className="italic text-deep">{t("experience.title2")}</span></>}
              copy={t("experience.copy")}
            />
            <Reveal delay={0.3} className="mt-12">
              <div className="relative overflow-hidden rounded-sm">
                <img src={images.portraitFood.url} alt={images.portraitFood.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.12}>
                <div data-testid={`pillar-${p.title.toLowerCase()}`} className="group flex gap-8 border-t border-sand-dark/60 py-10 transition-colors duration-500 last:border-b hover:bg-sand/25 sm:gap-12 sm:py-12">
                  <span className="font-serif text-5xl font-medium italic text-ocean/60 transition-colors duration-500 group-hover:text-ocean sm:text-6xl">{p.n}</span>
                  <div>
                    <h3 className="headline-serif text-3xl text-ink sm:text-4xl">{p.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{p.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const { t } = useLanguage();
  const cards = t("menuPreview.cards");
  const cardImages = [images.pinseria, images.cucina, images.caribe];
  return (
    <section data-testid="menu-preview-section" className="bg-sand/35 py-28 sm:py-36">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow={t("menuPreview.eyebrow")} title={t("menuPreview.title")} />
          <Reveal delay={0.2} className="flex flex-wrap gap-4">
            <Link to="/speisekarte" data-testid="menu-preview-cta" className="btn-primary">
              {t("menuPreview.cta")}
            </Link>
            <a href={restaurant.justEatUrl} target="_blank" rel="noopener noreferrer" data-testid="menu-preview-order-link" className="btn-outline-dark">
              {t("menuPreview.ctaSecondary")} <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.12} className={i === 1 ? "md:mt-14" : ""}>
              <Link to="/speisekarte" data-testid={`menu-card-${i}`} className="group block">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={cardImages[i].url}
                    alt={cardImages[i].alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" aria-hidden="true" />
                  <span className="absolute left-5 top-5 font-serif text-xl italic text-ivory/85">0{i + 1}</span>
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="headline-serif text-3xl text-ivory">{card.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ivory/75 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                      {card.copy}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const BarNights = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="bar-nights-section" className="relative overflow-hidden bg-deep py-28 text-ivory sm:py-36">
      <WaveDivider className="absolute -top-1 left-0 w-full text-deep-light/50" />
      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={t("barNights.eyebrow")} title={t("barNights.title")} copy={t("barNights.copy")} tone="dark" />
          <Reveal delay={0.3} className="mt-10">
            <Link to="/events" data-testid="bar-nights-events-button" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
              {t("barNights.cta")}
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:gap-7">
          <Reveal delay={0.1}>
            <img src={images.barPortrait.url} alt={images.barPortrait.alt} loading="lazy" className="aspect-[3/4] w-full rounded-sm object-cover" />
          </Reveal>
          <div className="flex flex-col gap-5 pt-10 sm:gap-7 sm:pt-16">
            <Reveal delay={0.2}>
              <img src={images.cocktail.url} alt={images.cocktail.alt} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
            </Reveal>
            <Reveal delay={0.3}>
              <img src={images.nightlife.url} alt={images.nightlife.alt} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventsTeaser = () => {
  const { t, lang } = useLanguage();
  const upcoming = activeEvents();
  return (
    <section data-testid="events-teaser-section" className="py-28 sm:py-36">
      <div className="container-site">
        <SectionHeading eyebrow={t("events.homeEyebrow")} title={t("events.homeTitle")} />
        {upcoming.length > 0 ? (
          <div className="mt-14 grid gap-8">
            {upcoming.slice(0, 2).map((e) => (
              <EventCard key={e.id} event={e} lang={lang} />
            ))}
          </div>
        ) : (
          <Reveal className="mt-14 flex flex-col items-start gap-6 rounded-sm border border-dashed border-deep/30 bg-sand/25 p-10 sm:p-14">
            <p className="headline-serif text-3xl text-ink sm:text-4xl">{t("events.emptyTitle")}</p>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{t("events.emptyCopy")}</p>
            <div className="flex flex-wrap gap-4">
              <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" data-testid="events-teaser-instagram-button" className="btn-primary">
                {t("events.followInstagram")}
              </a>
              <Link to="/events" data-testid="events-teaser-all-link" className="btn-outline-dark">
                {t("events.eyebrow")} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEO title={t("seo.home.title")} description={t("seo.home.desc")} path="/" />
      <Hero />
      <EditorialMarquee />
      <Experience />
      <MenuPreview />
      <BarNights />
      <EditorialMarquee tone="deep" />
      <EventsTeaser />
      <ReservationCTA />
    </>
  );
};

export default HomePage;
