/**
 * ITACAN — Single source of truth for all business data.
 * Edit ONLY this file to change contact details, links, reservation provider
 * or opening hours. Never hard-code these values in components.
 */

export const restaurant = {
  name: "ITACAN",
  descriptor: "Restaurant • Bar • Pinseria",
  legalName: "ITACAN Restaurant • Bar • Pinseria",
  brandLine: "Italian Taste. Caribbean Soul.",

  address: {
    street: "Obernauerstrasse 41",
    postalCode: "6010",
    city: "Kriens",
    region: "Luzern",
    country: "Switzerland",
    countryCode: "CH",
  },

  phone: "+41 41 322 00 33",
  phoneHref: "tel:+41413220033",
  whatsapp: "+41 79 965 00 90",
  whatsappHref: "https://wa.me/41799650090",
  email: "info@itacan.ch",

  instagramUrl: "https://www.instagram.com/itacan.ch/",
  tiktokUrl: "https://www.tiktok.com/@itacan.elrinconcito",

  // Official reservation provider: MyLOCALINA
  reservationUrl: "https://www.mylocalina.ch/widget/?id=5d09323b-f754-473f-8fea-5e9522a6894c",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ITACAN+Obernauerstrasse+41+6010+Kriens",
  googleMapsEmbed:
    "https://www.google.com/maps?q=ITACAN%20Obernauerstrasse%2041%2C%206010%20Kriens&output=embed",

  // Verified delivery providers (linked from the official website). Secondary placement only.
  justEatUrl: "https://www.just-eat.ch/speisekarte/itacan-bar-restaurant",
  uberEatsUrl:
    "https://www.ubereats.com/ch-de/store/itacan-el-rinconcito/Km-8N68EQEqQJE8w9tuTBQ?diningMode=DELIVERY&ps=1&surfaceName=",

  siteUrl: "https://www.itacan.ch",

  // Published opening hours (official itacan.ch, confirmed in V1 brief)
  openingHours: [
    { days: "Montag", value: ["Geschlossen"], closed: true },
    { days: "Dienstag", value: ["Geschlossen"], closed: true },
    { days: "Mittwoch", value: ["11:30–14:00", "17:00–23:00"] },
    { days: "Donnerstag", value: ["11:30–14:00", "17:00–23:00"] },
    { days: "Freitag", value: ["11:30–14:00", "17:00–02:00"] },
    { days: "Samstag", value: ["17:00–04:00"] },
    { days: "Sonntag & Feiertage", value: ["14:00–23:00"] },
  ],

  cuisine: ["Italian", "Dominican", "Caribbean", "Pinsa"],
};
