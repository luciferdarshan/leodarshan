"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const NAV_ITEMS = [
  { num: "01", label: "ABOUT", href: "/#about" },
  { num: "02", label: "SKILLS", href: "/#skills" },
  { num: "03", label: "PROJECTS", href: "/#projects" },
  { num: "04", label: "BLOG", href: "/blog" },
  { num: "05", label: "CONTACT", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (pathname === "/") {
        const sections = ["about", "skills", "projects", "contact"];
        let current = "";
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setIsOpen(false);
        const y = elem.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-void/85 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 border border-neon-cyan/50 rounded-sm flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300">
            <Zap className="w-3.5 h-3.5 text-neon-cyan" />
          </div>
          <span className="font-sans font-bold text-sm tracking-[0.25em] text-text-primary group-hover:text-neon-cyan transition-colors duration-300">
            LEO<span className="text-neon-cyan">.</span>DARSHAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isBlogLink = item.href === "/blog";
            const isActive = isBlogLink
              ? pathname.startsWith("/blog")
              : activeSection === item.href.replace("/#", "") && pathname === "/";
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <span className="text-neon-cyan/40 text-xs mr-1">{item.num}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-muted hover:text-neon-cyan transition-colors cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-bg-void/95 backdrop-blur-xl border-b border-border-subtle">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV_ITEMS.map((item) => {
              const isBlogLink = item.href === "/blog";
              const isActive = isBlogLink
                ? pathname.startsWith("/blog")
                : activeSection === item.href.replace("/#", "") && pathname === "/";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                  className={`flex items-center gap-3 py-3 border-b border-border-subtle font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive ? "text-neon-cyan" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                    <span className="text-neon-cyan/40 text-xs mr-1">{item.num}</span>
                  {item.label}
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_rgba(0,245,255,0.8)]" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
