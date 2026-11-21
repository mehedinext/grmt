import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export const revalidate = 60;

const policies = [
  { title: "Safeguarding & Child Protection Policy", file: "/policies/safeguarding-and-child-protection-policy.pdf" },
  { title: "Anti-Bullying Policy", file: "/policies/anti-bullying-policy.pdf" },
  { title: "Health & Safety Policy", file: "/policies/health-and-safety-policy.pdf" },
  { title: "Complaints Policy", file: "/policies/complaints-policy.pdf" },
  { title: "Equal Opportunities Policy", file: "/policies/equal-opportunities-policy.pdf" },
  { title: "Special Educational Needs, Disabilities & Reasonable Adjustments Policy", file: "/policies/send-and-reasonable-adjustments-policy.pdf" },
];

export default async function PoliciesPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        <section style={{ background: green, padding: "clamp(60px, 7vw, 96px) 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 600, fontFamily: I, marginBottom: 14 }}>Legal</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>GRMSC Policies</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.72)", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 1rem)", lineHeight: 1.75, maxWidth: 640 }}>
              Green Room Music Summer Camp operates under the policies of Green Room Place Ltd. Each policy below is available as a downloadable PDF.
            </p>
          </div>
        </section>

        <section style={{ background: "#fff", padding: "clamp(48px, 6vw, 80px) 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <div style={{ display: "grid", gap: 14 }}>
              {policies.map((p) => (
                <a
                  key={p.file}
                  href={p.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    padding: "18px 22px",
                    background: cream,
                    border: "1px solid rgba(200,154,59,0.3)",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    <div style={{ color: green, fontFamily: I, fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)", fontWeight: 600, lineHeight: 1.4 }}>{p.title}</div>
                  </div>
                  <span style={{ color: gold, fontFamily: I, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", flexShrink: 0, whiteSpace: "nowrap" }}>Download PDF ↗</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 44, padding: "22px 24px", background: cream, borderLeft: `3px solid ${gold}`, borderRadius: 2 }}>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                For questions about any policy, please <a href="/contact" style={{ color: gold, textDecoration: "underline" }}>contact us</a>. For data protection and privacy, see our <a href="/privacy-policy" style={{ color: gold, textDecoration: "underline" }}>Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
