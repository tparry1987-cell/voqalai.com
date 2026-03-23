"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { VoqalLogo } from "./VoqalLogo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ variant = "light" }: { variant?: "glass" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isGlass = variant === "glass";

  useEffect(() => {
    if (isGlass) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isGlass]);

  if (isGlass) {
    return (
      <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 lg:px-16 pt-6 sm:pt-10">
        <div className="liquid-glass flex items-center justify-between rounded-3xl px-5 sm:px-6 py-3" style={{ maxWidth: 900, margin: "0 auto", background: "rgba(0, 0, 0, 0.55)" }}>
          <Link href="/" className="flex items-center">
            <VoqalLogo className="h-8 sm:h-9 w-auto" variant="dark" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity" style={{ color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="hidden md:inline-block rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105" style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "#fff", background: "rgba(255,255,255,0.08)", letterSpacing: "0.04em" }}>
            Book Demo
          </Link>
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="block w-5 h-0.5 bg-white mb-1.5" />
            <span className="block w-5 h-0.5 bg-white mb-1.5" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
        {mobileOpen && (
          <div className="liquid-glass mt-2 rounded-2xl p-5 mx-auto" style={{ maxWidth: 900 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/80 text-sm">{l.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block mt-2 btn-accent rounded-full px-6 py-2.5 text-sm text-center">Book Demo</Link>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "1.5rem 4rem" : "2.5rem 4rem",
        background: scrolled ? "rgba(250, 248, 245, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,26,46,0.08)" : "none",
      }}
    >
      <div className="flex items-center justify-between" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" className="flex items-center">
          <VoqalLogo className="h-9 w-auto" variant="light" />
        </Link>
        <div className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--text-primary)", letterSpacing: "0.05em" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="hidden md:inline-block btn rounded-full">
          Book Demo
        </Link>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-stone-800 mb-1.5" />
          <span className="block w-5 h-0.5 bg-stone-800 mb-1.5" />
          <span className="block w-5 h-0.5 bg-stone-800" />
        </button>
      </div>
      {mobileOpen && (
        <div className="mt-4 p-5 bg-white rounded-xl border border-stone-100 shadow-lg md:hidden" style={{ maxWidth: 1200, margin: "1rem auto 0" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm" style={{ color: "var(--text-secondary)" }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block mt-2 btn rounded-full text-center">Book Demo</Link>
        </div>
      )}
    </nav>
  );
}
