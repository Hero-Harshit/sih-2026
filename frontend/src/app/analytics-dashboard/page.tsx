"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileCheck,
  Layers,
  Scale,
  ShieldAlert,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RiskAnalyticsChart, { CategoryRiskData } from "@/components/RiskAnalyticsChart";
import RiskPieChart from "@/components/RiskPieChart";

interface AuditLogItem {
  name: string;
  category: string;
  score: number;
  status: string;
  date: string;
}

const sampleAudits: AuditLogItem[] = [
  {
    name: "Triphala Ghati Formulation",
    category: "Classical Formulation",
    score: 18,
    status: "Cleared",
    date: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  },
  {
    name: "Ayush Herbals Immunity Elixir",
    category: "Nutraceutical",
    score: 68,
    status: "Moderate Risk",
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    name: "Novel Ashwagandha Derivative",
    category: "Patent & Proprietary",
    score: 88,
    status: "High Risk",
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    name: "Kumkumadi Glow Serum",
    category: "Herbal Cosmetic",
    score: 32,
    status: "Cleared",
    date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
];

export default function AnalyticsDashboardPage() {
  const [audits, setAudits] = useState<AuditLogItem[]>(sampleAudits);

  useEffect(() => {
    const load = () => {
      try {
        const parsed = JSON.parse(localStorage.getItem("assessment_history") || "[]");
        const stored = Array.isArray(parsed)
          ? parsed.map((item) => ({ ...item, score: Number(item.score) || 0 }))
          : [];
        setAudits(
          stored.length
            ? [
                ...stored,
                ...sampleAudits.filter(
                  (sample) => !stored.some((item: AuditLogItem) => item.name === sample.name)
                ),
              ]
            : sampleAudits
        );
      } catch {
        setAudits(sampleAudits);
      }
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const total = audits.length;
  const highRisk = audits.filter((item) => item.score > 75).length;
  const cleared = audits.filter((item) => item.score <= 35).length;
  const average = total
    ? (audits.reduce((sum, item) => sum + item.score, 0) / total).toFixed(1)
    : "0.0";
  const category = (match: string) =>
    audits.find((item) => item.category.toLowerCase().includes(match));
  const categoryData: CategoryRiskData[] = [
    ["classical", "Classical Formulations", "Classical", 28, "API-compliant traditional medicines."],
    [
      "proprietary",
      "Patent & Proprietary Drugs",
      "Proprietary",
      84,
      "Novel formulations requiring patent prior-art screening.",
    ],
    ["nutra", "Nutraceuticals & Dietary", "Nutraceuticals", 62, "FSSAI and AYUSH claim boundaries."],
    ["cosmetics", "Herbal Cosmetics", "Cosmetics", 41, "Topical applications and heavy-metal testing."],
    [
      "abs",
      "Export & ABS Compliance",
      "Export & ABS",
      Math.min(95, Math.round(Number(average) * 1.1)),
      "NBA approval for biological resource exports.",
    ],
    [
      "tkdl",
      "TKDL & Prior-Art Overlap",
      "TKDL Overlap",
      Math.max(15, Math.round(Number(average) * 0.85)),
      "Traditional knowledge prior-art matches.",
    ],
  ].map(([id, name, label, fallback, description]) => {
    const match = category(String(id));
    const score = match?.score ?? Number(fallback);
    const related = audits.filter((item) => item.category.toLowerCase().includes(String(id)));
    return {
      id: String(id),
      category: String(name),
      shortLabel: String(label),
      riskScore: score,
      issueCount: Math.round((score / 100) * 15),
      highRiskItems: related.filter((item) => item.score > 75).length,
      moderateRiskItems: related.filter((item) => item.score > 35 && item.score <= 75).length,
      lowRiskItems: related.filter((item) => item.score <= 35).length,
      description: String(description),
    };
  });

  const formatDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    return minutes < 60
      ? `${Math.max(minutes, 1)} mins ago`
      : minutes < 1440
      ? `${Math.floor(minutes / 60)} hours ago`
      : date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const cards = [
    {
      title: "Total Products Audited",
      value: total,
      icon: Layers,
      color: "text-brand-600",
      bg: "bg-brand-50 dark:bg-brand-950/40",
    },
    {
      title: "High Risk Flags",
      value: highRisk,
      icon: ShieldAlert,
      color: "text-brand-600",
      bg: "bg-brand-50 dark:bg-brand-950/40",
    },
    {
      title: "Regulatory Clearances",
      value: cleared,
      icon: FileCheck,
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-950/40",
    },
    {
      title: "Avg Compliance Score",
      value: `${average}%`,
      icon: Scale,
      color: "text-amber-600",
      bg: "bg-amber-50 dark:bg-amber-950/40",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground transition-colors duration-300">
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
      
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col gap-8 p-4 sm:p-8 lg:ml-16">
          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 p-6 text-white shadow-lg border border-black md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-100">
                Dynamic Analytics Dashboard
              </div>
              <h1 className="text-2xl font-black sm:text-3xl">AYUSH Compliance & Risk Analytics</h1>
              <p className="mt-1 max-w-2xl text-sm text-brand-100">
                Live risk metrics updated from assessment submissions.
              </p>
            </div>
            <Link
              href="/assessment"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-colors shadow-sm"
            >
              Run New Assessment <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <RiskAnalyticsChart categories={categoryData} />
              
              <div className="rounded-2xl border border-brand-500 bg-white p-6 shadow-sm dark:border-brand-500/50 dark:bg-zinc-900">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                      Recent Assessment Risk Logs
                    </h3>
                    <p className="text-xs text-slate-500">Latest evaluations from the assessment form.</p>
                  </div>
                  <Link
                    href="/assessment"
                    className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    New Assessment <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b text-slate-400 border-slate-100 dark:border-zinc-800">
                        <th className="px-4 py-3">Product Name</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Risk Score</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-right">Audited</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                      {audits.map((item, index) => (
                        <tr
                          key={`${item.name}-${index}`}
                          className="hover:bg-slate-50/60 dark:hover:bg-zinc-800/40 transition-colors"
                        >
                          <td className="px-4 py-3.5 font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </td>
                          <td className="px-4 py-3.5 text-slate-600 dark:text-slate-400">
                            {item.category}
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-16 overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                <div
                                  className={`h-full ${
                                    item.score > 75
                                      ? "bg-[repeating-linear-gradient(45deg,#ea580c,#ea580c_4px,#c2410c_4px,#c2410c_8px)]"
                                      : item.score > 35
                                      ? "bg-[repeating-linear-gradient(90deg,#f97316,#f97316_4px,#ea580c_4px,#ea580c_8px)]"
                                      : "bg-gradient-to-r from-orange-400 to-orange-500"
                                  }`}
                                  style={{ width: `${item.score}%` }}
                                />
                              </div>
                              <span className="font-semibold text-slate-700 dark:text-slate-300">
                                {item.score}%
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-bold text-[11px] ${
                                item.score > 75
                                  ? "bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-400"
                                  : item.score > 35
                                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-400"
                                  : "bg-orange-50 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300"
                              }`}
                            >
                              {item.score > 75 ? (
                                <ShieldAlert className="h-3 w-3 text-orange-600" />
                              ) : item.score > 35 ? (
                                <Clock className="h-3 w-3 text-brand-500" />
                              ) : (
                                <CheckCircle2 className="h-3 w-3 text-orange-500" />
                              )}
                              {item.status}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right text-slate-400">
                            {formatDate(item.date)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cards.map(({ title, value, icon: Icon, color, bg }) => (
                  <div
                    key={title}
                    className="flex flex-col justify-between rounded-2xl border border-brand-500 bg-white p-5 shadow-sm dark:border-brand-500/50 dark:bg-zinc-900"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">{title}</span>
                      <div className={`rounded-xl p-2 ${bg}`}>
                        <Icon className={`h-5 w-5 ${color}`} />
                      </div>
                    </div>
                    <div className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
                      {value}
                      <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                        <TrendingDown className="h-3 w-3 text-brand-500" /> Live evaluation
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <RiskPieChart
                highRiskCount={highRisk}
                moderateRiskCount={
                  audits.filter((item) => item.score > 35 && item.score <= 75).length
                }
                clearedCount={cleared}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
