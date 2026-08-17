import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import MediaImage from "../components/MediaImage";
import GroupOffers from "../components/GroupOffers";
import { copy } from "../copy";
import {
  menuCategories,
  itemsByCategory,
  subgroupsInCategory,
  wineSubgroups,
  winesBySubgroup,
  lunchNote,
  menuNotes,
  CURRENCY,
} from "../data/menu";
import { media } from "../config/media";
import { restaurant } from "../config/restaurant";

const Price = ({ value }) => (
  <span className="whitespace-nowrap font-sans text-sm font-semibold tabular-nums text-deep">
    {value ? `${CURRENCY} ${value}` : ""}
  </span>
);

const MenuItemRow = ({ item }) => (
  <li data-testid={`menu-item-${item.id}`} className="group py-4">
    <div className="flex items-baseline gap-3">
      <h4 className="font-serif text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-deep">
        {item.name}
        {item.tag && (
          <span className="ml-2 rounded-sm border border-ocean/40 px-1.5 py-0.5 align-middle font-sans text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-ocean">
            {item.tag}
          </span>
        )}
      </h4>
      <span className="mx-1 flex-1 border-b border-dotted border-ink/20" aria-hidden="true" />
      <Price value={item.price} />
    </div>
    {item.description && <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-soft">{item.description}</p>}
    {item.dietary?.length > 0 && (
      <div className="mt-1.5 flex gap-2">
        {item.dietary.map((d) => (
          <span key={d} className="rounded-sm border border-ocean/35 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ocean">
            {d}
          </span>
        ))}
      </div>
    )}
  </li>
);

const CategorySection = ({ category }) => {
  const subgroups = subgroupsInCategory(category.id);
  const items = itemsByCategory(category.id);
  if (items.length === 0 && category.id !== "wein" && category.id !== "gruppen") return null;

  return (
    <section id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-36" data-testid={`menu-category-${category.id}`}>
      <div className="border-b-2 border-deep pb-4">
        <h2 id={`${category.id}-heading`} className="headline-serif text-3xl text-ink sm:text-4xl">
          {category.label}
        </h2>
      </div>

      {category.id === "lunch" && (
        <p className="mt-5 rounded-sm bg-sand/40 px-5 py-3.5 text-sm font-semibold text-deep" data-testid="lunch-note">
          {lunchNote}
        </p>
      )}

      {category.id === "gruppen" ? (
        <div className="mt-8">
          <GroupOffers />
        </div>
      ) : category.id === "wein" ? (
        <div className="mt-6 grid gap-12 lg:gap-16">
          {wineSubgroups.map((sub) => {
            const wines = winesBySubgroup(sub.id);
            if (wines.length === 0) return null;
            return (
              <div key={sub.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold italic text-deep">{sub.label}</h3>
                  <div className="flex gap-8 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                    <span className="w-14 text-right">{copy.menuPage.wineGlass}</span>
                    <span className="w-14 text-right">{copy.menuPage.wineBottle}</span>
                  </div>
                </div>
                <ul className="mt-3 divide-y divide-sand-dark/40">
                  {wines.map((w) => (
                    <li key={w.id} data-testid={`wine-item-${w.id}`} className="flex items-baseline justify-between gap-4 py-3.5">
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-ink">{w.name}</h4>
                        {w.detail && <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{w.detail}</p>}
                      </div>
                      <div className="flex shrink-0 gap-8 font-sans text-sm font-semibold tabular-nums text-deep">
                        <span className="w-14 text-right">{w.priceGlass || "—"}</span>
                        <span className="w-14 text-right">{w.priceBottle || "—"}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : subgroups.length > 0 ? (
        subgroups.map((sub) => (
          <div key={sub} className="mt-8">
            <h3 className="font-serif text-2xl font-semibold italic text-deep">{sub}</h3>
            <ul className="mt-2 grid gap-x-14 md:grid-cols-2">
              {items.filter((i) => i.subgroup === sub).map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="mt-4 grid gap-x-14 md:grid-cols-2">
          {items.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
};

const MenuPage = () => (
  <>
    <SEO title={copy.seo.menu.title} description={copy.seo.menu.desc} path="/speisekarte" />
    <section className="bg-deep pb-16 pt-36 text-ivory sm:pt-44" data-testid="menu-header">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow text-ocean-light">{copy.menuPage.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="headline-serif mt-4 max-w-3xl text-4xl sm:text-6xl">{copy.menuPage.headline}</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{copy.menuPage.copy}</p>
        </Reveal>
      </div>
    </section>

    <nav aria-label={copy.menuPage.categoriesLabel} className="sticky top-[4.9rem] z-30 border-b border-sand-dark/50 bg-ivory/95 backdrop-blur-md sm:top-[5.6rem]">
      <div className="container-site no-scrollbar flex gap-2 overflow-x-auto py-3.5">
        {menuCategories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            data-testid={`menu-nav-${c.id}`}
            className="whitespace-nowrap rounded-sm border border-deep/20 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-deep transition-[background-color,color] duration-300 hover:bg-deep hover:text-ivory"
          >
            {c.navLabel}
          </a>
        ))}
      </div>
    </nav>

    <main className="container-site py-16 sm:py-20" data-testid="menu-content">
      <div className="grid gap-20">
        {menuCategories.slice(0, 2).map((c) => (
          <Reveal key={c.id}><CategorySection category={c} /></Reveal>
        ))}
      </div>

      <Reveal className="my-16">
        <MediaImage image={media.pinsaSecondaryA} ratio="aspect-[21/9]" className="rounded-sm" sizes="100vw" />
      </Reveal>

      <div className="grid gap-20">
        {menuCategories.slice(2).map((c) => (
          <Reveal key={c.id}><CategorySection category={c} /></Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <p className="text-xs leading-relaxed text-ink/50">
          {menuNotes.prices} · {menuNotes.allergens}
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center gap-5 rounded-sm bg-sand/35 p-7 sm:p-9" data-testid="menu-order-section">
          <p className="font-serif text-2xl font-semibold italic text-deep">{copy.menuPage.orderTitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href={restaurant.justEatUrl} target="_blank" rel="noopener noreferrer" data-testid="order-justeat-link" className="link-underline text-sm font-semibold text-deep">
              Just Eat
            </a>
            <span className="text-ink/30" aria-hidden="true">·</span>
            <a href={restaurant.uberEatsUrl} target="_blank" rel="noopener noreferrer" data-testid="order-ubereats-link" className="link-underline text-sm font-semibold text-deep">
              Uber Eats
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  </>
);

export default MenuPage;
