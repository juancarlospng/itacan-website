import Marquee from "react-fast-marquee";
import { useLanguage } from "../i18n/LanguageContext";

const EditorialMarquee = ({ tone = "sand" }) => {
  const { t } = useLanguage();
  const phrase = t("marquee");
  const items = Array.from({ length: 6 }, () => phrase);
  const dark = tone === "deep";
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-y py-6 sm:py-8 ${dark ? "border-ivory/10 bg-deep-dark" : "border-sand-dark/50 bg-sand/40"}`}
    >
      <Marquee speed={28} gradient={false} pauseOnHover={false}>
        {items.map((p, i) => (
          <span key={i} className="flex items-center">
            <span className={`font-serif text-3xl font-medium italic tracking-wide sm:text-5xl ${dark ? "text-ivory/40" : "text-deep/50"}`}>
              {p}
            </span>
            <svg viewBox="0 0 48 16" className={`mx-8 h-4 w-12 sm:mx-12 ${dark ? "text-ocean-light/60" : "text-ocean/70"}`} fill="none">
              <path d="M2 6C10 2 16 2 24 5C32 8 38 8 46 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 12C10 8 16 8 24 11C32 14 38 14 46 11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default EditorialMarquee;
