/* ============================================
   Oxente Builder — i18n core
   English default, PT-BR toggle. Persisted.
   Components read copy via t({ en, pt }).
   ============================================ */

const LangContext = React.createContext({ lang: "en", setLang: () => {} });

function LangProvider({ children }) {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("ob_lang") || "en"; } catch (e) { return "en"; }
  });
  const setLang = React.useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem("ob_lang", l); } catch (e) {}
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() { return React.useContext(LangContext); }

// Returns a translator: t({en, pt}) -> string for current language.
// Passes through plain values unchanged so partial migration is safe.
function useT() {
  const { lang } = useLang();
  return React.useCallback((obj) => {
    if (obj && typeof obj === "object" && !React.isValidElement(obj) &&
        (Object.prototype.hasOwnProperty.call(obj, "en") ||
         Object.prototype.hasOwnProperty.call(obj, "pt"))) {
      return obj[lang] !== undefined ? obj[lang] : obj.en;
    }
    return obj;
  }, [lang]);
}

// Segmented EN / PT switch.
function LangToggle({ onDark = false, className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`langtoggle ${onDark ? "langtoggle--dark" : ""} ${className}`.trim()}
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        type="button"
        className={`langtoggle__btn ${lang === "en" ? "is-active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >EN</button>
      <span className="langtoggle__sep" aria-hidden="true">/</span>
      <button
        type="button"
        className={`langtoggle__btn ${lang === "pt" ? "is-active" : ""}`}
        aria-pressed={lang === "pt"}
        onClick={() => setLang("pt")}
      >PT</button>
    </div>
  );
}

Object.assign(window, { LangContext, LangProvider, useLang, useT, LangToggle });
