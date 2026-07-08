"use client";

import Link from "next/link";
import { Mail, Zap } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-deep relative overflow-hidden">
      {/* Top neon line */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-neon-cyan/30 rounded-sm flex items-center justify-center">
              <Zap className="w-3 h-3 text-neon-cyan/60" />
            </div>
            <span className="font-sans font-bold text-sm tracking-widest text-text-dim">
              LEO<span className="text-neon-cyan/60">.</span>DARSHAN
            </span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-text-dim tracking-widest uppercase text-center">
            © {currentYear} LEODARSHAN.COM // ALL RIGHTS RESERVED
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:luciferdarshan@proton.me"
              className="p-2 border border-border-subtle rounded-xl text-text-dim hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
              aria-label="Email"
              id="footer-email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/luciferdarshan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border-subtle rounded-xl text-text-dim hover:text-neon-violet hover:border-neon-violet/30 transition-all duration-300"
              aria-label="GitHub"
              id="footer-github"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="mt-8 pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-text-dim tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_6px_rgba(0,255,136,0.8)] animate-pulse" />
            SYSTEM ONLINE // NEXT.JS + TAILWIND CSS
          </div>
          <div className="font-mono text-[8px] text-text-dim tracking-widest">
            <Link href="/blog" className="hover:text-neon-cyan transition-colors">BLOG</Link>
            <span className="mx-2 text-border-subtle">//</span>
            <Link href="/#about" className="hover:text-neon-cyan transition-colors">ABOUT</Link>
            <span className="mx-2 text-border-subtle">//</span>
            <Link href="/#contact" className="hover:text-neon-cyan transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
