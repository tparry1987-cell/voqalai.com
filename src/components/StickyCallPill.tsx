"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export function StickyCallPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = () => window.dispatchEvent(new CustomEvent("alice:open"));

  return (
    <button
      onClick={open}
      className={`sticky-call-pill${visible ? " is-visible" : ""}`}
      aria-label="Hear Alice speak"
    >
      <span className="sticky-call-dot" aria-hidden="true" />
      <Play size={13} fill="currentColor" strokeWidth={0} />
      <span>Hear Alice</span>
    </button>
  );
}
