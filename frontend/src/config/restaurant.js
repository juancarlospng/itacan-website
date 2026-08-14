/**
 * ITACAN — Single source of truth for all business data.
 * Juan / Blue Technologies: edit ONLY this file to change contact details,
 * links, reservation provider or opening hours. Never hard-code these in components.
 */

export const restaurant = {
  name: "ITACAN",
  descriptor: "Restaurant • Bar • Pinseria",
  legalName: "ITACAN Restaurant • Bar • Pinseria",

  address: {
    street: "Obernauerstrasse 41",
    postalCode: "6010",
    city: "Kriens",
    region: "Luzern",
    country: "Switzerland",
    countryCode: "CH",
  },

  // Verified from the official itacan.ch contact page (July 2026).
  // NOTE: the old site showed "041 322 00 33" but linked tel:+41413320033 — CLIENT CONFIRMATION REQUIRED on which digit is correct.
  phone: "+41 41 322 00 33",
  phoneHref: "tel:+41413220033",
  whatsapp: "+41 79 965 00 90",
  whatsappHref: "https://wa.me/41799650090",
  email: "info@itacan.ch",

  instagramUrl: "https://www.instagram.com/itacan.ch/",
  facebookUrl: "", // CLIENT CONFIRMATION REQUIRED

  // Verified reservation provider (My LOCALINA, as used on the current website).
  reservationUrl: "https://www.mylocalina.ch/widget/?id=5d09323b-f754-473f-8fea-5e9522a6894c",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ITACAN+Obernauerstrasse+41+6010+Kriens",
  googleMapsEmbed:
    "https://www.google.com/maps?q=ITACAN%20Obernauerstrasse%2041%2C%206010%20Kriens&output=embed",

  // Verified delivery providers (linked from the official website).
  justEatUrl: "https://www.just-eat.ch/speisekarte/itacan-bar-restaurant",
  uberEatsUrl:
    "https://www.ubereats.com/ch-de/store/itacan-el-rinconcito/Km-8N68EQEqQJE8w9tuTBQ?diningMode=DELIVERY&ps=1&surfaceName=",

  siteUrl: "https://www.itacan.ch",

  // Published on the official itacan.ch contact page (July 2026).
  openingHours: [
    { days: { de: "Montag & Dienstag", en: "Monday & Tuesday" }, value: { de: "Geschlossen", en: "Closed" }, closed: true },
    { days: { de: "Mittwoch", en: "Wednesday" }, value: { de: "11:30–14:00 · 17:00–23:00", en: "11:30 am–2:00 pm · 5:00–11:00 pm" } },
    { days: { de: "Donnerstag", en: "Thursday" }, value: { de: "11:30–14:00 · 17:00–23:00", en: "11:30 am–2:00 pm · 5:00–11:00 pm" } },
    { days: { de: "Freitag", en: "Friday" }, value: { de: "11:30–14:00 · 17:00–02:00", en: "11:30 am–2:00 pm · 5:00 pm–2:00 am" } },
    { days: { de: "Samstag", en: "Saturday" }, value: { de: "17:00–04:00", en: "5:00 pm–4:00 am" } },
    { days: { de: "Sonntag & Feiertage", en: "Sunday & holidays" }, value: { de: "14:00–23:00", en: "2:00–11:00 pm" } },
  ],
  openingHoursNotes: {
    de: "Fr & Sa: ganze Karte bis 24:00 · So & Feiertage: durchgehend warme Küche",
    en: "Fri & Sat: full menu until midnight · Sun & holidays: warm kitchen all day",
  },
  kitchenHours: [], // structured kitchen hours — CLIENT CONFIRMATION REQUIRED if needed separately

  cuisine: ["Italian", "Dominican", "Caribbean", "Pinsa"],
};
