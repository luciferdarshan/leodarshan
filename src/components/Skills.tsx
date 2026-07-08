"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, HardDrive, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  depth: string;
  level: number;
}

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  color: string;
  items: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    icon: Code2,
    color: "#00f5ff",
    items: [
      { name: "TypeScript", depth: "Used in LeoBook & Portfolio — primary language", level: 80 },
      { name: "JavaScript", depth: "Core web standard — 4+ years of usage", level: 85 },
    ],
  },
  {
    category: "Frameworks",
    icon: Layers,
    color: "#a855f7",
    items: [
      { name: "React", depth: "LeoBook POS frontend — component architecture", level: 78 },
      { name: "Next.js", depth: "Portfolio & web — production site architecture", level: 72 },
      { name: "Tailwind CSS", depth: "Utility-first layout systems — rapid UI", level: 80 },
    ],
  },
  {
    category: "Desktop & Storage",
    icon: HardDrive,
    color: "#00ff88",
    items: [
      { name: "Electron", depth: "Native OS wrappers — cross-platform desktop", level: 75 },
      { name: "SQLite", depth: "LeoBook local database — offline data storage", level: 70 },
    ],
  },
  {
    category: "Environment",
    icon: Terminal,
    color: "#ff2d9b",
    items: [
      { name: "Fedora Linux", depth: "Daily development workstation OS", level: 85 },
      { name: "Git", depth: "Repository version control — 4+ years", level: 82 },
    ],
  },
];

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

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [activeGroup, setActiveGroup] = useState<string>("Languages");

  const currentGroup = SKILL_GROUPS.find(g => g.category === activeGroup) || SKILL_GROUPS[0];

  return (
    <section id="skills" className="py-28 bg-bg-void relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 data-grid-bg opacity-60 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/2 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="section-label mb-4">CAPABILITIES INDEX</div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-text-primary">
            SKILL <span className="text-neon-violet glow-violet">MATRIX</span>
          </h2>
          <div className="neon-line mt-4 w-48 opacity-60" style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left: Category selector */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">SELECT MODULE</div>
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              const isActive = activeGroup === group.category;
              return (
                <button
                  key={group.category}
                  onClick={() => setActiveGroup(group.category)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left group ${
                    isActive
                      ? "border-opacity-60 bg-bg-card"
                      : "border-border-subtle bg-transparent hover:border-border-glow hover:bg-bg-card/50"
                  }`}
                  style={isActive ? { borderColor: group.color, boxShadow: `0 0 15px ${group.color}15` } : {}}
                  id={`skill-category-${group.category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={isActive ? { background: `${group.color}15`, border: `1px solid ${group.color}40` } : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: isActive ? group.color : "#3d6b8a" }} />
                  </div>
                  <div>
                    <div className={`font-sans font-semibold text-sm tracking-wide transition-colors ${isActive ? "text-text-primary" : "text-text-muted group-hover:text-text-primary"}`}>
                      {group.category}
                    </div>
                    <div className="font-mono text-xs text-text-dim tracking-wider">
                      {group.items.length} MODULES
                    </div>
                  </div>
                  {isActive && (
                    <div className="ml-auto w-1 h-1 rounded-full" style={{ background: group.color, boxShadow: `0 0 6px ${group.color}` }} />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right: Skill details */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="anime-card p-6 space-y-6"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
                  <currentGroup.icon className="w-5 h-5" style={{ color: currentGroup.color }} />
                  <div>
                    <div className="font-sans font-bold text-base text-text-primary">{currentGroup.category}</div>
                    <div className="font-mono text-xs text-text-dim tracking-widest uppercase">
                      {currentGroup.items.length} SKILLS LOADED
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {currentGroup.items.map((item) => (
                    <div
                      key={item.name}
                      className="space-y-2"
                      onMouseEnter={() => setHoveredSkill(item)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="skill-tag cursor-crosshair">
                          {item.name}
                        </span>
                        <span className="font-mono text-xs text-text-dim">{item.level}%</span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-px bg-border-subtle rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${currentGroup.color}, ${currentGroup.color}60)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover detail */}
                <div className="min-h-[32px]">
                  <AnimatePresence mode="wait">
                    {hoveredSkill ? (
                      <motion.div
                        key={hoveredSkill.name}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="p-4 bg-bg-panel border border-border-subtle rounded-xl"
                      >
                        <div className="font-mono text-xs" style={{ color: currentGroup.color }}>
                          &gt; {hoveredSkill.name.toUpperCase()} :: {hoveredSkill.depth}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-mono text-xs text-text-dim tracking-widest"
                      >
                        HOVER SKILL TAG TO INSPECT DETAILS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
