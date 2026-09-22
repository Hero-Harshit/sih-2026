"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LegalIntakeForm from "@/components/LegalIntakeForm";
import ComplianceReport, { ComplianceData } from "@/components/ComplianceReport";
import { Loader2, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AssessmentPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState<ComplianceData | null>(null);

  const handleAssessmentComplete = async (data: Record<string, unknown>) => {
    setFormData(data);
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/assess`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        let result = await response.json();

        // Translate if language is not English
        if (language !== "en") {
          try {
            const translateRes = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reportData: result, language })
            });
            if (translateRes.ok) {
              const translatedResult = await translateRes.json();
              // Retain original riskScore to be safe
              translatedResult.riskScore = result.riskScore;
              result = translatedResult;
            } else {
              console.error("Translation failed, using English fallback");
            }
          } catch (e) {
            console.error("Translation error:", e);
          }
        }

        setReportData(result);

        // Save to assessment_history in localStorage for Analytics Dashboard
        try {
          const score = typeof result.riskScore === "number" ? result.riskScore : 45;
          const status = score > 75 ? "High Risk" : score > 35 ? "Moderate Risk" : "Cleared";
          const rawName = (data.product_name || data.formulation_name || data.name || data.title) as string | undefined;
          const rawCategory = (data.category || data.formulation_type || data.type) as string | undefined;
          const newRecord = {
            id: Date.now().toString(),
            name: rawName || "AYUSH Formulation Assessment",
            category: rawCategory || "Classical Formulation",
            score: score,
            status: status,
            date: new Date().toISOString(),
            formData: data,
            reportData: result,
          };
          const existing = JSON.parse(localStorage.getItem("assessment_history") || "[]");
          const updated = Array.isArray(existing) ? [newRecord, ...existing] : [newRecord];
          localStorage.setItem("assessment_history", JSON.stringify(updated));
          window.dispatchEvent(new Event("storage"));
        } catch (e) {
          console.error("Error saving assessment to history:", e);
        }
      } else {
        console.error("Failed to fetch report");
      }
    } catch (error) {
      console.error("Error fetching report:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setFormData(null);
    setReportData(null);
  };

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      <Header />

      <div className="flex flex-1 w-full mx-auto relative h-[calc(100vh-64px)]">
        {/* Expanding Icon Rail (Left Edge on Desktop) */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full h-full overflow-y-auto flex">
          <div className="w-full h-full p-4 md:p-8">
            {!formData ? (
              <LegalIntakeForm onComplete={handleAssessmentComplete} />
            ) : loading ? (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] animate-in fade-in duration-700">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center relative z-10 border border-slate-200 dark:border-slate-800">
                    <Loader2 className="text-brand-500 animate-spin" size={32} strokeWidth={3} />
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {t.assessment.analyzingTitle}
                </h2>
                <p className="text-slate-500 font-medium max-w-md text-center text-lg">
                  {t.assessment.analyzingDesc}
                </p>
              </div>
            ) : reportData ? (
              <ComplianceReport data={reportData} onRestart={handleRestart} />
            ) : (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] animate-in fade-in zoom-in-95 duration-500 text-center">
                <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="text-rose-500" size={32} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {t.assessment.failedTitle}
                </h2>
                <p className="text-slate-500 font-medium mb-8">
                  {t.assessment.failedDesc}
                </p>
                <button
                  onClick={handleRestart}
                  className="px-8 py-3 rounded-full font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-all shadow-lg"
                >
                  {t.common.tryAgain}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
