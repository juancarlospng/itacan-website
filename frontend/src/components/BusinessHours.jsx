import { restaurant } from "../config/restaurant";

const BusinessHours = ({ tone = "light" }) => {
  const dark = tone === "dark";
  return (
    <div data-testid="business-hours">
      <ul>
        {restaurant.openingHours.map((row) => (
          <li
            key={row.days}
            className={`flex items-baseline justify-between gap-6 border-b py-3 last:border-b-0 ${
              dark ? "border-ivory/10" : "border-sand-dark/50"
            }`}
          >
            <span className={`text-sm font-semibold ${dark ? "text-ivory" : "text-ink"}`}>{row.days}</span>
            <span className={`text-right text-sm tabular-nums ${row.closed ? (dark ? "text-ocean-light" : "text-ocean") : dark ? "text-ivory/70" : "text-ink-soft"}`}>
              {row.value.map((v) => (
                <span key={v} className="block">{v}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessHours;
