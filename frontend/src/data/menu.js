/**
 * ITACAN Speisekarte — single structured menu dataset.
 * The full Menu page AND homepage Menu Discovery read from THIS file.
 * Change a price once → it updates everywhere.
 *
 * Sources: official ITACAN menu reference graphics (reference/menu_source/*),
 * transcribed without invention. Unclear ingredient text is omitted, never guessed.
 *
 * MenuItem = {
 *   id, category, subgroup?, name, description?, price?, currency: "CHF",
 *   image? (confirmed dish photo only), homeSections? (discovery rail ids),
 *   tag?, dietary?, available, order
 * }
 * Wine items additionally use: detail?, priceGlass? (1 dl), priceBottle? (75 cl)
 */

export const CURRENCY = "CHF";

export const menuCategories = [
  { id: "antipasti", label: "Antipasti & Fritti", navLabel: "Antipasti" },
  { id: "pinsa", label: "Pinsa", navLabel: "Pinsa" },
  { id: "pasta", label: "Pasta & Al Forno", navLabel: "Pasta" },
  { id: "carne-pesce", label: "Carne & Pesce", navLabel: "Carne & Pesce" },
  { id: "dominikanisch", label: "Dominikanische Spezialitäten", navLabel: "Dominikanisch" },
  { id: "dessert", label: "Dessert", navLabel: "Dessert" },
  { id: "wein", label: "Wein", navLabel: "Wein" },
  { id: "lunch", label: "Lunch", navLabel: "Lunch" },
  { id: "gruppen", label: "Gruppenangebote", navLabel: "Gruppen" },
];

export const discoveryRails = [
  { id: "auswahl", title: "ITACAN Auswahl" },
  { id: "pinsa", title: "Pinsa" },
  { id: "pasta", title: "Pasta & Küche" },
  { id: "karibik", title: "Karibische Seele" },
  { id: "dessert", title: "Desserts" },
];

export let lunchNote =
  "Mittwoch, Donnerstag & Freitag · 11:30–14:00 · CHF 20.– inkl. Salat und Espresso";

export const groupOffers = [
  {
    id: "tavolata",
    name: "Tavolata ITACAN",
    price: "45.–",
    priceSuffix: "pro Person",
    description:
      "Ein gemeinsames Menü für den ganzen Tisch mit Antipasti, Pinsa, Pasta, dominikanischen Spezialitäten und Dessert.",
    note: "Nur auf Reservation.",
    cta: "Tavolata anfragen",
  },
  {
    id: "giro-pinsa",
    name: "Giro Pinsa",
    price: "35.–",
    priceSuffix: "pro Person",
    description:
      "Eine Pinsa nach der anderen, verschiedene Geschmacksrichtungen und ein Tisch, der entscheidet, wann genug ist. Ideal für Gruppen, Freunde und unkomplizierte Abende.",
    note: "Ab 4 Personen.",
    cta: "Giro Pinsa reservieren",
  },
];

