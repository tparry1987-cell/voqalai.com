"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

let initialised = false;

function initPosthog() {
  if (initialised) return;
  if (typeof window === "undefined") return;
  if (!POSTHOG_KEY) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    session_recording: { maskAllInputs: true },
    persistence: "localStorage+cookie",
    opt_out_capturing_by_default: true,
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") ph.debug(false);
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "accepted") ph.opt_in_capturing();
    },
  });
  initialised = true;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initPosthog();

    const onConsentChange = () => {
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "accepted") posthog.opt_in_capturing();
      else posthog.opt_out_capturing();
    };
    window.addEventListener("cookieconsent:change", onConsentChange);
    window.addEventListener("storage", (e) => {
      if (e.key === "cookieConsent") onConsentChange();
    });
    return () => {
      window.removeEventListener("cookieconsent:change", onConsentChange);
    };
  }, []);

  useEffect(() => {
    if (!initialised || !pathname) return;
    if (posthog.has_opted_out_capturing()) return;
    posthog.capture("$pageview", { $current_url: window.location.href });
  }, [pathname]);

  return <>{children}</>;
}
