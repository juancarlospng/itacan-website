/**
 * ITACAN Speisekarte — structured menu data.
 *
 * Source: official ITACAN menu pages published on itacan.ch (extracted July 2026).
 * Dish names and prices are real — do NOT invent new dishes or prices here.
 *
 * TO EDIT (Juan / Blue Technologies):
 * - Add items to a category's `items` array following the MenuItem shape.
 * - Set `available: false` to temporarily hide a dish.
 * - The official menu also includes Pinse, Fleisch, Fisch, Desserts & Getränke
 *   pages that are NOT yet digitised — add them here once confirmed (prices required).
 *
 * type MenuItem = {
 *   id: string
 *   name: string
 *   description?: string
 *   price?: string          // e.g. "24.–" or "Kl. 18.– / Gr. 28.–"
 *   dietary?: string[]      // e.g. ["vegetarisch"]
 *   image?: string
 *   available: boolean
 * }
 */

export const menuCategories = [
  {
    id: "vorspeisen",
    label: { de: "Vorspeisen", en: "Starters" },
    sub: { de: "Antipasti · Entrada", en: "Antipasti · Entrada" },
    items: [
      { id: "bruschette", name: "Bruschette (3 Pezzi)", description: "Knuspriges Brot mit Tomaten, Basilikum und Oregano", price: "12.–", dietary: ["vegetarisch"], available: true },
      { id: "insalata-mista", name: "Insalata Mista", description: "Gemischter Salat mit Tomaten, Randen, Mais und Karotten", price: "10.–", dietary: ["vegetarisch"], available: true },
      { id: "caprese-bufala", name: "Caprese di Bufala (125 g)", description: "Tomaten, Büffelmozzarella und Basilikum", price: "14.–", dietary: ["vegetarisch"], available: true },
      { id: "carpaccio-manzo", name: "Carpaccio di Manzo", description: "Rinds-Carpaccio mit Rucola und Grana-Scheiben", price: "Kl. 18.– / Gr. 28.–", available: true },
      { id: "carpaccio-polpo", name: "Carpaccio di Polpo", description: "Oktopus-Carpaccio, etwas Rucola und Zitrone", price: "19.–", available: true },
      { id: "tartar-manzo", name: "Tartar di Manzo", description: "Rohes Rindfleisch, fein gehackt, mit Kapern, Zwiebeln, Salz und Pfeffer", price: "70 g 18.– / 140 g 28.–", available: true },
    ],
  },
  {
    id: "fritti",
    label: { de: "Fritti", en: "Fritti" },
    sub: { de: "Fritos · Gebraten", en: "Fritos · Fried" },
    items: [
      { id: "arancino-ragu", name: "Arancino Siciliano al Ragù", description: "Reiskügel gefüllt mit Bolognese-Sauce und Erbsen", price: "10.–", available: true },
      { id: "arancino-melanzane", name: "Arancino Siciliano con Melanzane", description: "Reiskügel gefüllt mit Tomaten und Auberginen", price: "10.–", dietary: ["vegetarisch"], available: true },
      { id: "platanos-fritos", name: "Plátanos Fritos", description: "Frittierte Kochbanane mit Salz", price: "12.–", dietary: ["vegetarisch", "vegan"], available: true },
    ],
  },
  {
    id: "spezialitaeten",
    label: { de: "Spezialitäten des Hauses", en: "House Specials" },
    sub: { de: "Piatti Speciali · Platos Especiales", en: "Piatti Speciali · Platos Especiales" },
    items: [
      { id: "salpicon-marisco", name: "Salpicón de Marisco", description: "Salat aus Garnelen, Calamares und Oktopus", price: "Kl. 19.– / Gr. 29.–", available: true },
      { id: "insalata-mare", name: "Insalata di Mare Dominicana", description: "Tintenfisch-, Oktopus- und Krevettensalat, lauwarm serviert", price: "", available: true }, // price not legible on published menu — CLIENT CONFIRMATION REQUIRED
      { id: "antipasto-itacan", name: "Antipasto della Casa «ITACAN» (für 2 Pers.)", description: "", price: "28.–", available: true },
      { id: "picadera-fria", name: "Picadera Fría de la Casa (para 2)", description: "Verschiedene Aufschnitte, Käse, Poulet-Flügel, Kochbanane und Gemüse", price: "", available: true }, // price not legible on published menu — CLIENT CONFIRMATION REQUIRED
    ],
  },
  {
    id: "al-forno",
    label: { de: "Al Forno", en: "Al Forno" },
    sub: { de: "Al Horno · Gebackenes", en: "Al Horno · Baked" },
    items: [
      { id: "lasagna", name: "Lasagna", description: "Nudelblätter an Tomatensauce, Rindshackfleisch, Karotten, Béchamel, Mozzarella und Grana", price: "24.–", available: true },
      { id: "parmigiana", name: "Parmigiana", description: "Auberginen-Gratin mit Tomaten, Mozzarella und Basilikum, überbacken", price: "23.–", dietary: ["vegetarisch"], available: true },
      { id: "gnocchi-sorrentina", name: "Gnocchi alla Sorrentina", description: "Kartoffelgnocchi an Tomatensauce mit Mozzarella, Grana und Basilikum, überbacken", price: "22.–", dietary: ["vegetarisch"], available: true },
    ],
  },
  {
    id: "pasta-dello-chef",
    label: { de: "Pasta dello Chef", en: "Pasta dello Chef" },
    sub: { de: "Hausgemachte Pasta-Kreationen", en: "House-made pasta creations" },
    items: [
      { id: "spaghetti-frutti-di-mare", name: "Spaghetti Frutti di Mare", description: "Spaghetti mit Meeresfrüchten, Calamari, Oktopus und Cherry-Tomaten, leicht scharf", price: "28.–", available: true },
      { id: "paccheri-calamari", name: "Paccheri Calamari e Limone", description: "Neapolitanische Pasta mit Calamari, Cherry-Tomaten, Knoblauch und geriebener Zitrone, leicht scharf", price: "26.–", available: true },
      { id: "paccheri-zucchine", name: "Paccheri Crema di Zucchine e Gamberi", description: "Neapolitanische Pasta an Zucchetti-Crèmesauce mit gebratenen Crevetten und Cherry-Tomaten, leicht scharf", price: "26.–", available: true },
      { id: "tortelloni-tartufo", name: "Tortelloni al Tartufo", description: "Gefüllte Pasta mit Trüffel und Pecorino an Trüffelcrème-Sauce", price: "27.–", dietary: ["vegetarisch"], available: true },
      { id: "penne-salmone", name: "Penne Salmone e Panna", description: "Penne mit Lachs, Lauch und Rahmsauce", price: "24.–", available: true },
      { id: "spaghetti-bolognese", name: "Spaghetti alla Bolognese", description: "Nudeln an hausgemachter Bolognese-Sauce mit Sellerie, Zwiebeln und Karotten", price: "24.–", available: true },
    ],
  },
  // Pinse (Classiche / Bianche / Speciali), Carne, Pesce, Dominikanische
  // Spezialitäten, Desserts & Getränke: add here once the client confirms
  // the current menu pages with prices. Categories with no available items
  // are automatically hidden.
];

export const visibleMenuCategories = () =>
  menuCategories
    .map((c) => ({ ...c, items: c.items.filter((i) => i.available) }))
    .filter((c) => c.items.length > 0);
