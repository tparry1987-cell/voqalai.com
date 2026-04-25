import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-footer)", color: "rgba(255,255,255,0.7)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2.5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }} className="text-3xl text-white leading-none">Voqal</span>
              <span className="text-2xl font-semibold leading-none" style={{ color: "var(--accent)" }}>Ai</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 320, marginBottom: "1.25rem" }}>
              The AI receptionist for UK businesses. Answering every call, 24/7. From &pound;197/month. No contracts.
            </p>
            <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              <div><a href="tel:+442039960962" className="hover:text-white transition-colors">020 3996 0962</a> <span style={{ color: "rgba(255,255,255,0.3)" }}>&middot; UK</span></div>
              <div><a href="tel:+13322641587" className="hover:text-white transition-colors">+1 (332) 264-1587</a> <span style={{ color: "rgba(255,255,255,0.3)" }}>&middot; US</span></div>
              <div><a href="mailto:info@voqalai.com" className="hover:text-white transition-colors">info@voqalai.com</a></div>
            </div>
            <a
              href="https://www.trustpilot.com/evaluate/voqalai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity mt-5"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" fill="#00B67A"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem" }}>
                Review us on <span style={{ color: "#00B67A" }}>Trustpilot</span>
              </span>
            </a>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>Product</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#services" className="hover:text-white transition-colors">Voice AI Agents</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">AI Chat Agents</Link></li>
              <li><Link href="/pricing#lead-reactivation" className="hover:text-white transition-colors">Lead Reactivation</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Free Demo</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>Legal</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>
          <div>&copy; 2026 Voqal AI Ltd (17080303) &middot; Registered: 71&ndash;75 Shelton Street, London, WC2H 9JQ</div>
          <div>UK English &middot; GDPR &amp; PECR compliant</div>
        </div>
      </div>
    </footer>
  );
}
