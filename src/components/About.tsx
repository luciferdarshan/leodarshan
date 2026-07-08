"use client";

import { motion } from "framer-motion";
import { User, Cpu, Globe, TrendingUp } from "lucide-react";

const INTERESTS = [
  { icon: Cpu, label: "Desktop Software", desc: "Building offline-first Linux apps" },
  { icon: Globe, label: "Japan & Travel", desc: "Culture, tech, and exploration" },
  { icon: TrendingUp, label: "Stocks & Crypto", desc: "Markets and financial tech" },
  { icon: User, label: "AI-Assisted Dev", desc: "Experimenting with AI tools" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 15 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-bg-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-neon-violet/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-neon-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="section-label mb-4">PERSONAL PROFILE</div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-text-primary">
            ABOUT <span className="text-neon-cyan glow-cyan">ME</span>
          </h2>
          <div className="neon-line mt-4 w-48" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Left: bio text */}
          <div className="space-y-8">
            {/* Profile card */}
            <motion.div variants={itemVariants} className="anime-card corner-brackets p-6 rounded-2xl">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border-subtle">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/5 border border-neon-cyan/30 flex items-center justify-center">
                  <User className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-sans font-bold text-base text-text-primary tracking-wide">LEO DARSHAN</div>
                  <div className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">Developer // Fedora Linux</div>
                </div>
                <div className="ml-auto status-active">ACTIVE</div>
              </div>

              {/* Bio */}
              <div className="space-y-4 font-sans text-sm text-text-muted leading-relaxed">
                <p>
                  I am a software developer focused on building <span className="text-text-primary">stable applications</span>. 
                  I prefer simple, direct solutions over complex configurations, which is why I run{" "}
                  <span className="text-neon-cyan font-semibold">Fedora Linux</span> as my daily workstation OS.
                </p>
                <p>
                  My development philosophy centers on <span className="text-neon-violet">locality</span> — 
                  keeping processes close to the hardware and user data on the device. Software should serve 
                  the user without requiring cloud dependencies or telemetry.
                </p>
                <p>
                  Currently learning <span className="text-neon-green font-semibold">web technologies</span> and 
                  experimenting with AI-assisted development workflows.
                </p>
              </div>
            </motion.div>

            {/* System info card */}
            <motion.div variants={itemVariants} className="anime-card p-6 font-mono text-sm rounded-2xl">
              <div className="text-xs text-neon-cyan/60 tracking-widest uppercase mb-4">SYS::INFO</div>
              <div className="space-y-3">
                {[
                  { key: "OS", val: "Fedora Linux" },
                  { key: "FOCUS", val: "Linux Desktop Apps" },
                  { key: "STACK", val: "TS, React, Electron, SQLite" },
                  { key: "LANG", val: "TypeScript / JavaScript" },
                  { key: "STATUS", val: "Building LeoBook POS" },
                ].map(({ key, val }) => (
                  <div key={key} className="flex items-baseline gap-2">
                    <span className="text-neon-cyan/50 w-20 shrink-0 text-sm">{key}</span>
                    <span className="text-text-dim text-sm">::</span>
                    <span className="text-text-primary text-sm">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: interest cards */}
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">
                INTEREST MODULES // ACTIVE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INTERESTS.map((interest, i) => (
                  <motion.div
                    key={interest.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="anime-card corner-brackets p-5 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bg-panel border border-border-subtle flex items-center justify-center mb-3 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/5 transition-all duration-300">
                      <interest.icon className="w-4 h-4 text-text-muted group-hover:text-neon-cyan transition-colors duration-300" />
                    </div>
                    <h3 className="font-sans font-semibold text-sm text-text-primary mb-1.5 tracking-wide">
                      {interest.label}
                    </h3>
                    <p className="font-mono text-xs text-text-dim leading-relaxed">
                      {interest.desc}
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/20 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
