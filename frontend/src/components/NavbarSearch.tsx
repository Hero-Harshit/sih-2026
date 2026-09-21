"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  FileText,
  Scale,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Palette,
  Bot,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  getSearchCatalog,
  searchCatalog,
  SearchCategory,
  SearchItem,
} from "@/data/searchIndex";

export default function NavbarSearch() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activePill, setActivePill] = useState<"database" | "mentors">("database");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Dynamic search catalog based on language
  const catalog = useMemo(() => {
    return getSearchCatalog(t, language);
  }, [t, language]);

  // Results filtered and ranked
  const results = useMemo(() => {
    return searchCatalog(catalog, query, activePill);
  }, [catalog, query, activePill]);

  // Cross-pill matches in the other category
  const otherPillResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchCatalog(
      catalog,
      query,
      activePill === "database" ? "mentors" : "database"
    );
  }, [catalog, query, activePill]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Global keyboard shortcuts (Ctrl+K, Cmd+K, /)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      } else if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (document.activeElement?.tagName || "").toUpperCase()
        )
      ) {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Reset selected index on query or category change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activePill]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      ) as HTMLElement | null;
      activeEl?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        results.length > 0 ? (prev + 1) % results.length : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        results.length > 0 ? (prev - 1 + results.length) % results.length : 0
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        handleSelectItem(results[selectedIndex]);
      } else if (query.trim()) {
        handleAskAi();
      }
    }
  };

  const handleSelectItem = (item: SearchItem) => {
    setIsOpen(false);
    if (item.url.startsWith("http")) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.url);
    }
  };

  const handleAskAi = () => {
    setIsOpen(false);
    const encoded = encodeURIComponent(query.trim());
    router.push(`/ai-assistant?prompt=${encoded}`);
  };


  const renderIcon = (type?: string) => {
    switch (type) {
      case "page":
        return <FileText className="w-3.5 h-3.5 text-blue-500" />;
      case "law":
        return <Scale className="w-3.5 h-3.5 text-purple-500" />;
      case "assessment":
        return <Sparkles className="w-3.5 h-3.5 text-orange-500" />;
      case "expert":
        return <UserCheck className="w-3.5 h-3.5 text-emerald-500" />;
      case "shield":
        return <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />;
      case "theme":
        return <Palette className="w-3.5 h-3.5 text-rose-500" />;
      case "bot":
        return <Bot className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  const highlightMatch = (text: string, q: string) => {
    if (!q.trim()) return text;
    const parts = text.split(
      new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    );
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <span
          key={i}
          className="text-orange-600 dark:text-orange-400 font-semibold underline decoration-orange-400/50"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Search Input Box in Navbar */}
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border transition-all ${
          isOpen
            ? "border-orange-400 dark:border-orange-500 ring-2 ring-orange-400/20 w-52 sm:w-64 md:w-80 shadow-sm"
            : "border-orange-200/80 dark:border-white/10 hover:border-orange-300 dark:hover:border-white/20 w-36 sm:w-56 md:w-64"
        }`}
      >
        <Search
          size={15}
          className="text-orange-600 dark:text-orange-400 shrink-0"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t.search.buttonLabel}
          className="w-full bg-transparent text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none border-none ring-0 p-0"
        />
        {query ? (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="p-0.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            title="Clear"
          >
            <X size={13} />
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-100/80 dark:bg-orange-950/60 text-[9px] font-mono font-bold text-orange-700 dark:text-orange-300 border border-orange-200/60 dark:border-orange-800/60 shrink-0">
            Ctrl K
          </kbd>
        )}
      </div>

      {/* DROPDOWN MENU - Directly beneath the search box, solid design, no blurred background */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[calc(100vw-28px)] sm:w-[440px] md:w-[490px] max-w-[95vw] rounded-2xl bg-white dark:bg-slate-900 border border-orange-200/90 dark:border-orange-500/30 shadow-xl shadow-orange-500/10 z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
          {/* Two Pills: Database & Mentors */}
          <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-50/50 dark:bg-orange-950/30 border-b border-orange-100 dark:border-orange-500/20">
            <button
              onClick={() => setActivePill("database")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                activePill === "database"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-orange-200/60 dark:border-white/10 hover:border-orange-300 hover:text-orange-600 dark:hover:text-orange-400"
              }`}
            >
              <span>Database</span>
              {query.trim() && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activePill === "database"
                      ? "bg-white/25 text-white"
                      : "bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300"
                  }`}
                >
                  {activePill === "database" ? results.length : otherPillResults.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActivePill("mentors")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                activePill === "mentors"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-orange-200/60 dark:border-white/10 hover:border-orange-300 hover:text-orange-600 dark:hover:text-orange-400"
              }`}
            >
              <span>Mentors</span>
              {query.trim() && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activePill === "mentors"
                      ? "bg-white/25 text-white"
                      : "bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300"
                  }`}
                >
                  {activePill === "mentors" ? results.length : otherPillResults.length}
                </span>
              )}
            </button>
          </div>

          {/* Results List */}
          <div
            ref={listRef}
            className="max-h-[340px] overflow-y-auto custom-scrollbar-orange divide-y divide-slate-100 dark:divide-slate-800"
          >
            {/* Clean and blank when no query is entered */}
            {!query.trim() && (
              <div className="py-12 px-4 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {activePill === "database"
                    ? "Database is currently empty"
                    : "Mentors is currently empty"}
                </p>
              </div>
            )}

            {/* Query Matches */}
            {query.trim() && results.length > 0 && (
              <div>
                {results.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <div
                      key={item.id}
                      data-index={idx}
                      onClick={() => handleSelectItem(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-orange-50 dark:bg-orange-950/40 text-orange-900 dark:text-orange-200"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                        {renderIcon(item.iconType)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold truncate">
                            {highlightMatch(item.title, query)}
                          </span>
                          {item.badge && (
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                                item.badgeColor ||
                                "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {highlightMatch(item.description, query)}
                        </p>
                      </div>

                      <div className="shrink-0 text-slate-400">
                        {item.url.startsWith("http") ? (
                          <ExternalLink size={13} />
                        ) : (
                          <ArrowRight
                            size={13}
                            className={`transition-transform ${
                              isSelected
                                ? "translate-x-0.5 text-orange-600 dark:text-orange-400"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* No Matches Found */}
            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center space-y-3">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {t.search.noResultsTitle} &quot;{query}&quot; in {activePill === "database" ? "Database" : "Mentors"}
                </div>
                {otherPillResults.length > 0 ? (
                  <div className="p-3 rounded-xl bg-orange-50/90 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/40 space-y-2">
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">
                      Found <span className="font-bold text-orange-600 dark:text-orange-400">{otherPillResults.length}</span> matching item{otherPillResults.length > 1 ? "s" : ""} in <strong>{activePill === "database" ? "Mentors" : "Database"}</strong>
                    </p>
                    <button
                      onClick={() => setActivePill(activePill === "database" ? "mentors" : "database")}
                      className="px-3 py-1 text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Switch to {activePill === "database" ? "Mentors" : "Database"}</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.search.noResultsDesc}
                  </p>
                )}
                <div>
                  <button
                    onClick={handleAskAi}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <Bot size={13} />
                    <span>{t.search.askAiCta}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Hints */}
          <div className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span>↑↓ {t.search.navigateHint}</span>
              <span>•</span>
              <span>↵ {t.search.selectHint}</span>
              <span>•</span>
              <span>esc {t.search.closeHint}</span>
            </div>
            {query.trim() && (
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                {results.length} results
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
