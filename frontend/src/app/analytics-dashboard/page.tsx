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
import { useLanguage } from "@/i18n/LanguageContext";
import ComplianceReport from "@/components/ComplianceReport";
import { X, Eye, DatabaseBackup } from "lucide-react";

interface AuditLogItem {
  name: string;
  category: string;
  score: number;
  status: string;
  date: string;
  id?: string;
  formData?: any;
  reportData?: any;
}

const sampleAudits: AuditLogItem[] = [
  {
    id: "mock-1",
    name: "Triphala Ghati Formulation",
    category: "Classical Formulation",
    score: 18,
    status: "Cleared",
    date: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    formData: {
      product_name: "Triphala Ghati Formulation",
      category: "Classical Formulation",
      ingredients: "Amalaki, Bibhitaki, Haritaki",
      intended_use: "Digestive wellness",
    },
    reportData: {
      riskScore: 18,
      summary: "This classical formulation adheres strictly to Ayurvedic pharmacopoeia standards. All ingredients are recognized and permitted without restrictions.",
      citations: [
        { law: "Drugs and Cosmetics Act, 1940 (Schedule T)", text: "Good Manufacturing Practices for Ayurvedic, Siddha and Unani Medicines are met." }
      ],
      actionPlan: [
        { step: "Maintain GMP", description: "Ensure manufacturing process remains compliant with Schedule T." },
        { step: "Labeling", description: "Proceed with standard AYUSH labeling guidelines." }
      ]
    }
  },
  {
    id: "mock-2",
    name: "Ayush Herbals Immunity Elixir",
    category: "Nutraceutical",
    score: 68,
    status: "Moderate Risk",
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    formData: {
      product_name: "Ayush Herbals Immunity Elixir",
      category: "Nutraceutical",
      ingredients: "Tulsi, Giloy, Ashwagandha extract (concentrated)",
      intended_use: "Immunity booster",
    },
    reportData: {
      riskScore: 68,
      summary: "The formulation crosses the boundary between traditional Ayurveda and modern nutraceuticals due to concentrated extracts. Health claims must be carefully reviewed under FSSAI regulations.",
      citations: [
        { law: "FSSAI Regulations, 2016", text: "Health claims must be supported by scientific evidence and not claim to cure any specific disease." },
        { law: "Drugs and Magic Remedies Act, 1954", text: "Prohibits misleading advertisements relating to drugs and magic remedies." }
      ],
      actionPlan: [
        { step: "Review Health Claims", description: "Ensure marketing materials do not make disease-curing claims." },
        { step: "Ingredient Verification", description: "Verify that the concentrated extract levels fall within permissible FSSAI limits." }
      ]
    }
  },
  {
    id: "mock-3",
    name: "Novel Ashwagandha Derivative",
    category: "Patent & Proprietary",
    score: 88,
    status: "High Risk",
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    formData: {
      product_name: "Novel Ashwagandha Derivative",
      category: "Patent & Proprietary",
      ingredients: "Synthetically modified Withanolides",
      intended_use: "Stress reduction and muscle recovery",
    },
    reportData: {
      riskScore: 88,
      summary: "High risk of patent infringement and regulatory non-compliance. The synthetic modification of traditional herbs requires extensive clinical trials and prior-art screening.",
      citations: [
        { law: "Patents Act, 1970 (Section 3(p))", text: "An invention which in effect, is traditional knowledge or which is an aggregation or duplication of known properties of traditionally known component or components is not patentable." },
        { law: "Biological Diversity Act, 2002", text: "Requires prior approval of NBA for applying for any intellectual property right based on biological resource obtained from India." }
      ],
      actionPlan: [
        { step: "Patent Landscaping", description: "Conduct an immediate freedom-to-operate (FTO) analysis." },
        { step: "NBA Approval", description: "Apply for National Biodiversity Authority (NBA) clearance before pursuing IP rights." },
        { step: "Clinical Validation", description: "Prepare a protocol for Phase I clinical trials to prove efficacy and safety of the synthetic derivative." }
      ]
    }
  },
  {
    id: "mock-4",
    name: "Kumkumadi Glow Serum",
    category: "Herbal Cosmetic",
    score: 32,
    status: "Cleared",
    date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    formData: {
      product_name: "Kumkumadi Glow Serum",
      category: "Herbal Cosmetic",
      ingredients: "Saffron, Sandalwood, Sesame Oil base",
      intended_use: "Skin brightening and anti-aging",
    },
    reportData: {
      riskScore: 32,
      summary: "The cosmetic formulation is generally safe and uses permitted herbal ingredients. Minor labeling verifications are recommended.",
      citations: [
        { law: "Drugs and Cosmetics Rules, 1945 (Rule 148)", text: "Cosmetics containing permitted dyes and natural ingredients must adhere to heavy metal limit guidelines." }
      ],
      actionPlan: [
        { step: "Heavy Metal Testing", description: "Perform standard batch testing for Lead and Arsenic limits." },
        { step: "Label Compliance", description: "Ensure the INCI names of ingredients are correctly listed on the packaging." }
      ]
    }
  },
];

