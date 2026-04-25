"use client";

import { useEffect, useRef } from "react";

export function TrustpilotWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && (window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="69cec0f5c108581919706d66"
      data-style-height="52px"
      data-style-width="100%"
      data-token="d73adebf-9155-4b5c-b77f-966d5cddba85"
      suppressHydrationWarning
    >
      <a
        href="https://www.trustpilot.com/review/voqalai.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
}
