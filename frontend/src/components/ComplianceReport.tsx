"use client";

import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ListTodo,
  RefreshCcw,
  BookOpen,
  Quote,
  Sparkles,
  Scale,
  Download
} from "lucide-react";

export interface ComplianceData {
  riskScore: number;
  summary: string;
  citations: {
    law: string;
    text: string;
    chunk_id?: number;
  }[];
  actionPlan: {
    step: string;
    description: string;
  }[];
}

interface ComplianceReportProps {
  data: ComplianceData;
  onRestart: () => void;
}

export default function ComplianceReport({ data, onRestart }: ComplianceReportProps) {
  const { riskScore, summary, citations, actionPlan } = data;
  const reportRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(reportRef.current, { pixelRatio: 2 });
      const pdf = new jsPDF("p", "mm", "a4");
      
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      let heightLeft = pdfHeight;
      let position = 0;
      
      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      
      pdf.save("Compliance_Report.pdf");
    } catch (err) {
      console.error("Failed to generate PDF", err);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setIsExporting(false);
    }
  };

  // Determine risk level coloring and icons
  let riskColor = "text-emerald-500";
  let riskLightBg = "bg-emerald-50 dark:bg-emerald-950/20";
  let riskBorder = "border-emerald-200 dark:border-emerald-900/50";
  let RiskIcon = ShieldCheck;
  let riskLabel = "Low Risk";

  if (riskScore > 75) {
    riskColor = "text-rose-500";
    riskLightBg = "bg-rose-50 dark:bg-rose-950/20";
    riskBorder = "border-rose-200 dark:border-rose-900/50";
    RiskIcon = ShieldAlert;
    riskLabel = "High Risk";
  } else if (riskScore > 35) {
    riskColor = "text-amber-500";
    riskLightBg = "bg-amber-50 dark:bg-amber-950/20";
    riskBorder = "border-amber-200 dark:border-amber-900/50";
    RiskIcon = AlertTriangle;
    riskLabel = "Moderate Risk";
  }

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-700 pb-12">
      {/* Top action row */}
      <div className="flex justify-end w-full animate-in slide-in-from-top-4 duration-700 gap-3">
        <button
          onClick={handleDownloadPDF}
          disabled={isExporting}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-sm transition-all hover:shadow-md active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
        >
          <Download size={16} strokeWidth={2.5} />
          {isExporting ? "Exporting..." : "Download PDF"}
        </button>
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-bold shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          <RefreshCcw size={16} strokeWidth={2.5} />
          Start New Assessment
        </button>
      </div>

      <div ref={reportRef} className="flex flex-col gap-6 bg-transparent rounded-3xl p-1 md:p-2">
        {/* Header Section */}
        <div className={`relative overflow-hidden rounded-3xl border ${riskBorder} ${riskLightBg} shadow-sm p-8 md:p-12 animate-in slide-in-from-bottom-4 duration-700`}>
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Scale size={300} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Risk Score Ring */}
          <div className="w-40 shrink-0 flex flex-col items-center">
            <div className="relative flex items-center justify-center w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/50 dark:text-slate-900/50"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={`${riskColor} transition-all duration-1000 ease-out`}
                  strokeWidth="3"
                  strokeDasharray={`${riskScore}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">
                  {riskScore}
                </span>
              </div>
            </div>
            <div className={`flex items-center gap-2 font-bold ${riskColor} bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm`}>
              <RiskIcon size={16} strokeWidth={2.5} />
              <span className="text-sm tracking-wide uppercase">{riskLabel}</span>
            </div>
          </div>

          <div className="flex-1 space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <Sparkles size={18} className="text-brand-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                AI Assessment Complete
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl leading-relaxed font-medium">
              {summary}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 mt-4">
        {/* Legal Grounding - The Star of the Show */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center shadow-lg">
              <BookOpen size={24} className="text-white dark:text-slate-900" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Legal Grounding</h3>
              <p className="text-slate-500 font-medium">Direct citations retrieved from the regulatory corpus</p>
            </div>
          </div>

          <div className="space-y-6">
            {citations && citations.length > 0 ? (
              citations.map((cite, idx) => (
                <div key={idx} className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-md transition-all animate-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="absolute top-8 left-8 text-slate-200 dark:text-slate-800 pointer-events-none">
                    <Quote size={48} />
                  </div>
                  <div className="relative z-10 pl-14">
                    <h4 className="font-bold text-brand-700 dark:text-brand-400 text-base mb-4 tracking-tight uppercase flex items-center gap-2">
                      <Scale size={16} /> {cite.law}
                    </h4>
                    <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic">
                      &quot;{cite.text}&quot;
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 font-medium">No specific citations matched your profile.</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Plan */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center border border-brand-200 dark:border-brand-800/50">
              <ListTodo size={24} className="text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Action Plan</h3>
              <p className="text-slate-500 font-medium">Recommended next steps for compliance</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actionPlan && actionPlan.length > 0 ? (
              actionPlan.map((action, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${(idx + citations.length) * 150}ms` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{action.step}</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-11">
                    {action.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 font-medium">No specific actions required.</p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
