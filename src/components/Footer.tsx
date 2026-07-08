"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-jp-border bg-jp-sumi py-10 relative z-10 select-none text-jp-gray-dark">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left copyright */}
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-jp-gray-dark">
          &copy; {currentYear} LEODARSHAN.COM // ALL RIGHTS RESERVED
        </div>

        {/* Right tech stack info */}
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-jp-gray-dark">
          ENGINE // NEXT.JS + TAILWIND
        </div>
      </div>
    </footer>
  );
}
