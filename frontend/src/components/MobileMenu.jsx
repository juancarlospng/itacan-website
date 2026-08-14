import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import WaveDivider from "./WaveDivider";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.12 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

const MobileMenu = ({ onClose, links, closeLabel, CloseIcon }) => {
  const { t } = useLanguage();
  return (
    <div className="flex h-full flex-col bg-deep" role="dialog" aria-modal="true" aria-label="ITACAN Navigation">
      <div className="container-site flex h-20 items-center justify-between">
        <Logo tone="light" compact />
        <button
          type="button"
          data-testid="mobile-menu-close-button"
          aria-label={closeLabel}
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ivory/30 text-ivory transition-colors duration-300 hover:bg-ivory/10"
        >
          <CloseIcon className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>

      <nav aria-label="Mobile Navigation" className="container-site flex flex-1 flex-col justify-center gap-2 pb-10">
        {[{ to: "/", label: "ITACAN", testId: "mobile-nav-home-link" }, ...links].map((l, i) =>
          l.to === "/" ? null : (
            <motion.div key={l.to} custom={i} initial="hidden" animate="show" variants={itemVariants}>
              <NavLink
                to={l.to}
                onClick={onClose}
                data-testid={`mobile-${l.testId}`}
                className={({ isActive }) =>
                  `block border-b border-ivory/10 py-5 font-serif text-4xl font-medium transition-colors duration-300 sm:text-5xl ${
                    isActive ? "text-ocean-light" : "text-ivory hover:text-ocean-light"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </motion.div>
          )
        )}
        <motion.div custom={links.length + 1} initial="hidden" animate="show" variants={itemVariants} className="pt-10">
          <a
            href={restaurant.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-reserve-button"
            className="inline-flex w-full items-center justify-center rounded-sm bg-ivory px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-deep transition-colors duration-300 hover:bg-ocean hover:text-ivory"
          >
            {t("nav.reserve")}
          </a>
          <div className="mt-8 flex justify-center">
            <WaveDivider className="w-40 text-ocean-light" />
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default MobileMenu;
