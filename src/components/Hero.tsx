"use client";

import Link from "next/link";
import { ArrowRight, Terminal, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPED_STRINGS = [
  "Linux Desktop Apps",
  "Electron Applications",
  "Offline-First Software",
  "Open Source Tools",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  // Typing effect
  useEffect(() => {
    const current = TYPED_STRINGS[strIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStrIndex(s => (s + 1) % TYPED_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, strIndex]);

  // Generate floating particles
  useEffect(() => {
    const p = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-void data-grid-bg hex-pattern">
      {/* Animated background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/anime_hero_bg.jpg"
          alt="Futuristic Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-void/60 via-bg-void/40 to-bg-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-void/80 via-transparent to-bg-void/80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-neon-cyan/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + p.delay,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Horizontal scan lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0 h-px opacity-5"
            style={{ top: `${y}%`, background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)" }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 py-20">

        {/* Left - Text Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex"
          >
            <span className="status-active">SYSTEM ONLINE // PORTFOLIO v2.0</span>
          </motion.div>

          {/* HUD terminal label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 font-mono text-xs text-text-dim uppercase tracking-widest"
          >
            <Terminal className="w-3 h-3 text-neon-cyan" />
            <span>UNIT::IDENTIFICATION — LEO_DARSHAN</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-[1.05] tracking-tight"
          >
            <span className="block text-text-primary">HI, I'M</span>
            <span
              className="block text-neon-cyan glitch"
              data-text="LEO DARSHAN"
            >
              LEO DARSHAN
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-neon-cyan/60" />
            <p className="font-mono text-sm text-text-muted">
              I BUILD{" "}
              <span className="text-neon-violet font-bold">
                {typedText}
                <span className="typing-cursor" />
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base text-text-muted font-sans leading-relaxed max-w-lg"
          >
            Software developer focused on building stable, offline-first Linux desktop 
            applications. Currently building{" "}
            <span className="text-neon-cyan font-semibold">LeoBook</span>
            {" "}— an offline billing and inventory app.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              href="/#projects"
              onClick={scrollToProjects}
              className="cyber-btn cyber-btn-solid group"
              id="hero-view-projects"
            >
              VIEW PROJECTS
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              onClick={scrollToContact}
              className="cyber-btn group"
              id="hero-contact"
            >
              GET IN TOUCH
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
              { val: "4+", label: "YEARS CODING" },
              { val: "1", label: "ACTIVE PROJECT" },
              { val: "∞", label: "CAFFEINE UNITS" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-sans font-bold text-xl text-neon-cyan glow-cyan">{stat.val}</div>
                <div className="font-mono text-xs text-text-dim tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Avatar HUD */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer ring */}
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-dashed border-neon-cyan/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Dot on ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-cyan energy-pulse" />
            </motion.div>

            {/* Second rotating ring */}
            <motion.div
              className="absolute inset-[-8px] rounded-full border border-neon-violet/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Avatar container */}
            <div className="relative w-full h-full rounded-full overflow-hidden hologram-border p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-bg-panel">
                <Image
                  src="/avatar.jpg"
                  alt="Leo Darshan"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  priority
                />
                {/* Scan line overlay */}
                <div className="absolute inset-0 hud-scan pointer-events-none" />
              </div>
            </div>

            {/* HUD corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-neon-cyan" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-neon-cyan" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-neon-cyan" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-neon-cyan" />

            {/* Floating HUD labels */}
            <motion.div
              className="absolute -right-24 top-8 bg-bg-panel/80 border border-border-subtle px-3 py-1.5 rounded-sm"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">FEDORA</div>
              <div className="font-mono text-[10px] text-text-dim">LINUX</div>
            </motion.div>

            <motion.div
              className="absolute -left-24 bottom-8 bg-bg-panel/80 border border-border-subtle px-3 py-1.5 rounded-sm"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <div className="font-mono text-xs text-neon-violet tracking-widest uppercase">ELECTRON</div>
              <div className="font-mono text-[10px] text-text-dim">DEV</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs text-text-dim tracking-widest uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-neon-cyan group-hover:text-neon-violet transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
