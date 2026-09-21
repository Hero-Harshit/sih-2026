"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-brand-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-brand-600 dark:border-white/20 fixed top-0 left-0 w-full h-[73px] z-50 pl-2 pr-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <div
              className="w-8 h-10 bg-slate-800 dark:bg-slate-100 group-hover:scale-105 transition-transform"
              style={{
                maskImage: "url(/emblem.svg)",
                WebkitMaskImage: "url(/emblem.svg)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
          <span className="font-black text-xl text-brand-600 dark:text-brand-500 tracking-tight">
            IP Shakti Sahayak
          </span>
        </Link>

        {/* Right side placeholder for future additions */}
        <div id="navbar-actions" className="flex items-center gap-2"></div>
      </header>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[73px] w-full shrink-0"></div>
    </>
  );
}

