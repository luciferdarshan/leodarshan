"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  depth: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", depth: "3+ YEARS // USED IN LEOBOOK & PORTFOLIO" },
      { name: "JavaScript", depth: "4+ YEARS // CORE WEB STANDARD" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", depth: "3+ YEARS // LEOBOOK POS FRONTEND" },
      { name: "Next.js", depth: "2+ YEARS // PRODUCTION SITE ARCHITECTURE" },
      { name: "Tailwind CSS", depth: "2+ YEARS // UTILITY LAYOUT SYSTEMS" },
    ],
  },
  {
    category: "Desktop & Storage",
    items: [
      { name: "Electron", depth: "2+ YEARS // NATIVE OS WRAPPERS" },
      { name: "SQLite", depth: "2+ YEARS // LEOBOOK LOCAL DATABASE" },
    ],
  },
  {
    category: "Environment & Tools",
    items: [
      { name: "Fedora Linux", depth: "3+ YEARS // DEVELOPMENT WORKSTATION" },
      { name: "Git", depth: "4+ YEARS // REPOSITORY VERSION CONTROL" },
    ],
  },
];

export default function Skills() {
  const [hoveredDetail, setHoveredDetail] = useState<string | null>(null);

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

  return (
    <section id="skills" className="py-24 bg-jp-paper relative overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-12 sm:gap-16">
          {/* Left Column: Title & Intro */}
          <div className="w-full md:w-[35%] space-y-6 shrink-0">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-jp-ink">
                  Skills <span className="text-brand-gradient">/</span>
                </h2>
              </div>
              <div className="thin-divider mt-4" />
            </motion.div>

            {/* Monospace Annotation */}
            <div className="h-10">
              <AnimatePresence mode="wait">
                {hoveredDetail ? (
                  <motion.div
                    key={hoveredDetail}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="text-[9px] font-mono tracking-widest text-jp-red font-semibold uppercase leading-relaxed"
                  >
                    {hoveredDetail}
                  </motion.div>
                ) : (
                  <motion.div
                    key="default-annotation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-[9px] font-mono tracking-widest text-jp-gray-dark uppercase"
                  >
                    SKILLS MATRIX // HOVER TO REVEAL DEPTH
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p variants={itemVariants} className="font-sans text-xs sm:text-sm text-jp-gray-dark font-normal leading-relaxed">
              I select tools based on longevity and local execution efficiency. My stack is centered around web standards, native desktop wrappers, and lightweight databases.
            </motion.p>
          </div>

          {/* Right Column: Index List */}
          <div className="w-full md:w-[65%] space-y-8">
            {SKILL_GROUPS.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="pb-6 border-b border-jp-border last:border-b-0"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <h3 className="font-mono text-[9px] uppercase tracking-widest text-jp-ink font-semibold">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <motion.button
                      key={item.name}
                      onMouseEnter={() => setHoveredDetail(item.depth)}
                      onMouseLeave={() => setHoveredDetail(null)}
                      whileHover={{ scale: 1.02 }}
                      className="px-3 py-1.5 bg-jp-washi border border-jp-border hover:border-jp-red rounded-lg font-mono text-xs text-jp-ink transition-colors cursor-crosshair focus:outline-none focus:ring-1 focus:ring-jp-red"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
