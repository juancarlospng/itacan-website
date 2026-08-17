/**
 * Official ITACAN logo (brand/ITACAN_LOGO.svg).
 * The supplied SVG is dark-on-transparent; on Deep Blue surfaces it is
 * inverted to ivory via CSS filter. Never redraw or re-typeset the logo.
 */
const Logo = ({ tone = "light", className = "h-9" }) => (
  <img
    src="/assets/itacan/brand/ITACAN_LOGO.svg"
    alt="ITACAN — Restaurant • Bar • Pinseria"
    className={`${className} w-auto ${tone === "light" ? "brightness-0 invert" : ""}`}
    data-testid="itacan-logo"
  />
);

export default Logo;
