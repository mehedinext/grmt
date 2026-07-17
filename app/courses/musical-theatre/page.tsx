import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function MusicalTheatrePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Course — Musical Theatre</p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>Musical Theatre</h1>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480, fontSize: "0.95rem" }}>
                Find your voice on stage. Singing, acting, movement and stagecraft combined into one week-long performing arts experience culminating in a live showcase performance.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/apply" className="btn-gold">Register Interest</Link>
                <Link href="/courses" className="btn-outline-white">All Courses</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[["Level", "All"], ["Duration", "5 Days"], ["Ages", "10–17"], ["Year", "2027"]].map(([label, value]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 20px" }}>
                  <div style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 8, fontFamily: I }}>{label}</div>
                  <div style={{ color: "#fff", fontFamily: G, fontSize: "1.5rem", fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            <div style={{ gridColumn: "span 2" }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: green, marginBottom: 16 }}>About the Musical Theatre Course</h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 24 }} />
              <p style={{ color: "#3d5c51", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                Our Musical Theatre course is a full performing arts experience. Students work across singing, acting, movement and stagecraft — discovering and developing their performance identity in a supportive, creative environment.
              </p>
              <p style={{ color: "#3d5c51", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
                The week builds toward a final showcase performance, giving students a real stage experience before an audience of families and fellow students. No prior stage experience required — only enthusiasm and commitment.
              </p>

              <h3 style={{ fontFamily: G, fontSize: "1.4rem", fontWeight: 500, color: green, marginBottom: 20 }}>A Typical Day</h3>
              <div>
                {[
                  ["09:00", "Morning vocal warm-up"],
                  ["09:30", "Acting class & scene study"],
                  ["11:00", "Movement & choreography"],
                  ["14:00", "Song performance workshop"],
                  ["15:30", "Ensemble rehearsal"],
                  ["19:30", "Showcase rehearsal or evening social"],
                ].map(([time, activity]) => (
                  <div key={time} style={{ display: "flex", gap: 24, alignItems: "flex-start", borderBottom: "1px solid #e0dbd0", padding: "14px 0" }}>
                    <span style={{ color: gold, fontSize: "0.78rem", fontFamily: "monospace", width: 44, flexShrink: 0, marginTop: 2 }}>{time}</span>
                    <span style={{ color: "#3d5c51", fontSize: "0.9rem" }}>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: green, padding: "32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: "#fff", marginBottom: 20 }}>{"What's Included"}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Vocal technique sessions", "Acting & scene study", "Choreography classes", "Stagecraft workshops", "Final showcase performance", "Full board accommodation", "Pastoral support throughout"].map(item => (
                    <li key={item} style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                      <span style={{ color: gold, flexShrink: 0 }}>✦</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: gold, padding: "28px 32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: "#fff", marginBottom: 10 }}>Entry Requirements</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  Open to all levels. No prior stage experience required — just enthusiasm, commitment and a love of performing.
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
