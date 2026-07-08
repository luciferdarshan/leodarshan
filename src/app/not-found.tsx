"use client";

import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070c] px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-fedora-blue/5 blur-[100px] -z-10" />

      <div className="max-w-md w-full text-center z-10">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          {/* Terminal Window Header */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-950/60 border-b border-white/5 flex items-center px-4 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-slate-500 ml-2">sys_error_handler</span>
          </div>

          <div className="pt-6 font-mono">
            {/* Huge 404 code */}
            <h1 className="text-7xl font-bold text-gradient-blue tracking-tight mb-4">
              404
            </h1>
            
            <p className="text-white text-sm font-semibold mb-2">
              ERROR: Route target not resolved.
            </p>
            <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
              The page you are trying to fetch could not be located in the Next.js router matrix. It might have been moved or doesn&apos;t exist.
            </p>

            <div className="bg-slate-950/60 border border-white/5 p-3 rounded-xl text-left text-[10px] text-slate-500 mb-6">
              <span>$ curl -I https://leodarshan.com/broken-url</span>
              <br />
              <span className="text-red-400">HTTP/1.1 404 Not Found</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl font-mono text-xs text-white bg-gradient-to-r from-fedora-blue to-fedora-light hover:brightness-110 shadow-lg shadow-fedora-blue/20 transition-all duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Workspace
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
