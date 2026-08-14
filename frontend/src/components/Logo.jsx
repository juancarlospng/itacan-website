import WaveDivider from "./WaveDivider";

const Logo = ({ tone = "dark", compact = false }) => {
  const wordColor = tone === "light" ? "text-ivory" : "text-deep";
  return (
    <span className="inline-flex flex-col items-start leading-none" data-testid="itacan-logo">
      <span className={`font-serif font-semibold tracking-[0.18em] ${wordColor} ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}>
        ITACAN
      </span>
      {!compact && (
        <span className={`mt-1 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.3em] ${tone === "light" ? "text-ivory/70" : "text-ink-soft"}`}>
          Restaurant • Bar • Pinseria
        </span>
      )}
      <WaveDivider className={`mt-1.5 w-16 ${tone === "light" ? "text-ocean-light" : "text-ocean"}`} />
    </span>
  );
};

export default Logo;
