"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Info,
  Eye,
  Target,
  Map,
  BookOpen,
  Layers,
  Globe,
  Shield,
  Search,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Users,
  FileText,
  Leaf,
  Library,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const pillarIcons = [Lightbulb, Map, CheckCircle2, Shield];

  const differentiatorIcons = [
    Search,
    BookOpen,
    Layers,
    Globe,
    Leaf,
    Library,
    MessageSquare,
    FileText,
    Users,
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative overflow-hidden">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full px-4 sm:px-8 lg:px-12 pt-8 pb-24 overflow-y-auto animate-in fade-in duration-300">
          {/* Hero Section */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-4 fade-in duration-300 mb-20 relative mt-8">
            <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full -z-10 w-full mx-auto h-full"></div>

            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-600 shadow-xl shadow-brand-500/30 flex items-center justify-center text-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <Info size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent mb-6 tracking-tight drop-shadow-sm leading-tight pb-2">
              {t.about.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
              {t.about.subtitle}
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto space-y-24">
            {/* Our Story & Why We Built */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="animate-in slide-in-from-left-4 fade-in duration-500">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t.about.storyTitle}
                </h2>
                <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-4">
                  {t.about.storySubtitle}
                </h3>
                <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.about.storyParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t.about.whyBuiltTitle}
                </h2>
                <div className="formal-panel rounded-2xl p-8 relative overflow-hidden bg-brand-50/50 dark:bg-zinc-900/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -mr-10 -mt-10 z-0"></div>
                  <div className="relative z-10 space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                    <p>{t.about.whyBuiltIntro}</p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground font-medium">
                      {t.about.whyBuiltQuestions.map((q, idx) => (
                        <li key={idx}>{q}</li>
                      ))}
                    </ul>
                    <p>{t.about.whyBuiltConclusion}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision & Mission */}
            <section className="space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "200ms" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="formal-panel group rounded-3xl p-8 lg:p-10 relative overflow-hidden hover:shadow-brand-500/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
                    <Eye size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t.about.visionTitle}
                  </h2>
                  <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-4">
                    {t.about.visionSubtitle}
                  </p>
                  {t.about.visionParagraphs.map((p, idx) => (
                    <p key={idx} className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Mission Card */}
                <div className="formal-panel group rounded-3xl p-8 lg:p-10 relative overflow-hidden hover:shadow-brand-500/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
                    <Target size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t.about.missionTitle}
                  </h2>
                  <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-6">
                    {t.about.missionSubtitle}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                    {t.about.missionIntro}
                  </p>

                  {/* Mission 4 Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {t.about.pillars.map((pillar, idx) => {
                      const Icon = pillarIcons[idx] || Lightbulb;
                      return (
                        <div
                          key={idx}
                          className="bg-brand-50/50 dark:bg-zinc-900/50 rounded-xl p-4 border border-brand-500/10"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Icon size={18} className="text-brand-500" />
                            <h4 className="font-bold text-foreground">
                              {idx + 1}. {pillar.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {pillar.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Differentiators Grid */}
            <section className="animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "300ms" }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t.about.differentiatorsTitle}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-brand-300 to-transparent rounded-full mx-auto opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.about.differentiators.map((diff, index) => {
                  const Icon = differentiatorIcons[index] || Search;
                  return (
                    <div
                      key={index}
                      className="formal-panel group rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-brand-500/10 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-brand-500/10 transition-colors duration-500 z-0"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-tight mb-3">
                          {diff.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {diff.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* How It Works Stepper */}
            <section className="animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "400ms" }}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {t.about.howItWorksTitle}
                </h2>
                <p className="text-brand-600 dark:text-brand-400 font-medium">
                  {t.about.howItWorksSubtitle}
                </p>
              </div>

              <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-0.5 bg-brand-500/20 -translate-x-1/2 rounded-full hidden sm:block"></div>

                <div className="space-y-12 relative">
                  {t.about.steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} gap-6 lg:gap-16 group`}
                    >
                      {/* Step Number Bubble */}
                      <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/50 border-4 border-background flex items-center justify-center z-10 text-brand-600 dark:text-brand-400 font-bold text-sm shadow-sm hidden sm:flex group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                        {index + 1}
                      </div>

                      {/* Content Card */}
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"} pl-16 sm:pl-20 lg:pl-0`}
                      >
                        <div className="formal-panel p-6 rounded-2xl hover:shadow-brand-500/10 transition-shadow duration-300 relative group-hover:border-brand-500/30">
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            {step.title}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
