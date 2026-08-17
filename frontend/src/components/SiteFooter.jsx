import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { copy } from "../copy";
import { restaurant } from "../config/restaurant";

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4c.6 2.5 2.4 4.3 5 4.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SiteFooter = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { to: "/speisekarte", label: copy.nav.menu, testId: "footer-menu-link" },
    { to: "/ueber-uns", label: copy.nav.about, testId: "footer-about-link" },
    { to: "/events", label: copy.nav.events, testId: "footer-events-link" },
    { to: "/kontakt", label: copy.nav.contact, testId: "footer-contact-link" },
  ];

  return (
    <footer id="site-footer" data-testid="site-footer" className="bg-deep text-ivory">
      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" className="h-10" />
          <p className="mt-5 max-w-xs font-serif text-xl italic text-ivory/70">{restaurant.brandLine}</p>
          <address className="mt-7 not-italic">
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
          <h3 className="eyebrow text-ocean-light">{copy.footer.navTitle}</h3>
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
                {copy.nav.reserve}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-ocean-light">{copy.footer.contactTitle}</h3>
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
            <li>
              <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link" className="link-underline inline-flex items-center gap-2">
                <Instagram className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> Instagram
              </a>
            </li>
            <li>
              <a href={restaurant.tiktokUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-tiktok-link" className="link-underline inline-flex items-center gap-2">
                <TikTokIcon className="h-3.5 w-3.5" /> TikTok
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-ocean-light">{copy.footer.legalTitle}</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/75">
            <li>
              <Link to="/impressum" data-testid="footer-impressum-link" className="link-underline">{copy.footer.impressum}</Link>
            </li>
            <li>
              <Link to="/datenschutz" data-testid="footer-privacy-link" className="link-underline">{copy.footer.privacy}</Link>
            </li>
            <li>
              <Link to="/agb" data-testid="footer-terms-link" className="link-underline">{copy.footer.terms}</Link>
            </li>
          </ul>
          <h3 className="eyebrow mt-8 text-ocean-light">{copy.footer.orderOnline}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/75">
            <li>
              <a href={restaurant.justEatUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-justeat-link" className="link-underline">Just Eat</a>
            </li>
            <li>
              <a href={restaurant.uberEatsUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-ubereats-link" className="link-underline">Uber Eats</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col items-start justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>© {year} {restaurant.name} · {copy.footer.rights}</p>
          <span className="text-ivory/35">{copy.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
