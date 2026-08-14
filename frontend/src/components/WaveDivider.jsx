/**
 * ITACAN signature double-wave — one consistent asset used site-wide.
 * Never redraw it differently: change color via `className` only.
 */
const WaveDivider = ({ className = "text-ocean", flip = false, ariaHidden = true }) => (
  <svg
    viewBox="0 0 1440 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={ariaHidden}
    className={`${className} ${flip ? "-scale-y-100" : ""} block w-full`}
    preserveAspectRatio="none"
  >
    <path
      d="M0 38C180 8 360 8 540 30C720 52 900 58 1080 40C1260 22 1360 14 1440 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M0 56C200 30 380 30 560 48C740 66 920 66 1100 52C1280 38 1370 32 1440 40"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.55"
    />
  </svg>
);

export default WaveDivider;