export default function AnalyticsDashboardPage() {
  const { t } = useLanguage();
  const [audits, setAudits] = useState<AuditLogItem[]>([]);
  const [selectedAudit, setSelectedAudit] = useState<AuditLogItem | null>(null);

  useEffect(() => {
    const load = () => {
      try {
        const parsed = JSON.parse(localStorage.getItem("assessment_history") || "[]");
        const stored = Array.isArray(parsed)
          ? parsed.map((item) => ({ ...item, score: Number(item.score) || 0 }))
          : [];
        setAudits(stored);
      } catch {
        setAudits([]);
      }
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const handleFillMockData = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("assessment_history") || "[]");
      const hasMock = existing.some((item: AuditLogItem) => item.id?.startsWith("mock-"));
      
      let updated;
      if (hasMock) {
        updated = existing.filter((item: AuditLogItem) => !item.id?.startsWith("mock-"));
      } else {
        updated = [...sampleAudits, ...existing];
      }
      
      localStorage.setItem("assessment_history", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }
  };

  const hasMockData = audits.some((item) => item.id?.startsWith("mock-"));

  const total = audits.length;
  const highRisk = audits.filter((item) => item.score > 75).length;
  const cleared = audits.filter((item) => item.score <= 35).length;
  const average = total
    ? (audits.reduce((sum, item) => sum + item.score, 0) / total).toFixed(1)
    : "0.0";
  const categoryData: CategoryRiskData[] = [
    ["classical", "Classical Formulations", "Classical", "API-compliant traditional medicines."],
    ["proprietary", "Patent & Proprietary Drugs", "Proprietary", "Novel formulations requiring patent prior-art screening."],
    ["nutra", "Nutraceuticals & Dietary", "Nutraceuticals", "FSSAI and AYUSH claim boundaries."],
    ["cosmetics", "Herbal Cosmetics", "Cosmetics", "Topical applications and heavy-metal testing."],
    ["abs", "Export & ABS Compliance", "Export & ABS", "NBA approval for biological resource exports."],
    ["tkdl", "TKDL & Prior-Art Overlap", "TKDL Overlap", "Traditional knowledge prior-art matches."],
  ].map(([id, name, label, description]) => {
    const related = audits.filter((item) => item.category.toLowerCase().includes(String(id)));
    
    // Dynamic average score calculation based on real data
    const score = related.length 
      ? Math.round(related.reduce((sum, item) => sum + item.score, 0) / related.length)
      : 0;
      
    // Meaningful issue count based on actual items
    const issueCount = related.reduce((sum, item) => {
      if (item.score > 75) return sum + 3;
      if (item.score > 35) return sum + 1;
      return sum;
    }, 0);

    return {
      id: String(id),
      category: String(name),
      shortLabel: String(label),
      riskScore: score,
      issueCount: issueCount,
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
      title: t.dashboard.totalAudited,
      value: total,
      icon: Layers,
      color: "text-brand-600",
      bg: "bg-brand-50 dark:bg-brand-950/40",
    },
    {
      title: t.dashboard.highRisk,
      value: highRisk,
      icon: ShieldAlert,
      color: "text-brand-600",
      bg: "bg-brand-50 dark:bg-brand-950/40",
    },
    {
      title: t.dashboard.clearances,
      value: cleared,
      icon: FileCheck,
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-950/40",
    },
    {
      title: t.dashboard.avgScore,
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
          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 p-6 text-white shadow-lg border border-black dark:border-white md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-100">
                {t.dashboard.badge}
              </div>
              <h1 className="text-2xl font-black sm:text-3xl">{t.dashboard.title}</h1>
              <p className="mt-1 max-w-2xl text-sm text-brand-100">
                {t.dashboard.subtitle}
              </p>
            </div>
            <Link
              href="/assessment"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 dark:text-black border border-transparent dark:border-black hover:bg-brand-50 transition-colors shadow-sm"
            >
              {t.dashboard.runAssessment} <ArrowUpRight className="h-4 w-4" />
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
                      {t.dashboard.recentLogsTitle}
                    </h3>
                    <p className="text-xs text-slate-500">{t.dashboard.recentLogsSubtitle}</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handleFillMockData}
                      className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                    >
                      <DatabaseBackup className="h-3.5 w-3.5" /> {hasMockData ? "Clear Mock Data" : "Fill Mock Data"}
                    </button>
                    <Link
                      href="/assessment"
                      className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      New Assessment <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b text-slate-400 border-slate-100 dark:border-zinc-800">
                        <th className="px-4 py-3">{t.dashboard.tableHeaders.productName}</th>
                        <th className="px-4 py-3">{t.dashboard.tableHeaders.category}</th>
                        <th className="px-4 py-3">{t.dashboard.tableHeaders.riskScore}</th>
                        <th className="px-4 py-3">{t.dashboard.tableHeaders.status}</th>
                        <th className="px-4 py-3 text-right">{t.dashboard.tableHeaders.audited}</th>
                        <th className="px-4 py-3 text-center">Actions</th>
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
                          <td className="px-4 py-3.5 text-center">
                            <button
                              onClick={() => setSelectedAudit(item)}
                              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800 transition-colors"
                            >
                              <Eye className="h-3.5 w-3.5" /> View
                            </button>
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
                        <TrendingDown className="h-3 w-3 text-brand-500" /> {t.dashboard.liveEvaluation}
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

      {/* History Modal */}
      {selectedAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-950 w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedAudit.name}
                </h2>
                <p className="text-sm text-slate-500">
                  {selectedAudit.category} • {formatDate(selectedAudit.date)}
                </p>
              </div>
              <button
                onClick={() => setSelectedAudit(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              {selectedAudit.formData && (
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
                    Selected Options (Intake Data)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(selectedAudit.formData).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-sm font-medium text-slate-900 dark:text-white mt-1">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedAudit.reportData ? (
                <div>
                  <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200 px-2">
                    Generated Compliance Report
                  </h3>
                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-950">
                    <ComplianceReport 
                      data={selectedAudit.reportData} 
                      onRestart={() => setSelectedAudit(null)} 
                    />
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-slate-500 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                  No report data available for this audit.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
