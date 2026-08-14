import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { LanguageProvider } from "@/i18n/LanguageContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import EventsPage from "@/pages/EventsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import { DatenschutzPage, AgbPage } from "@/pages/LegalPage";

const useLenis = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Shell = () => {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        data-testid="skip-to-content-link"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/speisekarte" element={<MenuPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ueber-itacan" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AgbPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <SiteFooter />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
