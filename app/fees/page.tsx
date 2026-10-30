import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { getSiteSettings, sanityClient, queries } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export const revalidate = 60;

export default async function FeesPage() {
  const [settings, sanityCourses] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.courses).catch(() => []),
  ]);

  const courses: any[] = (sanityCourses || []) as any[];

  const verticalWords: string[] = settings?.feesVerticalWords?.length
    ? settings.feesVerticalWords
    : ["MUSIC", "PEOPLE", "PLACES", "POTENTIAL"];
  const inclusions: string[] = settings?.feesCourseInclusions?.length
    ? settings.feesCourseInclusions
    : ["Room & Board", "Meals", "Activities", "Academic Materials"];
  const inclusionLabel = settings?.feesCourseInclusionLabel ?? "ALL-INCLUSIVE COURSE FEE";
  const footerNote = settings?.feesCourseFooterNote ?? "Residential experience included.";

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* ─── HERO ─── */}
        <section className="tf-hero" style={{ position: "relative", background: green, overflow: "hidden", minHeight: 360 }}>
          {settings?.feesHeroImage && (
            <>
              <img src={settings.feesHeroImage} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${green} 0%, rgba(8,47,39,0.85) 40%, rgba(8,47,39,0.4) 75%, rgba(8,47,39,0.1) 100%)`, zIndex: 1 }} />
            </>
          )}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 4vw, 48px)" }}>
            <div className="tf-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
              <div style={{ maxWidth: 620 }}>
                <p style={{ color: gold, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I, fontWeight: 600 }}>
                  {settings?.feesPageEyebrow ?? "SUMMER 2027"}
                </p>
                <h1 style={{ fontFamily: G, fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
                  {settings?.feesPageHeading ?? "Tuition & Fees"}
                </h1>
                <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.75, fontFamily: I }}>
                  {settings?.feesPageSubtext ?? "Three specialist courses. One unforgettable residential experience. Each course has its own tuition fee, with the same all-inclusive residential package for every student."}
                </p>
              </div>
              <div className="tf-vertical-words" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, paddingTop: 8 }}>
                {verticalWords.map((w: string, i: number) => (
                  <span key={i} style={{ color: gold, fontFamily: I, fontSize: "0.72rem", letterSpacing: "0.3em", fontWeight: 600 }}>{w}</span>
                ))}
                <div style={{ width: 32, height: 2, background: gold, marginTop: 8 }} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── COURSE FEES SECTION ─── */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div className="tf-courses-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>

              {/* Left — Intro column */}
              <div>
                <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I, fontWeight: 600 }}>
                  {settings?.feesCourseEyebrow ?? "COURSE FEES"}
                </p>
                <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: 500, color: green, lineHeight: 1.15, marginBottom: 20 }}>
                  {settings?.feesCourseHeading ?? "Choose your specialist course"}
                </h2>
                <div style={{ width: 40, height: 2, background: gold, marginBottom: 22 }} />
                <p style={{ color: "#3d5c51", fontSize: "0.92rem", lineHeight: 1.85, fontFamily: I }}>
                  {settings?.feesCourseIntro ?? "All courses include the same residential experience, with accommodation, meals, activities and course materials. The tuition fee differs by discipline, reflecting the specialist teaching, facilities and resources each course provides."}
                </p>
              </div>

              {/* Right — 3 course cards */}
              <div className="tf-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {courses.map((c: any) => (
                  <div key={c._id} style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
                    <div style={{ aspectRatio: "4/3", overflow: "hidden", background: green }}>
                      {c.image ? (
                        <img
                          src={c.image}
                          alt={c.title}
                          style={{
                            width: "100%", height: "100%",
                            objectFit: "cover",
                            objectPosition: c.imagePosition ?? "center",
                            display: "block",
                          }}
                        />
                      ) : null}
                    </div>
                    <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontFamily: G, fontSize: "1.35rem", fontWeight: 500, color: green, marginBottom: 6 }}>{c.title}</h3>
                      <p style={{ color: gold, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: I, fontWeight: 600, marginBottom: 14 }}>
                        {inclusionLabel}
                      </p>
                      <div style={{ fontFamily: G, fontSize: "2.4rem", color: green, fontWeight: 500, lineHeight: 1, marginBottom: 20 }}>
                        {c.price ?? "£?"}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                        {inclusions.map((item: string, i: number) => (
                          <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{
                              width: 18, height: 18, borderRadius: "50%", background: gold,
                              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                            }}>
                              <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </span>
                            <span style={{ color: green, fontSize: "0.84rem", fontFamily: I }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: "auto", paddingTop: 6 }}>
                        <Link href="/apply" style={{
                          display: "block", textAlign: "center",
                          background: gold, color: "#fff",
                          padding: "12px 20px",
                          fontFamily: I, fontSize: "0.78rem", fontWeight: 600,
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          textDecoration: "none",
                        }}>Apply Now</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── BOTTOM RESIDENTIAL BAND ─── */}
        <section style={{ background: "#efe9dd", padding: "clamp(32px, 4vw, 44px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div className="tf-bottom-band" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 32, alignItems: "center" }}>
              {/* Left — icon + title */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 220 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 22L24 10l16 12v18H8V22z" />
                  <path d="M20 40V28h8v12" />
                </svg>
                <p style={{ color: green, fontSize: "0.78rem", fontFamily: I, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", lineHeight: 1.5 }}>
                  {settings?.feesBottomBandTitle ?? "THE SAME RESIDENTIAL EXPERIENCE FOR EVERY COURSE"}
                </p>
              </div>

              {/* Middle — body */}
              <p style={{ color: "#3d5c51", fontSize: "0.85rem", lineHeight: 1.75, fontFamily: I }}>
                {settings?.feesBottomBandBody ?? "No matter which course you choose, every student enjoys the full Green Room residential experience. The only difference is the tuition fee, which varies by discipline."}
              </p>

              {/* Right — 4 small icon items */}
              <div className="tf-mini-icons" style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 24 }}>
                {[
                  { label: "Room & Board", svg: <><path d="M3 9l9-7 9 7v12H3V9z"/><path d="M9 21v-7h6v7"/></> },
                  { label: "Meals",        svg: <><path d="M8 2v8M12 2v8M16 2v8"/><path d="M4 10h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"/></> },
                  { label: "Activities",   svg: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></> },
                  { label: "Academic Materials", svg: <><path d="M4 4v16h16V4H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></> },
                ].map((m, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 4px" }}>
                      {m.svg}
                    </svg>
                    <span style={{ color: green, fontSize: "0.66rem", fontFamily: I, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />

      <style>{`
        @media (max-width: 1024px) {
          .tf-courses-grid { grid-template-columns: 1fr !important; }
          .tf-cards { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important; }
          .tf-bottom-band { grid-template-columns: 1fr !important; text-align: left !important; }
          .tf-mini-icons { grid-template-columns: repeat(4, 1fr) !important; max-width: 480px; }
        }
        @media (max-width: 720px) {
          .tf-hero-grid { grid-template-columns: 1fr !important; }
          .tf-vertical-words { flex-direction: row !important; flex-wrap: wrap; align-items: flex-start !important; gap: 14px !important; margin-top: 24px; }
          .tf-cards { grid-template-columns: 1fr !important; }
          .tf-mini-icons { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
