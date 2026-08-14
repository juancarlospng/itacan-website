# ITACAN Website Recreation — PRD

## Original Problem Statement
Recreate the ITACAN website (Restaurant • Bar • Pinseria, Obernauerstrasse 41, 6010 Kriens, Luzern) with the approved brand identity: "Italian Craft × Dominican Caribbean Soul". Approved palette (Deep Blue #074269, Ocean Accent #2E73A6, Warm Ivory #F5F1EA, Warm Sand #D9CFBF, Ink #111820), editorial serif + clean sans typography, signature double-wave asset, real ITACAN photography, structured editable menu/events, reservation as primary conversion, SEO + Schema.org, routes /, /speisekarte, /events, /ueber-itacan, /kontakt, /datenschutz, /agb. No invented dishes, prices, hours, events or legal text.

## Architecture
- Stack (improved in place, no migration): React 19 (CRA/craco) + react-router-dom v7 + Tailwind CSS + framer-motion + lenis + react-fast-marquee. FastAPI backend retained (health/status only; site is content-driven, no backend dependency).
- Content separated from presentation:
  - `src/config/restaurant.js` — single source of truth for ALL business data (address, phone, WhatsApp, email, reservation/LOCALINA, Just Eat/Uber Eats, Instagram, Maps, opening hours)
  - `src/config/images.js` — central image registry (real ITACAN Wix CDN photos + [REPLACE]-marked stand-ins)
  - `src/data/menu.js` — structured menu (MenuItem shape per spec), real dishes/prices extracted from the official published menu
  - `src/data/events.js` — structured events (Event shape per spec), auto-hides expired; empty = shows empty state
  - `src/i18n/` — DE/EN translations + LanguageContext (persisted, sets html lang)
- Components: SiteHeader, MobileMenu, SiteFooter, Logo, WaveDivider (one consistent double-wave SVG), SectionHeading, Reveal, EditorialMarquee, ReservationCTA, BusinessHours, EventCard, SEO (per-page title/meta/OG/canonical).

## User Personas
- First-time visitor from Instagram/Google Maps (mobile): understand ITACAN, see food, reserve, hours, directions, call/WhatsApp
- Returning local guest: menu, events, delivery (Just Eat/Uber Eats)
- Event planner / private occasion: event enquiry
- Juan / Blue Technologies (editor): updates menu, events, hours, links in config/data files

## Verified Real Data (from itacan.ch, July 2026)
- Reservation provider: My LOCALINA widget (linked in all reserve CTAs)
- Just Eat + Uber Eats store URLs, Instagram @itacan.ch, info@itacan.ch, WhatsApp +41 79 965 00 90, Tel +41 41 322 00 33 (digit conflict on old site flagged in config), published opening hours, real menu dishes/prices (Vorspeisen, Fritti, Spezialitäten, Al Forno, Pasta dello Chef)

## Implemented (2026-08-14)
- All 7 routes with DE/EN toggle, mobile-first responsive design
- Kinetic hero: masked line-by-line reveal, Ken Burns + scroll parallax, Lenis smooth scrolling, slow editorial marquee, numbered manifesto chapters (About), scroll-reveal micro-interactions throughout
- Full structured menu page with real dishes/prices, sticky category nav, dietary badges, order CTAs — solves the old site's empty-menu problem
- Events page with auto-expiry logic + "Neue Events folgen bald." empty state + private event enquiry
- Contact page: address, call/WhatsApp/email/Instagram actions, opening hours, live Google Maps embed, directions
- Legal pages with CLIENT-PROVIDED LEGAL TEXT REQUIRED placeholders
- SEO: semantic HTML, one H1/page, unique titles/descriptions, canonical, OG/Twitter, robots.txt, sitemap.xml, Schema.org Restaurant JSON-LD (verified data only), German alt texts
- Accessibility: skip link, focus-visible states, ARIA labels, WCAG AA contrast, reduced-motion support
- Quality gates: `yarn build` passes, console clean, all routes screenshot-verified (desktop + mobile), backend /api healthy

## NEEDS CLIENT CONFIRMATION
1. Phone number: old site showed 041 322 00 33 but tel: link used 041 332 00 33
2. Two menu prices not legible on published menu (Insalata di Mare Dominicana, Picadera Fría)
3. Pinse / Carne / Pesce / Desserts / Getränke menu pages not yet digitised
4. Facebook URL; kitchen hours if they differ
5. Final legal texts for /datenschutz and /agb
6. 4 stand-in images ([REPLACE] in src/config/images.js) to be swapped with approved ITACAN photography

## Backlog
- P0: Client confirmation items above; replace stand-in photos; deploy/publish decision (NOT deployed, per spec)
- P1: Add remaining menu categories with real prices; first real events; OG share image (final logo asset)
- P2: Instagram feed-lite section, newsletter (only if real), EN URL slugs, kitchen hours display

## Next Tasks
1. Juan reviews preview → confirms factual data (phone, 2 prices, remaining menu pages)
2. Swap [REPLACE] images with Google shared album photography
3. Deliver legal texts → drop into /datenschutz & /agb
4. Production launch (DNS/domain) after sign-off
