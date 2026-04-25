"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, PhoneOff, Play } from "lucide-react";

type Status = "idle" | "connecting" | "speaking" | "ended";

const SCRIPT = [
  "Hi there — I'm Alice, your Voqal AI receptionist.",
  "I answer every call in under two seconds, twenty-four hours a day.",
  "I book appointments, qualify leads, and route urgent enquiries straight to your team.",
  "No missed calls. No hold music. No lost revenue.",
];

const CLOSING = "That's me. Want your own Alice trained on your business?";

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;
  const prefs = [
    (v: SpeechSynthesisVoice) =>
      /en-GB/i.test(v.lang) && /female|zira|hazel|libby|sonia|google uk english female/i.test(v.name),
    (v: SpeechSynthesisVoice) => /en-GB/i.test(v.lang) && !/male/i.test(v.name),
    (v: SpeechSynthesisVoice) =>
      /en-/i.test(v.lang) && /female|samantha|google us english/i.test(v.name),
    (v: SpeechSynthesisVoice) => /en-/i.test(v.lang),
  ];
  for (const p of prefs) {
    const match = voices.find(p);
    if (match) return match;
  }
  return voices[0];
}

export function AliceDemo() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [line, setLine] = useState("");
  const [elapsed, setElapsed] = useState(0);

  const barsRef = useRef<number[]>(Array.from({ length: 9 }, () => 0.18));
  const [bars, setBars] = useState<number[]>(barsRef.current);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const scriptIdxRef = useRef(0);
  const activeRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => {
      voiceRef.current = pickVoice(window.speechSynthesis.getVoices());
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const animate = useCallback(() => {
    const tick = () => {
      for (let i = 0; i < barsRef.current.length; i++) {
        if (activeRef.current) {
          const centreBias = 1 - Math.abs(i - 4) / 6;
          const target = 0.25 + Math.random() * 0.75 * centreBias;
          barsRef.current[i] += (target - barsRef.current[i]) * 0.45;
        } else {
          const target = 0.16 + Math.sin(Date.now() / 600 + i * 0.6) * 0.05;
          barsRef.current[i] += (target - barsRef.current[i]) * 0.12;
        }
      }
      setBars([...barsRef.current]);
      rafRef.current = requestAnimationFrame(tick);
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopAll = useCallback(() => {
    activeRef.current = false;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const speakNext = useCallback(() => {
    const synth = window.speechSynthesis;
    if (scriptIdxRef.current >= SCRIPT.length) {
      activeRef.current = false;
      setStatus("ended");
      setLine(CLOSING);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    const text = SCRIPT[scriptIdxRef.current];
    setLine(text);
    const u = new SpeechSynthesisUtterance(text);
    if (voiceRef.current) u.voice = voiceRef.current;
    u.rate = 1.0;
    u.pitch = 1.05;
    u.volume = 1.0;
    u.onend = () => {
      scriptIdxRef.current += 1;
      setTimeout(() => {
        if (activeRef.current) speakNext();
      }, 280);
    };
    synth.speak(u);
  }, []);

  const startCall = useCallback(() => {
    setOpen(true);
    setStatus("connecting");
    setLine("");
    setElapsed(0);
    scriptIdxRef.current = 0;
    activeRef.current = false;
    animate();
    setTimeout(() => {
      setStatus("speaking");
      activeRef.current = true;
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
      speakNext();
    }, 900);
  }, [animate, speakNext]);

  const endCall = useCallback(() => {
    stopAll();
    setStatus("ended");
    setLine(CLOSING);
  }, [stopAll]);

  const close = useCallback(() => {
    stopAll();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setOpen(false);
    setStatus("idle");
    setLine("");
    setElapsed(0);
  }, [stopAll]);

  useEffect(() => {
    const onEvt = () => startCall();
    window.addEventListener("alice:open", onEvt);
    return () => window.removeEventListener("alice:open", onEvt);
  }, [startCall]);

  useEffect(() => () => stopAll(), [stopAll]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <>
      <button onClick={startCall} className="alice-trigger" aria-label="Hear Alice speak">
        <span className="alice-trigger-dot" aria-hidden="true" />
        <Play size={14} fill="currentColor" strokeWidth={0} />
        <span>Hear Alice speak</span>
      </button>

      {open && (
        <div className="alice-overlay" role="dialog" aria-modal="true" aria-label="Alice voice demo">
          <div className="alice-backdrop" onClick={close} aria-hidden="true" />
          <div className="alice-panel">
            <button className="alice-close" onClick={close} aria-label="Close">
              <X size={18} />
            </button>

            <div className="alice-avatar">
              <span className="alice-ring alice-ring-1" />
              <span className="alice-ring alice-ring-2" />
              <div className="alice-bars" aria-hidden="true">
                {bars.map((h, i) => (
                  <span key={i} style={{ transform: `scaleY(${0.12 + h * 0.88})` }} />
                ))}
              </div>
            </div>

            <div className="alice-meta">
              <div className="alice-name">
                Alice <span className="alice-badge">AI receptionist</span>
              </div>
              <div className="alice-status" data-status={status}>
                {status === "connecting" && (
                  <>
                    <span className="alice-pulse" />
                    Connecting…
                  </>
                )}
                {status === "speaking" && (
                  <>
                    <span className="alice-pulse alice-pulse-live" />
                    On call · {mm}:{ss}
                  </>
                )}
                {status === "ended" && "Call ended"}
              </div>
            </div>

            <p className="alice-line" aria-live="polite">
              {line || "\u00A0"}
            </p>

            <div className="alice-actions">
              {status !== "ended" ? (
                <button className="alice-end" onClick={endCall}>
                  <PhoneOff size={16} />
                  End call
                </button>
              ) : (
                <>
                  <a className="alice-primary" href="/contact">
                    Book your personalised demo →
                  </a>
                  <button className="alice-secondary" onClick={startCall}>
                    Hear again
                  </button>
                </>
              )}
            </div>

            <p className="alice-foot">Preview demo · browser voice · real Alice via Retell on request</p>
          </div>
        </div>
      )}
    </>
  );
}
