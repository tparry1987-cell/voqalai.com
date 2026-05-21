"use client";

import { useEffect } from "react";

export function RetellWidget() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (document.getElementById("retell-widget")) return;
    const s = document.createElement("script");
    s.id = "retell-widget";
    s.src = "https://dashboard.retellai.com/retell-widget.js";
    s.type = "module";
    s.setAttribute("data-public-key", "public_key_692e22f82e27e1f57afe6");
    s.setAttribute("data-agent-id", "agent_42e2f4ee39b0f6db2cbe9db919");
    s.setAttribute("data-title", "Chat with Aria");
    s.setAttribute("data-color", "#db7c54");
    s.setAttribute("data-logo-url", "https://voqalai.com/favicon.png");
    s.setAttribute("data-bot-name", "Aria");
    s.setAttribute("data-popup-message", "Hi, I'm Aria! Got questions? I'm here to help.");
    s.setAttribute("data-show-ai-popup", "false");
    document.body.appendChild(s);

    let cancelled = false;
    let tries = 0;

    function retellCustomize() {
      if (cancelled) return;
      let host: HTMLElement | null = null;
      document.querySelectorAll("div").forEach((el) => {
        if ((el as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot && el.style.position === "fixed" && el.style.zIndex === "999999") {
          host = el;
        }
      });
      if (host && (host as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot) {
        const sr = (host as HTMLElement & { shadowRoot: ShadowRoot }).shadowRoot;
        if (!sr.querySelector("#voqal-retell-style")) {
          const style = document.createElement("style");
          style.id = "voqal-retell-style";
          style.textContent =
            ".retell-chat-window { max-height: 350px !important; height: 350px !important; } .retell-popup-container { bottom: 70px !important; right: 0 !important; } @media (max-width: 640px) { .retell-popup-container { display: none !important; } }";
          sr.appendChild(style);
        }
        const inp = sr.querySelector("input[placeholder], textarea[placeholder]") as HTMLInputElement | HTMLTextAreaElement | null;
        if (inp) inp.placeholder = "Ask us anything...";
      } else if (tries < 30) {
        tries += 1;
        setTimeout(retellCustomize, 500);
      }
    }
    setTimeout(retellCustomize, 1000);

    return () => {
      cancelled = true;
      s.remove();
    };
  }, []);

  return null;
}
