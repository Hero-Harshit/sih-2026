import GenericChat from "@/components/GenericChat";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Sparkles } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden relative">
      <Header />

      {/* Decorative Background Gradients - Matching other pages */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-brand-300/20 to-brand-100/10 blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-tl from-brand-accent/20 to-brand-200/10 blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-brand-400/10 to-brand-100/10 blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      <div className="flex flex-1 w-full mx-auto relative h-[calc(100vh-73px)] min-h-0">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full h-full flex flex-col relative overflow-hidden">
          {/* Content Wrapper */}
          <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col min-h-0 p-4 md:p-8 relative z-10 gap-4">
            <div className="flex flex-col gap-1 shrink-0 animate-in slide-in-from-left-4 fade-in duration-500">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider w-fit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                Intelligent RAG Assistant
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight pb-1">
                AI Legal Assistant
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                Chat with our AI Legal Assistant to get quick insights and regulatory guidance.
              </p>
            </div>

            <div className="flex-1 min-h-0 w-full rounded-2xl overflow-hidden shadow-xl border border-brand-200/60 dark:border-white/10 relative flex flex-col">
              <GenericChat />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

