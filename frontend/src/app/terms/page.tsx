"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  FileText,
  Lightbulb,
  Scale,
  Sparkles,
  BookOpen,
  UserCheck,
  Globe,
  FlaskConical,
  Library,
  Leaf,
  Lock,
  RefreshCw,
  ShieldAlert,
  UserPlus,
  ShieldCheck,
  Fingerprint,
  Cloud,
  Edit3,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TermsAndConditionsPage() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const termIcons = [
    Lightbulb,
    Scale,
    Sparkles,
    BookOpen,
    UserCheck,
    Globe,
    FlaskConical,
    Library,
    Leaf,
    Lock,
    RefreshCw,
    ShieldAlert,
    UserPlus,
    ShieldCheck,
    Fingerprint,
    Cloud,
    Edit3,
    HelpCircle,
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative overflow-hidden">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full px-4 sm:px-8 lg:px-12 pt-8 pb-20 overflow-y-auto animate-in fade-in duration-300">
          {/* Hero Section */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-4 fade-in duration-300 mb-16 relative">
            <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full -z-10 w-3/4 mx-auto h-full"></div>

            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-600 shadow-xl shadow-brand-500/30 flex items-center justify-center text-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <FileText size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent mb-4 tracking-tight drop-shadow-sm">
              {t.terms.title}
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              {t.terms.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {t.terms.items.map((term, index) => {
              const Icon = termIcons[index] || FileText;
              return (
                <div
                  key={term.id}
                  className="formal-panel group rounded-2xl p-6 relative overflow-hidden hover:scale-[1.02] hover:shadow-brand-500/10 transition-all duration-500 animate-in slide-in-from-bottom-4 fade-in"
                  style={{
                    animationDelay: index * 50 + "ms",
                    animationFillMode: "both",
                  }}
                >
                  {/* Subtle Background Accent on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-500/10 transition-colors duration-500 z-0"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {term.id}. {term.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="w-full max-w-3xl mx-auto mt-16 text-center text-sm text-slate-400 animate-in fade-in duration-1000 delay-500">
            {language === "hi"
              ? "अंतिम अद्यतन: सितंबर 2026। आईपी शक्ति सहायक का उपयोग करके, आप इन नियमों और शर्तों से सहमत होते हैं।"
              : language === "mr"
              ? "शेवटचे अपडेट: सप्टेंबर २०२६. आयपी शक्ती सहायक वापरून आपण या नियम आणि अटींशी सहमत आहात."
              : "Last updated: September 2026. By using IP Shakti Sahayak, you agree to these Terms & Conditions."}
          </div>
        </div>
      </div>
    </main>
  );
}
