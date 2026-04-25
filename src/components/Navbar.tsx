"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

/**
 * Navbar variants:
 *  - "glass" — for home hero only (sits inside the fixed cinematic hero, dark backdrop)
 *  - "light" — for all inner pages (white pill nav always visible)
 *
 * On "glass" variant, a secondary "sticky white nav" fades in on scroll past hero,
 * so users always have a way to navigate once they leave the hero.
 */
export function Navbar({ variant = "light" }: { variant?: "glass" | "light" }) {
  const [scrollShow, setScrollShow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isGlass = variant === "glass";

  useEffect(() => {
    if (!isGlass) return;
    const onScroll = () => {
      setScrollShow(window.scrollY > window.innerHeight * 0.65);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isGlass]);

  const SerifLogo = (
    <>
      <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }} className="text-xl leading-none">Voqal</span>
      <span className="text-lg font-semibold leading-none" style={{ color: "var(--accent)" }}>Ai</span>
    </>
  );

  const LargeSerifLogo = (
    <>
      <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }} className="text-3xl leading-none">Voqal</span>
      <span className="text-3xl font-semibold leading-none -ml-1" style={{ color: "var(--accent-light)" }}>Ai</span>
    </>
  );

  if (isGlass) {
    // Hero dark nav (inside fixed hero) + scroll-triggered sticky white pill
    return (
      <>
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6 text-white">
          <Link href="/" className="flex items-center gap-2 blur-fade-up" style={{ animationDelay: "0ms" }}>
            {LargeSerifLogo}
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm text-white/85">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="blur-fade-up hover:text-white/60 transition-colors"
                style={{ animationDelay: `${100 + i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book"
            className="blur-fade-up liquid-glass rounded-full text-sm font-medium text-white px-4 md:px-5 py-2 inline-flex items-center hover:bg-white/5 transition-colors"
            style={{ animationDelay: "350ms" }}
          >
            Book Free Demo
          </Link>
        </nav>

        {/* Sticky white pill nav — appears after scrolling past hero */}
        <div className={`sticky-nav ${scrollShow ? "show" : ""}`} aria-label="Primary">
          <div className="sticky-nav-inner text-sm">
            <Link href="/" className="flex items-center gap-1.5">{SerifLogo}</Link>
            <div className="hidden md:flex items-center gap-6 font-medium" style={{ color: "#555" }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-black transition-colors">{l.label}</Link>
              ))}
            </div>
            <a href="tel:+442039960962" className="bg-black text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-800 transition-colors">
              020 3996 0962
            </a>
          </div>
        </div>

        {/* Mobile menu (only shows in glass mode on small screens) */}
        {mobileOpen && (
          <div className="liquid-glass mt-2 rounded-2xl p-5 mx-auto" style={{ maxWidth: 900 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/80 text-sm">{l.label}</Link>
            ))}
            <Link href="/book" onClick={() => setMobileOpen(false)} className="block mt-2 btn-accent rounded-full px-6 py-2.5 text-sm text-center">Book Demo</Link>
          </div>
        )}
      </>
    );
  }

  // "light" variant — white pill nav for all inner pages
  return (
    <nav className="pill-nav" aria-label="Primary">
      <div className="pill-nav-inner text-sm">
        <Link href="/" className="flex items-center gap-1.5">{SerifLogo}</Link>
        <div className="hidden md:flex items-center gap-6 font-medium" style={{ color: "#555" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-black transition-colors">{l.label}</Link>
          ))}
        </div>
        <a href="tel:+442039960962" className="bg-black text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-800 transition-colors">
          020 3996 0962
        </a>
        <button
          className="md:hidden ml-2 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "#111" }}
        >
          <span className="block w-5 h-0.5 mb-1" style={{ background: "#111" }} />
          <span className="block w-5 h-0.5 mb-1" style={{ background: "#111" }} />
          <span className="block w-5 h-0.5" style={{ background: "#111" }} />
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-2 p-5 rounded-2xl bg-white border border-black/10 shadow-lg md:hidden mx-4" style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-gray-700 hover:text-black">{l.label}</Link>
          ))}
          <Link href="/book" onClick={() => setMobileOpen(false)} className="block mt-3 btn rounded-full text-center">Book Free Demo</Link>
        </div>
      )}
    </nav>
  );
}
