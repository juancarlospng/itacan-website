import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileActionBar from "@/components/MobileActionBar";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import EventsPage from "@/pages/EventsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import { ImpressumPage, DatenschutzPage, AgbPage } from "@/pages/LegalPage";
import { restaurant } from "@/config/restaurant";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { copy } from "@/copy";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
};

// Legacy: /tisch-reservieren → official MyLOCALINA reservation flow
const ReservationRedirect = () => {
  useEffect(() => {
    window.location.replace(restaurant.reservationUrl);
  }, []);
  return null;
};

const Shell = () => (
  <>
    <ScrollManager />
    <a
      href="#main-content"
      data-testid="skip-to-content-link"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
    >
      {copy.nav.skipContent}
    </a>
    <SiteHeader />
    <div id="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speisekarte" element={<MenuPage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/agb" element={<AgbPage />} />
        {/* Legacy URL redirects */}
        <Route path="/speisekarten" element={<Navigate to="/speisekarte" replace />} />
        <Route path="/ueber-itacan" element={<Navigate to="/ueber-uns" replace />} />
        <Route path="/experiences" element={<Navigate to="/events" replace />} />
        <Route path="/refer-friends" element={<Navigate to="/" replace />} />
        <Route path="/tisch-reservieren" element={<ReservationRedirect />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    <MobileActionBar />
    <SiteFooter />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>{(language) => <Shell key={language} />}</LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
