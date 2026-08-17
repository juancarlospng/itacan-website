import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import MediaImage from "../components/MediaImage";
import BusinessHours from "../components/BusinessHours";
import { copy } from "../copy/de";
import { media } from "../config/media";
import { restaurant } from "../config/restaurant";

const ContactPage = () => {
  const c = copy.contactPage;
  const actions = [
    { label: c.call, sub: restaurant.phone, href: restaurant.phoneHref, Icon: Phone, testId: "contact-call-button" },
    { label: c.whatsapp, sub: restaurant.whatsapp, href: restaurant.whatsappHref, Icon: MessageCircle, testId: "contact-whatsapp-button", external: true },
    { label: c.email, sub: restaurant.email, href: `mailto:${restaurant.email}`, Icon: Mail, testId: "contact-email-button" },
    { label: c.directions, sub: `${restaurant.address.street}, ${restaurant.address.city}`, href: restaurant.googleMapsUrl, Icon: MapPin, testId: "contact-directions-button", external: true },
  ];

  return (
    <>
      <SEO title={copy.seo.contact.title} description={copy.seo.contact.desc} path="/kontakt" />
      <section className="bg-deep pb-16 pt-36 text-ivory sm:pt-44" data-testid="contact-header">
        <div className="container-site">
          <Reveal>
            <h1 className="headline-serif max-w-3xl text-4xl sm:text-6xl">{c.headline}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{c.sub}</p>
          </Reveal>
        </div>
      </section>

      <main className="container-site grid gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20" data-testid="contact-content">
        <div className="space-y-12">
          <Reveal>
            <section aria-labelledby="contact-address-heading">
              <h2 id="contact-address-heading" className="eyebrow text-deep">{c.addressTitle}</h2>
              <address className="mt-4 font-serif text-2xl font-semibold not-italic leading-snug text-ink">
                {restaurant.legalName}
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city} · {restaurant.address.region}
              </address>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section aria-labelledby="contact-reach-heading">
              <h2 id="contact-reach-heading" className="eyebrow text-deep">{c.reachTitle}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {actions.map(({ label, sub, href, Icon, testId, external }) => (
                  <li key={testId}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      data-testid={testId}
                      className="group flex items-center gap-4 rounded-sm border border-sand-dark/60 bg-ivory p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-deep"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-deep text-ivory transition-colors duration-300 group-hover:bg-ocean">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/50">{label}</span>
                        <span className="block text-sm font-semibold text-ink">{sub}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-reserve-button" className="btn-primary mt-6">
                {c.reserve}
              </a>
            </section>
          </Reveal>

          <Reveal delay={0.14}>
            <section aria-labelledby="contact-hours-heading">
              <h2 id="contact-hours-heading" className="eyebrow text-deep">{c.hoursTitle}</h2>
              <div className="mt-4 rounded-sm border border-sand-dark/60 bg-sand/25 p-6">
                <BusinessHours />
              </div>
            </section>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="h-[350px] overflow-hidden rounded-sm border border-sand-dark/60 sm:h-[420px] lg:h-[480px]">
              <iframe
                title={copy.visit.mapTitle}
                src={restaurant.googleMapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="contact-map"
                className="h-full w-full grayscale-[20%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <MediaImage image={media.visitSupport} ratio="aspect-[3/2]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
          </Reveal>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
