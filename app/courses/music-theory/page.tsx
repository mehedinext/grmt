import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const blue = "#0A2F47";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function MusicTheoryPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        {/* Hero — theory blue */}
        <div style={{ background: blue, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Course — Music Theory</p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>Music Theory</h1>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480, fontSize: "0.95rem" }}>
                Unlock the language of music. An intensive residential week covering harmony, counterpoint, ear training and composition — including ABRSM Grade 5 crash course preparation.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/apply" className="btn-gold">Register Interest</Link>
                <Link href="/courses" className="btn-outline-white">All Courses</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[["Level", "Gr. 5–8+"], ["Duration", "5 Days"], ["Ages", "10–17"], ["Year", "2027"]].map(([label, value]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 20px" }}>
                  <div style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 8, fontFamily: I }}>{label}</div>
                  <div style={{ color: "#fff", fontFamily: G, fontSize: "1.5rem", fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            <div style={{ gridColumn: "span 2" }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: blue, marginBottom: 16 }}>About the Music Theory Course</h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 24 }} />
              <p style={{ color: "#3d5c51", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                Music theory is the foundation of musicianship — and this course goes far beyond exam preparation. Students explore the structures underpinning all music, from Bach chorales to contemporary composition, building skills that enhance every aspect of their musical life.
              </p>
              <p style={{ color: "#3d5c51", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
                A dedicated ABRSM Grade 5 crash course stream runs alongside the broader programme, giving students a fast-tracked route to this essential qualification.
              </p>

              <h3 style={{ fontFamily: G, fontSize: "1.4rem", fontWeight: 500, color: blue, marginBottom: 20 }}>Topics Covered</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                {["Four-part harmony", "Counterpoint & species", "Aural training & dictation", "Score reading", "Composition project", "Musical analysis", "ABRSM Grade 5–8 preparation", "Figured bass"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", padding: "12px 16px", border: "1px solid #e0dbd0", fontSize: "0.88rem", color: "#3d5c51" }}>
                    <span style={{ color: gold, flexShrink: 0 }}>✦</span>{t}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: blue, padding: "32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: "#fff", marginBottom: 20 }}>What's Included</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Daily theory seminars", "ABRSM Grade 5 crash course", "Ear training workshops", "Composition project", "Score study sessions", "Full board accommodation", "Pastoral support throughout"].map(item => (
                    <li key={item} style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                      <span style={{ color: gold, flexShrink: 0 }}>✦</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: gold, padding: "28px 32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: "#fff", marginBottom: 10 }}>Entry Requirements</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  Students should have a working knowledge of music notation. Approximately Grade 5 theory level or above recommended.
                </p>
              </div>
              <Link href="/apply" className="btn-gold" style={{ textAlign: "center", display: "block" }}>Register Interest</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
