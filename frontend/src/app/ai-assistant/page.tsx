import GenericChat from "@/components/GenericChat";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AIAssistantPage() {
  return (
    <main 
      className="w-full bg-slate-50 dark:bg-zinc-950 flex flex-col relative overflow-hidden"
      style={{ height: '100vh', paddingTop: '73px' }}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-16 w-full h-full flex flex-col relative overflow-hidden">
        
        {/* Background Ornaments */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-200/40 dark:bg-brand-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-400/20 dark:bg-brand-800/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col min-h-0 p-4 md:p-8 relative z-10 gap-4">
          
          <div className="flex flex-col gap-1 shrink-0">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              AI Assistant
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Chat with our AI Legal Assistant to get quick insights and regulatory guidance.
            </p>
          </div>

          <div className="flex-1 min-h-0 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 relative flex flex-col">
            <GenericChat />
          </div>
        </div>
      </div>
    </main>
  );
}
