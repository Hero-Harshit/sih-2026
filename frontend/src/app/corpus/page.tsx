"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Database,
  ExternalLink,
  Search,
  Library,
  Scale,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CorpusPage() {
  const { t } = useLanguage();

  const sourceIcons = [
    <Library key="tkdl" className="w-6 h-6 mb-3 text-brand-600" />,
    <Scale key="india-code" className="w-6 h-6 mb-3 text-brand-600" />,
    <Search key="ip-india" className="w-6 h-6 mb-3 text-brand-600" />,
    <Database key="drive" className="w-6 h-6 mb-3 text-brand-600" />,
  ];

  const sourceUrls = [
    "https://tkdl.res.in",
    "https://indiacode.nic.in",
    "https://ipindia.gov.in",
    "https://drive.google.com/drive/folders/1GbY-el4SGrOmSisolK4dkfU9Lmeo1CBJ?usp=drive_link",
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        <div className="flex-1 lg:ml-16 w-full p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center md:text-left space-y-4 animate-in slide-in-from-left-4 fade-in duration-500">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight pb-2">
                {t.corpus.title}
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t.corpus.subtitle}
              </p>
            </div>

            {/* Official Sources - Premium Buttons */}
            <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Database className="w-6 h-6 text-brand-500" />
                {t.corpus.officialSources}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.corpus.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={sourceUrls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Decorative gradient blur */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {sourceIcons[idx]}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {source.acronym}
                      </h3>
                      <h4 className="text-sm font-semibold text-brand-600 mb-3">
                        {source.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                        {source.desc}
                      </p>

                      <div className="flex items-center text-sm font-semibold text-slate-400 dark:text-slate-500 group-hover:text-brand-600 transition-colors">
                        <span>{t.common.accessDatabase}</span>
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
