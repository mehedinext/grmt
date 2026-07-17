import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function FeesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Summer 2027</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#fff", marginBottom: 20 }}>Fees & Costs</h1>
            <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: I }}>
              Full pricing information for GRMSC 2027 will be announced soon. Register your interest to be notified first.
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ background: "#fff", padding: "48px", textAlign: "center" }}>
              <h2 style={{ fontFamily: G, fontSize: "1.6rem", fontWeight: 500, color: green, marginBottom: 16 }}>Pricing Coming Soon</h2>
              <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 24px" }} />
              <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                The fee for GRMSC 2027 covers five days of intensive tuition, full board accommodation at Stamford School, all course materials, evening activities and the final showcase concert.
              </p>
              <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 32 }}>
                Full fee details and early-bird options will be published when applications formally open. Register your interest below to receive an email the moment fees are announced.
              </p>
              <Link href="/apply" className="btn-gold">Register Your Interest</Link>
            </div>

            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
              {[
                ["✓", "Tuition included"],
                ["✓", "Full board & accommodation"],
                ["✓", "Evening programme"],
                ["✓", "Final showcase concert"],
              ].map(([tick, item]) => (
                <div key={item} style={{ background: green, padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: gold, fontWeight: 700, fontSize: "1rem" }}>{tick}</span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontFamily: I }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
