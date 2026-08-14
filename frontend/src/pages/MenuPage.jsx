import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ReservationCTA from "../components/ReservationCTA";
import WaveDivider from "../components/WaveDivider";
import { useLanguage } from "../i18n/LanguageContext";
import { visibleMenuCategories } from "../data/menu";
import { restaurant } from "../config/restaurant";

const MenuItemRow = ({ item }) => (
  <li data-testid={`menu-item-${item.id}`} className="group py-5">
    <div className="flex items-baseline gap-3">
      <h3 className="font-serif text-xl font-medium text-ink transition-colors duration-300 group-hover:text-deep sm:text-2xl">
        {item.name}
      </h3>
      <span className="mx-1 flex-1 border-b border-dotted border-ink/25" aria-hidden="true" />
      <span className="whitespace-nowrap font-sans text-sm font-semibold tabular-nums text-deep">
        {item.price ? `CHF ${item.price}` : "—"}
      </span>
    </div>
    {item.description && <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-soft">{item.description}</p>}
    {item.dietary?.length > 0 && (
      <div className="mt-2 flex gap-2">
        {item.dietary.map((d) => (
          <span key={d} className="rounded-sm border border-ocean/40 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ocean">
            {d}
          </span>
        ))}
      </div>
    )}
  </li>
);

const MenuPage = () => {
  const { t, lang } = useLanguage();
  const categories = visibleMenuCategories();

  return (
    <>
      <SEO title={t("seo.menu.title")} description={t("seo.menu.desc")} path="/speisekarte" />
      <section className="bg-deep pb-20 pt-40 text-ivory sm:pt-48" data-testid="menu-header">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow text-ocean-light">{t("menu.pageEyebrow")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline-serif mt-5 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{t("menu.pageTitle")}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <WaveDivider className="mt-7 w-28 text-ocean-light" />
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{t("menu.pageCopy")}</p>
          </Reveal>
        </div>
      </section>

      <nav aria-label="Speisekarte Kategorien" className="sticky top-20 z-30 border-b border-sand-dark/50 bg-ivory/90 backdrop-blur-xl">
        <div className="container-site flex gap-2 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#menu-${c.id}`}
              data-testid={`menu-nav-${c.id}`}
              className="whitespace-nowrap rounded-sm border border-deep/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-deep transition-[background-color,color] duration-300 hover:bg-deep hover:text-ivory"
            >
              {c.label[lang]}
            </a>
          ))}
        </div>
      </nav>

      <main className="container-site py-20 sm:py-24" data-testid="menu-content">
        <div className="grid gap-16 lg:gap-20">
          {categories.map((c, ci) => (
            <Reveal key={c.id} delay={0.05}>
              <section id={`menu-${c.id}`} aria-labelledby={`menu-${c.id}-heading`} className="scroll-mt-40">
                <div className="flex items-end justify-between gap-6 border-b-2 border-deep pb-5">
                  <div>
                    <p className="font-serif text-lg italic text-ocean">{c.sub[lang]}</p>
                    <h2 id={`menu-${c.id}-heading`} className="headline-serif mt-1 text-3xl text-ink sm:text-4xl">
                      {c.label[lang]}
                    </h2>
                  </div>
                  <span className="font-serif text-4xl font-medium italic text-ocean/40" aria-hidden="true">
                    0{ci + 1}
                  </span>
                </div>
                <ul className="mt-4 grid gap-x-14 md:grid-cols-2">
                  {c.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="text-xs leading-relaxed text-ink/50">{t("menu.priceNote")} {t("menu.allergenNote")}</p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-10 rounded-sm bg-sand/35 p-10 sm:p-14 md:grid-cols-[1fr_auto] md:items-center" data-testid="menu-order-section">
            <div>
              <h2 className="headline-serif text-3xl text-ink sm:text-4xl">{t("menu.orderTitle")}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{t("menu.orderCopy")}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={restaurant.justEatUrl} target="_blank" rel="noopener noreferrer" data-testid="order-justeat-button" className="btn-primary">
                {t("reservation.deliveryJustEat")}
              </a>
              <a href={restaurant.uberEatsUrl} target="_blank" rel="noopener noreferrer" data-testid="order-ubereats-button" className="btn-outline-dark">
                {t("reservation.deliveryUberEats")}
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <ReservationCTA />
    </>
  );
};

export default MenuPage;
