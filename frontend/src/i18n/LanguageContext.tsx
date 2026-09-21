"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations, TranslationSchema } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language") as Language;
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "hi" ||
        savedLanguage === "mr" ||
        savedLanguage === "ta" ||
        savedLanguage === "te" ||
        savedLanguage === "bn" ||
        savedLanguage === "kn" ||
        savedLanguage === "sa")
    ) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("app-language", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
