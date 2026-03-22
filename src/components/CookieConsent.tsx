"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 999999,
      background: "var(--bg-footer)",
      padding: "1.5rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", margin: 0 }}>
        We use cookies to improve your experience. By continuing to use this site, you agree to our{" "}
        <Link href="/privacy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Privacy Policy</Link>.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookieConsent", "accepted");
          setVisible(false);
        }}
        style={{
          background: "var(--accent)",
          color: "#1A1A2E",
          border: "none",
          padding: "0.6rem 1.5rem",
          borderRadius: "20px",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-sans)",
        }}
      >
        Accept
      </button>
    </div>
  );
}
