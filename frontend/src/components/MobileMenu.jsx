import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "./Logo";
import { copy } from "../copy/de";
import { restaurant } from "../config/restaurant";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

const MobileMenu = ({ onClose, links }) => (
  <div className="flex h-full flex-col bg-deep" role="dialog" aria-modal="true" aria-label="ITACAN Navigation">
    <div className="container-site flex h-[4.5rem] items-center justify-between sm:h-20">
      <Logo tone="light" className="h-8" />
      <button
        type="button"
        data-testid="mobile-menu-close-button"
        aria-label={copy.nav.closeMenu}
        onClick={onClose}
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ivory/30 text-ivory transition-colors duration-300 hover:bg-ivory/10"
      >
        <X className="h-5 w-5" strokeWidth={1.8} />
      </button>
    </div>

    <nav aria-label="Mobile Navigation" className="container-site flex flex-1 flex-col justify-center gap-1 pb-16">
      {links.map((l, i) => (
        <motion.div key={l.to} custom={i} initial="hidden" animate="show" variants={itemVariants}>
          {l.hash ? (
            <Link
              to={l.to}
              onClick={onClose}
              data-testid={`mobile-${l.testId}`}
              className="block border-b border-ivory/10 py-5 font-serif text-4xl font-semibold text-ivory transition-colors duration-300 hover:text-ocean-light"
            >
              {l.label}
            </Link>
          ) : (
            <NavLink
              to={l.to}
              onClick={onClose}
              data-testid={`mobile-${l.testId}`}
              className={({ isActive }) =>
                `block border-b border-ivory/10 py-5 font-serif text-4xl font-semibold transition-colors duration-300 ${
                  isActive ? "text-ocean-light" : "text-ivory hover:text-ocean-light"
                }`
              }
            >
              {l.label}
            </NavLink>
          )}
        </motion.div>
      ))}
      <motion.div custom={links.length + 1} initial="hidden" animate="show" variants={itemVariants} className="pt-10">
        <a
          href={restaurant.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="mobile-reserve-button"
          className="inline-flex w-full items-center justify-center rounded-sm bg-ivory px-7 py-4 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-deep transition-colors duration-300 hover:bg-ocean hover:text-ivory"
        >
          {copy.nav.reserve}
        </a>
      </motion.div>
    </nav>
  </div>
);

export default MobileMenu;
