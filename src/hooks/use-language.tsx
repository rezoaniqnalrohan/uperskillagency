import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "bn" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (bn: string, en: string) => string;
  mounted: boolean;
};

const LanguageContext = createContext<Ctx>({
  lang: "bn",
  setLang: () => {},
  toggle: () => {},
  t: (bn) => bn,
  mounted: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let next: Lang = "bn";
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "bn" || stored === "en") next = stored;
    } catch {}
    setLangState(next);
    document.documentElement.lang = next;
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l === "bn" ? "bn" : "en";
    } catch {}
  };

  const toggle = () => setLang(lang === "bn" ? "en" : "bn");
  const t = (bn: string, en: string) => (lang === "bn" ? bn : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}