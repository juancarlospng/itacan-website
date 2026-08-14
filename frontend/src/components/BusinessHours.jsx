import { useLanguage } from "../i18n/LanguageContext";
import { restaurant } from "../config/restaurant";

const BusinessHours = ({ tone = "light" }) => {
  const { t, lang } = useLanguage();
  const dark = tone === "dark";
  return (
    <div data-testid="business-hours">
      <ul className="divide-y divide-current/10">
        {restaurant.openingHours.map((row, i) => (
          <li key={i} className={`flex items-baseline justify-between gap-6 py-3.5 ${dark ? "border-ivory/10" : "border-sand-dark/50"}`}>
            <span className={`text-sm font-semibold ${dark ? "text-ivory" : "text-ink"}`}>{row.days[lang]}</span>
            <span className={`text-right text-sm tabular-nums ${row.closed ? (dark ? "text-ocean-light" : "text-ocean") : dark ? "text-ivory/70" : "text-ink-soft"}`}>
              {row.value[lang]}
            </span>
          </li>
        ))}
      </ul>
      <p className={`mt-5 text-xs leading-relaxed ${dark ? "text-ivory/50" : "text-ink/50"}`}>
        {restaurant.openingHoursNotes[lang]}
      </p>
    </div>
  );
};

export default BusinessHours;
