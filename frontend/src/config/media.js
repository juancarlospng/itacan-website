/**
 * ITACAN media configuration.
 * All photography lives in /public/assets/itacan/photos (approved assets only).
 * Containers use FIXED editorial aspect ratios with object-fit: cover —
 * replacement photography from a future shoot must drop in without any
 * layout changes. Adjust `position` per image if a crop needs tuning.
 */

const p = (path) => `/assets/itacan/photos/${path}`;

export const media = {
  heroDesktop: {
    src: p("restaurant/17_bar_interior_night_wide.webp"),
    alt: "ITACAN Bar-Interieur am Abend — warmer Gastraum in Kriens",
    position: "center 60%",
  },
  heroMobile: {
    src: p("restaurant/06_bar_interior_vertical_dark.webp"),
    alt: "ITACAN Bar-Interieur in stimmungsvollem Abendlicht",
    position: "center",
  },
  introFlame: {
    src: p("food/05_cooking_flame.webp"),
    alt: "Offene Flamme in der ITACAN Küche — Handwerk am Herd",
    position: "center",
  },
  worldPinsa: {
    src: p("food/08_pizza_burrata_mortadella.webp"),
    alt: "Pinsa mit Burrata und Mortadella bei ITACAN",
    position: "center",
  },
  worldKitchen: {
    src: p("food/18_shrimp_spaghetti.webp"),
    alt: "Frische Pasta in der ITACAN Küche",
    position: "center",
  },
  worldBar: {
    src: p("drinks/07_cocktail_muddling.webp"),
    alt: "Cocktail-Zubereitung an der ITACAN Bar",
    position: "center",
  },
  worldCaribbean: {
    src: p("food/13_fried_chicken_rice_plantain.webp"),
    alt: "Dominikanische Küche — Pica Pollo mit Reis und Kochbananen",
    position: "center",
  },
  pinsaPrimary: {
    src: p("food/08_pizza_burrata_mortadella.webp"),
    alt: "Pinsa Bufala & Mortadella — ITACAN Pinseria",
    position: "center",
  },
  pinsaSecondaryA: {
    src: p("food/24_pinsa_ham_burrata.webp"),
    alt: "Pinsa mit Schinken und Burrata",
    position: "center",
  },
  pinsaSecondaryB: {
    src: p("food/15_pizza_salami_basil.webp"),
    alt: "Pinsa mit Salami und Basilikum",
    position: "center",
  },
  caribbeanPrimary: {
    src: p("food/13_fried_chicken_rice_plantain.webp"),
    alt: "Pica Pollo mit Reis und frittierten Kochbananen",
    position: "center",
  },
  caribbeanSecondary: {
    src: p("food/10_dominican_soup_plantain.webp"),
    alt: "Dominikanische Küche bei ITACAN",
    position: "center",
  },
  barPrimary: {
    src: p("drinks/07_cocktail_muddling.webp"),
    alt: "Handgemachte Cocktails an der ITACAN Bar",
    position: "center",
  },
  barSecondaryA: {
    src: p("drinks/29_cocktail_tray_assorted.webp"),
    alt: "Tablett mit verschiedenen Cocktails",
    position: "center",
  },
  barSecondaryB: {
    src: p("drinks/28_blue_gradient_cocktail.webp"),
    alt: "Signature-Cocktail in Blautönen",
    position: "center",
  },
  atmospherePrimary: {
    src: p("restaurant/27_dining_table_sunlight.webp"),
    alt: "Gedeckter Tisch im Sonnenlicht — Gastraum ITACAN",
    position: "center",
  },
  atmosphereSecondaryA: {
    src: p("restaurant/31_dining_tables_red_runners.webp"),
    alt: "Eingedeckte Tische im ITACAN Restaurant",
    position: "center",
  },
  atmosphereSecondaryB: {
    src: p("restaurant/32_restaurant_back_room_wide.webp"),
    alt: "Hinterer Gastraum im ITACAN",
    position: "center",
  },
  story: {
    src: p("restaurant/33_restaurant_main_bright.webp"),
    alt: "Heller Hauptgastraum des ITACAN in Kriens",
    position: "center",
  },
  storyBackup: {
    src: p("restaurant/04_restaurant_main_dark_overlay.webp"),
    alt: "ITACAN Gastraum am Abend",
    position: "center",
  },
  eventsFireplace: {
    src: p("restaurant/12_dining_table_fireplace.webp"),
    alt: "Festlich gedeckter Tisch am Kamin — private Anlässe bei ITACAN",
    position: "center",
  },
  visitSupport: {
    src: p("restaurant/16_bar_interior_bright_square.webp"),
    alt: "Helles Bar-Interieur des ITACAN",
    position: "center",
  },
  teamChristian: {
    src: p("team/35_team_christian_abbate.webp"),
    alt: "Christian Abbate — Geschäftsleiter Service, ITACAN",
    position: "center top",
  },
  teamMaribel: {
    src: p("team/36_team_maribel_mosquea.webp"),
    alt: "Maribel Mosquea — Geschäftsleiterin Küche, ITACAN",
    position: "center top",
  },
  teamOctavio: {
    src: p("team/37_team_octavio_mosquea.webp"),
    alt: "Octavio Mosquea — Mitarbeiter, ITACAN",
    position: "center top",
  },
  // Category editorial imagery for Menu Discovery cards & menu page.
  // NOTE: per ASSET_MAP these illustrate the CATEGORY, not a specific dish,
  // unless the dish-to-photo match is confirmed (see data/menu.js).
  catAntipasti: {
    src: p("food/14_assorted_house_platter.webp"),
    alt: "Antipasti-Auswahl des Hauses",
    position: "center",
  },
  catPinsa: {
    src: p("food/15_pizza_salami_basil.webp"),
    alt: "Pinsa aus der ITACAN Pinseria",
    position: "center",
  },
  catPasta: {
    src: p("food/20_penne_shrimp.webp"),
    alt: "Pasta aus der ITACAN Küche",
    position: "center",
  },
  catKaribik: {
    src: p("food/10_dominican_soup_plantain.webp"),
    alt: "Dominikanische Spezialitäten bei ITACAN",
    position: "center",
  },
  catDessert: {
    src: p("food/25_baba_dessert.webp"),
    alt: "Desserts bei ITACAN",
    position: "center",
  },
  catCarne: {
    src: p("food/09_salmon_salad.webp"),
    alt: "Frische Küche bei ITACAN",
    position: "center",
  },
};
