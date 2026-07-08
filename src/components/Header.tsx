"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

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
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    // Scroll handling
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

    // Theme initialization
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setIsOpen(false);
        const yOffset = -80;
        const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-jp-paper/90 backdrop-blur-md border-b border-jp-border py-4"
          : "bg-jp-paper py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold text-sm tracking-wider font-sans text-jp-ink hover:opacity-85 transition-opacity"
        >
          LEO DARSHAN<span className="w-1.5 h-1.5 rounded-full bg-jp-red" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
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
                  className={`relative py-1 font-mono text-[10px] tracking-widest transition-colors duration-200 hover:text-jp-red ${
                    isActive ? "text-jp-red font-bold" : "text-jp-gray-dark"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-jp-sumi text-jp-gray-dark hover:text-jp-red transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile top tools */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-jp-sumi text-jp-gray-dark hover:text-jp-red transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={toggleMenu}
            className="flex items-center justify-center p-2 rounded text-jp-gray-dark hover:text-jp-red transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] bg-jp-paper border-t border-jp-border transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-8 gap-5 justify-start mt-6">
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
                className={`py-3 border-b border-jp-border font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-jp-red font-bold" : "text-jp-gray-dark hover:text-jp-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
