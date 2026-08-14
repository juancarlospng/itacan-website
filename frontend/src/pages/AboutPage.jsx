import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import WaveDivider from "../components/WaveDivider";
import ReservationCTA from "../components/ReservationCTA";
import EditorialMarquee from "../components/EditorialMarquee";
import { useLanguage } from "../i18n/LanguageContext";
import { images } from "../config/images";

const chapterImages = [images.cucinaWide, images.squareOne, images.banner, images.squareTwo];

const AboutPage = () => {
  const { t } = useLanguage();
  const chapters = t("about.chapters");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <SEO title={t("seo.about.title")} description={t("seo.about.desc")} path="/ueber-itacan" />
      <section ref={heroRef} className="relative flex min-h-[70svh] items-end overflow-hidden bg-deep" data-testid="about-hero">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={images.banner.url} alt={images.banner.alt} className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-deep/65" aria-hidden="true" />
        <div className="container-site relative pb-20 pt-48 text-ivory">
          <Reveal>
            <p className="eyebrow text-ocean-light">{t("about.eyebrow")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline-serif mt-5 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{t("about.title")}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">{t("about.intro")}</p>
          </Reveal>
        </div>
      </section>

      <EditorialMarquee />

      <main className="container-site py-24 sm:py-32" data-testid="about-content">
        <div className="grid gap-24 sm:gap-32">
          {chapters.map((ch, i) => {
            const img = chapterImages[i % chapterImages.length];
            const reversed = i % 2 === 1;
            return (
              <section key={ch.n} data-testid={`about-chapter-${ch.n}`} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-sm">
                    <img src={img.url} alt={img.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
                  </div>
                </Reveal>
                <div className={reversed ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="font-serif text-6xl font-medium italic text-ocean/50 sm:text-7xl" aria-hidden="true">{ch.n}</span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="headline-serif mt-4 text-3xl text-ink sm:text-5xl">{ch.title}</h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <WaveDivider className="mt-6 w-24 text-ocean" />
                  </Reveal>
                  <Reveal delay={0.22}>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">{ch.copy}</p>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <ReservationCTA />
    </>
  );
};

export default AboutPage;