export const menuItems = [
  // ————— ANTIPASTI & FRITTI —————
  { id: "bruschette", category: "antipasti", name: "Bruschette", description: "Knuspriges Brot mit Tomaten, Basilikum und Oregano", price: "12.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 1 },
  { id: "insalata-mista", category: "antipasti", name: "Insalata Mista", description: "Gemischter Salat mit Tomaten, Randen, Mais und Karotten", price: "10.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 2 },
  { id: "caprese-bufala", category: "antipasti", name: "Caprese di Bufala", description: "Tomaten, Büffelmozzarella und Basilikum", price: "14.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 3 },
  { id: "carpaccio-manzo", category: "antipasti", name: "Carpaccio di Manzo", description: "Rinds-Carpaccio mit Rucola und Grana-Scheiben", price: "18.– / 28.–", currency: CURRENCY, available: true, order: 4 },
  { id: "carpaccio-polpo", category: "antipasti", name: "Carpaccio di Polpo", description: "Oktopus-Carpaccio mit Rucola und Zitrone", price: "19.–", currency: CURRENCY, available: true, order: 5 },
  { id: "tartar-manzo", category: "antipasti", name: "Tartar di Manzo", description: "Rohes Rindfleisch, fein gehackt, mit Kapern, Zwiebeln, Salz und Pfeffer", price: "18.– / 28.–", currency: CURRENCY, available: true, order: 6 },
  { id: "arancino-ragu", category: "antipasti", name: "Arancino Siciliano al Ragù", description: "Reiskügel gefüllt mit Bolognese-Sauce und Erbsen", price: "10.–", currency: CURRENCY, available: true, order: 7 },
  { id: "arancino-melanzane", category: "antipasti", name: "Arancino Siciliano con Melanzane", description: "Reiskügel gefüllt mit Tomaten und Auberginen", price: "10.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 8 },
  { id: "platano-fritos", category: "antipasti", name: "Plátanos Fritos", description: "Frittierte Kochbanane mit Salz", price: "12.–", currency: CURRENCY, dietary: ["vegetarisch", "vegan"], available: true, order: 9, homeSections: ["karibik"] },
  { id: "salpicon-marisco", category: "antipasti", name: "Salpicón de Marisco", description: "Salat aus Garnelen, Calamares und Oktopus", price: "19.– / 29.–", currency: CURRENCY, available: true, order: 10 },
  { id: "antipasto-itacan", category: "antipasti", name: "Antipasto della Casa «ITACAN»", description: "Für 2 Personen", price: "28.–", currency: CURRENCY, tag: "Für 2 Personen", available: true, order: 11, homeSections: ["auswahl"] },

  // ————— PINSA —————
  { id: "pinsa-margherita", category: "pinsa", subgroup: "Pinse Classiche", name: "Margherita", description: "Tomatensauce, Mozzarella und Basilikum", price: "16.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 1, homeSections: ["pinsa"] },
  { id: "pinsa-funghi", category: "pinsa", subgroup: "Pinse Classiche", name: "Funghi", description: "Tomatensauce, Mozzarella, Champignons", price: "18.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 2 },
  { id: "pinsa-prosciutto-funghi", category: "pinsa", subgroup: "Pinse Classiche", name: "Prosciutto e Funghi", description: "Tomatensauce, Mozzarella, Vorderschinken und Champignons", price: "20.–", currency: CURRENCY, available: true, order: 3 },
  { id: "pinsa-diavola", category: "pinsa", subgroup: "Pinse Classiche", name: "Diavola", description: "Tomatensauce, Mozzarella, scharfe Salami und Oliven", price: "20.–", currency: CURRENCY, available: true, order: 4, homeSections: ["pinsa"] },
  { id: "pinsa-vegetariana", category: "pinsa", subgroup: "Pinse Classiche", name: "Vegetariana", description: "Tomatensauce, Mozzarella, Auberginen, Zucchini", price: "20.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 5 },
  { id: "pinsa-tonno-cipolla", category: "pinsa", subgroup: "Pinse Classiche", name: "Tonno e Cipolla", description: "Tomatensauce, Mozzarella, Thunfisch und Zwiebeln", price: "20.–", currency: CURRENCY, available: true, order: 6 },
  { id: "pinsa-regina", category: "pinsa", subgroup: "Pinse Bianche", name: "Regina", description: "Mozzarella, Cherry-Tomaten, Rucola, Rohschinken und Basilikum", price: "25.–", currency: CURRENCY, available: true, order: 7, homeSections: ["pinsa"] },
  { id: "pinsa-salmone", category: "pinsa", subgroup: "Pinse Bianche", name: "Salmone", description: "Räucherlachs, Cherry-Tomaten, Rucola", price: "24.–", currency: CURRENCY, available: true, order: 8 },
  { id: "pinsa-zola-crudo", category: "pinsa", subgroup: "Pinse Bianche", name: "Zola & Crudo", description: "Gorgonzola, Rohschinken", price: "24.–", currency: CURRENCY, available: true, order: 9 },
  { id: "pinsa-itacan", category: "pinsa", subgroup: "Pinse Speciali", name: "ITACAN", description: "Tomatensauce, Mozzarella, Poulet, Peperoni, Peperoncino", price: "26.–", currency: CURRENCY, tag: "Haus-Spezialität", available: true, order: 10, homeSections: ["auswahl", "pinsa"] },
  { id: "pinsa-gamberi-zucchine", category: "pinsa", subgroup: "Pinse Speciali", name: "Gamberi e Zucchine", description: "Tomatensauce, Mozzarella, Crevetten, Rucola, Zucchetti", price: "25.–", currency: CURRENCY, available: true, order: 11 },
  { id: "pinsa-salsiccia-friarielli", category: "pinsa", subgroup: "Pinse Speciali", name: "Salsiccia & Friarielli", description: "Provola, Salsiccia und Friarielli", price: "24.–", currency: CURRENCY, available: true, order: 12 },
  { id: "pinsa-bufala-mortadella", category: "pinsa", subgroup: "Pinse Speciali", name: "Bufala & Mortadella", description: "Büffelmozzarella, Mortadella, Rucola", price: "24.–", currency: CURRENCY, image: "worldPinsa", available: true, order: 13, homeSections: ["auswahl", "pinsa"] },
  { id: "pinsa-calabrese", category: "pinsa", subgroup: "Pinse Speciali", name: "Calabrese", description: "Tomatensauce, Mozzarella, scharfe Salami, Nduja", price: "23.–", currency: CURRENCY, available: true, order: 14 },
  { id: "pinsa-bufalina", category: "pinsa", subgroup: "Pinse Speciali", name: "Bufalina", description: "Tomatensauce, Büffelmozzarella, Basilikum", price: "22.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 15 },
  { id: "pinsa-cordon-caribeno", category: "pinsa", subgroup: "Pinse Speciali", name: "Cordon Caribeño", price: "30.–", currency: CURRENCY, available: true, order: 16 },
  { id: "pinsa-la-dominicana", category: "pinsa", subgroup: "Pinse Speciali", name: "La Dominicana", price: "28.–", currency: CURRENCY, available: true, order: 17 },

  // ————— PASTA & AL FORNO —————
  { id: "lasagna", category: "pasta", subgroup: "Al Forno", name: "Lasagna", description: "Nudelblätter an Tomatensauce, Rindshackfleisch, Karotten, Béchamel, Mozzarella und Grana", price: "24.–", currency: CURRENCY, available: true, order: 1 },
  { id: "parmigiana", category: "pasta", subgroup: "Al Forno", name: "Parmigiana", description: "Auberginen-Gratin mit Tomaten, Mozzarella und Basilikum, überbacken", price: "23.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 2 },
  { id: "gnocchi-sorrentina", category: "pasta", subgroup: "Al Forno", name: "Gnocchi alla Sorrentina", description: "Kartoffelgnocchi an Tomatensauce mit Mozzarella, Grana und Basilikum, überbacken", price: "22.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 3 },
  { id: "spaghetti-frutti-di-mare", category: "pasta", subgroup: "Pasta dello Chef", name: "Spaghetti Frutti di Mare", description: "Spaghetti mit Meeresfrüchten, Calamari, Oktopus und Cherry-Tomaten, leicht scharf", price: "28.–", currency: CURRENCY, available: true, order: 4, homeSections: ["auswahl", "pasta"] },
  { id: "paccheri-calamari", category: "pasta", subgroup: "Pasta dello Chef", name: "Paccheri Calamari e Limone", description: "Neapolitanische Pasta mit Calamari, Cherry-Tomaten, Knoblauch und geriebener Zitrone, leicht scharf", price: "26.–", currency: CURRENCY, available: true, order: 5 },
  { id: "paccheri-zucchine-gamberi", category: "pasta", subgroup: "Pasta dello Chef", name: "Paccheri Crema di Zucchine e Gamberi", description: "Neapolitanische Pasta an Zucchetti-Crèmesauce mit gebratenen Crevetten und Cherry-Tomaten, leicht scharf", price: "26.–", currency: CURRENCY, available: true, order: 6, homeSections: ["pasta"] },
  { id: "tortelloni-tartufo", category: "pasta", subgroup: "Pasta dello Chef", name: "Tortelloni al Tartufo", description: "Gefüllte Pasta mit Trüffel und Pecorino an Trüffelcrème-Sauce", price: "27.–", currency: CURRENCY, dietary: ["vegetarisch"], available: true, order: 7, homeSections: ["pasta"] },
  { id: "penne-salmone", category: "pasta", subgroup: "Pasta dello Chef", name: "Penne Salmone e Panna", description: "Penne mit Lachs, Lauch und Rahmsauce", price: "24.–", currency: CURRENCY, available: true, order: 8 },
  { id: "spaghetti-bolognese", category: "pasta", subgroup: "Pasta dello Chef", name: "Spaghetti alla Bolognese", description: "Nudeln an hausgemachter Bolognese-Sauce mit Sellerie, Zwiebeln und Karotten", price: "24.–", currency: CURRENCY, available: true, order: 9, homeSections: ["pasta"] },

  // ————— CARNE & PESCE (Italienische Spezialitäten) —————
  { id: "entrecote-manzo", category: "carne-pesce", name: "Entrecôte di Manzo (250 g)", description: "Gegrilltes Rindsentrecôte mit Rucola und Rosmarin-Kartoffeln", price: "39.–", currency: CURRENCY, available: true, order: 1 },
  { id: "bistecca-maiale", category: "carne-pesce", name: "Bistecca di Maiale alla Piastra", description: "Gegrilltes Schweinesteak, serviert mit Bratkartoffeln und kleinem Salat", price: "28.–", currency: CURRENCY, available: true, order: 2 },
  { id: "grigliata-mista", category: "carne-pesce", name: "Grigliata Mista di Carne (für 2 Pers., 450 g)", description: "Entrecôte, Lamm, Pouletbrust und Wurst, serviert mit gegrilltem Gemüse und Rosmarin-Kartoffeln", price: "58.–", currency: CURRENCY, tag: "Für 2 Personen", available: true, order: 3 },
  { id: "orata-forno", category: "carne-pesce", name: "Orata al Forno", description: "Gebackene Goldbrasse (Dorade), serviert mit Bratkartoffeln und Cherry-Tomaten", price: "32.–", currency: CURRENCY, available: true, order: 4 },
  { id: "filetto-salmone", category: "carne-pesce", name: "Filetto di Salmone alle Erbe Aromatiche", description: "Gebratenes Lachsfilet mit aromatischen Kräutern, dazu Bratkartoffeln und kleiner Salat", price: "27.–", currency: CURRENCY, available: true, order: 5 },

  // ————— DOMINIKANISCHE SPEZIALITÄTEN —————
  { id: "pica-pollo", category: "dominikanisch", name: "Pica Pollo con Plátanos Fritos", description: "Frittierte Pouletstücke, serviert mit Kochbanane und kleinem Salat", price: "24.– / 32.–", currency: CURRENCY, image: "caribbeanPrimary", available: true, order: 1, homeSections: ["auswahl", "karibik"] },
  { id: "chicharron", category: "dominikanisch", name: "Chicharrón con Plátanos Fritos", description: "Marinierte, gebratene Speckwürfel, serviert mit Kochbanane und kleinem Salat", price: "26.–", currency: CURRENCY, available: true, order: 2, homeSections: ["karibik"] },
  { id: "pollo-guisado", category: "dominikanisch", name: "Pollo Guisado con Papas Salteadas", description: "Gebratenes Poulet in Paprika-Knoblauch-Zwiebelsauce, serviert mit Bratkartoffeln und kleinem Salat", price: "28.–", currency: CURRENCY, available: true, order: 3, homeSections: ["karibik"] },
  { id: "plato-familiar", category: "dominikanisch", name: "Plato Familiar", description: "Gemischtes frittiertes Fleischgericht (Poulet und Speck), serviert mit Kochbanane und Salat", price: "45.–", currency: CURRENCY, tag: "Zum Teilen", available: true, order: 4 },
  { id: "pescado-frito", category: "dominikanisch", name: "Pescado Frito con Plátanos Fritos", description: "Frittierte Goldbrasse (Dorade), serviert mit Kochbanane und Salat", price: "32.–", currency: CURRENCY, available: true, order: 5 },
  { id: "frittura-mista", category: "dominikanisch", name: "Frittura Mista di Marisco y Verduras", description: "Gemischte frittierte Calamari, Crevetten, kleine Fische und Gemüse", price: "29.–", currency: CURRENCY, available: true, order: 6, homeSections: ["karibik"] },

  // ————— DESSERT —————
  { id: "tiramisu", category: "dessert", name: "Tiramisu Fatto in Casa", description: "Hausgemachtes Tiramisu", price: "10.–", currency: CURRENCY, available: true, order: 1, homeSections: ["dessert", "auswahl"] },
  { id: "cannolo", category: "dessert", name: "Cannolo Siciliano", description: "Frittierte Teigrolle mit süsser Crèmefüllung aus Ricotta", price: "12.–", currency: CURRENCY, available: true, order: 2, homeSections: ["dessert"] },
  { id: "baba-napoletano", category: "dessert", name: "Babà Napoletano", description: "Neapolitanischer, mit Bierhefe gesäuerter und in Rum getränkter Gugelhupf", price: "12.–", currency: CURRENCY, image: "catDessert", available: true, order: 3, homeSections: ["dessert"] },
  { id: "dolce-del-giorno", category: "dessert", name: "Dolce del Giorno", description: "Hausgemachtes Tagesdessert", price: "10.–", currency: CURRENCY, available: true, order: 4, homeSections: ["dessert"] },
  { id: "gelati", category: "dessert", name: "Gelati", description: "Vanille, Pistazie, Kaffee, Schokolade, Zitrone, Erdbeere", price: "4.–", currency: CURRENCY, available: true, order: 5, homeSections: ["dessert"] },

  // ————— LUNCH (Mi–Fr 11:30–14:00, CHF 20 inkl. Salat & Espresso) —————
  { id: "lunch-pasta", category: "lunch", name: "Pasta del Giorno", price: "20.–", currency: CURRENCY, available: true, order: 1 },
  { id: "lunch-pinsa", category: "lunch", name: "Pinsa Classica", price: "20.–", currency: CURRENCY, available: true, order: 2 },
  { id: "lunch-pollo", category: "lunch", name: "Pollo Guisado Dominicano", price: "20.–", currency: CURRENCY, available: true, order: 3 },
];

// ————— WEIN (transcribed from the official wine menu) —————
export const wineSubgroups = [
  { id: "offen", label: "Offenausschank", hint: "1 dl / 75 cl" },
  { id: "flasche", label: "Flaschen", hint: "75 cl" },
];

export const wineItems = [
  { id: "prosecco", category: "wein", subgroup: "offen", name: "Prosecco Millesimato", detail: "Spumante", priceGlass: "5.–", priceBottle: "32.–", available: true, order: 1 },
  { id: "pinot-grigio", category: "wein", subgroup: "offen", name: "Pinot Grigio", detail: "Veneto", priceGlass: "7.–", priceBottle: "45.–", available: true, order: 2 },
  { id: "vermentino", category: "wein", subgroup: "offen", name: "Vermentino", detail: "Toscana", priceGlass: "8.–", priceBottle: "52.–", available: true, order: 3 },
  { id: "arneis", category: "wein", subgroup: "offen", name: "Arneis Langhe", detail: "Piemonte", priceGlass: "7.–", priceBottle: "45.–", available: true, order: 4 },
  { id: "rosato-casa", category: "wein", subgroup: "offen", name: "Vino Rosato della Casa", detail: "Rosato", priceGlass: "5.–", priceBottle: "32.–", available: true, order: 5 },
  { id: "rosso-casa", category: "wein", subgroup: "offen", name: "Vino della Casa", detail: "Rosso", priceGlass: "7.–", priceBottle: "45.–", available: true, order: 6 },
  { id: "rosso-toscana", category: "wein", subgroup: "offen", name: "Rosso Toscana", detail: "Sangiovese, Toscana", priceGlass: "8.–", priceBottle: "52.–", available: true, order: 7 },
  { id: "ripasso", category: "wein", subgroup: "offen", name: "Ripasso", detail: "Corvina, Rondinella — Veneto", priceGlass: "7.–", priceBottle: "45.–", available: true, order: 8 },
  { id: "baron-de-ley", category: "wein", subgroup: "flasche", name: "Rioja «Barón de Ley» Reserva", detail: "Tempranillo — Spanien", priceBottle: "52.–", available: true, order: 9 },
  { id: "puro-malbec", category: "wein", subgroup: "flasche", name: "«Puro» Malbec", detail: "Dieter Meier, Mendoza — Argentinien", priceBottle: "48.–", available: true, order: 10 },
  { id: "six-eight-nine", category: "wein", subgroup: "flasche", name: "Six Eight Nine 689", detail: "Cabernet Sauvignon, Merlot, Petit Verdot, Shiraz, Zinfandel — Napa Valley, USA", priceBottle: "50.–", available: true, order: 11 },
  { id: "barbera-alba", category: "wein", subgroup: "flasche", name: "Barbera d'Alba — Elena Sarotto", detail: "Barbera — Piemonte", priceBottle: "66.–", available: true, order: 12 },
  { id: "il-basciale", category: "wein", subgroup: "flasche", name: "«Il Basciale» — Braida, Monferrato", detail: "Barbera, Cabernet S., Merlot, Pinot Noir · 12 Monate Barrique — Piemonte", priceBottle: "64.–", available: true, order: 13 },
  { id: "insoglio", category: "wein", subgroup: "flasche", name: "Insoglio del Cinghiale — Tenuta di Biserno", detail: "Merlot, Cabernet Franc, Petit Verdot, Syrah — Toscana", priceBottle: "64.–", available: true, order: 14 },
  { id: "il-bruciato", category: "wein", subgroup: "flasche", name: "«Il Bruciato» Bolgheri — Tenuta Guado al Tasso, Antinori", detail: "Cabernet Sauvignon, Merlot, Syrah — Toscana", priceBottle: "69.–", available: true, order: 15 },
  { id: "primitivo", category: "wein", subgroup: "flasche", name: "Primitivo di Manduria", detail: "Primitivo — Puglia", priceBottle: "45.–", available: true, order: 16 },
  { id: "edizione-5", category: "wein", subgroup: "flasche", name: "Edizione 5 Autoctoni", detail: "Primitivo, Negroamaro, Malvasia, Montepulciano, Sangiovese — Abruzzo", priceBottle: "60.–", available: true, order: 17 },
  { id: "rocca-rubia", category: "wein", subgroup: "flasche", name: "Rocca Rubia", detail: "Carignano — Sardegna", priceBottle: "50.–", available: true, order: 18 },
];

export const menuNotes = {
  prices: "Alle Preise in CHF, inkl. MwSt.",
  allergens:
    "Für Informationen zu Allergenen in den einzelnen Gerichten wenden Sie sich an unser Personal.",
};

const byOrder = (a, b) => a.order - b.order;

export const itemsByCategory = (categoryId) =>
  menuItems.filter((i) => i.category === categoryId && i.available).sort(byOrder);

export const winesBySubgroup = (subgroupId) =>
  wineItems.filter((i) => i.subgroup === subgroupId && i.available).sort(byOrder);

export const subgroupsInCategory = (categoryId) => {
  const subs = [...new Set(itemsByCategory(categoryId).map((i) => i.subgroup).filter(Boolean))];
  return subs;
};

// Homepage Menu Discovery — reads from the SAME dataset
export const railItems = (railId) =>
  menuItems.filter((i) => i.available && i.homeSections?.includes(railId)).sort(byOrder);

const menuSnapshot = {
  categories: JSON.parse(JSON.stringify(menuCategories)),
  rails: JSON.parse(JSON.stringify(discoveryRails)),
  offers: JSON.parse(JSON.stringify(groupOffers)),
  items: JSON.parse(JSON.stringify(menuItems)),
  wineSubgroups: JSON.parse(JSON.stringify(wineSubgroups)),
  wines: JSON.parse(JSON.stringify(wineItems)),
  notes: JSON.parse(JSON.stringify(menuNotes)),
  lunchNote,
};

const menuLanguage = {
  en: {
    categories: ["Antipasti & Fritti", "Pinsa", "Pasta & Al Forno", "Meat & Fish", "Dominican specialities", "Desserts", "Wine", "Lunch", "Group offers"],
    nav: ["Antipasti", "Pinsa", "Pasta", "Meat & Fish", "Dominican", "Desserts", "Wine", "Lunch", "Groups"],
    rails: ["ITACAN selection", "Pinsa", "Pasta & Kitchen", "Caribbean soul", "Desserts"],
    notes: ["All prices in CHF, VAT included.", "For information about allergens in individual dishes, please ask our staff."],
    lunchNote: "Wednesday, Thursday & Friday · 11:30–14:00 · CHF 20.– incl. salad and espresso",
    wineSubgroups: ["By the glass", "Bottles"],
    dietary: { vegetarisch: "vegetarian", vegan: "vegan" },
    offers: [{ priceSuffix: "per person", description: "A shared menu for the whole table with antipasti, pinsa, pasta, Dominican specialities and dessert.", note: "Reservation required.", cta: "Enquire about Tavolata" }, { priceSuffix: "per person", description: "One pinsa after another, with different flavours and a table that decides when it has had enough. Ideal for groups and friends.", note: "From 4 people.", cta: "Book Giro Pinsa" }],
    replacements: [["Für 2 Personen", "For 2 people"], ["Zum Teilen", "To share"], ["Haus-Spezialität", "House speciality"], ["Hausgemachtes Tagesdessert", "Homemade dessert of the day"], ["Hausgemachtes Tiramisu", "Homemade tiramisu"], ["serviert mit", "served with"], ["leicht scharf", "mildly spicy"], ["Frittierte", "Fried"], ["Gebratene", "Pan-fried"], ["Gegrilltes", "Grilled"], ["Gebackene", "Baked"], ["Gemischte", "Mixed"], ["Gemischter", "Mixed"], ["hausgemachter", "homemade"], ["gefüllt mit", "filled with"], ["überbacken", "oven-baked"], ["Tomatensauce", "tomato sauce"], ["Büffelmozzarella", "buffalo mozzarella"], ["Cherry-Tomaten", "cherry tomatoes"], ["Champignons", "mushrooms"], ["Rohschinken", "prosciutto"], ["Vorderschinken", "ham"], ["scharfe Salami", "spicy salami"], ["Auberginen", "aubergines"], ["Zucchini", "courgettes"], ["Zucchetti", "courgettes"], ["Crevetten", "prawns"], ["Meeresfrüchten", "seafood"], ["Calamari", "squid"], ["Oktopus", "octopus"], ["Knoblauch", "garlic"], ["Zitrone", "lemon"], ["Kartoffeln", "potatoes"], ["Bratkartoffeln", "roast potatoes"], ["Kochbanane", "plantain"], ["kleinem Salat", "a small salad"], ["kleiner Salat", "a small salad"], ["Gemüse", "vegetables"], ["Rindshackfleisch", "minced beef"], ["Rindfleisch", "beef"], ["Poulet", "chicken"], ["Schweine", "pork"], ["Lachs", "salmon"], ["Rahmsauce", "cream sauce"], ["Trüffelcrème-Sauce", "truffle cream sauce"], ["Vanille", "vanilla"], ["Erdbeere", "strawberry"], ["Schokolade", "chocolate"], ["Kaffee", "coffee"], [" und ", " and "], [" mit ", " with "]],
  },
  fr: {
    categories: ["Antipasti & Fritti", "Pinsa", "Pâtes & Al Forno", "Viandes & Poissons", "Spécialités dominicaines", "Desserts", "Vins", "Déjeuner", "Offres groupes"],
    nav: ["Antipasti", "Pinsa", "Pâtes", "Viandes & Poissons", "Dominicain", "Desserts", "Vins", "Déjeuner", "Groupes"],
    rails: ["Sélection ITACAN", "Pinsa", "Pâtes & Cuisine", "Âme caribéenne", "Desserts"],
    notes: ["Tous les prix sont en CHF, TVA comprise.", "Pour toute information sur les allergènes, veuillez vous adresser à notre équipe."],
    lunchNote: "Mercredi, jeudi & vendredi · 11:30–14:00 · CHF 20.– salade et espresso inclus",
    wineSubgroups: ["Au verre", "Bouteilles"],
    dietary: { vegetarisch: "végétarien", vegan: "végan" },
    offers: [{ priceSuffix: "par personne", description: "Un menu à partager pour toute la table avec antipasti, pinsa, pâtes, spécialités dominicaines et dessert.", note: "Uniquement sur réservation.", cta: "Demander la Tavolata" }, { priceSuffix: "par personne", description: "Une pinsa après l'autre, différentes saveurs et une table qui décide quand elle en a assez. Idéal pour les groupes et les amis.", note: "À partir de 4 personnes.", cta: "Réserver le Giro Pinsa" }],
    replacements: [["Für 2 Personen", "Pour 2 personnes"], ["Zum Teilen", "À partager"], ["Haus-Spezialität", "Spécialité maison"], ["Hausgemachtes Tagesdessert", "Dessert maison du jour"], ["Hausgemachtes Tiramisu", "Tiramisu maison"], ["serviert mit", "servi avec"], ["leicht scharf", "légèrement relevé"], ["Frittierte", "Frit"], ["Gebratene", "Poêlé"], ["Gegrilltes", "Grillé"], ["Gebackene", "Cuite au four"], ["Gemischte", "Assortiment de"], ["Gemischter", "Salade composée"], ["hausgemachter", "maison"], ["gefüllt mit", "farci de"], ["überbacken", "gratiné"], ["Tomatensauce", "sauce tomate"], ["Büffelmozzarella", "mozzarella di bufala"], ["Cherry-Tomaten", "tomates cerises"], ["Champignons", "champignons"], ["Rohschinken", "jambon cru"], ["Vorderschinken", "jambon"], ["scharfe Salami", "salami piquant"], ["Auberginen", "aubergines"], ["Zucchini", "courgettes"], ["Zucchetti", "courgettes"], ["Crevetten", "crevettes"], ["Meeresfrüchten", "fruits de mer"], ["Calamari", "calamars"], ["Oktopus", "poulpe"], ["Knoblauch", "ail"], ["Zitrone", "citron"], ["Bratkartoffeln", "pommes de terre rôties"], ["Kartoffeln", "pommes de terre"], ["Kochbanane", "banane plantain"], ["kleinem Salat", "une petite salade"], ["kleiner Salat", "une petite salade"], ["Gemüse", "légumes"], ["Rindshackfleisch", "bœuf haché"], ["Rindfleisch", "bœuf"], ["Poulet", "poulet"], ["Lachs", "saumon"], ["Rahmsauce", "sauce à la crème"], ["Vanille", "vanille"], ["Erdbeere", "fraise"], ["Schokolade", "chocolat"], ["Kaffee", "café"], [" und ", " et "], [" mit ", " avec "]],
  },
  it: {
    categories: ["Antipasti & Fritti", "Pinsa", "Pasta & Al Forno", "Carne & Pesce", "Specialità dominicane", "Dessert", "Vini", "Pranzo", "Offerte per gruppi"],
    nav: ["Antipasti", "Pinsa", "Pasta", "Carne & Pesce", "Dominicano", "Dessert", "Vini", "Pranzo", "Gruppi"],
    rails: ["Selezione ITACAN", "Pinsa", "Pasta & Cucina", "Anima caraibica", "Dessert"],
    notes: ["Tutti i prezzi sono in CHF, IVA inclusa.", "Per informazioni sugli allergeni, rivolgetevi al nostro personale."],
    lunchNote: "Mercoledì, giovedì & venerdì · 11:30–14:00 · CHF 20.– insalata ed espresso inclusi",
    wineSubgroups: ["Al bicchiere", "Bottiglie"],
    dietary: { vegetarisch: "vegetariano", vegan: "vegano" },
    offers: [{ priceSuffix: "a persona", description: "Un menu da condividere per tutto il tavolo con antipasti, pinsa, pasta, specialità dominicane e dessert.", note: "Solo su prenotazione.", cta: "Richiedi la Tavolata" }, { priceSuffix: "a persona", description: "Una pinsa dopo l'altra, gusti diversi e un tavolo che decide quando basta. Ideale per gruppi e amici.", note: "Da 4 persone.", cta: "Prenota Giro Pinsa" }],
    replacements: [["Für 2 Personen", "Per 2 persone"], ["Zum Teilen", "Da condividere"], ["Haus-Spezialität", "Specialità della casa"], ["Hausgemachtes Tagesdessert", "Dolce del giorno fatto in casa"], ["Hausgemachtes Tiramisu", "Tiramisù fatto in casa"], ["serviert mit", "servito con"], ["leicht scharf", "leggermente piccante"], ["Frittierte", "Fritto"], ["Gebratene", "Saltato"], ["Gegrilltes", "Grigliato"], ["Gebackene", "Al forno"], ["Gemischte", "Misto di"], ["Gemischter", "Insalata mista"], ["hausgemachter", "fatto in casa"], ["gefüllt mit", "ripieno di"], ["überbacken", "gratinato"], ["Tomatensauce", "salsa di pomodoro"], ["Büffelmozzarella", "mozzarella di bufala"], ["Cherry-Tomaten", "pomodorini"], ["Champignons", "funghi"], ["Rohschinken", "prosciutto crudo"], ["Vorderschinken", "prosciutto"], ["scharfe Salami", "salame piccante"], ["Auberginen", "melanzane"], ["Zucchini", "zucchine"], ["Zucchetti", "zucchine"], ["Crevetten", "gamberi"], ["Meeresfrüchten", "frutti di mare"], ["Calamari", "calamari"], ["Oktopus", "polpo"], ["Knoblauch", "aglio"], ["Zitrone", "limone"], ["Bratkartoffeln", "patate arrosto"], ["Kartoffeln", "patate"], ["Kochbanane", "platano"], ["kleinem Salat", "una piccola insalata"], ["kleiner Salat", "una piccola insalata"], ["Gemüse", "verdure"], ["Rindshackfleisch", "manzo macinato"], ["Rindfleisch", "manzo"], ["Poulet", "pollo"], ["Lachs", "salmone"], ["Rahmsauce", "salsa alla panna"], ["Vanille", "vaniglia"], ["Erdbeere", "fragola"], ["Schokolade", "cioccolato"], ["Kaffee", "caffè"], [" und ", " e "], [" mit ", " con "]],
  },
};

const replaceText = (value, replacements) => {
  if (typeof value !== "string") return value;
  return replacements.reduce((text, [source, target]) => text.split(source).join(target), value);
};

const exactMenuText = {
  en: [["Knuspriges Brot mit Tomaten, Basilikum und Oregano", "Crispy bread with tomatoes, basil and oregano"], ["Frittierte Pouletstücke", "Fried chicken pieces"], ["Gemischter Salat", "Mixed salad"]],
  fr: [["Knuspriges Brot mit Tomaten, Basilikum und Oregano", "Pain croustillant aux tomates, basilic et origan"], ["Frittierte Pouletstücke", "Morceaux de poulet frits"], ["Gemischter Salat", "Salade composée"]],
  it: [["Knuspriges Brot mit Tomaten, Basilikum und Oregano", "Pane croccante con pomodori, basilico e origano"], ["Frittierte Pouletstücke", "Bocconcini di pollo fritti"], ["Gemischter Salat", "Insalata mista"]],
};

const restoreArray = (target, source) => target.splice(0, target.length, ...JSON.parse(JSON.stringify(source)));

export const localizeMenu = (language) => {
  restoreArray(menuCategories, menuSnapshot.categories);
  restoreArray(discoveryRails, menuSnapshot.rails);
  restoreArray(groupOffers, menuSnapshot.offers);
  restoreArray(menuItems, menuSnapshot.items);
  restoreArray(wineSubgroups, menuSnapshot.wineSubgroups);
  restoreArray(wineItems, menuSnapshot.wines);
  Object.assign(menuNotes, menuSnapshot.notes);
  lunchNote = menuSnapshot.lunchNote;
  if (language === "de" || !menuLanguage[language]) return;

  const translation = menuLanguage[language];
  const replacements = [...exactMenuText[language], ...translation.replacements];
  menuCategories.forEach((category, index) => Object.assign(category, { label: translation.categories[index], navLabel: translation.nav[index] }));
  discoveryRails.forEach((rail, index) => { rail.title = translation.rails[index]; });
  menuItems.forEach((item) => {
    ["name", "description", "tag"].forEach((field) => { if (item[field]) item[field] = replaceText(item[field], replacements); });
  });
  groupOffers.forEach((offer) => {
    Object.assign(offer, translation.offers[groupOffers.indexOf(offer)]);
  });
  wineSubgroups.forEach((subgroup, index) => { subgroup.label = translation.wineSubgroups[index]; });
  menuItems.forEach((item) => { if (item.dietary) item.dietary = item.dietary.map((value) => translation.dietary[value] || value); });
  wineItems.forEach((wine) => { if (wine.detail) wine.detail = replaceText(wine.detail, replacements); });
  menuNotes.prices = translation.notes[0];
  menuNotes.allergens = translation.notes[1];
  lunchNote = translation.lunchNote;
};
