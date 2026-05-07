"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GA_ID = "G-G2DTKVZ1VT";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined" || document.getElementById("ga-consent-loader")) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "ga-consent-loader";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (consent === "accepted") {
      loadGoogleAnalytics();
    }

    if (!consent) {
      // Show on next frame for smooth slide-in
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  if (!visible && typeof window !== "undefined" && localStorage.getItem("cookieConsent")) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        background: "#070908",
        padding: "1.1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="cookie-banner"
    >
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", margin: 0, flex: 1, maxWidth: 640, lineHeight: 1.5 }}>
        We use cookies to improve your experience. See our{" "}
        <Link href="/privacy" style={{ color: "#f4b08b", textDecoration: "underline", textUnderlineOffset: "3px" }}>Privacy Policy</Link>.
      </p>
      <div className="cookie-actions" style={{ display: "flex", gap: "0.6rem", flexShrink: 0 }}>
        <button
          onClick={() => {
            localStorage.setItem("cookieConsent", "rejected");
            setVisible(false);
          }}
          style={{
            background: "transparent",
            color: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.25)",
            padding: "0.55rem 1.5rem",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontFamily: "inherit",
          }}
        >
          Reject
        </button>
        <button
          onClick={() => {
            localStorage.setItem("cookieConsent", "accepted");
            loadGoogleAnalytics();
            setVisible(false);
          }}
          style={{
            background: "#fff",
            color: "#111",
            border: "none",
            padding: "0.55rem 1.5rem",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontFamily: "inherit",
          }}
        >
          Accept
        </button>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .cookie-banner {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) !important;
            align-items: stretch !important;
            gap: 0.7rem !important;
            padding: 0.78rem 1rem calc(0.78rem + env(safe-area-inset-bottom)) !important;
          }
          .cookie-banner p {
            font-size: 0.78rem !important;
            line-height: 1.35 !important;
          }
          .cookie-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.5rem !important;
          }
          .cookie-banner button {
            width: 100% !important;
            padding: 0.58rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
