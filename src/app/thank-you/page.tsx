"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Cal) {
      window.Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "voqalai/discovery",
      });
    }
  }, []);

  return (
    <>
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Request Received</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Thank <span className="italic-accent">You.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 500, margin: "1rem auto 0" }}>
              Your demonstration request has been received. Our engineering team will be in touch within 48 hours to set up your personalised voice agent testing environment.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-padding section-alt container" style={{ paddingTop: "2rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="section-label">Skip the Wait</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Book a Call <span className="italic-accent">Now.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 500, margin: "0 auto" }}>
              Want to speak sooner? Pick a time that works for you and we&rsquo;ll call you directly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div id="cal-embed" style={{ maxWidth: 700, margin: "0 auto" }} />
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/" className="text-link">&larr; Return to homepage</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
