"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogIndex() {
  // Animation variants
  const containerVariants = {
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
    <div className="min-h-screen py-12 sm:py-24 bg-jp-paper relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 w-full"
      >
        {/* Navigation back */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-jp-gray-dark hover:text-jp-red transition-colors mb-16"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-bold font-sans text-jp-ink">
              Blog <span className="text-brand-gradient">/</span>
            </h1>
          </div>
          <div className="thin-divider mt-4" />
        </motion.div>

        {/* Simplified coming soon block */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="red-dot mb-4 animate-pulse" />
          <p className="text-lg font-serif text-jp-gray-dark tracking-wide">
            Articles coming soon.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
