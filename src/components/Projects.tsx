"use client";

import { useState } from "react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ArrowRightLeft, Database, ShieldAlert, Cpu, ExternalLink } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 15 },
  },
};

const CAPABILITIES = [
  {
    title: "Offline Billing",
    desc: "Checkout transactions & raw ticket printing — zero WAN dependency.",
    color: "#00f5ff",
  },
  {
    title: "Customer Registry",
    desc: "Contact tables and purchase registers — stored locally on disk.",
    color: "#a855f7",
  },
  {
    title: "Product Inventory",
    desc: "Stock movements, code alerts, and product list management.",
    color: "#00ff88",
  },
];

type NodeType = "ui" | "ipc" | "db" | null;

const FLOW_NODES = [
  { id: "ui" as const, label: "React UI", sub: "Renderer", Icon: Monitor, color: "#00f5ff" },
  { id: "ipc" as const, label: "Electron IPC", sub: "Main Process", Icon: Cpu, color: "#a855f7" },
  { id: "db" as const, label: "SQLite File", sub: "Local Storage", Icon: Database, color: "#00ff88" },
];

const FLOW_NOTES: Record<string, string> = {
  ui: "REACT RENDERER :: Serves responsive bills and live inventory lookups without network calls",
  ipc: "ELECTRON MAIN :: Handles filesystem ops, printer commands, and IPC channel routing",
  db: "SQLITE BINARY :: Persists all ledgers and transaction tables directly to disk",
};

export default function Projects() {
  const [hoveredNode, setHoveredNode] = useState<NodeType>(null);

  return (
    <section id="projects" className="py-28 bg-bg-deep relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-neon-pink/2 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="section-label mb-4" style={{ color: "#ff2d9b" }}>
            <span className="inline-block w-5 h-px bg-neon-pink mr-2" />
            PROJECT ARCHIVE
            <span className="inline-block w-1 h-1 bg-neon-pink rotate-45 ml-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-text-primary">
            MY <span className="text-neon-pink glow-pink">PROJECTS</span>
          </h2>
          <div className="neon-line mt-4 w-48 opacity-60" style={{ background: "linear-gradient(90deg, transparent, #ff2d9b, transparent)" }} />
        </motion.div>

        {/* Single project: LeoBook */}
        <motion.div variants={itemVariants}>
          <div className="anime-card p-6 sm:p-8 relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 pb-6 border-b border-border-subtle">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-neon-pink tracking-widest uppercase">
                    ACTIVE DESKTOP APPLICATION
                  </span>
                  <span className="status-active" style={{ color: "#00ff88" }}>ACTIVE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-text-primary">
                  LeoBook <span className="text-neon-pink">POS</span>
                </h3>
                <p className="font-mono text-xs text-text-dim tracking-wide">
                  STACK :: ELECTRON + REACT + SQLITE
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/luciferdarshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 font-mono text-xs tracking-widest uppercase text-text-muted hover:text-neon-cyan border border-border-subtle hover:border-neon-cyan/40 rounded-xl transition-all duration-300 group"
                  id="leobook-github-link"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>SOURCE</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-muted text-sm font-sans leading-relaxed mb-10 max-w-2xl">
              LeoBook is an <span className="text-neon-cyan font-semibold">offline-first</span> point-of-sale and inventory desktop application 
              for local retail shops. It runs as an Electron executable with a React interface backed by SQLite storage. 
              By bypassing the cloud entirely, it keeps sensitive customer ledger data privately on your own hardware.
            </p>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
              {/* Architecture flow diagram */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-text-dim tracking-widest uppercase">SYSTEM TOPOLOGY</div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-neon-green border border-neon-green/20 bg-neon-green/5 px-3 py-1.5 rounded-full">
                    <ShieldAlert className="w-2.5 h-2.5" />
                    NO WAN REQUIRED
                  </div>
                </div>

                <div className="bg-bg-void border border-border-subtle rounded-xl p-6">
                  {/* Flow nodes */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
                    {FLOW_NODES.map((node, i) => (
                      <div key={node.id} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                        <motion.button
                          id={`flow-node-${node.id}`}
                          onMouseEnter={() => setHoveredNode(node.id)}
                          onMouseLeave={() => setHoveredNode(null)}
                          whileHover={{ scale: 1.04 }}
                          className="flex flex-col items-center gap-1.5 p-4 border rounded-xl w-28 h-24 justify-center cursor-crosshair transition-all duration-200"
                          style={hoveredNode === node.id ? {
                            borderColor: `${node.color}60`,
                            background: `${node.color}08`,
                            boxShadow: `0 0 15px ${node.color}15`,
                          } : { borderColor: "rgba(0,245,255,0.08)", background: "transparent" }}
                        >
                          <node.Icon
                            className="w-4 h-4 transition-colors duration-200"
                            style={{ color: hoveredNode === node.id ? node.color : "#3d6b8a" }}
                          />
                          <span className="font-mono text-xs font-bold leading-tight text-center text-text-muted">
                            {node.label}
                          </span>
                          <span className="font-mono text-[9px] text-text-dim leading-tight text-center">
                            {node.sub}
                          </span>
                        </motion.button>
                        {i < FLOW_NODES.length - 1 && (
                          <div className="rotate-90 sm:rotate-0">
                            <ArrowRightLeft
                              className="w-3 h-3 transition-colors duration-200"
                              style={{ color: hoveredNode ? "rgba(0,245,255,0.3)" : "rgba(255,255,255,0.08)" }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Node detail */}
                  <div className="h-10 flex items-center border-t border-border-subtle pt-3">
                    <AnimatePresence mode="wait">
                      {hoveredNode ? (
                        <motion.p
                          key={hoveredNode}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="font-mono text-xs text-neon-cyan leading-relaxed"
                        >
                          &gt; {FLOW_NOTES[hoveredNode]}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-mono text-xs text-text-dim"
                        >
                          HOVER NODES TO INSPECT RUNTIME STATE
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-text-dim tracking-widest uppercase">FEATURE MODULES</div>
                <div className="space-y-3">
                  {CAPABILITIES.map((cap) => (
                    <div
                      key={cap.title}
                      className="p-4 bg-bg-void border border-border-subtle rounded-xl group hover:border-opacity-40 transition-all duration-300"
                      style={{ "--cap-color": cap.color } as React.CSSProperties}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: cap.color, boxShadow: `0 0 6px ${cap.color}` }}
                        />
                        <div>
                          <h5
                            className="font-sans font-semibold text-base mb-1.5 group-hover:text-white transition-colors"
                            style={{ color: cap.color }}
                          >
                            {cap.title}
                          </h5>
                          <p className="font-mono text-xs text-text-dim leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
