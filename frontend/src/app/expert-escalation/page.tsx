"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  UserCheck,
  ExternalLink,
  ShieldCheck,
  Scale,
  Building2,
  MapPin,
  Mail,
  BookOpenCheck,
  MessageCircle,
  UserPlus,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ExpertEscalation() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const portalIcons = [
    <Scale key="bci" className="w-6 h-6 mb-3 text-brand-600" />,
    <BookOpenCheck key="ip-india" className="w-6 h-6 mb-3 text-brand-600" />,
    <ShieldCheck key="ayush" className="w-6 h-6 mb-3 text-brand-600" />,
    <Building2 key="nba" className="w-6 h-6 mb-3 text-brand-600" />,
  ];

  const portalUrls = [
    "https://www.barcouncilofindia.org/",
    "https://ipindia.gov.in/",
    "https://ayush.gov.in/",
    "https://nbaindia.org/",
  ];

  const expertContacts = [
    {
      email: "durgudetanvi231@gmail.com",
      mobile: "9699735734",
      image: "/experts/tanvi.jpeg",
    },
    {
      email: "swamini129@gmail.com",
      mobile: "8793203588",
      image: "/experts/swamini.jpeg",
    },
    {
      email: "biradarmamta24@gmail.com",
      mobile: "9422126589",
      image: "/experts/mamta.jpeg",
    },
  ];

  const categoryContacts = [
    "ip-counsel@expert-legal.in",
    "fssai-experts@expert-legal.in",
    "nba-advisory@expert-legal.in",
    "sla-compliance@expert-legal.in",
    "ctri-trials@expert-legal.in",
    "export-phytosanitary@expert-legal.in",
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        <div className="flex-1 lg:ml-16 w-full p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header / Hero Section */}
            <div className="text-center md:text-left space-y-4 animate-in slide-in-from-left-4 fade-in duration-500">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-brand-500" />
                {t.expert.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight pb-2">
                {t.expert.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                {t.expert.subtitle}
              </p>
            </div>

            {/* Official External Portals & Helplines */}
            <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-brand-500" />
                {t.expert.officialPortalsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.expert.portals.map((portal, idx) => (
                  <a
                    key={idx}
                    href={portalUrls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent dark:from-brand-950/30 rounded-full opacity-40 blur-2xl group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {portalIcons[idx]}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {portal.acronym}
                      </h3>
                      <h4 className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">
                        {portal.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex-1 leading-relaxed">
                        {portal.desc}
                      </p>

                      <div className="flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        <span>
                          {language === "hi"
                            ? "आधिकारिक पोर्टल देखें"
                            : language === "mr"
                            ? "अधिकृत पोर्टलला भेट द्या"
                            : language === "ta"
                            ? "அதிகாரப்பூர்வ தளத்தைப் பார்வையிடுங்கள்"
                            : "Visit Official Portal"}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Expert Profiles */}
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "150ms" }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <UserPlus className="w-6 h-6 text-brand-500" />
                  {t.expert.verifiedSpecialistsTitle}
                </h2>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 px-3 py-1 rounded-full w-fit">
                  {t.expert.verifiedSpecialistsSubtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.expert.experts.map((profile, idx) => {
                  const contact = expertContacts[idx] || expertContacts[0];
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      <div className="flex-1 text-center md:text-left">
                        {contact.image ? (
                          <div className="w-20 h-20 mx-auto md:mx-0 rounded-full overflow-hidden mb-5 shadow-inner border-2 border-brand-100 dark:border-brand-900/50">
                            <Image
                              src={contact.image}
                              alt={profile.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 mx-auto md:mx-0 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-5 text-brand-600 dark:text-brand-400 text-3xl font-bold uppercase shadow-inner">
                            {profile.name.charAt(0)}
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {profile.name}
                        </h3>
                        <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">
                          {profile.role}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                          {profile.desc}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 pt-5 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                        <a
                          href={`mailto:${contact.email}`}
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold transition-all hover:scale-[1.02]"
                        >
                          <Mail className="w-4 h-4" />
                          {language === "hi"
                            ? "ईमेल करें"
                            : language === "mr"
                            ? "ईमेल पाठवा"
                            : language === "ta"
                            ? "மின்னஞ்சல் அனுப்புக"
                            : "Email"}
                        </a>
                        <a
                          href={`https://wa.me/91${contact.mobile}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] text-sm font-bold transition-all hover:scale-[1.02]"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {language === "hi"
                            ? "व्हाट्सएप परामर्श"
                            : language === "mr"
                            ? "व्हॉट्सॲप सल्लामसलत"
                            : language === "ta"
                            ? "வாட்ஸ்அப் ஆலோசனை"
                            : "WhatsApp"}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Specialized Legal Expert Directory */}
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-brand-500" />
                  {t.expert.domainsTitle}
                </h2>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 px-3 py-1 rounded-full w-fit">
                  {t.expert.domainsSubtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.expert.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                          {cat.badge}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-500" />
                          {cat.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {cat.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {cat.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Mail className="w-3.5 h-3.5 text-brand-500" />
                        <span className="font-mono text-xs">{categoryContacts[idx] || categoryContacts[0]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
