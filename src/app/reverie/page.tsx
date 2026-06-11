'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* 2. Asset mapping                                                    */
/* ------------------------------------------------------------------ */

const PORTAL_BG = 'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779974947/portal_bg_mu60k9.png';
const CURTAIN_LEFT = 'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975070/curtain_left_cdht6q.png';
const CURTAIN_RIGHT = 'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975071/curtain_right_a9bn3i.png';
const WORLD_BG = 'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975077/world_bg_jzzcn1.jpg';

// The cards MUST remain in this exact order (Card 3, Card 1, Card 2)
const CARD_IMAGES = [
  'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975070/card_3_nbwm25.jpg',
  'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975070/card_2_wr6al6.jpg', // Representing Card 1
  'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1779975070/card_1_jz8otj.jpg', // Representing Card 2
];

/* ------------------------------------------------------------------ */
/* 3. Math helpers + parallax magnitudes                               */
/* ------------------------------------------------------------------ */

const easeInOut = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const clamp = (val: number, min: number, max: number): number => Math.max(min, Math.min(max, val));

const MAG = {
  world: 6,
  portal: 7,
  curtainL: 14,
  curtainR: 14,
};

/* ------------------------------------------------------------------ */
/* Responsiveness hooks                                                */
/* ------------------------------------------------------------------ */

// Spec: media query max-width 767px
function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = () => setMobile(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

// Width tracker so we can split tablet (768–1099) from desktop (>=1100)
function useWidth(): number {
  const [w, setW] = useState(1280);
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return w;
}

/* ------------------------------------------------------------------ */
/* Small SVG / tile primitives                                         */
/* ------------------------------------------------------------------ */

function StarLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2l2.09 6.42H23l-5.45 3.97 2.08 6.42L14 14.84l-5.63 3.97 2.08-6.42L5 8.42h6.91L14 2z"
        fill="#ffffff"
      />
    </svg>
  );
}

function PlayIcon({ size = 38 }: { size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#ffffff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 10 12" fill="none" aria-hidden="true">
        <path d="M0 0l10 6-10 6V0z" fill="#0a0608" />
      </svg>
    </span>
  );
}

function ChevronDown({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 5l5 5 5-5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type CardKind = 'reel' | 'patrons';

function CardTile({ img, kind, size }: { img: string; kind: CardKind; size: number }) {
  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: 28,
        overflow: 'hidden',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
        boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
      }}
    >
      {/* glassmorphic bottom label */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)',
        }}
      >
        {kind === 'reel' ? (
          <>
            <PlayIcon size={Math.round(size * 0.24)} />
            <span
              style={{
                fontFamily: "'Imprima', sans-serif",
                fontSize: 13,
                color: '#fff',
                letterSpacing: '0.04em',
              }}
            >
              View Reel
            </span>
          </>
        ) : (
          <span
            style={{
              fontFamily: "'Viaoda Libre', serif",
              fontSize: Math.round(size * 0.17),
              lineHeight: 1.05,
              color: '#fff',
            }}
          >
            32 World Patrons
          </span>
        )}
      </div>
    </div>
  );
}

// The fixed card sequence: Card 3, Card 1, Card 2
const CARD_SEQUENCE: { img: string; kind: CardKind }[] = [
  { img: CARD_IMAGES[0], kind: 'reel' }, // Card 3
  { img: CARD_IMAGES[1], kind: 'patrons' }, // Card 1
  { img: CARD_IMAGES[2], kind: 'reel' }, // Card 2
];

/* ------------------------------------------------------------------ */
/* Slider dots                                                         */
/* ------------------------------------------------------------------ */

function SliderDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          style={{
            display: 'block',
            height: 4,
            width: i === 0 ? 28 : 14,
            borderRadius: 4,
            background: '#ffffff',
            opacity: i === 0 ? 0.95 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */

export default function ReveriePage() {
  const isMobile = useIsMobile();
  const width = useWidth();
  const isTablet = !isMobile && width < 1100;
  const isDesktop = width >= 1100;

  // Layer refs (driven imperatively in the rAF loop)
  const worldRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const curtainLRef = useRef<HTMLDivElement | null>(null);
  const curtainRRef = useRef<HTMLDivElement | null>(null);
  const heroScrollRef = useRef<HTMLDivElement | null>(null);
  const scene2Ref = useRef<HTMLDivElement | null>(null);

  // Mouse target + smoothed current position
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Entrance state
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const curtainsOpenRef = useRef(false);
  const [uiVisible, setUiVisible] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);

  useEffect(() => {
    curtainsOpenRef.current = curtainsOpen;
  }, [curtainsOpen]);

  /* -------- Smooth mouse tracking -------- */
  const onMove = useCallback((e: MouseEvent) => {
    target.current.x = clamp((e.clientX / window.innerWidth) * 2 - 1, -1, 1);
    target.current.y = clamp((e.clientY / window.innerHeight) * 2 - 1, -1, 1);
  }, []);

  /* -------- rAF render loop -------- */
  useEffect(() => {
    const tick = () => {
      // Lerp smoothed cursor towards target (step 0.07)
      current.current.x = lerp(current.current.x, target.current.x, 0.07);
      current.current.y = lerp(current.current.y, target.current.y, 0.07);
      const rx = current.current.x;
      const ry = current.current.y;

      // Normalized scroll progress 0..1
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const sp = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
      const eased = easeInOut(sp);

      // 1. World layer
      if (worldRef.current) {
        const worldScale = lerp(1, 1.18, sp);
        worldRef.current.style.transform = `scale(${worldScale}) translate3d(${rx * MAG.world}px, ${ry * MAG.world}px, 0)`;
      }

      // 2. Portal frame
      if (portalRef.current) {
        const portalScale = lerp(1, 7.5, sp);
        const portalOpacity = clamp(1 - (sp - 0.65) / 0.2, 0, 1);
        portalRef.current.style.transform = `scale(${portalScale}) translate3d(${rx * MAG.portal}px, ${ry * MAG.portal}px, 0)`;
        portalRef.current.style.opacity = String(portalOpacity);
      }

      // 3 & 4. Curtains
      const open = curtainsOpenRef.current;
      const totalShift = open ? lerp(62, 150, eased) : 0;
      const curtainScrollScale = open ? lerp(1, 1.3, eased) : 1;
      if (curtainLRef.current) {
        curtainLRef.current.style.transform = `translateX(calc(-${totalShift}% + ${rx * MAG.curtainL}px)) translateY(${ry * MAG.curtainL * 0.3}px) scale(${curtainScrollScale}) translateZ(0)`;
      }
      if (curtainRRef.current) {
        curtainRRef.current.style.transform = `translateX(calc(${totalShift}% + ${rx * MAG.curtainR}px)) translateY(${ry * MAG.curtainR * 0.3}px) scale(${curtainScrollScale}) translateZ(0)`;
      }

      // Scene 1 hero scroll-fade (inner layer; entrance handled by wrapper)
      if (heroScrollRef.current) {
        heroScrollRef.current.style.opacity = String(clamp(1 - sp / 0.22, 0, 1));
      }

      // Scene 2 fade-in
      if (scene2Ref.current) {
        const s2 = clamp((sp - 0.68) / 0.16, 0, 1);
        scene2Ref.current.style.opacity = String(s2);
        scene2Ref.current.style.pointerEvents = s2 > 0.01 ? 'auto' : 'none';
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
    };
  }, [onMove]);

  /* -------- Entrance timeline -------- */
  useEffect(() => {
    const t1 = window.setTimeout(() => setCurtainsOpen(true), 100); // curtains open
    const t2 = window.setTimeout(() => setUiVisible(true), 600); // UI fades in
    const t3 = window.setTimeout(() => setTransitionsEnabled(false), 2200); // kill entry transitions
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  const curtainTransition = transitionsEnabled
    ? 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)'
    : 'none';

  // Text colour: white on desktop, dark brown otherwise
  const heroTextColor = isDesktop ? '#ffffff' : '#3b1a0a';

  /* ---------------------------------------------------------------- */
  /* Hero content per breakpoint                                       */
  /* ---------------------------------------------------------------- */

  const heading = (
    <h1
      style={{
        fontFamily: "'Viaoda Libre', serif",
        fontWeight: 400,
        margin: 0,
        color: heroTextColor,
        letterSpacing: '0.02em',
        lineHeight: 1.02,
        fontSize: isDesktop ? 'clamp(44px, 5vw, 76px)' : isTablet ? '56px' : '42px',
      }}
    >
      FALL › INTO REVERIE
    </h1>
  );

  const paragraph = (maxWidth: number) => (
    <p
      style={{
        fontFamily: "'Imprima', sans-serif",
        margin: '18px 0 0',
        color: isDesktop ? 'rgba(255,255,255,0.82)' : 'rgba(59,26,10,0.78)',
        fontSize: isDesktop ? 17 : 15,
        lineHeight: 1.6,
        maxWidth,
      }}
    >
      Step through the veil into singular worlds, crafted frame by frame for those
      who chase wonder beyond the ordinary.
    </p>
  );

  let heroContent: React.ReactNode;

  if (isDesktop) {
    // Split-screen: text left, cards right
    heroContent = (
      <>
        <div style={{ position: 'absolute', top: '46%', left: 60, transform: 'translateY(-50%)', maxWidth: 440 }}>
          {heading}
          {paragraph(440)}
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: 40,
            transform: 'translateY(-50%)',
            display: 'flex',
            gap: 18,
          }}
        >
          {CARD_SEQUENCE.map((c, i) => (
            <CardTile key={i} img={c.img} kind={c.kind} size={158} />
          ))}
        </div>
      </>
    );
  } else if (isTablet) {
    // Centered column + 3-card row
    heroContent = (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          gap: 32,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {heading}
          {paragraph(400)}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {CARD_SEQUENCE.map((c, i) => (
            <CardTile key={i} img={c.img} kind={c.kind} size={150} />
          ))}
        </div>
      </div>
    );
  } else {
    // Mobile: centered column + single card
    heroContent = (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 22px',
          gap: 28,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {heading}
          {paragraph(280)}
        </div>
        <CardTile img={CARD_IMAGES[0]} kind="reel" size={220} />
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Render                                                            */
  /* ---------------------------------------------------------------- */

  const navLinkStyle: React.CSSProperties = {
    fontFamily: "'Imprima', sans-serif",
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: '0.12em',
    color: '#ffffff',
    opacity: 0.9,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      {/* 1. Typography & global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Imprima&family=Viaoda+Libre&display=swap');
        html { scrollbar-gutter: stable; }
        html, body { margin: 0; padding: 0; background: #0a0608; scroll-behavior: auto; }
        body { font-family: 'Imprima', sans-serif; }
        @keyframes bobUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Fixed 100vh stage.
          NOTE: the site-wide globals.css sets `overflow-x: hidden` on html/body,
          which silently disables `position: sticky` for descendants. We pin with
          `position: fixed` (unaffected by ancestor overflow) + a 480vh spacer for
          scroll length. */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 0,
          background: '#0a0608',
        }}
      >
          {/* World layer */}
          <div
            ref={worldRef}
            style={{
              position: 'absolute',
              inset: '-4%',
              zIndex: 1,
              backgroundImage: `url(${WORLD_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'transform',
            }}
          />

          {/* Portal frame */}
          <div
            ref={portalRef}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              backgroundImage: `url(${PORTAL_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transformOrigin: '52% 38%',
              willChange: 'transform, opacity',
            }}
          />

          {/* Curtain left */}
          <div
            ref={curtainLRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60%',
              height: '100%',
              zIndex: 3,
              backgroundImage: `url(${CURTAIN_LEFT})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              transformOrigin: 'left center',
              transition: curtainTransition,
              willChange: 'transform',
            }}
          />

          {/* Curtain right */}
          <div
            ref={curtainRRef}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '60%',
              height: '100%',
              zIndex: 3,
              backgroundImage: `url(${CURTAIN_RIGHT})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              transformOrigin: 'right center',
              transition: curtainTransition,
              willChange: 'transform',
            }}
          />

          {/* Navigation bar */}
          <nav
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '18px 20px' : '22px 48px',
              opacity: uiVisible ? 1 : 0,
              transition: 'opacity 0.9s ease 0.4s',
            }}
          >
            {isMobile ? (
              <>
                <a style={navLinkStyle}>Explore</a>
                <StarLogo size={26} />
                <a style={navLinkStyle}>Connect</a>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', gap: 28, flex: 1 }}>
                  <a style={navLinkStyle}>Worlds</a>
                  <a style={navLinkStyle}>Atelier</a>
                  <a style={navLinkStyle}>Immersions</a>
                </div>
                <StarLogo size={28} />
                <div style={{ display: 'flex', gap: 28, flex: 1, justifyContent: 'flex-end' }}>
                  <a style={navLinkStyle}>Craft</a>
                  <a style={navLinkStyle}>Codex</a>
                  <a style={navLinkStyle}>Connect</a>
                </div>
              </>
            )}
          </nav>

          {/* Scene 1 — Hero (entrance wrapper handles fade/slide-in) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 45,
              opacity: uiVisible ? 1 : 0,
              transform: uiVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
            }}
          >
            {/* Inner layer carries the scroll-fade opacity (set imperatively) */}
            <div ref={heroScrollRef} style={{ position: 'absolute', inset: 0 }}>
              {heroContent}

              {/* Slider dots */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 36,
                  left: isMobile ? '50%' : 60,
                  transform: isMobile ? 'translateX(-50%)' : 'none',
                }}
              >
                <SliderDots />
              </div>

              {/* Scroll cue */}
              {!isMobile && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 36,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Imprima', sans-serif",
                      textTransform: 'uppercase',
                      fontSize: 10,
                      letterSpacing: '0.22em',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    Descend
                  </span>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.4)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'bobUp 1.8s ease-in-out infinite',
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Scene 2 — Forge Beyond (fade-in via scroll) */}
          <div
            ref={scene2Ref}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 46,
              opacity: 0,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2
                style={{
                  fontFamily: "'Viaoda Libre', serif",
                  fontWeight: 400,
                  margin: 0,
                  fontSize: 'clamp(38px, 7vw, 78px)',
                  color: '#ffffff',
                  letterSpacing: '0.03em',
                  lineHeight: 1.05,
                  textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                }}
              >
                FORGE BEYOND THE REAL
              </h2>
              <p
                style={{
                  fontFamily: "'Imprima', sans-serif",
                  margin: '22px 0 0',
                  fontSize: isMobile ? 14 : 20,
                  maxWidth: isMobile ? 260 : 480,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.82)',
                }}
              >
                Singular voyages to astonishing destinations, shaped for those who seek
                beauty beyond the ordinary and the known.
              </p>
            </div>
          </div>
        </div>

      {/* Spacer creates the 480vh scroll length behind the fixed stage */}
      <div style={{ height: '480vh', flexShrink: 0 }} aria-hidden />
    </>
  );
}
