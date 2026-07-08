"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-28 bg-jp-paper overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 w-full z-10 flex flex-col items-center text-center"
      >
        {/* Avatar Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-full p-[3px] bg-jp-red shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-jp-paper">
              <Image
                src="/avatar.jpg"
                alt="Leo Darshan Avatar"
                width={210}
                height={210}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Area */}
        <div className="max-w-2xl space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-[55px] font-bold tracking-tight text-jp-ink leading-tight font-sans"
          >
            I build software and <br />
            make applications <span className="text-brand-gradient">that run locally.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-jp-gray-dark font-normal leading-relaxed max-w-xl mx-auto"
          >
            I am a software developer focused on building stable Linux desktop applications and learning modern software development.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center mt-10">
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("projects");
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="px-8 py-3.5 bg-jp-red hover:bg-jp-red-hover active:scale-95 transition-all text-xs font-semibold uppercase tracking-widest text-white rounded-full shadow-lg shadow-jp-red/10 flex items-center gap-2 cursor-pointer"
          >
            View Projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <Link
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("contact");
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="px-8 py-3.5 border border-jp-border hover:border-jp-red text-xs font-semibold uppercase tracking-widest text-jp-ink hover:bg-jp-sumi active:scale-95 transition-all rounded-full cursor-pointer"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
