// Sanity migration: import feeItems from a groq fetch instead of data.ts
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { feeItems } from "../lib/data";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default async function FeesPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <div style={{ background: green, padding: "72px 0 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.feesPageEyebrow ?? "Summer 2027"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              {settings?.feesPageHeading ?? "Fees & Costs"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 500, fontFamily: I }}>
              {settings?.feesPageSubtext ?? "Full pricing for GRMSC 2027 will be announced when applications open. Register your interest to be notified first."}
            </p>
          </div>
        </div>

        {/* Fee card */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 4, alignItems: "start" }}>

            {/* Pricing card */}
            <div style={{ background: "#fff", padding: "48px", textAlign: "center" }}>
              <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: I, marginBottom: 16 }}>All-inclusive fee</p>
              <div style={{ fontFamily: G, fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 500, color: green, lineHeight: 1, marginBottom: 8 }}>{settings?.feesPagePriceValue ?? "TBC"}</div>
              <p style={{ color: "#9aaa9e", fontFamily: I, fontSize: "0.8rem", marginBottom: 32 }}>{settings?.feesPagePriceNote ?? "Full fee announced early 2027"}</p>
              <div style={{ width: "100%", height: 1, background: "#e8e3da", marginBottom: 32 }} />
              <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.82, marginBottom: 36, fontFamily: I }}>
                {settings?.feesPagePriceDesc ?? "The fee covers the complete residential experience — five days of intensive tuition, full board accommodation, all materials, evening programme and the final showcase concert. Nothing extra to pay."}
              </p>
              <Link href="/apply" className="btn-gold" style={{ display: "block", textAlign: "center" }}>Apply Now</Link>
              <p style={{ color: "#9aaa9e", fontSize: "0.72rem", fontFamily: I, marginTop: 16 }}>No payment required at this stage</p>
            </div>

            {/* What's included */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {feeItems.map((item, i) => (
                <div key={item.title} style={{ background: i % 2 === 0 ? "#fff" : cream, padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: gold, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: G, fontSize: "1rem", fontWeight: 500, color: green, marginBottom: 4 }}>{item.title}</h3>
                    <p style={{ color: "#5a7a6a", fontSize: "0.84rem", lineHeight: 1.7, fontFamily: I }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bursary note */}
        <section style={{ background: "#fff", padding: "clamp(48px, 6vw, 72px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
            <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 28 }}>
              <h3 style={{ fontFamily: G, fontSize: "1.3rem", fontWeight: 500, color: green, marginBottom: 10 }}>Sibling Discounts</h3>
              <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.78, fontFamily: I }}>
                Details of sibling discounts will be confirmed when applications formally open. Register your interest to be notified.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 28 }}>
              <h3 style={{ fontFamily: G, fontSize: "1.3rem", fontWeight: 500, color: green, marginBottom: 10 }}>Bursary Places</h3>
              <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.78, fontFamily: I }}>
                We are committed to accessibility. Bursary options will be available — details announced with the full fee schedule in early 2027.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 28 }}>
              <h3 style={{ fontFamily: G, fontSize: "1.3rem", fontWeight: 500, color: green, marginBottom: 10 }}>Early Bird</h3>
              <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.78, fontFamily: I }}>
                Early registrations will be given priority access and may be eligible for an early-bird rate. Register now to secure your place.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
