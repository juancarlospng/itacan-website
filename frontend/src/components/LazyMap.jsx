import { useEffect, useRef, useState } from "react";
import { restaurant } from "../config/restaurant";

/**
 * Shared lazy Google Map — same component on Home (Visit) and /kontakt.
 * The iframe src is only assigned when the map approaches the viewport.
 */
const LazyMap = ({ title, className = "h-[350px] sm:h-[450px] lg:h-[560px]", testId }) => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden rounded-[10px] border border-ivory/10 bg-deep-dark ${className}`}>
      {load && (
        <iframe
          title={title}
          src={restaurant.googleMapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          data-testid={testId}
          className="h-full w-full grayscale-[20%]"
        />
      )}
    </div>
  );
};

export default LazyMap;
