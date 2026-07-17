import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Summer 2027</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#fff", marginBottom: 20 }}>Register Your Interest</h1>
            <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Applications for Summer 2027 open soon. Complete the form below to register your interest and be first to know when places become available. No payment required at this stage.
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <form style={{ background: "#fff", padding: "48px", display: "flex", flexDirection: "column", gap: 22 }}>
              <h2 style={{ fontFamily: G, fontSize: "1.6rem", fontWeight: 500, color: green, marginBottom: 8 }}>Application Form</h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 8 }} />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Student Name</label>
                  <input type="text" placeholder="Full name" style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", fontFamily: I }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Age</label>
                  <input type="number" min={10} max={17} placeholder="10–17" style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", fontFamily: I }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Parent / Guardian Name</label>
                  <input type="text" placeholder="Full name" style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", fontFamily: I }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Email Address</label>
                  <input type="email" placeholder="your@email.com" style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", fontFamily: I }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Which Course?</label>
                <select style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", color: "#5a7a6a", fontFamily: I }}>
                  <option value="">Select a course</option>
                  <option>Piano</option>
                  <option>Music Theory</option>
                  <option>Musical Theatre</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Current Level / Experience</label>
                <input type="text" placeholder="e.g. Grade 6 Piano, 2 years singing experience" style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", fontFamily: I }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: green, marginBottom: 8, fontFamily: I }}>Any Questions or Additional Information?</label>
                <textarea rows={4} placeholder="Dietary requirements, accessibility needs, DofE or Arts Award queries..." style={{ width: "100%", border: "1px solid #d8d3c8", padding: "13px 16px", fontSize: "0.88rem", outline: "none", resize: "none", fontFamily: I }} />
              </div>

              <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>Submit Interest</button>
              <p style={{ color: "#9aaa9e", fontSize: "0.75rem", textAlign: "center" }}>No payment required. We will be in touch when applications formally open for Summer 2027.</p>
            </form>

            <div style={{ marginTop: 32, background: green, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20 }}>
              {[["19–23 July 2027", "Dates"], ["Ages 10–17", "Who"], ["Stamford School", "Venue"], ["3 Courses", "Choice"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ color: gold, fontFamily: G, fontSize: "1rem", marginBottom: 4 }}>{val}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: I }}>{label}</div>
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
