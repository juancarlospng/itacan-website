import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { copy } from "../copy/de";
import { restaurant } from "../config/restaurant";

/**
 * ITACAN signature navbar wave.
 * Delicate low-amplitude wave forming the navbar's bottom edge.
 * Reacts almost subconsciously to scroll direction (small horizontal phase
 * shift, springs back when idle). Static under prefers-reduced-motion.
 */
const NavbarWave = ({ solid }) => {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 16, mass: 0.6 });
  const lastY = useRef(0);
  const idleTimer = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      const target = Math.max(-26, Math.min(26, x.get() + delta * 0.35));
      x.set(target);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => x.set(0), 160);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idleTimer.current);
    };
  }, [x]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-full -mt-px h-[9px] overflow-hidden sm:h-[14px]">
      <motion.svg
        style={{ x: springX }}
        viewBox="0 0 2880 28"
        preserveAspectRatio="none"
        className="h-full w-[112%] -translate-x-[5%]"
      >
        <path
          d="M0 0 H2880 V9 C2520 25 2280 3 1920 13 C1560 23 1320 5 960 13 C600 21 330 7 0 17 Z"
          className={`transition-[fill] duration-500 ${solid ? "fill-deep" : "fill-transparent"}`}
        />
      </motion.svg>
    </div>
  );
};

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: "/#welten", label: copy.nav.discover, testId: "nav-discover-link", hash: true },
    { to: "/speisekarte", label: copy.nav.menu, testId: "nav-menu-link" },
    { to: "/ueber-uns", label: copy.nav.about, testId: "nav-about-link" },
    { to: "/events", label: copy.nav.events, testId: "nav-events-link" },
    { to: "/kontakt", label: copy.nav.contact, testId: "nav-contact-link" },
  ];

  const linkClass = (isActive) =>
    `font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
      isActive ? "text-ivory" : "text-ivory/65 hover:text-ivory"
    }`;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color] duration-500 ${
          solid ? "bg-deep" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 sm:h-20">
          <Link to="/" aria-label="ITACAN — Startseite" data-testid="header-logo-link" className="shrink-0">
            <Logo tone="light" className="h-8 sm:h-9" />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {links.map((l) =>
              l.hash ? (
                <Link key={l.to} to={l.to} data-testid={l.testId} className={linkClass(false)}>
                  {l.label}
                </Link>
              ) : (
                <NavLink key={l.to} to={l.to} data-testid={l.testId} className={({ isActive }) => linkClass(isActive)}>
                  {l.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-reserve-button"
              className="hidden items-center rounded-sm bg-ivory px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-deep transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ocean hover:text-ivory md:inline-flex"
            >
              {copy.nav.reserve}
            </a>
            <button
              type="button"
              data-testid="mobile-menu-open-button"
              aria-label={copy.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ivory/30 text-ivory transition-colors duration-300 hover:bg-ivory/10 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
        <NavbarWave solid={solid} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60]"
          >
            <MobileMenu onClose={() => setOpen(false)} links={links} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteHeader;
