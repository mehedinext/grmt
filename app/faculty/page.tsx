import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const faculty = [
  {
    name: "Dr. Eleanor Shaw",
    role: "Piano — Head of Keyboard Studies",
    bio: "Eleanor studied at the Royal Academy of Music and holds a Doctorate in Performance from the Guildhall School. She has performed across Europe and is a respected ABRSM examiner. She brings warmth, rigour and inspiration to every lesson.",
    initials: "ES",
    img: "https://greenroomtheory.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-07-at-19.17.20_05536b0c.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Music Theory — Course Director",
    bio: "Marcus is a composer and educator with over fifteen years of experience teaching music theory at conservatoire level. His approach combines analytical depth with creative exploration, making complex concepts genuinely accessible.",
    initials: "MW",
    img: null,
  },
  {
    name: "Priya Nair",
    role: "Musical Theatre — Vocal Director",
    bio: "Priya trained at the London Academy of Music & Dramatic Art and has performed in West End productions. As a vocal director and singing teacher, she specialises in helping young performers unlock their authentic voice.",
    initials: "PN",
    img: null,
  },
  {
    name: "James Calloway",
    role: "Musical Theatre — Movement & Acting",
    bio: "James is a professional actor and movement director with credits in theatre, film and television. He leads acting and choreography sessions with creativity, patience and a gift for encouraging performers at every level.",
    initials: "JC",
    img: null,
  },
];

export default function FacultyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.15 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Meet the Team</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#fff", marginBottom: 20 }}>Our Faculty</h1>
            <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Green Room Summer Course brings together specialist educators and professional performers who share a passion for nurturing young talent.
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: 20 }}>
            {faculty.map((f) => (
              <div key={f.name} style={{ background: "#fff", display: "flex", overflow: "hidden", border: "1px solid #e0dbd0" }} className="card-hover">
                {f.img ? (
                  <div style={{ width: 110, flexShrink: 0 }}>
                    <img src={f.img} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ) : (
                  <div style={{ width: 80, flexShrink: 0, background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: G, fontSize: "1.4rem", color: gold }}>{f.initials}</span>
                  </div>
                )}
                <div style={{ padding: "24px" }}>
                  <h2 style={{ fontFamily: G, fontSize: "1.25rem", fontWeight: 500, color: green, marginBottom: 4 }}>{f.name}</h2>
                  <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontFamily: I }}>{f.role}</p>
                  <p style={{ color: "#5a7a6a", fontSize: "0.87rem", lineHeight: 1.7 }}>{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: green, padding: "72px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: "#fff", marginBottom: 16 }}>Learn from the Best</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
            Our faculty are selected for their expertise and their ability to inspire young musicians and performers.
          </p>
          <Link href="/apply" className="btn-gold">Register Interest</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
