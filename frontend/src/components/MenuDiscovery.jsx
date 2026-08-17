import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MediaImage from "./MediaImage";
import { copy } from "../copy/de";
import { discoveryRails, railItems, CURRENCY } from "../data/menu";
import { media } from "../config/media";

// Category-coherent editorial imagery (per ASSET_MAP: unconfirmed dish photos
// illustrate the dish's CATEGORY, never claim to be the specific dish).
// Rotation per category prevents identical photos side by side within a rail.
const categoryImages = {
  antipasti: ["catAntipasti"],
  pinsa: ["catPinsa", "pinsaSecondaryA"],
  pasta: ["catPasta", "worldKitchen"],
  "carne-pesce": ["catCarne"],
  dominikanisch: ["catKaribik", "caribbeanPrimary"],
  dessert: [], // branded editorial tile — only Babà has an approved photo
};

// Desserts have only one approved photo (Babà). Cards without a confirmed
// photo get a branded editorial tile instead of a misleading image.
const BrandedDessertTile = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-deep p-6" aria-hidden="true">
    <svg viewBox="0 0 48 16" className="h-4 w-12 text-ocean-light/70" fill="none">
      <path d="M2 6C10 2 16 2 24 5C32 8 38 8 46 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 12C10 8 16 8 24 11C32 14 38 14 46 11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
    </svg>
    <span className="font-serif text-2xl font-semibold italic text-ivory/85">Dolci</span>
    <span className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-ivory/40">ITACAN</span>
  </div>
);

const DishCard = ({ item, image }) => {
  return (
    <div
      data-testid={`dish-card-${item.id}`}
      className="group w-[84%] shrink-0 snap-start transition-transform duration-300 hover:-translate-y-1 sm:w-[46%] lg:w-[31.5%] xl:w-[23.5%]"
    >
      <div className="relative overflow-hidden rounded-sm">
        {image ? (
          <MediaImage
            image={image}
            ratio="aspect-[4/5]"
            sizes="(max-width: 640px) 84vw, (max-width: 1024px) 46vw, 24vw"
            imgClassName="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="aspect-[4/5]">
            <BrandedDessertTile />
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
          <h3 className="font-serif text-xl font-semibold leading-snug text-ink">{item.name}</h3>
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

const Rail = ({ rail }) => {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const items = railItems(rail.id);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 8);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (items.length === 0) return null;

  const catCounter = {};
  const imageFor = (item) => {
    if (item.image) return media[item.image];
    const pool = categoryImages[item.category] || [];
    if (!pool.length) return null;
    const i = catCounter[item.category] || 0;
    catCounter[item.category] = i + 1;
    return media[pool[i % pool.length]];
  };

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mt-12" data-testid={`rail-${rail.id}`}>
      <div className="flex items-center justify-between gap-4">
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
      <div
        ref={scrollRef}
        className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:snap-proximity lg:px-12"
      >
        {items.map((item) => (
          <DishCard key={item.id} item={item} image={imageFor(item)} />
        ))}
      </div>
    </div>
  );
};

/**
 * Homepage Menu Discovery — horizontal category rails.
 * DISCOVERY ONLY: reads from the same menu dataset as /speisekarte
 * and links there. It never replaces the full functional menu.
 */
const MenuDiscovery = () => (
  <section data-testid="menu-discovery" className="bg-sand/30 py-24 sm:py-32">
    <div className="container-site">
      <SectionHeading eyebrow={copy.discovery.eyebrow} title={copy.discovery.headline} copy={copy.discovery.copy} />
      {discoveryRails.map((rail) => (
        <Rail key={rail.id} rail={rail} />
      ))}
      <Reveal className="mt-16">
        <Link to="/speisekarte" data-testid="discovery-full-menu-cta" className="btn-primary">
          {copy.discovery.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default MenuDiscovery;
