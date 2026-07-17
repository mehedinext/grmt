import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const features = [
  { icon: "🏠", title: "Accommodation", desc: "Students stay in comfortable, supervised residential rooms at Stamford School. Single-sex accommodation with dedicated houseparents ensures a safe, homely environment throughout." },
  { icon: "🍽️", title: "Meals & Social Time", desc: "Three meals a day provided, with menus designed around nutritional needs and dietary requirements. Mealtimes are a highlight — a chance to connect with students from all three courses." },
  { icon: "🌙", title: "Evening Programme", desc: "Each evening features something special: student concerts, collaborative jams, film screenings, or social events that make the week unforgettable beyond the rehearsal room." },
  { icon: "🛡️", title: "Pastoral Care", desc: "A dedicated pastoral team is on hand 24/7. All staff hold enhanced DBS checks and our safeguarding policy meets the highest standards. Parents receive daily updates." },
  { icon: "🎵", title: "Practice Facilities", desc: "Students have supervised access to practice rooms throughout the day, so personal preparation time sits alongside the timetabled programme." },
  { icon: "🤝", title: "Community", desc: "One of the most valued outcomes is the friendships formed. Students leave with a peer network of fellow musicians and performers that often lasts for years." },
];

export default function ResidentialLifePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Life at Camp</p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>Residential Life</h1>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 480, fontSize: "0.95rem" }}>
                Green Room Summer Course is far more than a series of lessons. The residential experience — shared meals, evening events, late-night conversations about music — is where the magic really happens.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[["5 Days", "Full residential programme"], ["3 Meals", "Daily, all dietary needs catered"], ["24/7", "Pastoral support on site"], ["DBS Checked", "All staff, all sessions"]].map(([val, label]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 20px" }}>
                  <div style={{ color: gold, fontFamily: G, fontSize: "1.4rem", fontWeight: 500, marginBottom: 6 }}>{val}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: I }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontFamily: I }}>What to Expect</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, color: green }}>Everything Taken Care Of</h2>
              <div style={{ width: 36, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {features.map((f) => (
                <div key={f.title} style={{ background: "#fff", padding: "32px", borderTop: "3px solid #C89A3B" }} className="card-hover">
                  <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: green, marginBottom: 12 }}>{f.title}</h3>
                  <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section style={{ background: "#fff", padding: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[
              "https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg",
              "https://greenroomtheory.com/wp-content/uploads/2025/09/103-GreenRoomMusicTheorySummer2025-scaled.jpg",
              "https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg",
              "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
            ].map((src, i) => (
              <img key={i} src={src} alt="Life at GRMSC" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
            ))}
          </div>
        </section>

        <section style={{ background: green, padding: "72px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontFamily: I }}>The Week</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, color: "#fff" }}>A Typical Week at GRMSC</h2>
              <div style={{ width: 36, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 2 }}>
              {[
                { day: "Sat 19 Jul", highlight: "Arrivals & welcome concert" },
                { day: "Sun–Mon", highlight: "Intensive course sessions & evening events" },
                { day: "Tue", highlight: "Open masterclass & guest artist" },
                { day: "Wed 23 Jul", highlight: "Final showcase & farewell" },
              ].map((d) => (
                <div key={d.day} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", padding: "28px 24px" }}>
                  <div style={{ color: gold, fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontFamily: I }}>{d.day}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>{d.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: cream, padding: "72px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: green, marginBottom: 12 }}>Join Us for Summer 2027</h2>
          <p style={{ color: "#5a7a6a", fontSize: "0.88rem", marginBottom: 32 }}>Applications open soon · 19–23 July · Stamford School</p>
          <Link href="/apply" className="btn-gold">Register Your Interest</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
