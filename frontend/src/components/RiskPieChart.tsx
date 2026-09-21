"use client";

import { useState } from "react";
import { Info } from "lucide-react";

interface RiskPieChartProps {
  highRiskCount?: number;
  moderateRiskCount?: number;
  clearedCount?: number;
}

export default function RiskPieChart({
  highRiskCount = 1,
  moderateRiskCount = 2,
  clearedCount = 3,
}: RiskPieChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const items = [
    { name: "High Risk (>75%)", count: highRiskCount, color: "var(--brand-600)", pattern: "url(#pattern-high)" },
    { name: "Moderate Risk (36-75%)", count: moderateRiskCount, color: "var(--brand-500)", pattern: "url(#pattern-mod)" },
    { name: "Low Risk / Cleared (<=35%)", count: clearedCount, color: "var(--brand-400)", pattern: "url(#pattern-low)" },
  ];
  const total = items.reduce((sum, item) => sum + item.count, 0);
  const safeTotal = total || 1;
  let cumulative = 0;

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-brand-500 bg-white p-6 shadow-sm dark:border-brand-500/50 dark:bg-zinc-900">
      <div className="border-b border-slate-100 pb-4 dark:border-zinc-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Risk Share Distribution</h3>
        <p className="mt-1 text-xs text-slate-500">Proportional split of assessed products by risk classification.</p>
      </div>
      <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
        <div className="relative h-44 w-44 shrink-0">
          <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
            <defs>
              <pattern id="pattern-high" width="1.5" height="1.5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="1.5" height="1.5" fill="var(--brand-600)" />
                <line x1="0" y1="0" x2="0" y2="1.5" stroke="var(--brand-700)" strokeWidth="0.8" />
              </pattern>
              <pattern id="pattern-mod" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
                <rect width="1.5" height="1.5" fill="var(--brand-500)" />
                <circle cx="0.75" cy="0.75" r="0.4" fill="var(--brand-600)" />
              </pattern>
              <pattern id="pattern-low" width="2" height="2" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="2" height="2" fill="var(--brand-400)" />
              </pattern>
            </defs>
            {items.map((item, index) => {
              const percent = item.count / safeTotal;
              const offset = 100 - cumulative * 100;
              cumulative += percent;
              return (
                <circle
                  key={item.name}
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke={item.pattern}
                  strokeWidth={hovered === index ? "6.5" : "5"}
                  strokeDasharray={`${percent * 100} ${100 - percent * 100}`}
                  strokeDashoffset={offset}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-2xl font-black text-slate-900 dark:text-white">
              {hovered === null ? total : items[hovered].count}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {hovered === null ? "Total Products" : items[hovered].name.split(" ")[0]}
            </span>
          </div>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={item.name}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2.5 dark:border-zinc-800 dark:bg-zinc-800/40"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {item.name}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                {item.count} ({Math.round((item.count / safeTotal) * 100)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-200 p-3 text-center text-[11px] text-slate-400 dark:border-zinc-800">
        <Info className="h-3.5 w-3.5" /> Donut segments scale dynamically as assessments are logged.
      </div>
    </div>
  );
}
