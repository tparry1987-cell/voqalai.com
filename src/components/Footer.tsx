import Link from "next/link";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string, boolean?]>;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map(([label, href, external]) => (
          <li key={label}>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cog-nav-link"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}
              >
                {label}
              </a>
            ) : (
              <Link href={href} className="cog-nav-link" style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        background: "#1a1a1a",
        color: "rgba(255,255,255,0.6)",
        padding: "48px 32px 36px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 40,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          paddingBottom: 32,
          marginBottom: 24,
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 1,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: 24, lineHeight: 1 }}>
              Voqal
            </span>
            <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1, color: "var(--cog-copper)" }}>Ai</span>
          </Link>
          <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", maxWidth: 320, margin: 0 }}>
            Helping businesses embrace AI. UK-based · global delivery.
          </p>
        </div>
        <FooterCol
          title="PRODUCT"
          links={[
            ["Voice Agents", "/voice-agents"],
            ["Industries", "/#industries"],
            ["Lead Reactivation", "/calculator"],
            ["Audit", "/audit"],
            ["Pricing", "/pricing"],
          ]}
        />
        <FooterCol
          title="COMPANY"
          links={[
            ["About", "/about"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
            ["Book Demo", "/book"],
            ["Trustpilot", "https://www.trustpilot.com/review/voqalai.com", true],
          ]}
        />
        <FooterCol
          title="LEGAL"
          links={[
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
          fontSize: 11,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>© 2026 Voqal AI Ltd · Company No. 17080303</span>
        <span>Built in Manchester · Serving businesses globally</span>
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 11,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
      </div>
    </footer>
  );
}
