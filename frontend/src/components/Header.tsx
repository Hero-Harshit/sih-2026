"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-brand-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-brand-600 dark:border-white/20 fixed top-0 left-0 w-full h-[73px] z-50 pl-2 pr-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <div
              className="w-8 h-10 bg-slate-800 dark:bg-slate-100 group-hover:scale-105 transition-transform"
              style={{
                maskImage: "url(/emblem.svg)",
                WebkitMaskImage: "url(/emblem.svg)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
          <span className="font-black text-xl text-brand-600 dark:text-brand-500 tracking-tight">
            {t.nav.brandName}
          </span>
        </Link>

        {/* Right side Language Selector */}
        <div id="navbar-actions" className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label={t.nav.selectLanguage}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-brand-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 text-sm font-semibold shadow-xs hover:shadow-sm transition-all active:scale-95"
            >
              <Globe size={16} className="text-brand-600 dark:text-brand-400 shrink-0" />
              <span className="hidden sm:inline">
                {language === "hi" ? "हिन्दी" : "English"}
              </span>
              <span className="inline sm:hidden uppercase font-mono text-xs font-bold text-brand-600">
                {language}
              </span>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-brand-200/60 dark:border-white/10 shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-brand-100/60 dark:border-white/5">
                  {t.nav.selectLanguage}
                </div>
                
                <button
                  onClick={() => handleSelectLanguage("en")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    language === "en"
                      ? "text-brand-600 dark:text-brand-400 bg-brand-50/70 dark:bg-brand-900/20 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-brand-50/40 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      EN
                    </span>
                    <span>English</span>
                  </div>
                  {language === "en" && (
                    <Check size={16} className="text-brand-600 dark:text-brand-400" />
                  )}
                </button>

                <button
                  onClick={() => handleSelectLanguage("hi")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    language === "hi"
                      ? "text-brand-600 dark:text-brand-400 bg-brand-50/70 dark:bg-brand-900/20 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-brand-50/40 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300">
                      HI
                    </span>
                    <span>हिन्दी (Hindi)</span>
                  </div>
                  {language === "hi" && (
                    <Check size={16} className="text-brand-600 dark:text-brand-400" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[73px] w-full shrink-0"></div>
    </>
  );
}

