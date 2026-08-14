/**
 * Central image registry.
 * PRIMARY: real ITACAN photography, served from the official itacan.ch media CDN (Wix).
 * Images marked [REPLACE] are curated stand-ins — swap with approved ITACAN
 * photography (Google shared album) before launch. Sizes are requested via the
 * Wix media URL parameters (w_/h_); adjust per use if needed.
 */

const wix = (id, w, h) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/${id}`;

export const images = {
  // Real ITACAN photography (from itacan.ch)
  hero: {
    url: wix("11062b_4d1ce144268d4ffda4eb0e5d39af01d0f000.jpg", 1920, 1150),
    alt: "ITACAN Restaurant in Kriens — gedeckte Tische und warmer Gastraum",
  },
  banner: {
    url: wix("723add_b574c006d4374de2aba8293595d49458~mv2.jpg", 1920, 800),
    alt: "ITACAN — Atmosphäre im Restaurant und an der Bar",
  },
  cucina: {
    url: wix("723add_fbd222774b944b90b91004c7f58b8a76~mv2.jpg", 1400, 900),
    alt: "Italienische Küche bei ITACAN — frisch zubereitete Spezialitäten",
  },
  cucinaWide: {
    url: wix("723add_1130e1a6552b4315ae4f89d9a3cb52e2~mv2.jpg", 1400, 900),
    alt: "Mediterrane Gerichte im ITACAN Restaurant Kriens",
  },
  portraitFood: {
    url: wix("723add_811f613fc55d40969a50b035867ab9ab~mv2.jpg", 800, 1000),
    alt: "Frische Zutaten und Küchenhandwerk bei ITACAN",
  },
  barPortrait: {
    url: wix("723add_35d382d0d34c498883e9e34f9af5ef1c~mv2.jpg", 800, 1000),
    alt: "Karibische Bar im ITACAN — Cocktails und gute Stimmung",
  },
  squareOne: {
    url: wix("723add_276340888a174915b96772452db2b6d6~mv2.jpeg", 800, 800),
    alt: "Gäste und gesellige Momente im ITACAN",
  },
  squareTwo: {
    url: wix("723add_349452739afe45529989eedaa3042808~mv2.jpg", 800, 800),
    alt: "Abendstimmung und Drinks im ITACAN Kriens",
  },

  // [REPLACE] Curated stand-ins — swap with approved ITACAN photography before launch
  pinseria: {
    url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBwaW5zYSUyMGNsb3NlJTIwdXB8ZW58MHx8fHwxNzg2NzQ1MzkyfDA&ixlib=rb-4.1.0&q=85",
    alt: "Pinsa — knusprig, luftig, frisch belegt",
    replace: true,
  },
  caribe: {
    url: "https://images.unsplash.com/photo-1762884601729-0eeeafbdfb8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBwbGFudGFpbiUyMHRyb3BpY2FsJTIwZm9vZHxlbnwwfHx8fDE3ODY3NDUzOTJ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Dominikanische Küche — Kochbananen und karibische Aromen",
    replace: true,
  },
  cocktail: {
    url: "https://images.unsplash.com/photo-1778104959469-0861d423de46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxjcmFmdCUyMGNvY2t0YWlsJTIwYmFyJTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc4Njc0NTM5Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Handgemachte Cocktails an der ITACAN Bar",
    replace: true,
  },
  nightlife: {
    url: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxuaWdodGxpZmUlMjBkYW5jaW5nJTIwcmVzdGF1cmFudCUyMGJhcnxlbnwwfHx8MTc4Njc0NTM5Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Musik, Rhythmus und gesellige Abende im ITACAN",
    replace: true,
  },
};
