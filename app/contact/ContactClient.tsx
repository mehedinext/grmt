"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMZ4lqBWovMnSUA0X7bh6HZOnb0bWPjQzsqVlHLZfx6IYh2Q/viewform";

type Settings = any;

export default function ContactClient({ settings }: { settings?: Settings }) {
  const email = settings?.footerContactEmail ?? "info@greenroomplace.com";
  const phone = settings?.footerContactPhone ?? "+44 7540 875262";

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO ── */}
        <section style={{ background: green, padding: "clamp(60px, 7vw, 96px) 0" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 600, fontFamily: I, marginBottom: 16 }}>Get in Touch</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Contact Us</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.8, maxWidth: 640 }}>
              Have a question about the camp, our courses or the application process? We would love to hear from you. Reach out using the details below, or start your application for Summer 2027.
            </p>
          </div>
        </section>

        {/* ── CONTACT GRID ── */}
        <section style={{ background: cream, padding: "clamp(56px, 7vw, 88px) 0" }}>
          <div className="contact-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "stretch" }}>

            {/* Left - Contact info */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: green, fontWeight: 500, marginBottom: 20 }}>Contact GRMSC</h2>
              <div style={{ width: 32, height: 2, background: gold, marginBottom: 22 }} />

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Email</p>
                <a href={`mailto:${email}`} style={{ fontFamily: G, fontSize: "1.1rem", color: green, textDecoration: "none" }}>{email}</a>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Phone</p>
                <a href={`tel:${phone.replace(/\s/g, "")}`} style={{ fontFamily: G, fontSize: "1.1rem", color: green, textDecoration: "none" }}>{phone}</a>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Venue</p>
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.95rem", lineHeight: 1.65 }}>Stamford School<br />Stamford, Lincolnshire, UK</p>
              </div>

              <div>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Dates</p>
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.95rem", lineHeight: 1.65 }}>19th - 23rd July 2027</p>
              </div>
            </div>

            {/* Right - Application CTA card */}
            <div style={{ position: "relative", background: green, color: "#fff", padding: "clamp(36px, 5vw, 56px)", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 4 }}>
              {/* Decorative music lines (SVG staff) */}
              <svg
                aria-hidden="true"
                width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none"
                style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1, pointerEvents: "none" }}
              >
                <g stroke={gold} strokeWidth="0.5" fill="none">
                  <path d="M 0 60 Q 200 40 400 60" />
                  <path d="M 0 90 Q 200 70 400 90" />
                  <path d="M 0 120 Q 200 100 400 120" />
                  <path d="M 0 150 Q 200 130 400 150" />
                  <path d="M 0 180 Q 200 160 400 180" />
                </g>
                {/* Music note */}
                <g fill={gold}>
                  <circle cx="320" cy="180" r="10" />
                  <rect x="328" y="100" width="2.5" height="82" />
                  <path d="M 328 100 Q 350 108 352 130 L 352 115 Q 348 100 328 100 Z" />
                </g>
              </svg>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 700, fontFamily: I, marginBottom: 14 }}>Summer 2027 · Applications Open</p>
                <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>Secure your place at GRMSC.</h2>
                <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
                <p style={{ color: "rgba(255,255,255,0.78)", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.8, marginBottom: 28 }}>
                  Five days of focused music-making at Stamford School for young pianists, singers and theory students aged 10-17. Complete our application form to begin the admissions process - it takes just a few minutes.
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Piano, Music Theory or Singing Performance",
                    "Full residential week at Stamford School",
                    "World-class faculty and small-group teaching",
                  ].map((t) => (
                    <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontFamily: I, fontSize: "0.92rem" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="3 8 7 12 13 4" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>

                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  Start Your Application
                  <span aria-hidden="true">↗</span>
                </a>

                <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: I, fontSize: "0.75rem", lineHeight: 1.6, marginTop: 22 }}>
                  Opens in a new tab · For course-specific questions, email us at <a href={`mailto:${email}`} style={{ color: gold, textDecoration: "underline" }}>{email}</a>.
                </p>
              </div>
            </div>

          </div>
        </section>

        <style>{`
          @media (max-width: 800px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

      </main>
      <Footer settings={settings} />
    </>
  );
}
