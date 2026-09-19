"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LegalIntakeForm from "@/components/LegalIntakeForm";
import ComplianceReport, { ComplianceData } from "@/components/ComplianceReport";
import { Loader2, Sparkles } from "lucide-react";

export default function Home() {
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
        const result = await response.json();
        setReportData(result);
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
                  Analyzing Profile
                </h2>
                <p className="text-slate-500 font-medium max-w-md text-center text-lg">
                  Running semantic similarity search across global regulatory frameworks...
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
                  Assessment Failed
                </h2>
                <p className="text-slate-500 font-medium mb-8">
                  There was an issue processing your request.
                </p>
                <button
                  onClick={handleRestart}
                  className="px-8 py-3 rounded-full font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-all shadow-lg"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
