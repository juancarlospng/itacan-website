import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { copy } from "../copy";
import { restaurant } from "../config/restaurant";
import LanguageSelector from "./LanguageSelector";

/**
 * ITACAN signature navbar wave.
 * Structure: the navbar and the wave viewport are always 100% wide and never
 * move. Inside an overflow-hidden viewport sits a 120vw wave track, offset
 * -10vw; only the track's phase animates (small scroll-reactive x, springs
 * back when idle), so the Deep Blue wave can never expose an edge gap.
 * Static under prefers-reduced-motion.
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
      const target = Math.max(-30, Math.min(30, x.get() + delta * 0.4));
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
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-full -mt-px h-[12px] overflow-hidden sm:h-[18px]">
      <motion.div style={{ x: springX }} className="absolute inset-y-0 left-[-10vw] w-[120vw]">
        <svg viewBox="0 0 2880 36" preserveAspectRatio="none" className="block h-full w-full">
          <path
            d="M0 0 H2880 V8 C2520 29 2280 3 1920 15 C1560 27 1320 5 960 15 C600 25 330 6 0 18 Z"
            className={`transition-[fill] duration-500 ${solid ? "fill-deep" : "fill-transparent"}`}
          />
        </svg>
      </motion.div>
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
          <Link to="/" aria-label={`ITACAN — ${copy.nav.home}`} data-testid="header-logo-link" className="shrink-0">
            <Logo tone="light" className="h-8 sm:h-9" />
          </Link>

          <nav aria-label={copy.nav.mainNavigation} className="hidden items-center gap-6 xl:gap-8 lg:flex">
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
            <LanguageSelector />
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
