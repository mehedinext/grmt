import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const courses = [
  {
    title: "Piano",
    href: "/courses/piano",
    grade: "Grade 4–8",
    color: "#082F27",
    img: "https://greenroomtheory.com/wp-content/uploads/2025/09/014-GreenRoomMusicTheorySummer2025-scaled.jpg",
    description: "An intensive week of daily piano lessons, masterclasses, ensemble work and an evening recital. Expert tuition from conservatoire-trained pianists.",
    highlights: ["Daily one-to-one lessons", "Group masterclasses", "Evening recital performance", "Sight-reading & technique workshops"],
  },
  {
    title: "Music Theory",
    href: "/courses/music-theory",
    grade: "Grade 5–8 & beyond",
    color: "#0A2F47",
    img: "https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg",
    description: "Harmony, counterpoint, ear training and composition. Includes a dedicated ABRSM Grade 5 crash course stream for students seeking this qualification.",
    highlights: ["Harmony & counterpoint", "Aural training & dictation", "ABRSM Grade 5 crash course", "Composition project"],
  },
  {
    title: "Musical Theatre",
    href: "/courses/musical-theatre",
    grade: "All levels welcome",
    color: "#082F27",
    img: "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
    description: "Singing, acting, movement and stagecraft combined. Students work toward a showcase performance on the final evening.",
    highlights: ["Vocal technique & performance", "Acting & scene study", "Movement & choreography", "Final showcase performance"],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Summer 2027</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#fff", marginBottom: 20 }}>Our Courses</h1>
            <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: I }}>
              Choose from three specialist tracks, each running simultaneously. Students select one course and immerse fully in their discipline.
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 4 }}>
            {courses.map((c, i) => (
              <div key={c.title} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", overflow: "hidden", border: "1px solid #e0dbd0" }}>
                <div style={{ background: c.color, order: i % 2 === 1 ? 2 : 1, minHeight: 280, position: "relative", overflow: "hidden" }}>
                  <img src={c.img} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4, position: "absolute", inset: 0 }} />
                  <div style={{ position: "relative", zIndex: 1, padding: "40px 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8, fontFamily: I }}>{c.grade}</p>
                    <h2 style={{ fontFamily: G, fontSize: "2rem", fontWeight: 500, color: "#fff", marginBottom: 16 }}>{c.title}</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 24 }}>{c.description}</p>
                    <Link href={c.href} className="btn-gold" style={{ alignSelf: "flex-start" }}>Explore {c.title}</Link>
                  </div>
                </div>
                <div style={{ background: "#fff", padding: "40px 36px", order: i % 2 === 1 ? 1 : 2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontFamily: G, fontSize: "1.25rem", fontWeight: 500, color: green, marginBottom: 24 }}>{"What's Included"}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                    {c.highlights.map(h => (
                      <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.9rem", color: "#3d5c51" }}>
                        <span style={{ color: gold, marginTop: 2, flexShrink: 0 }}>✦</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: green, padding: "72px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: "#fff", marginBottom: 12 }}>Ready to Apply?</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", marginBottom: 32 }}>Applications for Summer 2027 open soon · 19–23 July · Stamford School</p>
          <Link href="/apply" className="btn-gold">Register Your Interest</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
