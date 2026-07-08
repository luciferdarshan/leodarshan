"use client";

import { useEffect } from "react";
import { Terminal, RefreshCw, ArrowLeft } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070c] px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-red-500/5 blur-[100px] -z-10" />

      <div className="max-w-md w-full text-center z-10">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          {/* Terminal Window Header */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-950/60 border-b border-white/5 flex items-center px-4 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-slate-500 ml-2">kernel_panic_handler</span>
          </div>

          <div className="pt-6 font-mono">
            {/* Huge 500 code */}
            <h1 className="text-7xl font-bold text-red-500 tracking-tight mb-4">
              500
            </h1>
            
            <p className="text-white text-sm font-semibold mb-2">
              CRITICAL: Kernel Panic / Application Error.
            </p>
            <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
              A runtime exception interrupted the rendering engine. The incident has been recorded in the logs.
            </p>

            <div className="bg-slate-950/60 border border-white/5 p-3 rounded-xl text-left text-[9px] text-red-400 mb-6 max-h-[80px] overflow-y-auto no-scrollbar">
              <span>SYSTEM PANIC: {error.message || "Unknown Application Failure"}</span>
              {error.digest && <span className="block text-slate-500">DIGEST: {error.digest}</span>}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => reset()}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs text-white bg-gradient-to-r from-red-600 to-red-500 hover:brightness-110 shadow-lg shadow-red-600/10 transition-all duration-200"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Re-trigger Render
              </button>
              
              <a
                href="/"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 border border-white/5 bg-slate-900/50 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Home Directory
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
