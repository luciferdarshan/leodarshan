"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Globe, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion } from "framer-motion";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-20 bg-jp-paper print:py-0 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Navigation & Controls header */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-jp-gray-dark hover:text-jp-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
          </Link>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 border border-jp-border hover:border-jp-red rounded font-mono text-xs text-jp-ink transition-all cursor-pointer bg-jp-washi"
          >
            <Printer className="w-4 h-4 text-jp-red" /> Print / Save as PDF
          </button>
        </div>

        {/* Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border border-jp-border bg-jp-washi rounded-xl p-8 sm:p-12 print:border-none print:p-0 print:text-black"
        >
          {/* Resume Header */}
          <div className="border-b border-jp-border pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-jp-ink mb-2">
                Leo Darshan
              </h1>
              <h2 className="text-xs sm:text-sm font-mono text-jp-red font-semibold tracking-wider uppercase">
                Software Developer
              </h2>
            </div>

            {/* Contacts info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-jp-gray-dark print:text-black/80 text-jp-ink">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-jp-red" /> luciferdarshan@proton.me
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-jp-red" /> github.com
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-jp-red" /> leodarshan.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-jp-red" /> Bangalore, India
              </span>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8">
            {/* Summary */}
            <section className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-jp-ink uppercase tracking-wider border-b border-jp-border pb-1">
                Profile
              </h3>
              <p className="text-jp-ink/90 print:text-black/85 text-xs sm:text-sm font-light leading-relaxed">
                Software developer focused on building functional, stable, and offline-first applications. Interested in Fedora Linux system environment configurations, desktop development using Electron and SQLite, and web development using Next.js.
              </p>
            </section>

            {/* Experience / Projects */}
            <section className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-jp-ink uppercase tracking-wider border-b border-jp-border pb-1">
                Projects
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-medium text-jp-ink text-sm sm:text-base">
                    LeoBook
                  </h4>
                  <span className="text-xs font-mono text-jp-gray-dark print:text-black/60">Active Development</span>
                </div>
                <p className="text-jp-ink/90 print:text-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  An offline-first desktop billing and inventory application designed for retail shops. Stores customer profiles, item catalogs, and billing histories locally in SQLite database.
                </p>
                <ul className="list-disc pl-5 text-[11px] sm:text-xs text-jp-gray-dark print:text-black/60 font-light space-y-1">
                  <li>Built with Electron, React, and SQLite.</li>
                  <li>Ensures offline functionality, keeping data storage private on the machine.</li>
                </ul>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-jp-ink uppercase tracking-wider border-b border-jp-border pb-1">
                Skills Matrix
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-jp-gray-dark font-mono text-[10px] block mb-1">LANGUAGES</span>
                  <p className="text-jp-ink/90 print:text-black/85 font-light">TypeScript, JavaScript, SQL, Bash</p>
                </div>
                <div>
                  <span className="text-jp-gray-dark font-mono text-[10px] block mb-1">FRAMEWORKS & TOOLS</span>
                  <p className="text-jp-ink/90 print:text-black/85 font-light">React, Next.js, Electron, Tailwind CSS, Git</p>
                </div>
                <div>
                  <span className="text-jp-gray-dark font-mono text-[10px] block mb-1">DATABASES</span>
                  <p className="text-jp-ink/90 print:text-black/85 font-light">SQLite</p>
                </div>
                <div>
                  <span className="text-jp-gray-dark font-mono text-[10px] block mb-1">ENVIRONMENTS</span>
                  <p className="text-jp-ink/90 print:text-black/85 font-light">Fedora Linux</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
