// Sanity migration: import courses from a groq fetch instead of data.ts
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../lib/data";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default async function ApplyPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        <div style={{ background: green, padding: "72px 0 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.applyPageEyebrow ?? "Summer 2027"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              {settings?.applyPageHeading ?? "Register Your Interest"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 500, fontFamily: I }}>
              {settings?.applyPageSubtext ?? "Applications open in early 2027. Register now to be first in line — no payment required at this stage."}
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* Form */}
            <div style={{ background: "#fff", padding: "clamp(32px, 5vw, 56px)" }}>
              <h2 style={{ fontFamily: G, fontSize: "1.6rem", fontWeight: 500, color: green, marginBottom: 8 }}>Interest Registration Form</h2>
              <div style={{ width: 32, height: 2, background: gold, marginBottom: 32 }} />

              <form style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, marginBottom: 2 }}>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Student Name</label>
                    <input type="text" placeholder="Full name" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green }} />
                  </div>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Age</label>
                    <input type="number" min={10} max={17} placeholder="10–17" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, marginBottom: 2 }}>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Parent / Guardian</label>
                    <input type="text" placeholder="Full name" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green }} />
                  </div>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, marginBottom: 2 }}>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Course</label>
                    <select style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green, appearance: "none" }}>
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c._id} value={c.slug.current}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ background: cream, padding: "20px 24px" }}>
                    <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Current Level</label>
                    <input type="text" placeholder="e.g. Grade 6 Piano" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", fontFamily: I, color: green }} />
                  </div>
                </div>

                <div style={{ background: cream, padding: "20px 24px", marginBottom: 2 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Questions or Additional Information</label>
                  <textarea rows={4} placeholder="Dietary requirements, accessibility needs, DofE or Arts Award queries..." style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "8px 0", fontSize: "0.9rem", outline: "none", resize: "none", fontFamily: I, color: green }} />
                </div>

                <div style={{ padding: "28px 0 0" }}>
                  <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center", cursor: "pointer" }}>Submit Registration</button>
                  <p style={{ color: "#9aaa9e", fontSize: "0.72rem", textAlign: "center", marginTop: 14, fontFamily: I }}>No payment required. We will be in touch when applications formally open for Summer 2027.</p>
                </div>
              </form>
            </div>
          </div>

          {/* Key facts strip */}
          <div style={{ maxWidth: 1200, margin: "4px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 2 }}>
            {[
              ["19–23 July 2027", "Dates"],
              ["Ages 10–17", "Who"],
              ["Stamford School", "Venue"],
              ["3 Courses", "Choice"],
            ].map(([val, label]) => (
              <div key={label} style={{ background: green, padding: "24px 28px" }}>
                <div style={{ color: gold, fontFamily: G, fontSize: "1.05rem", marginBottom: 4 }}>{val}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: I }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
