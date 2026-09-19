"use client";

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
  BookOpenCheck
} from "lucide-react";

export default function ExpertEscalation() {
  const officialPortals = [
    {
      name: "Bar Council of India Advocate Search",
      acronym: "BCI Directory",
      url: "https://www.barcouncilofindia.org/",
      icon: <Scale className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Official nationwide directory to verify credentials of registered advocates and legal practitioners.",
    },
    {
      name: "IP India Public Portal & Agent Search",
      acronym: "IP India Portal",
      url: "https://ipindia.gov.in/",
      icon: <BookOpenCheck className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Official portal of the Controller General of Patents, Designs & Trade Marks (CGPDTM) for Patent Agents & Filings.",
    },
    {
      name: "Ministry of AYUSH Legal Grievance Cell",
      acronym: "AYUSH Helpdesk",
      url: "https://ayush.gov.in/",
      icon: <ShieldCheck className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Official ministry portal for regulatory clarification, ASU drug standards, and policy compliance.",
    },
    {
      name: "National Biodiversity Authority Cell",
      acronym: "NBA ABS Cell",
      url: "https://nbaindia.org/",
      icon: <Building2 className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Government body managing Access & Benefit Sharing (ABS) approvals for biological resources.",
    },
  ];

  const expertCategories = [
    {
      title: "Ayurvedic Patent & GI Attorneys",
      badge: "TKDL & Patent Law",
      location: "New Delhi / Chennai / Online",
      desc: "Specialists in overcoming Section 3(p) TKDL objections, drafting Ayurvedic patent claims, and Geographical Indication filings.",
      contact: "ip-counsel@laura-legal.org",
      tags: ["Patents", "TKDL", "Objection Defense"],
    },
    {
      title: "FSSAI & Nutraceutical Legal Counsel",
      badge: "Food Safety & Claims",
      location: "Mumbai / Bengaluru / Online",
      desc: "Legal experts specializing in Proprietary Food regulations, health claim approvals, and FSSR 2017 compliance audits.",
      contact: "fssai-experts@laura-legal.org",
      tags: ["FSSAI", "Labeling", "Health Claims"],
    },
    {
      title: "NBA & Biodiversity Law Consultants",
      badge: "Access & Benefit Sharing",
      location: "Chennai / Hyderabad / Online",
      desc: "Practitioners helping domestic and foreign entities file Form 1, 2, 3 for commercial utilization of Indian bio-resources.",
      contact: "nba-advisory@laura-legal.org",
      tags: ["Bio-Resources", "Form 1/2/3", "ABS Compliance"],
    },
    {
      title: "ASU Drug Licensing & SLA Advisors",
      badge: "Ayurveda & Unani SLA",
      location: "Haridwar / Kerala / Online",
      desc: "State Licensing Authority (SLA) experts for Rule 158-B approvals, Good Manufacturing Practice (GMP) audit support, and clinical trial defense.",
      contact: "asu-licensing@laura-legal.org",
      tags: ["Rule 158-B", "SLA License", "GMP Certification"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        <div className="flex-1 lg:ml-16 w-full p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header / Hero Section */}
            <div className="text-center md:text-left space-y-4 animate-in slide-in-from-left-4 fade-in duration-500">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-brand-500" />
                Qualified Legal Network
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight pb-2">
                Expert Legal Escalation
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Need direct assistance with complex regulatory hurdles? Connect with verified legal counsel, specialized patent attorneys, and official compliance helpdesks for your Ayurvedic & IP queries.
              </p>
            </div>

            {/* Official External Portals & Helplines */}
            <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-brand-500" />
                Official Portals & Legal Registries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {officialPortals.map((portal, idx) => (
                  <a
                    key={idx}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent dark:from-brand-950/30 rounded-full opacity-40 blur-2xl group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {portal.icon}
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
                        <span>Visit Official Portal</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Specialized Legal Expert Directory */}
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-4 fade-in duration-300" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-brand-500" />
                  Specialized Legal Advisors & Consultants
                </h2>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 px-3 py-1 rounded-full w-fit">
                  Verified Experts Directory
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertCategories.map((cat, idx) => (
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
                        <span className="font-mono text-xs">{cat.contact}</span>
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
