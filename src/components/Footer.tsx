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
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 280 }}>
              Never miss another call. Intelligent voice agents serving businesses across the UK.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>Navigate</h4>
            <div className="grid grid-cols-2 gap-3" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)" }}>
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
            <h4 style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>Get in Touch</h4>
            <div className="space-y-3" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)" }}>
              <a href="tel:+442039960962" className="block hover:text-white transition-colors">020 3996 0962 (UK)</a>
              <a href="tel:+13322641587" className="block hover:text-white transition-colors">+1 (332) 264-1587 (US)</a>
              <a href="mailto:info@voqalai.com" className="block hover:text-white transition-colors">info@voqalai.com</a>
              <Link href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>

        {/* Trustpilot Badge */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
          <a
            href="https://www.trustpilot.com/review/voqalai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", transition: "border-color 0.3s" }}
            className="hover:border-white/20"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" fill="#00B67A"/>
            </svg>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: 500 }}>
              Review us on <span style={{ color: "#00B67A", fontWeight: 600 }}>Trustpilot</span>
            </span>
          </a>
        </div>

        <div className="mt-8">
          <p style={{ textAlign: "center", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em", paddingTop: "2rem", paddingBottom: "2rem" }}>
            &copy; 2026 Voqal AI Ltd. Registered in England &amp; Wales. Company No. 17080303.
          </p>
        </div>
      </div>
    </footer>
  );
}
