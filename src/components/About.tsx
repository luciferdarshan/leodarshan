"use client";

import { motion } from "framer-motion";

export default function About() {
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
    <section id="about" className="py-24 bg-jp-paper relative overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-12 sm:gap-16">
          
          {/* Left Column: Title & Meishi (Business Card) */}
          <div className="w-full md:w-[35%] space-y-6 shrink-0">
            {/* Title */}
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-jp-ink">
                  About Me <span className="text-brand-gradient">/</span>
                </h2>
              </div>
              <div className="thin-divider mt-4" />
            </motion.div>

            {/* Monospace Annotation */}
            <motion.div variants={itemVariants} className="text-[9px] font-mono tracking-widest text-jp-gray-dark uppercase">
              PERSONAL PROFILE // SYSTEM METADATA
            </motion.div>

            {/* Meishi Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="relative p-6 bg-jp-washi border border-jp-border rounded-xl select-none cursor-default max-w-sm hover:border-jp-red transition-colors duration-300"
            >
              {/* Logo Stamp/Seal */}
              <div className="absolute right-6 top-6 w-8 h-8 rounded-lg bg-jp-red flex items-center justify-center text-[10px] text-white font-bold select-none">
                DEV
              </div>

              {/* Card Content */}
              <div className="space-y-5 font-mono text-[10px] sm:text-[11px] text-jp-gray-dark">
                <div>
                  <span className="text-[9px] tracking-wider uppercase opacity-45 block mb-0.5">Developer</span>
                  <span className="text-jp-ink font-semibold text-xs tracking-wide">LEO DARSHAN</span>
                </div>

                <div className="thin-divider opacity-50" />

                <div className="space-y-3">
                  <div>
                    <span className="text-[8px] tracking-wider uppercase opacity-45 block">OS PLATFORM</span>
                    <span className="text-jp-ink font-medium">Fedora Linux</span>
                  </div>
                  <div>
                    <span className="text-[8px] tracking-wider uppercase opacity-45 block">CORE FOCUS</span>
                    <span className="text-jp-ink font-medium">Linux Desktop Apps</span>
                  </div>
                  <div>
                    <span className="text-[8px] tracking-wider uppercase opacity-45 block">STACK INDEX</span>
                    <span className="text-jp-ink font-medium">TS, React, Electron, SQLite</span>
                  </div>
                  <div>
                    <span className="text-[8px] tracking-wider uppercase opacity-45 block">INTERESTS</span>
                    <span className="text-jp-ink font-medium leading-relaxed">Stocks, Crypto, Travel</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Text */}
          <div className="w-full md:w-[65%] pt-0 md:pt-14 font-sans text-sm sm:text-base text-jp-ink font-normal leading-relaxed space-y-6">
            <motion.p variants={itemVariants} className="first-letter:text-3xl first-letter:font-sans first-letter:text-jp-red first-letter:float-left first-letter:mr-2 first-letter:font-bold">
              I am a software developer focused on building stable applications. I prefer simple, direct solutions over complex configurations, which is why I use Fedora Linux as my daily operating system and focus on crafting tools that solve direct needs.
            </motion.p>
            <motion.p variants={itemVariants}>
              My development philosophy centers on locality: keeping processes close to the hardware and user data close to the device. I believe software should serve the user without requiring constant telemetry or cloud dependencies. 
            </motion.p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
