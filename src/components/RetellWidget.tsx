"use client";

import { useEffect } from "react";

export function RetellWidget() {
  useEffect(() => {
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

    function retellCustomize() {
      let host: HTMLElement | null = null;
      document.querySelectorAll("div").forEach((el) => {
        if ((el as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot && el.style.position === "fixed" && el.style.zIndex === "999999") {
          host = el;
        }
      });
      if (host && (host as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot) {
        const sr = (host as HTMLElement & { shadowRoot: ShadowRoot }).shadowRoot;
        const style = document.createElement("style");
        style.textContent =
          ".retell-chat-window { max-height: 350px !important; height: 350px !important; } #retell-fab { display: none !important; } .retell-popup-container { bottom: 70px !important; right: 0 !important; }";
        sr.appendChild(style);
        const inp = sr.querySelector("input[placeholder], textarea[placeholder]") as HTMLInputElement | HTMLTextAreaElement | null;
        if (inp) inp.placeholder = "Ask us anything...";
        const fab = sr.querySelector("#retell-fab") as HTMLElement | null;
        const btn = document.getElementById("voqalChatLauncher");
        if (btn && fab) {
          btn.addEventListener("click", () => fab.click());
          btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.08)";
            btn.style.boxShadow = "0 6px 28px rgba(219,124,84,0.55)";
          });
          btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "0 4px 20px rgba(219,124,84,0.4)";
          });
        }
      } else {
        setTimeout(retellCustomize, 500);
      }
    }
    setTimeout(retellCustomize, 1000);

    return () => { s.remove(); };
  }, []);

  return (
    <button
      id="voqalChatLauncher"
      aria-label="Chat with Aria"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000000,
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(135deg, #f4b08b, #db7c54)",
        boxShadow: "0 4px 20px rgba(219,124,84,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C10.6 4 3 10.4 3 18.2c0 4.5 2.4 8.5 6.2 11.2L7.5 36l7.2-3.6c1.7 0.4 3.4 0.6 5.3 0.6 9.4 0 17-6.4 17-14.2S29.4 4 20 4z" fill="white" opacity="0.95"/>
        <rect x="12" y="16" width="3" height="8" rx="1.5" fill="#db7c54"><animate attributeName="height" values="8;3;8" dur="1.2s" begin="0s" repeatCount="indefinite"/><animate attributeName="y" values="16;18.5;16" dur="1.2s" begin="0s" repeatCount="indefinite"/></rect>
        <rect x="17" y="13" width="3" height="14" rx="1.5" fill="#db7c54"><animate attributeName="height" values="14;5;14" dur="1.2s" begin="0.2s" repeatCount="indefinite"/><animate attributeName="y" values="13;17.5;13" dur="1.2s" begin="0.2s" repeatCount="indefinite"/></rect>
        <rect x="22" y="15" width="3" height="10" rx="1.5" fill="#db7c54"><animate attributeName="height" values="10;3.5;10" dur="1.2s" begin="0.1s" repeatCount="indefinite"/><animate attributeName="y" values="15;18.25;15" dur="1.2s" begin="0.1s" repeatCount="indefinite"/></rect>
        <rect x="27" y="17" width="3" height="6" rx="1.5" fill="#db7c54"><animate attributeName="height" values="6;2;6" dur="1.2s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="y" values="17;19;17" dur="1.2s" begin="0.3s" repeatCount="indefinite"/></rect>
      </svg>
    </button>
  );
}
