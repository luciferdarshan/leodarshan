"use client";

import Link from "next/link";
import { ArrowLeft, Rss } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogIndex() {
  return (
    <div className="min-h-screen py-12 sm:py-24 bg-bg-void relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 data-grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-violet/2 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 w-full relative z-10"
      >
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-text-dim hover:text-neon-cyan transition-colors mb-16 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          BACK TO PORTFOLIO
        </Link>

        {/* Section header */}
        <div className="mb-16">
          <div className="section-label mb-4" style={{ color: "#a855f7" }}>
            <span className="inline-block w-5 h-px bg-neon-violet mr-2" />
            TRANSMISSION LOG
            <span className="inline-block w-1 h-1 bg-neon-violet rotate-45 ml-2" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-sans font-bold text-text-primary">
            BLOG <span className="text-neon-violet glow-violet">ARCHIVE</span>
          </h1>
          <div
            className="neon-line mt-4 w-48 opacity-60"
            style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }}
          />
        </div>

        {/* Coming soon card */}
        <div className="anime-card p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet/50 to-transparent" />

          <div className="w-16 h-16 border border-neon-violet/30 rounded-sm flex items-center justify-center mb-6 animate-pulse">
            <Rss className="w-7 h-7 text-neon-violet/60" />
          </div>

          <div className="font-mono text-[9px] text-neon-violet/60 tracking-widest uppercase mb-4">
            ARTICLES INCOMING
          </div>

          <p className="font-sans text-lg text-text-muted mb-2">
            Articles coming soon.
          </p>
          <p className="font-mono text-[10px] text-text-dim max-w-sm">
            Writing notes on Linux, Electron development, and software architecture.
          </p>

          <div className="mt-8 font-mono text-[8px] text-text-dim tracking-widest">
            <span className="text-neon-green">◆</span> BLOG MODULE LOADING...
          </div>
        </div>
      </motion.div>
    </div>
  );
}
