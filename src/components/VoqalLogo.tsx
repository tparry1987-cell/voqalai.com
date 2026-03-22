export function VoqalLogo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const textFill = variant === "dark" ? "#f0ece6" : "#1A1A2E";
  const dividerStroke = variant === "dark" ? "rgba(255,255,255,0.1)" : "rgba(26,26,46,0.08)";

  return (
    <svg viewBox="0 0 295 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="wf-grad" x1="0" y1="15" x2="0" y2="75">
          <stop offset="0%" stopColor="#A0FCA2" />
          <stop offset="100%" stopColor="#87FB89" />
        </linearGradient>
      </defs>
      <rect x="0" y="27" width="8" height="22" rx="4" fill="url(#wf-grad)">
        <animate attributeName="height" values="22;7.7;22" dur="1.2s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="y" values="27;34.15;27" dur="1.2s" begin="0s" repeatCount="indefinite" />
      </rect>
      <rect x="13" y="19" width="8" height="38" rx="4" fill="url(#wf-grad)">
        <animate attributeName="height" values="38;13.3;38" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="19;31.35;19" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="26" y="11" width="8" height="54" rx="4" fill="url(#wf-grad)">
        <animate attributeName="height" values="54;18.9;54" dur="1.2s" begin="0.1s" repeatCount="indefinite" />
        <animate attributeName="y" values="11;28.55;11" dur="1.2s" begin="0.1s" repeatCount="indefinite" />
      </rect>
      <rect x="39" y="21" width="8" height="34" rx="4" fill="url(#wf-grad)">
        <animate attributeName="height" values="34;11.9;34" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="y" values="21;32.05;21" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="52" y="29" width="8" height="18" rx="4" fill="url(#wf-grad)">
        <animate attributeName="height" values="18;6.3;18" dur="1.2s" begin="0.15s" repeatCount="indefinite" />
        <animate attributeName="y" values="29;34.85;29" dur="1.2s" begin="0.15s" repeatCount="indefinite" />
      </rect>
      <line x1="76" y1="12" x2="76" y2="64" stroke={dividerStroke} strokeWidth="1" />
      <text x="94" y="52" fontFamily="'Geist Sans', system-ui, sans-serif" fontWeight="400" fontStyle="italic" fontSize="52" fill={textFill} letterSpacing="1">Voqal</text>
      <text x="230" y="52" fontFamily="'Geist Sans', sans-serif" fontWeight="300" fontSize="48" fill="#87FB89" letterSpacing="2">Ai</text>
      <circle cx="282" cy="47" r="4" fill="#87FB89">
        <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
