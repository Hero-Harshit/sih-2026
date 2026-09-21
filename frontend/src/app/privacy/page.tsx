"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ShieldCheck, Tag, Info, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";
  const policies = t.privacy.sections;
  const [activeId, setActiveId] = useState<string>("introduction");

  const activePolicy = policies.find((p) => p.id === activeId) || policies[0];

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden bg-background text-foreground transition-colors duration-300">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative h-[calc(100vh-73px)] min-h-0">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full h-full p-4 lg:p-8 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-full">
            {/* COLUMN 1: LEFT - Table of Contents */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-4">
                {isHindi ? "सामग्री सूची" : "Table of Contents"}
              </div>
              <nav className="flex flex-col space-y-1 border-l-2 border-brand-100 dark:border-white/10">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActiveId(policy.id)}
                    className={`text-left pl-6 py-2.5 text-sm leading-relaxed font-medium transition-colors border-l-2 -ml-[2px] ${
                      activePolicy.id === policy.id
                        ? "text-brand-600 dark:text-brand-400 border-brand-600 dark:border-brand-400 bg-brand-50/50 dark:bg-brand-400/10"
                        : "text-foreground/60 border-transparent hover:text-foreground hover:border-brand-300 dark:hover:border-white/30"
                    }`}
                  >
                    {policy.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* COLUMN 2: CENTER - Main Reading Column */}
            <div
              className="flex-1 w-full max-w-[800px] mx-auto min-w-0 h-full pt-4 lg:pt-0 animate-in slide-in-from-bottom-4 fade-in duration-300 fill-mode-both"
              key={activePolicy.id}
            >
              <div className="mb-12">
                {activePolicy.id === "introduction" && (
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-10 leading-tight">
                    {t.privacy.title}
                  </h1>
                )}

                {activePolicy.id !== "introduction" && (
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-8 leading-tight">
                    {activePolicy.title}
                  </h2>
                )}

                <div className="space-y-6">
                  {activePolicy.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-foreground/80 text-lg leading-loose"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMN 3: RIGHT - Context Panel */}
            <aside
              className="hidden xl:flex flex-col w-80 shrink-0 h-full pl-4 pb-12 animate-in slide-in-from-bottom-4 fade-in duration-300 fill-mode-both"
              style={{ animationDelay: "100ms" }}
              key={`meta-${activePolicy.id}`}
            >
              {/* TL;DR Box */}
              <div className="bg-brand-50/50 dark:bg-white/5 border border-brand-200 dark:border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-4 font-bold text-sm uppercase tracking-wider">
                  <ShieldCheck size={18} strokeWidth={2.5} />
                  {t.privacy.tldrLabel}
                </div>
                <p className="text-brand-900 dark:text-brand-100 font-medium leading-relaxed">
                  {activePolicy.tldr}
                </p>
              </div>

              {/* Tags Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-brand-600/70 dark:text-brand-400/70 mb-4 font-bold text-sm uppercase tracking-wider">
                  <Tag size={16} strokeWidth={2.5} />
                  {isHindi ? "मुख्य शब्द" : "Keywords"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePolicy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-brand-50 dark:bg-white/5 border border-brand-200 dark:border-white/10 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-brand-600/70 dark:text-brand-400/70 mb-4 font-bold text-sm uppercase tracking-wider">
                  <Info size={16} strokeWidth={2.5} />
                  {isHindi ? "मेटाडेटा" : "Metadata"}
                </div>
                <div className="bg-brand-50/30 dark:bg-white/5 border border-brand-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                  {Object.entries(activePolicy.metadata).map(
                    ([key, value], idx, arr) => (
                      <div
                        key={key}
                        className={`flex flex-col px-4 py-3 ${
                          idx !== arr.length - 1
                            ? "border-b border-brand-200/50 dark:border-white/10"
                            : ""
                        }`}
                      >
                        <span className="text-xs text-brand-600/70 dark:text-brand-400/70 font-semibold uppercase tracking-wider mb-1">
                          {key}
                        </span>
                        <span className="text-sm text-brand-700 dark:text-brand-300 font-medium">
                          {value as React.ReactNode}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-auto pt-8 border-t border-brand-200 dark:border-white/10">
                <a
                  href="/expert-escalation"
                  className="group w-full flex items-center justify-between bg-transparent border-2 border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 px-6 py-4 rounded-xl font-bold hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:shadow-md transition-all duration-300 active:scale-95"
                >
                  {isHindi ? "सहायता से संपर्क करें" : "Contact Support"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
