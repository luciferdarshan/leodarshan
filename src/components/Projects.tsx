"use client";

import { useState } from "react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ArrowRightLeft, Database, ShieldAlert, Cpu } from "lucide-react";

export default function Projects() {
  const [hoveredNode, setHoveredNode] = useState<"ui" | "ipc" | "db" | null>(null);

  const capabilities = [
    { title: "Offline Billing", desc: "Performs checkout transactions and prints raw tickets without WAN dependancy." },
    { title: "Customer Registry", desc: "Maintains simple contact tables and purchase registers locally on the disk." },
    { title: "Product Inventory", desc: "Logs stock movements, tracks code alerts, and updates product lists." },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const flowNotes = {
    ui: "REACT VIEW // RENDERS RESPONSIVE BILLS AND SEARCHES INVENTORY INSTANTLY",
    ipc: "ELECTRON MAIN // EXECUTES FILE SYSTEM COMMANDS AND ESC/POS PRINTER COMMANDS",
    db: "SQLITE BINARY // WRITES LEDGERS AND TRANSACTION TABLES DIRECTLY TO DISK",
  };

  return (
    <section id="projects" className="py-24 bg-jp-paper relative overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 sm:gap-16">
          
          {/* Left Column: Title & Overview */}
          <div className="w-full lg:w-[30%] space-y-6 shrink-0">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-jp-ink">
                  Projects <span className="text-brand-gradient">/</span>
                </h2>
              </div>
              <div className="thin-divider mt-4" />
            </motion.div>

            {/* Monospace Annotation */}
            <motion.div variants={itemVariants} className="text-[9px] font-mono tracking-widest text-jp-gray-dark uppercase">
              PROJECT ARCHIVE // LOCAL-FIRST PARADIGM
            </motion.div>

            <motion.p variants={itemVariants} className="font-sans text-xs sm:text-sm text-jp-gray-dark font-normal leading-relaxed">
              I specialize in building local-first tools that respect data privacy and keep sensitive registers completely offline.
            </motion.p>
          </div>

          {/* Right Column: Project Details Card */}
          <div className="w-full lg:w-[70%] space-y-8">
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 bg-jp-washi border border-jp-border rounded-xl relative overflow-hidden"
            >
              {/* Active Badge */}
              <div className="absolute right-6 top-6 px-2.5 py-1 bg-jp-red rounded-full text-[9px] text-white font-bold select-none uppercase tracking-widest pointer-events-none">
                Active
              </div>

              {/* Title & Monospace Stack annotation */}
              <div className="mb-6 pb-4 border-b border-jp-border">
                <span className="text-[8px] font-mono text-jp-red uppercase tracking-widest block mb-1">
                  Active Desktop Application
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-jp-ink">
                    LeoBook POS
                  </h3>
                  <span className="text-[9px] font-mono text-jp-gray-dark tracking-wide">
                    STACK // ELECTRON + REACT + SQLITE
                  </span>
                </div>
              </div>

              <p className="text-jp-gray-dark text-sm font-sans font-normal leading-relaxed mb-8">
                LeoBook is an offline-first point-of-sale and inventory desktop application built for local retail shops. It runs locally as an Electron executable, using a fast React interface backed by SQLite storage. By bypassing the cloud entirely, it keeps sensitive customer ledger data privately on your own hardware.
              </p>

              {/* Architecture Flow Section */}
              <div className="mb-8 p-4 bg-jp-sumi border border-jp-border rounded-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-jp-border pb-2">
                  <span className="text-[8px] font-mono text-jp-gray-dark uppercase tracking-widest">
                    SYSTEM TOPOLOGY // LOCAL PIPELINE
                  </span>
                  <span className="inline-flex items-center gap-1 text-[8px] font-mono text-jp-red bg-jp-red/5 border border-jp-red/10 px-1.5 py-0.5 rounded">
                    <ShieldAlert className="w-2.5 h-2.5" /> NO WAN REQUIREMENT
                  </span>
                </div>

                {/* SVG/Div Connection Flow */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 my-4">
                  {/* React POS UI */}
                  <motion.div
                    onMouseEnter={() => setHoveredNode("ui")}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 border rounded-lg flex flex-col items-center justify-center w-28 h-16 text-center transition-colors cursor-crosshair ${
                      hoveredNode === "ui" ? "border-jp-red text-jp-red bg-jp-washi" : "border-jp-border bg-jp-washi text-jp-ink"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5 mb-1" />
                    <span className="text-[9px] font-mono font-bold leading-tight">React UI</span>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center rotate-90 sm:rotate-0 text-jp-border">
                    <ArrowRightLeft className={`w-3.5 h-3.5 transition-colors duration-200 ${hoveredNode ? "text-jp-red/40" : "text-jp-border"}`} />
                  </div>

                  {/* Electron IPC */}
                  <motion.div
                    onMouseEnter={() => setHoveredNode("ipc")}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 border rounded-lg flex flex-col items-center justify-center w-28 h-16 text-center transition-colors cursor-crosshair ${
                      hoveredNode === "ipc" ? "border-jp-red text-jp-red bg-jp-washi" : "border-jp-border bg-jp-washi text-jp-ink"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 mb-1" />
                    <span className="text-[9px] font-mono font-bold leading-tight">Electron IPC</span>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center rotate-90 sm:rotate-0 text-jp-border">
                    <ArrowRightLeft className={`w-3.5 h-3.5 transition-colors duration-200 ${hoveredNode ? "text-jp-red/40" : "text-jp-border"}`} />
                  </div>

                  {/* SQLite DB */}
                  <motion.div
                    onMouseEnter={() => setHoveredNode("db")}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 border rounded-lg flex flex-col items-center justify-center w-28 h-16 text-center transition-colors cursor-crosshair ${
                      hoveredNode === "db" ? "border-jp-red text-jp-red bg-jp-washi" : "border-jp-border bg-jp-washi text-jp-ink"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5 mb-1" />
                    <span className="text-[9px] font-mono font-bold leading-tight">SQLite File</span>
                  </motion.div>
                </div>

                {/* Technical Annotation Details */}
                <div className="mt-2 h-8 border-t border-jp-border pt-2 flex items-center justify-start overflow-hidden select-none">
                  <AnimatePresence mode="wait">
                    {hoveredNode ? (
                      <motion.p
                        key={hoveredNode}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="text-[9px] font-mono text-jp-red font-medium leading-normal"
                      >
                        {flowNotes[hoveredNode]}
                      </motion.p>
                    ) : (
                      <motion.p
                        key="default-note"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="text-[9px] font-mono text-jp-gray-dark"
                      >
                        ANALYZE PIPELINE // HOVER NODES TO INSPECT RUNTIME STATE
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Capabilities List */}
              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-jp-ink font-semibold border-b border-jp-border pb-1">
                  Features
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="p-3 bg-jp-sumi border border-jp-border rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-jp-red inline-block mb-1.5" />
                      <h5 className="font-mono text-[10px] text-jp-ink font-bold mb-1">
                        {cap.title}
                      </h5>
                      <p className="text-[11px] text-jp-gray-dark font-light leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source Link */}
              <div className="flex items-center gap-4 pt-4 border-t border-jp-border">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-jp-ink hover:text-jp-red transition-colors group cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> SOURCE CODE <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
