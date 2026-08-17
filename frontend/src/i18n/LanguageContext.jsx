import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { activateCopy } from "../copy";
import { localizeMenu } from "../data/menu";

export const LANGUAGES = [
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
];

const LanguageContext = createContext(null);

const initialLanguage = () => {
  const stored = window.localStorage.getItem("itacan-language");
  return LANGUAGES.some(({ code }) => code === stored) ? stored : "de";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(initialLanguage);
  activateCopy(language);
  localizeMenu(language);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("itacan-language", language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage: setLanguageState, languages: LANGUAGES }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children(language)}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
