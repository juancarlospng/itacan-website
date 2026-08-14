import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import WaveDivider from "../components/WaveDivider";
import BusinessHours from "../components/BusinessHours";
import ReservationCTA from "../components/ReservationCTA";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 1.8} className={props.className} aria-hidden="true">
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9.5c.5 2.5 3 5 5.5 5.5l1-1.5-2-1-1 .5c-.8-.5-1.5-1.2-2-2l.5-1-1-2L9 9.5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactPage = () => {
  const { t } = useLanguage();

  const actions = [
    { label: t("contact.call"), sub: restaurant.phone, href: restaurant.phoneHref, Icon: Phone, testId: "contact-call-button" },
    { label: t("contact.whatsapp"), sub: restaurant.whatsapp, href: restaurant.whatsappHref, Icon: WhatsAppIcon, testId: "contact-whatsapp-button", external: true },
    { label: t("contact.email"), sub: restaurant.email, href: `mailto:${restaurant.email}`, Icon: Mail, testId: "contact-email-button" },
    { label: t("contact.instagram"), sub: "@itacan.ch", href: restaurant.instagramUrl, Icon: Instagram, testId: "contact-instagram-button", external: true },
  ];

  return (
    <>
      <SEO title={t("seo.contact.title")} description={t("seo.contact.desc")} path="/kontakt" />
      <section className="bg-deep pb-20 pt-40 text-ivory sm:pt-48" data-testid="contact-header">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow text-ocean-light">{t("contact.eyebrow")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline-serif mt-5 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{t("contact.title")}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <WaveDivider className="mt-7 w-28 text-ocean-light" />
          </Reveal>
        </div>
      </section>

      <main className="container-site grid gap-16 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20" data-testid="contact-content">
        <div className="space-y-14">
          <Reveal>
            <section aria-labelledby="contact-address-heading">
              <h2 id="contact-address-heading" className="eyebrow text-deep">{t("contact.visitTitle")}</h2>
              <address className="mt-5 font-serif text-2xl font-medium not-italic leading-snug text-ink sm:text-3xl">
                {restaurant.legalName}
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city} · {restaurant.address.region}
              </address>
              <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-directions-button" className="btn-outline-dark mt-7">
                <MapPin className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> {t("contact.directions")}
              </a>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section aria-labelledby="contact-reach-heading">
              <h2 id="contact-reach-heading" className="eyebrow text-deep">{t("contact.reachTitle")}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {actions.map(({ label, sub, href, Icon, testId, external }) => (
                  <li key={testId}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      data-testid={testId}
                      className="group flex items-center gap-4 rounded-sm border border-sand-dark/60 bg-ivory p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-deep"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-deep text-ivory transition-colors duration-300 group-hover:bg-ocean">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">{label}</span>
                        <span className="block text-sm font-semibold text-ink">{sub}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.14}>
            <section aria-labelledby="contact-hours-heading">
              <h2 id="contact-hours-heading" className="eyebrow text-deep">{t("contact.hoursTitle")}</h2>
              <div className="mt-5 rounded-sm border border-sand-dark/60 bg-sand/25 p-7">
                <BusinessHours />
              </div>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="h-full min-h-[420px] overflow-hidden rounded-sm border border-sand-dark/60">
            <iframe
              title={t("contact.mapTitle")}
              src={restaurant.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              data-testid="contact-map"
              className="h-full min-h-[420px] w-full grayscale-[25%]"
            />
          </div>
        </Reveal>
      </main>

      <ReservationCTA />
    </>
  );
};

export default ContactPage;
