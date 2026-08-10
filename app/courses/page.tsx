// Sanity migration: import courses from a groq fetch instead of data.ts
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../lib/data";
import { urlFor } from "../lib/image";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default async function CoursesPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <div style={{ background: green, padding: "72px 0 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.coursesPageEyebrow ?? "Summer 2027"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, maxWidth: 560, marginBottom: 20 }}>
              {settings?.coursesPageHeading ?? "Three Specialist Courses"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 500, fontFamily: I }}>
              {settings?.coursesPageSubtext ?? "Choose one discipline and immerse fully. Each course runs simultaneously across the residential week at Stamford School."}
            </p>
          </div>
        </div>

        {/* Course list */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 4 }}>
            {courses.map((c, i) => (
              <div key={c.title} style={{ background: "#fff", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", overflow: "hidden" }}>

                {/* Photo side */}
                <div style={{
                  position: "relative", minHeight: 360, overflow: "hidden",
                  order: i % 2 === 1 ? 2 : 1,
                }}>
                  <img
                    src={urlFor(c.image)} alt={c.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: c.imagePosition, display: "block", position: "absolute", inset: 0 }}
                  />
                  {/* Subtle number overlay */}
                  <div style={{ position: "absolute", bottom: 24, left: 28, fontFamily: G, fontSize: "5rem", fontWeight: 500, color: "rgba(255,255,255,0.15)", lineHeight: 1 }}>
                    {c.num}
                  </div>
                </div>

                {/* Text side */}
                <div style={{
                  padding: "48px clamp(28px, 4vw, 56px)",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  order: i % 2 === 1 ? 1 : 2,
                }}>
                  <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: I, fontWeight: 600, marginBottom: 12 }}>{c.grade}</p>
                  <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: 500, color: green, marginBottom: 16, lineHeight: 1.15 }}>{c.title}</h2>
                  <div style={{ width: 32, height: 2, background: gold, marginBottom: 20 }} />
                  <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.82, marginBottom: 28 }}>{c.excerpt}</p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    {c.highlights.map(h => (
                      <li key={h} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.85rem", color: green }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: gold, flexShrink: 0, display: "inline-block" }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link href={`/courses/${c.slug.current}`} className="btn-gold">Explore {c.title} →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#fff", padding: "clamp(56px, 8vw, 80px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 500, color: green, marginBottom: 12 }}>{settings?.coursesPageCtaHeading ?? "Ready to Apply?"}</h2>
              <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.8, fontFamily: I }}>{settings?.coursesPageCtaSubtext ?? "Applications for Summer 2027 open soon. Register your interest now to be first in line."}</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link href="/apply" className="btn-gold">Register Interest</Link>
              <Link href="/fees" className="btn-outline">View Fees</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
