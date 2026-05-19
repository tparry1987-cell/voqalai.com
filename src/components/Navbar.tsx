"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Voice Agents", href: "/voice-agents" },
  { label: "Industries", href: "/#industries" },
  { label: "Lead Reactivation", href: "/calculator" },
  { label: "Audit", href: "/audit" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const DARK_SECTION_IDS = ["hero", "industries", "crew", "industry-hero"];

function useSectionTone(defaultTone: "dark" | "light") {
  const [tone, setTone] = useState<"dark" | "light">(defaultTone);
  const pathname = usePathname();

  useEffect(() => {
    setTone(defaultTone);
    const onScroll = () => {
      const probeY = 80;
      const els = document.elementsFromPoint(window.innerWidth / 2, probeY);
      const section = els.find((el) => {
        if (el.tagName !== "SECTION" && el.tagName !== "FOOTER") return false;
        const cs = getComputedStyle(el);
        return cs.position !== "fixed";
      });
      if (!section) {
        setTone(defaultTone);
        return;
      }
      const id = (section as HTMLElement).id;
      if (DARK_SECTION_IDS.includes(id) || section.tagName === "FOOTER") {
        setTone("light");
      } else {
        setTone("dark");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, defaultTone]);

  return tone;
}

export function Navbar({ variant = "light" }: { variant?: "glass" | "light" }) {
  // Pages that start with a fixed cinematic hero default to "light" nav tone
  const defaultTone = variant === "glass" ? "light" : "dark";
  const tone = useSectionTone(defaultTone);
  const [mobileOpen, setMobileOpen] = useState(false);

  const color = tone === "light" ? "#ffffff" : "#1a1a1a";
  const border = tone === "light" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)";
  const phoneBg = tone === "light" ? "#ffffff" : "#1a1a1a";
  const phoneFg = tone === "light" ? "#1a1a1a" : "#ffffff";

  return (
    <nav
      className="cog-nav-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "transparent",
        borderBottom: `1px solid ${border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Brand */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: 1,
          color,
          transition: "color 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          Voqal
        </span>
        <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1, color: "var(--cog-copper)" }}>
          Ai
        </span>
      </Link>

      {/* Center links */}
      <div className="cog-nav-links-row" style={{ display: "flex", gap: 28 }}>
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="cog-nav-link"
            style={{
              fontSize: 12,
              letterSpacing: "0.02em",
              color,
              fontWeight: 500,
              transition: "opacity 0.22s ease, color 0.22s ease",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Right phone CTA */}
      <div className="cog-nav-phone-wrap">
        <a
          href="tel:+442039960962"
          style={{
            background: phoneBg,
            color: phoneFg,
            border: `1px solid ${phoneBg}`,
            borderRadius: 9999,
            padding: "10px 18px",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.02em",
            transition: "background 0.22s, color 0.22s, border-color 0.22s",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          020 3996 0962
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="cog-nav-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          padding: 8,
          cursor: "pointer",
        }}
      >
        <span style={{ display: "block", width: 22, height: 2, background: color, marginBottom: 4 }} />
        <span style={{ display: "block", width: 22, height: 2, background: color, marginBottom: 4 }} />
        <span style={{ display: "block", width: 22, height: 2, background: color }} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 16,
            right: 16,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.18)",
            borderRadius: 16,
            padding: 20,
            marginTop: 8,
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ padding: "10px 4px", fontSize: 14, color: "#1a1a1a" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+442039960962"
            style={{
              marginTop: 8,
              padding: "12px 16px",
              borderRadius: 9999,
              background: "#1a1a1a",
              color: "#fff",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            020 3996 0962
          </a>
        </div>
      )}
    </nav>
  );
}
