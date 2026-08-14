import { motion } from "framer-motion";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const ReservationCTA = ({ tone = "deep" }) => {
  const { t } = useLanguage();
  return (
    <section data-testid="reservation-cta" className="relative overflow-hidden bg-deep py-28 sm:py-36">
      <WaveDivider className="pointer-events-none absolute -top-2 left-0 w-full text-deep-light/60" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[16rem] font-semibold leading-none text-ivory/[0.04] lg:block"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        ITACAN
      </motion.div>

      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow text-ocean-light">{t("reservation.eyebrow")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline-serif mt-5 max-w-3xl text-5xl text-ivory sm:text-6xl lg:text-7xl">
            {t("reservation.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{t("reservation.copy")}</p>
        </Reveal>
        <Reveal delay={0.26} className="mt-10 flex flex-wrap items-center gap-5">
          <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="reservation-book-button" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
            {t("reservation.cta")}
          </a>
          <a href={restaurant.phoneHref} data-testid="reservation-phone-link" className="btn-outline-light">
            {t("reservation.phoneLabel")} · {restaurant.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ReservationCTA;
