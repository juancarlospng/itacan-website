import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { copy } from "../copy";
import { restaurant } from "../config/restaurant";

/**
 * Legal shells — CONTENT PENDING FINAL OWNER/LEGAL APPROVAL.
 * Do not add generated legal language here; only the approved texts from ITACAN.
 */
const LegalPage = ({ kind }) => {
  const content = copy.legal[kind];
  const seo = copy.seo[kind];
  const path = kind === "impressum" ? "/impressum" : kind === "privacy" ? "/datenschutz" : "/agb";

  return (
    <>
      <SEO title={seo.title} description={seo.desc} path={path} />
      <section className="bg-deep pb-14 pt-36 text-ivory sm:pt-44">
        <div className="container-site">
          <Reveal>
            <h1 className="headline-serif text-4xl sm:text-6xl">{content.title}</h1>
          </Reveal>
        </div>
      </section>
      <main className="container-site py-16 sm:py-20">
        <Reveal>
          <div data-testid={`legal-${kind}-pending`} className="max-w-2xl rounded-sm border border-dashed border-deep/30 bg-sand/25 p-8 sm:p-10">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-deep">{copy.legal.pendingTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{copy.legal.pendingCopy}</p>
            <p className="mt-6 text-sm text-ink-soft">
              {restaurant.legalName} · {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city} · {restaurant.email}
            </p>
          </div>
        </Reveal>
      </main>
    </>
  );
};

export const ImpressumPage = () => <LegalPage kind="impressum" />;
export const DatenschutzPage = () => <LegalPage kind="privacy" />;
export const AgbPage = () => <LegalPage kind="terms" />;
export default LegalPage;
