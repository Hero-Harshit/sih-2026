"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeCycler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "saffron") setTheme("blue");
    else if (theme === "blue") setTheme("green");
    else if (theme === "green") setTheme("dark");
    else setTheme("saffron");
  };

  if (!mounted) {
    return (
      <div className="w-9 h-[26px] rounded border border-slate-200/50 dark:border-slate-700/50 bg-slate-100/50 dark:bg-slate-800/50" />
    );
  }

  const showSaffron = theme === "saffron" || theme === "dark";
  const showBlue = theme === "blue" || theme === "dark";
  const showGreen = theme === "green" || theme === "dark";

  return (
    <button
      onClick={cycleTheme}
      title={`Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
      className={`w-9 h-[26px] rounded-sm flex flex-col overflow-hidden border shadow-xs transition-all active:scale-95 ${
        theme === "dark" 
          ? "border-slate-700 bg-white shadow-sm" 
          : "border-orange-200/80 bg-white/40 hover:bg-white hover:border-orange-300 dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:bg-slate-800"
      }`}
    >
      {/* Top Band (Saffron) */}
      <span 
        className={`w-full h-1/3 block transition-colors duration-300 ${
          showSaffron ? "bg-[#FF9933]" : "bg-transparent"
        }`} 
      />
      
      {/* Middle Band (White + Blue Chakra) */}
      <span className={`w-full h-1/3 flex items-center justify-center relative transition-colors duration-300 ${theme === "dark" ? "bg-white" : "bg-transparent"}`}>
        <span 
          className={`h-full aspect-square flex items-center justify-center transition-opacity duration-300 ${
            showBlue ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Ashoka Chakra SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#000080] opacity-90 scale-90">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path 
              d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M8.46 3.54l7.08 16.92M3.54 8.46l16.92 7.08M3.54 15.54l16.92-7.08M8.46 20.46l7.08-16.92" 
              stroke="currentColor" 
              strokeWidth="0.75" 
            />
          </svg>
        </span>
      </span>
      
      {/* Bottom Band (Green) */}
      <span 
        className={`w-full h-1/3 block transition-colors duration-300 ${
          showGreen ? "bg-[#138808]" : "bg-transparent"
        }`} 
      />
    </button>
  );
}
