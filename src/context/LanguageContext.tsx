import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check local storage
    const saved = localStorage.getItem("app-lang") as Language | null;
    if (saved === "en" || saved === "id") return saved;

    // 2. Check browser locale
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith("id")) {
      return "id";
    }

    // 3. Check Indonesian timezones (WIB, WITA, WIT)
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (
        tz &&
        (tz.startsWith("Asia/Jakarta") ||
          tz.startsWith("Asia/Pontianak") ||
          tz.startsWith("Asia/Makassar") ||
          tz.startsWith("Asia/Jayapura"))
      ) {
        return "id";
      }
    } catch (e) {
      // Catch silently if environment doesn't support timezone resolution
    }

    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
