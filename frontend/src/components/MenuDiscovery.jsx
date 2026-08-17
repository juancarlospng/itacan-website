import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MediaImage from "./MediaImage";
import { copy } from "../copy/de";
import { discoveryRails, railItems, CURRENCY } from "../data/menu";
import { media } from "../config/media";

/**
 * Photo integrity rule (ASSET_MAP): a photo is attached to a dish ONLY when
 * the dish-to-photo match is confirmed (Pinsa Bufala & Mortadella, Pica Pollo,
 * Babà Napoletano). Everything else gets an elegant branded tile — never a
 * reused photo labelled as a different dish.
 */
const tileWord = {
  antipasti: "Antipasti",
  pinsa: "Pinsa",
  pasta: "Pasta",
  "carne-pesce": "Cucina",
  dominikanisch: "Caribe",
  dessert: "Dolci",
  lunch: "Lunch",
};

const BrandedTile = ({ category }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-deep p-6" aria-hidden="true">
    <svg viewBox="0 0 48 16" className="h-4 w-12 text-ocean-light/70" fill="none">
      <path d="M2 6C10 2 16 2 24 5C32 8 38 8 46 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 12C10 8 16 8 24 11C32 14 38 14 46 11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
    </svg>
    <span className="font-serif text-3xl font-semibold italic text-ivory/90">{tileWord[category] || "ITACAN"}</span>
    <span className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-ivory/40">ITACAN</span>
  </div>
);

const DishCard = ({ item }) => {
  const image = item.image ? media[item.image] : null;
  return (
    <div
      data-testid={`dish-card-${item.id}`}
      className="group w-[80vw] max-w-[340px] shrink-0 snap-start transition-transform duration-300 hover:-translate-y-1 sm:w-[300px] lg:w-[330px] xl:w-[340px]"
    >
      <div className="relative overflow-hidden rounded-[10px] border border-ink/5 shadow-[0_20px_44px_-26px_rgba(7,65,105,0.4)]">
        {image ? (
          <MediaImage
            image={image}
            ratio="aspect-[4/5]"
            sizes="(max-width: 640px) 80vw, 340px"
            imgClassName="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="aspect-[4/5]">
            <BrandedTile category={item.category} />
          </div>
        )}
        {item.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-deep/90 px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ivory">
            {item.tag}
          </span>
        )}
      </div>
      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[1.35rem] font-semibold leading-snug text-ink">{item.name}</h3>
          <span className="whitespace-nowrap font-sans text-sm font-semibold tabular-nums text-deep">
            {item.price ? `${CURRENCY} ${item.price}` : ""}
          </span>
        </div>
        {item.description && (
          <p className="mt-1.5 line-clamp-2 text-[0.82rem] leading-relaxed text-ink-soft opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

const FADE = 44;

const Rail = ({ rail }) => {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const items = railItems(rail.id);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth > el.clientWidth + 8;
    setCanScroll(scrollable);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  if (items.length === 0) return null;

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * scrollRef.current.clientWidth * 0.75, behavior: "smooth" });
  };

  // Subtle continuation fade at the rail edges, adapted to scroll position
  const maskImage = !canScroll
    ? undefined
    : atStart && atEnd
      ? undefined
      : atStart
        ? `linear-gradient(to right, black calc(100% - ${FADE}px), transparent 100%)`
        : atEnd
          ? `linear-gradient(to right, transparent 0, black ${FADE}px)`
          : `linear-gradient(to right, transparent 0, black ${FADE}px, black calc(100% - ${FADE}px), transparent 100%)`;

  return (
    <div className="mt-14" data-testid={`rail-${rail.id}`}>
      <div className="container-site flex items-center justify-between gap-4">
        <h3 className="font-serif text-2xl font-semibold italic text-deep sm:text-3xl">{rail.title}</h3>
        {canScroll && (
          <div className="hidden gap-2 lg:flex">
            <button
              type="button"
              data-testid={`rail-${rail.id}-prev`}
              aria-label={copy.discovery.prevLabel}
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-deep/25 text-deep transition-colors duration-300 hover:bg-deep hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              data-testid={`rail-${rail.id}-next`}
              aria-label={copy.discovery.nextLabel}
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-deep/25 text-deep transition-colors duration-300 hover:bg-deep hover:text-ivory"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        )}
      </div>
      {/* Full-bleed rail: extends close to the viewport edges, small intentional margin */}
      <div
        ref={scrollRef}
        onScroll={update}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-3 pt-1 sm:px-7 lg:snap-proximity lg:px-10"
      >
        {items.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

/**
 * Homepage Menu Discovery — immersive horizontal category rails.
 * DISCOVERY ONLY: reads from the same menu dataset as /speisekarte
 * and links there. It never replaces the full functional menu.
 */
const MenuDiscovery = () => (
  <section data-testid="menu-discovery" className="bg-sand/30 py-24 sm:py-32">
    <div className="container-site">
      <SectionHeading eyebrow={copy.discovery.eyebrow} title={copy.discovery.headline} copy={copy.discovery.copy} />
    </div>
    {discoveryRails.map((rail) => (
      <Rail key={rail.id} rail={rail} />
    ))}
    <div className="container-site">
      <Reveal className="mt-16">
        <Link to="/speisekarte" data-testid="discovery-full-menu-cta" className="btn-primary">
          {copy.discovery.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default MenuDiscovery;
