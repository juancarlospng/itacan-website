import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!selectorRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const selectLanguage = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div
      ref={selectorRef}
      data-testid="language-selector"
      className="relative"
    >
      <button
        type="button"
        lang={language}
        aria-label="Language · Sprache · Langue · Lingua"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-9 min-w-[3.65rem] items-center justify-center gap-1.5 rounded-sm border border-ivory/25 bg-deep/20 px-2.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ivory backdrop-blur-sm transition-colors duration-200 hover:bg-ivory/10 sm:h-10"
      >
        {language}
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.8}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language · Sprache · Langue · Lingua"
          className="absolute right-0 top-full mt-2 min-w-[8.5rem] overflow-hidden rounded-sm border border-ivory/20 bg-deep p-1 shadow-[0_16px_36px_rgba(4,35,57,0.28)]"
        >
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              role="option"
              lang={code}
              aria-selected={language === code}
              data-testid={`language-${code}`}
              onClick={() => selectLanguage(code)}
              className={`flex w-full items-center justify-between rounded-[1px] px-3 py-2 font-sans text-[0.67rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                language === code ? "bg-ivory text-deep" : "text-ivory/70 hover:bg-ivory/10 hover:text-ivory"
              }`}
            >
              <span>{label}</span>
              <span className="text-[0.55rem] opacity-60">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
