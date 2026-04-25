"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
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
        We use cookies to improve your experience. By continuing, you agree to our{" "}
        <Link href="/privacy" style={{ color: "#f4b08b", textDecoration: "underline", textUnderlineOffset: "3px" }}>Privacy Policy</Link>.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookieConsent", "accepted");
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
      <style jsx>{`
        @media (max-width: 640px) {
          .cookie-banner {
            flex-direction: column !important;
            gap: 0.75rem !important;
            padding: 1rem !important;
          }
          .cookie-banner button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
