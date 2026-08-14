import { Link } from "react-router-dom";
import { ArrowLeft, FileWarning } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import WaveDivider from "../components/WaveDivider";
import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const LegalPage = ({ kind }) => {
  const { t } = useLanguage();
  const isPrivacy = kind === "privacy";
  const content = isPrivacy ? t("legal.privacy") : t("legal.terms");
  const seo = isPrivacy ? t("seo.privacy") : t("seo.terms");

  return (
    <>
      <SEO title={seo.title} description={seo.desc} path={isPrivacy ? "/datenschutz" : "/agb"} />
      <section className="bg-deep pb-16 pt-40 text-ivory sm:pt-48">
        <div className="container-site">
          <Reveal>
            <h1 className="headline-serif text-4xl sm:text-6xl">{content.title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <WaveDivider className="mt-7 w-28 text-ocean-light" />
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base text-ivory/75">{content.intro}</p>
          </Reveal>
        </div>
      </section>

      <main className="container-site py-20 sm:py-24">
        <Reveal>
          <div
            data-testid={`legal-${kind}-placeholder`}
            className="flex flex-col items-start gap-6 rounded-sm border-2 border-dashed border-deep/30 bg-sand/25 p-10 sm:p-14"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-deep text-ivory">
              <FileWarning className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h2 className="font-sans text-lg font-bold uppercase tracking-[0.14em] text-deep">
              {t("legal.placeholderTitle")}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{t("legal.placeholderCopy")}</p>
            <p className="text-sm text-ink-soft">
              {restaurant.legalName} · {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city} · {restaurant.email}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Link to="/" data-testid="legal-back-home-link" className="link-underline inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-deep">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> {t("legal.backHome")}
          </Link>
        </Reveal>
      </main>
    </>
  );
};

export const DatenschutzPage = () => <LegalPage kind="privacy" />;
export const AgbPage = () => <LegalPage kind="terms" />;
export default LegalPage;
