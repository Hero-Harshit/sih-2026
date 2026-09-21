"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const LANGUAGES: {
  code: Language;
  name: string;
  badge: string;
  badgeColor: string;
}[] = [
  {
    code: "bn",
    name: "বাংলা (Bengali)",
    badge: "BN",
    badgeColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
  },
  {
    code: "en",
    name: "English",
    badge: "EN",
    badgeColor: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
  },
  {
    code: "gu",
    name: "ગુજરાતી (Gujarati)",
    badge: "GU",
    badgeColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
  },
  {
    code: "hi",
    name: "हिन्दी (Hindi)",
    badge: "HI",
    badgeColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300",
  },
  {
    code: "kn",
    name: "ಕನ್ನಡ (Kannada)",
    badge: "KN",
    badgeColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  },
  {
    code: "mr",
    name: "मराठी (Marathi)",
    badge: "MR",
    badgeColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  },
  {
    code: "sa",
    name: "संस्कृतम् (Sanskrit)",
    badge: "SA",
    badgeColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  },
  {
    code: "ta",
    name: "தமிழ் (Tamil)",
    badge: "TA",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  },
  {
    code: "te",
    name: "తెలుగు (Telugu)",
    badge: "TE",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
  },
];

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
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            {t.nav.brandName}
          </span>
        </Link>

        {/* Right side Language Selector */}
        <div id="navbar-actions" className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label={t.nav.selectLanguage}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-orange-50/60 dark:hover:bg-slate-800 border ${
                dropdownOpen
                  ? "border-orange-400 dark:border-orange-500/70 ring-2 ring-orange-400/25 text-orange-600 dark:text-orange-400 shadow-sm"
                  : "border-orange-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-orange-300"
              } text-sm font-semibold shadow-xs hover:shadow-sm transition-all active:scale-95`}
            >
              <Globe size={16} className="text-orange-600 dark:text-orange-400 shrink-0" />
              <span className="hidden sm:inline">
                {language === "hi"
                  ? "हिन्दी"
                  : language === "mr"
                  ? "मराठी"
                  : language === "ta"
                  ? "தமிழ்"
                  : language === "te"
                  ? "తెలుగు"
                  : language === "bn"
                  ? "বাংলা"
                  : language === "kn"
                  ? "ಕನ್ನಡ"
                  : language === "sa"
                  ? "संस्कृतम्"
                  : language === "gu"
                  ? "ગુજરાતી"
                  : "English"}
              </span>
              <span className="inline sm:hidden uppercase font-mono text-xs font-bold text-orange-600">
                {language}
              </span>
              <ChevronDown
                size={14}
                className={`text-orange-500/70 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-orange-600" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-gradient-to-b from-white via-orange-50/25 to-white dark:from-slate-900 dark:via-orange-950/20 dark:to-slate-900 backdrop-blur-2xl border border-orange-200/90 dark:border-orange-500/30 shadow-xl shadow-orange-500/15 ring-1 ring-orange-500/15 dark:ring-orange-400/20 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                <div className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-orange-600/90 dark:text-orange-400 border-b border-orange-100 dark:border-orange-500/15 flex items-center justify-between bg-orange-50/70 dark:bg-orange-950/40">
                  <span className="flex items-center gap-1.5">
                    <Globe size={13} className="text-orange-500 shrink-0" />
                    {t.nav.selectLanguage}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-100/90 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 font-bold border border-orange-200/70 dark:border-orange-700/60">
                    {LANGUAGES.length}
                  </span>
                </div>

                <div className="max-h-[168px] overflow-y-auto custom-scrollbar-orange divide-y divide-orange-100/30 dark:divide-white/5 pr-0.5">
                  {LANGUAGES.map((langItem) => {
                    const isSelected = language === langItem.code;
                    return (
                      <button
                        key={langItem.code}
                        onClick={() => handleSelectLanguage(langItem.code)}
                        className={`w-full h-[42px] flex items-center justify-between px-3.5 text-sm font-medium transition-colors ${
                          isSelected
                            ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 font-semibold"
                            : "text-slate-700 dark:text-slate-200 hover:bg-orange-50/60 dark:hover:bg-orange-950/20"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${langItem.badgeColor}`}
                          >
                            {langItem.badge}
                          </span>
                          <span className="truncate">{langItem.name}</span>
                        </div>
                        {isSelected && (
                          <Check size={16} className="text-orange-600 dark:text-orange-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
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

