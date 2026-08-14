import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const LanguageToggle = ({ dark = false }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 rounded-sm border px-2 py-1 text-xs font-semibold tracking-widest ${dark ? "border-ivory/30 text-ivory" : "border-deep/25 text-deep"}`} data-testid="language-toggle">
      <Globe className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
      {["de", "en"].map((l) => (
        <button
          key={l}
          type="button"
          data-testid={`lang-${l}-button`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-1.5 py-0.5 uppercase transition-colors duration-200 ${lang === l ? (dark ? "text-ivory" : "text-deep") : dark ? "text-ivory/40 hover:text-ivory/80" : "text-ink/35 hover:text-deep"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

const SiteHeader = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/speisekarte", label: t("nav.menu"), testId: "nav-menu-link" },
    { to: "/ueber-itacan", label: t("nav.about"), testId: "nav-about-link" },
    { to: "/events", label: t("nav.events"), testId: "nav-events-link" },
    { to: "/kontakt", label: t("nav.contact"), testId: "nav-contact-link" },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
          isHome ? "border-ivory/10 bg-deep/80" : "border-sand-dark/40 bg-ivory/85"
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label="ITACAN — Startseite" data-testid="header-logo-link" className="shrink-0">
            <Logo tone={isHome ? "light" : "dark"} compact />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={l.testId}
                className={({ isActive }) =>
                  `font-sans text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isHome
                      ? isActive ? "text-ivory" : "text-ivory/60 hover:text-ivory"
                      : isActive ? "text-deep" : "text-ink/55 hover:text-deep"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block">
              <LanguageToggle dark={isHome} />
            </div>
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-reserve-button"
              className={`hidden items-center rounded-sm px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 md:inline-flex ${
                isHome ? "bg-ivory text-deep hover:bg-ocean hover:text-ivory" : "bg-deep text-ivory hover:bg-ocean"
              }`}
            >
              {t("nav.reserve")}
            </a>
            <button
              type="button"
              data-testid="mobile-menu-open-button"
              aria-label={t("nav.openMenu")}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors duration-300 lg:hidden ${
                isHome ? "border-ivory/30 text-ivory hover:bg-ivory/10" : "border-deep/25 text-deep hover:bg-deep/5"
              }`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
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
            <MobileMenu onClose={() => setOpen(false)} links={links} closeLabel={t("nav.closeMenu")} CloseIcon={X} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteHeader;
