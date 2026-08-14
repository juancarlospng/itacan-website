import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import WaveDivider from "./WaveDivider";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const SiteFooter = () => {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { to: "/speisekarte", label: t("nav.menu"), testId: "footer-menu-link" },
    { to: "/events", label: t("nav.events"), testId: "footer-events-link" },
    { to: "/ueber-itacan", label: t("nav.about"), testId: "footer-about-link" },
    { to: "/kontakt", label: t("nav.contact"), testId: "footer-contact-link" },
  ];

  return (
    <footer data-testid="site-footer" className="bg-deep text-ivory">
      <WaveDivider className="w-full bg-ivory text-deep" flip />
      <div className="container-site grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs font-serif text-xl italic text-ivory/70">{t("footer.tagline")}</p>
          <address className="mt-8 not-italic">
            <p className="text-sm leading-relaxed text-ivory/75">
              {restaurant.legalName}
              <br />
              {restaurant.address.street}
              <br />
              {restaurant.address.postalCode} {restaurant.address.city} · {restaurant.address.country}
            </p>
          </address>
        </div>

        <nav aria-label="Footer Navigation">
          <h3 className="eyebrow text-ocean-light">{t("footer.navTitle")}</h3>
          <ul className="mt-6 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} data-testid={l.testId} className="link-underline text-sm text-ivory/75">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-reserve-link" className="link-underline text-sm text-ivory/75">
                {t("nav.reserve")}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-ocean-light">{t("footer.contactTitle")}</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/75">
            <li>
              <a href={restaurant.phoneHref} data-testid="footer-phone-link" className="link-underline inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> {restaurant.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${restaurant.email}`} data-testid="footer-email-link" className="link-underline inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> {restaurant.email}
              </a>
            </li>
            <li>
              <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-directions-link" className="link-underline inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> {restaurant.address.street}, {restaurant.address.city}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-ocean-light">{t("footer.followTitle")}</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/75">
            <li>
              <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link" className="link-underline inline-flex items-center gap-2">
                <Instagram className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> @itacan.ch
              </a>
            </li>
            <li>
              <a href={restaurant.justEatUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-justeat-link" className="link-underline">
                Just Eat
              </a>
            </li>
            <li>
              <a href={restaurant.uberEatsUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-ubereats-link" className="link-underline">
                Uber Eats
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-7 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>© {year} {restaurant.name} · {t("footer.rights")}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/datenschutz" data-testid="footer-privacy-link" className="link-underline">{t("footer.privacy")}</Link>
            <Link to="/agb" data-testid="footer-terms-link" className="link-underline">{t("footer.terms")}</Link>
            <span className="text-ivory/35">{t("footer.credit")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
