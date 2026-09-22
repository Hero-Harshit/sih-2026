"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles, BrainCircuit, ShieldCheck, Database, Layers, Users, FileText, Globe, Lock, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="h-screen flex flex-col relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      <Header />
      
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-brand-300/20 to-brand-100/10 blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-tl from-brand-accent/20 to-brand-200/10 blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[60%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-brand-400/10 to-brand-100/10 blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      {/* Main Content Area - 2 Columns */}
      <div className="flex-1 lg:ml-16 w-full flex items-center px-6 lg:px-12 relative h-full">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Column: Hero Text */}
          <div className="flex flex-col justify-center text-left animate-in fade-in slide-in-from-left-8 duration-700 z-10 pb-20">
            <div className="inline-flex items-center self-start gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-brand-200/60 dark:border-white/20 text-brand-700 dark:text-brand-400 text-sm font-bold mb-8 shadow-sm transition-all cursor-default">
              <span>{t.home.heroBadge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-800 dark:text-slate-100 tracking-tighter leading-[1.1] mb-6 drop-shadow-sm pb-2">
              {t.home.heroTitlePrefix} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent pr-2">
                {t.home.heroTitleHighlight}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-10 font-medium">
              {t.home.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/assessment"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-600 dark:bg-brand-500 text-white font-bold text-lg shadow-xl hover:shadow-brand-500/25 hover:-translate-y-1 hover:bg-brand-700 dark:hover:bg-brand-600 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                {t.home.startAssessment}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/corpus"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold text-lg shadow-lg border border-slate-200 dark:border-white/20 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                {t.home.browseLegalCorpus}
                <BookOpen
                  size={20}
                  className="text-brand-500 group-hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Staggered Flow-based Scattered Pills */}
          <div className="hidden lg:flex relative h-full w-full items-center justify-center px-4">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 w-full max-w-2xl relative z-10">
              
              {/* Pill 1 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-8" style={{ animationDelay: '400ms' }}>
                <div className="animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <CheckCircle2 className="text-brand-500" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">16 Ingredients</span>
                  </div>
                </div>
              </div>

              {/* Pill 2 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both -mt-6" style={{ animationDelay: '500ms' }}>
                <div className="animate-pulse" style={{ animationDuration: '6s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <ShieldCheck className="text-brand-600" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Robust Legal Documents</span>
                  </div>
                </div>
              </div>

              {/* Pill 6 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-12" style={{ animationDelay: '900ms' }}>
                <div className="animate-pulse" style={{ animationDuration: '5.5s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <Users className="text-brand-500" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">2+ Qualified Experts</span>
                  </div>
                </div>
              </div>

              {/* Pill 3 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both -mt-10" style={{ animationDelay: '600ms' }}>
                <div className="animate-bounce" style={{ animationDuration: '5s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <Database className="text-brand-400" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">RAG Enabled</span>
                  </div>
                </div>
              </div>

              {/* Pill 7 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-10" style={{ animationDelay: '1000ms' }}>
                <div className="animate-bounce" style={{ animationDuration: '4.5s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <FileText className="text-brand-600" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">83 Handmade Documents</span>
                  </div>
                </div>
              </div>

              {/* Pill 8 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both -mt-8" style={{ animationDelay: '1100ms' }}>
                <div className="animate-pulse" style={{ animationDuration: '6.5s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <Globe className="text-brand-400" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">10+ Languages, Truly Multilingual...</span>
                  </div>
                </div>
              </div>

              {/* Pill 4 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-14" style={{ animationDelay: '700ms' }}>
                <div className="animate-pulse" style={{ animationDuration: '7s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <BrainCircuit className="text-brand-500" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">NISHA Included</span>
                  </div>
                </div>
              </div>

              {/* Pill 9 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both -mt-4" style={{ animationDelay: '1200ms' }}>
                <div className="animate-bounce" style={{ animationDuration: '7.5s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <Lock className="text-brand-500" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">100% Private, Fully Secured</span>
                  </div>
                </div>
              </div>

              {/* Pill 5 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-8" style={{ animationDelay: '800ms' }}>
                <div className="animate-bounce" style={{ animationDuration: '6s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <Layers className="text-brand-600" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Tiranga Themed</span>
                  </div>
                </div>
              </div>

              {/* Pill 10 */}
              <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 fill-mode-both -mt-12" style={{ animationDelay: '1300ms' }}>
                <div className="animate-pulse" style={{ animationDuration: '5.2s' }}>
                  <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-brand-200/50 dark:border-brand-500/30 rounded-2xl shadow-xl shadow-brand-500/10">
                    <LayoutDashboard className="text-brand-600" size={20} />
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Dynamic Dashboard</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Central glowing orb for aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 blur-[120px] rounded-full -z-10 animate-in fade-in duration-1000 delay-300"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
