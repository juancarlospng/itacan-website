import { useLanguage } from "../i18n/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage, languages } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language · Sprache · Langue · Lingua"
      data-testid="language-selector"
      className="flex items-center rounded-sm border border-ivory/25 bg-deep/20 p-0.5 backdrop-blur-sm"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={label}
          aria-pressed={language === code}
          data-testid={`language-${code}`}
          onClick={() => setLanguage(code)}
          className={`min-w-7 rounded-[1px] px-1.5 py-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 sm:min-w-8 sm:text-[0.62rem] ${
            language === code ? "bg-ivory text-deep" : "text-ivory/65 hover:bg-ivory/10 hover:text-ivory"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
