import Link from "next/link";
import { VoqalLogo } from "./VoqalLogo";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-footer)", color: "#fff" }}>
      <div className="container section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <VoqalLogo className="h-9 w-auto mb-5" variant="dark" />
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 280 }}>
              Never miss another call. Intelligent voice agents serving businesses across the UK.
            </p>
            <a
              href="https://www.trustpilot.com/evaluate/voqalai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem" }}
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" fill="#00B67A"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem" }}>
                Review us on <span style={{ color: "#00B67A" }}>Trustpilot</span>
              </span>
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>Navigate</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem 1.5rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)" }}>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/about#faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Free Demo</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>Get in Touch</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)" }}>
              <a href="tel:+442039960962" className="hover:text-white transition-colors" style={{ display: "block" }}>020 3996 0962 (UK)</a>
              <a href="tel:+13322641587" className="hover:text-white transition-colors" style={{ display: "block" }}>+1 (332) 264-1587 (US)</a>
              <a href="mailto:info@voqalai.com" className="hover:text-white transition-colors" style={{ display: "block" }}>info@voqalai.com</a>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "0.25rem", paddingTop: "0.85rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <Link href="/privacy" className="hover:text-white transition-colors" style={{ display: "block" }}>Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors" style={{ display: "block" }}>Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ textAlign: "center", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", paddingTop: "2rem", paddingBottom: "2rem" }}>
            &copy; 2026 Voqal AI Ltd. Registered in England &amp; Wales. Company No. 17080303.
          </p>
        </div>
      </div>
    </footer>
  );
}
