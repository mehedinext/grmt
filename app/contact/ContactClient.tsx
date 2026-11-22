"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

type Settings = any;

export default function ContactClient({ settings }: { settings?: Settings }) {
  const email = settings?.footerContactEmail ?? "info@greenroomplace.com";
  const phone = settings?.footerContactPhone ?? "+44 7540 875262";

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO ── */}
        <section style={{ background: green, padding: "clamp(60px, 7vw, 96px) 0" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 600, fontFamily: I, marginBottom: 16 }}>Get in Touch</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Contact Us</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.8, maxWidth: 640 }}>
              Have a question about the camp, our courses or the application process? We would love to hear from you. Send us a message and a member of our team will get back to you.
            </p>
          </div>
        </section>

        {/* ── CONTACT GRID ── */}
        <section style={{ background: cream, padding: "clamp(56px, 7vw, 88px) 0" }}>
          <div className="contact-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>

            {/* Left - Contact info */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: green, fontWeight: 500, marginBottom: 20 }}>Contact GRMSC</h2>
              <div style={{ width: 32, height: 2, background: gold, marginBottom: 22 }} />

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Email</p>
                <a href={`mailto:${email}`} style={{ fontFamily: G, fontSize: "1.1rem", color: green, textDecoration: "none" }}>{email}</a>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Phone</p>
                <a href={`tel:${phone.replace(/\s/g, "")}`} style={{ fontFamily: G, fontSize: "1.1rem", color: green, textDecoration: "none" }}>{phone}</a>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Venue</p>
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.95rem", lineHeight: 1.65 }}>Stamford School<br />Stamford, Lincolnshire, UK</p>
              </div>

              <div>
                <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700, marginBottom: 6 }}>Dates</p>
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.95rem", lineHeight: 1.65 }}>19th - 23rd July 2027</p>
              </div>
            </div>

            {/* Right - Contact form */}
            <div style={{ background: "#fff", padding: "clamp(28px, 4vw, 44px)" }}>
              <h2 style={{ fontFamily: G, fontSize: "1.5rem", fontWeight: 500, color: green, marginBottom: 6 }}>Send Us a Message</h2>
              <div style={{ width: 32, height: 2, background: gold, marginBottom: 24 }} />

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: 0 }}
              >
                <input type="hidden" name="access_key" value="aae09377-f222-46dc-9807-d8cfd35ba5f5" />
                <input type="hidden" name="subject" value="New Contact Enquiry - GRMSC" />
                <input type="hidden" name="from_name" value="GRMSC Website" />
                <input type="hidden" name="redirect" value="https://green-room-camp-tau.vercel.app/contact?submitted=1" />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} />

                <div style={{ background: cream, padding: "16px 20px", marginBottom: 2 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Your Name</label>
                  <input required name="Name" type="text" placeholder="Full name" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "6px 0", fontSize: "0.95rem", outline: "none", fontFamily: I, color: green }} />
                </div>

                <div style={{ background: cream, padding: "16px 20px", marginBottom: 2 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Email Address</label>
                  <input required name="Email" type="email" placeholder="your@email.com" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "6px 0", fontSize: "0.95rem", outline: "none", fontFamily: I, color: green }} />
                </div>

                <div style={{ background: cream, padding: "16px 20px", marginBottom: 2 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Phone (Optional)</label>
                  <input name="Phone" type="tel" placeholder="Including country code" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "6px 0", fontSize: "0.95rem", outline: "none", fontFamily: I, color: green }} />
                </div>

                <div style={{ background: cream, padding: "16px 20px", marginBottom: 2 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Subject</label>
                  <select required name="Subject" style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "6px 0", fontSize: "0.95rem", outline: "none", fontFamily: I, color: green }}>
                    <option value="">Choose a topic</option>
                    <option>General Enquiry</option>
                    <option>Piano Course</option>
                    <option>Music Theory Course</option>
                    <option>Singing Performance Course</option>
                    <option>International Travellers</option>
                    <option>Tuition, Fees and Payment Plans</option>
                    <option>Audition Process (Piano &amp; Singing Performance)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ background: cream, padding: "16px 20px", marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "#9aaa9e", marginBottom: 8, fontFamily: I }}>Your Message</label>
                  <textarea required name="Message" placeholder="Tell us how we can help" rows={5} style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid #c4bdb0", padding: "6px 0", fontSize: "0.95rem", outline: "none", fontFamily: I, color: green, resize: "vertical" }} />
                </div>

                <button type="submit" className="btn-gold" style={{ alignSelf: "flex-start" }}>Send Message</button>
              </form>
            </div>

          </div>
        </section>

        <style>{`
          @media (max-width: 800px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

      </main>
      <Footer settings={settings} />
    </>
  );
}
