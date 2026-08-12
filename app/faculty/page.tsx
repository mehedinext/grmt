// Sanity migration: import tutors from a groq fetch instead of data.ts
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { tutors } from "../lib/data";
import { urlFor } from "../lib/image";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default async function FacultyPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <div style={{ background: green, padding: "72px 0 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.facultyPageEyebrow ?? "Meet the Team"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              {settings?.facultyPageHeading ?? "Our Tutors"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 500, fontFamily: I }}>
              {settings?.facultyPageSubtext ?? "GRMSC is led by two specialist educators and performers who share a commitment to inspiring the next generation of musicians."}
            </p>
          </div>
        </div>

        {/* Tutor profiles */}
        <section style={{ background: cream, padding: "clamp(72px, 10vw, 112px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: 80 }}>
            {tutors.map((t, i) => (
              <div
                key={t.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "clamp(40px, 6vw, 80px)",
                  alignItems: "center",
                }}
              >
                {/* Photo */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", order: i % 2 === 1 ? 2 : 1 }}>
                  <div style={{
                    width: 220, height: 220, borderRadius: "50%",
                    overflow: "hidden",
                    border: `4px solid ${gold}`,
                    boxShadow: "0 20px 60px rgba(8,47,39,0.15)",
                    marginBottom: 24,
                  }}>
                    <img
                      src={urlFor(t.image)}
                      alt={t.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontFamily: G, fontSize: "1.5rem", fontWeight: 500, color: green, marginBottom: 4 }}>{t.name}</h2>
                    <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: I, fontWeight: 600 }}>{t.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                  <div style={{ width: 32, height: 2, background: gold, marginBottom: 28 }} />
                  {t.bioFull.map((para, j) => (
                    <p key={j} style={{ color: "#3d5c51", fontSize: "0.95rem", lineHeight: 1.88, marginBottom: 18 }}>{para}</p>
                  ))}
                  <div style={{
                    marginTop: 32, display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#fff", border: `1px solid #e0dbd0`, padding: "12px 20px",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: gold, display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: I, fontSize: "0.78rem", color: "#5a7a6a", letterSpacing: "0.02em" }}>{t.teaches}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider quote */}
        <section style={{ background: "#fff", padding: "clamp(56px, 8vw, 80px) 0", textAlign: "center" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ width: 1, height: 48, background: gold, margin: "0 auto 32px" }} />
            <p style={{ fontFamily: G, fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", color: green, lineHeight: 1.65, fontStyle: "italic", marginBottom: 32 }}>
              &ldquo;{settings?.facultyPageQuote ?? "We believe every young musician deserves to experience what it feels like to truly inhabit the music — to own it, shape it, and share it."}&rdquo;
            </p>
            <p style={{ fontFamily: I, fontSize: "0.72rem", color: gold, textTransform: "uppercase", letterSpacing: "0.18em" }}>{settings?.facultyPageQuoteAttrib ?? "Will Fowler & Vivian Shiao"}</p>
            <div style={{ width: 1, height: 48, background: gold, margin: "32px auto 0" }} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: cream, padding: "64px 0", textAlign: "center" }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontWeight: 500, color: green, marginBottom: 12 }}>{settings?.facultyPageCtaHeading ?? "Study with Will & Vivian"}</h2>
          <p style={{ color: "#5a7a6a", fontSize: "0.88rem", marginBottom: 32, fontFamily: I }}>{settings?.facultyPageCtaSubtext ?? "Applications for Summer 2027 open soon · 19–23 July · Stamford School"}</p>
          <Link href="/apply" className="btn-gold">Apply Now</Link>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
