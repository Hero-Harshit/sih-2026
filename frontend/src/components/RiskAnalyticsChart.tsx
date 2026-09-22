"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export interface CategoryRiskData {
  id: string;
  category: string;
  shortLabel: string;
  riskScore: number;
  issueCount: number;
  highRiskItems: number;
  moderateRiskItems: number;
  lowRiskItems: number;
  description: string;
}

interface RiskAnalyticsChartProps {
  categories?: CategoryRiskData[];
}

const defaults: CategoryRiskData[] = [
  {
    id: "classical",
    category: "Classical Formulations",
    shortLabel: "Classical",
    riskScore: 28,
    issueCount: 4,
    highRiskItems: 0,
    moderateRiskItems: 1,
    lowRiskItems: 3,
    description: "API-compliant traditional medicines.",
  },
  {
    id: "proprietary",
    category: "Patent & Proprietary Drugs",
    shortLabel: "Proprietary",
    riskScore: 84,
    issueCount: 14,
    highRiskItems: 6,
    moderateRiskItems: 5,
    lowRiskItems: 3,
    description: "Novel formulations requiring clinical proof and patent prior-art screening.",
  },
  {
    id: "nutra",
    category: "Nutraceuticals & Dietary",
    shortLabel: "Nutraceuticals",
    riskScore: 62,
    issueCount: 9,
    highRiskItems: 2,
    moderateRiskItems: 5,
    lowRiskItems: 2,
    description: "FSSAI and AYUSH claim boundaries.",
  },
  {
    id: "cosmetics",
    category: "Herbal Cosmetics",
    shortLabel: "Cosmetics",
    riskScore: 41,
    issueCount: 6,
    highRiskItems: 1,
    moderateRiskItems: 2,
    lowRiskItems: 3,
    description: "Topical applications and heavy-metal testing.",
  },
  {
    id: "abs",
    category: "Export & ABS Compliance",
    shortLabel: "Export & ABS",
    riskScore: 78,
    issueCount: 11,
    highRiskItems: 4,
    moderateRiskItems: 4,
    lowRiskItems: 3,
    description: "NBA approval for biological resource exports.",
  },
  {
    id: "tkdl",
    category: "TKDL & Prior-Art Overlap",
    shortLabel: "TKDL Overlap",
    riskScore: 53,
    issueCount: 8,
    highRiskItems: 2,
    moderateRiskItems: 4,
    lowRiskItems: 2,
    description: "Traditional knowledge prior-art matches.",
  },
];

export default function RiskAnalyticsChart({ categories }: RiskAnalyticsChartProps) {
  const data = categories || defaults;
  const [mode, setMode] = useState<"risk" | "issues">("risk");
  const [active, setActive] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const max = mode === "risk" ? 100 : Math.max(...data.map((item) => item.issueCount), 10);
  const selected = active === null ? null : data[active];

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-brand-500 bg-white p-6 shadow-sm dark:border-brand-500/50 dark:bg-zinc-900">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row dark:border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Multi-Category Risk Analytics</h2>
          <p className="mt-1 text-sm text-slate-500">Comparative compliance risk scores and regulatory issues.</p>
        </div>
        <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-zinc-800">
          <button
            onClick={() => setMode("risk")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              mode === "risk"
                ? "bg-white text-brand-600 shadow-sm dark:bg-zinc-900"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Risk Score (%)
          </button>
          <button
            onClick={() => setMode("issues")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              mode === "issues"
                ? "bg-white text-brand-600 shadow-sm dark:bg-zinc-900"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Issue Count
          </button>
        </div>
      </div>
      <div className="flex h-72 items-end justify-between gap-2 sm:gap-6">
        {data.map((item, index) => {
          const value = mode === "risk" ? item.riskScore : item.issueCount;
          const height = Math.max(8, (value / max) * 100);
          const colorClass =
            item.riskScore > 75
              ? "bg-[repeating-linear-gradient(45deg,var(--brand-600),var(--brand-600)_4px,var(--brand-700)_4px,var(--brand-700)_8px)]"
              : item.riskScore > 45
              ? "bg-[repeating-linear-gradient(90deg,var(--brand-500),var(--brand-500)_4px,var(--brand-600)_4px,var(--brand-600)_8px)]"
              : "bg-[linear-gradient(to_top,var(--brand-400),var(--brand-300))]";
          return (
            <div
              key={item.id}
              onMouseEnter={(e) => {
                setActive(index);
                setMousePos({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setActive(null)}
              className="flex h-full flex-1 cursor-pointer flex-col items-center justify-end"
            >
              <span className="mb-2 rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold dark:bg-zinc-800">
                {value}
                {mode === "risk" ? "%" : " issues"}
              </span>
              <div className="flex h-full w-full max-w-12 items-end rounded-t-xl bg-slate-100 p-1 dark:bg-zinc-800">
                <div
                  className={`w-full rounded-t-lg ${colorClass}`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="mt-3 max-w-full truncate text-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                {item.shortLabel}
              </span>
            </div>
          );
        })}
      </div>
      {selected && (
        <div 
          className="fixed z-50 pointer-events-none rounded-xl border border-brand-200 bg-brand-50/95 p-3 text-sm shadow-xl backdrop-blur-sm dark:border-brand-900 dark:bg-brand-950/95 w-64"
          style={{ top: mousePos.y + 15, left: mousePos.x + 15 }}
        >
          <strong>
            {selected.category} · {selected.riskScore}% risk
          </strong>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{selected.description}</p>
        </div>
      )}
    </div>
  );
}
