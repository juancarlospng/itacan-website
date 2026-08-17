import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { UtensilsCrossed, CalendarCheck } from "lucide-react";
import { copy } from "../copy";
import { restaurant } from "../config/restaurant";

/**
 * Mobile sticky action bar — appears after the visitor starts scrolling,
 * hides while the footer is on screen. Respects iPhone safe-area insets.
 */
const MobileActionBar = () => {
  const [pastFold, setPastFold] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastFold(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const footer = document.getElementById("site-footer");
    let observer;
    if (footer) {
      observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.05 });
      observer.observe(footer);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const show = pastFold && !footerVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          data-testid="mobile-action-bar"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-dark/60 bg-ivory/95 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-2 gap-3 px-4 py-3">
            <Link
              to="/speisekarte"
              data-testid="action-bar-menu-button"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-deep/40 px-4 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-deep transition-colors duration-300 hover:bg-deep hover:text-ivory"
            >
              <UtensilsCrossed className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              {copy.actionBar.menu}
            </Link>
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="action-bar-reserve-button"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-deep px-4 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:bg-ocean"
            >
              <CalendarCheck className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              {copy.actionBar.reserve}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileActionBar;
