import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const SectionHeading = ({ eyebrow, title, copy, tone = "light", align = "left", className = "" }) => {
  const isDark = tone === "dark";
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${isDark ? "text-ocean-light" : "text-ocean"}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`headline-serif mt-5 text-4xl sm:text-5xl lg:text-6xl ${isDark ? "text-ivory" : "text-ink"}`}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16} className={align === "center" ? "flex justify-center" : ""}>
        <WaveDivider className={`mt-6 w-28 ${isDark ? "text-ocean-light" : "text-ocean"}`} />
      </Reveal>
      {copy && (
        <Reveal delay={0.22}>
          <p className={`mt-7 max-w-xl text-base leading-relaxed sm:text-lg ${isDark ? "text-ivory/75" : "text-ink-soft"} ${align === "center" ? "mx-auto" : ""}`}>
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
