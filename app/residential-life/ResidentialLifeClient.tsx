// Sanity migration: import galleryImages, resFeatures from a groq fetch instead of data.ts
"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { galleryImages, resFeatures as features } from "../lib/data";
import { urlFor } from "../lib/image";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function ResidentialLifeClient({ settings }: { settings?: any }) {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<any>(null);

  const goTo = (i: number) => {
    setSlide(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % galleryImages.length), 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % galleryImages.length), 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero — short, elegant */}
        <div style={{ background: green, padding: "64px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.resPageEyebrow ?? "Life at Camp"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, maxWidth: 560 }}>
              {settings?.resPageHeading ?? "Residential Life"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, margin: "20px 0" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 520 }}>
              {settings?.resPageSubtext ?? "Far more than a series of lessons — the residential experience is where the real magic of GRMSC happens."}
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8e3da" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap" }}>
            {[
              ["5 Days", "Full residential programme"],
              ["3 Meals", "Daily, all diets catered"],
              ["24/7", "Pastoral support on site"],
              ["DBS Checked", "All staff, all sessions"],
            ].map(([val, label]) => (
              <div key={label} style={{ flex: "1 1 140px", padding: "24px 0 24px", borderRight: "1px solid #e8e3da", textAlign: "center" }}>
                <div style={{ color: green, fontFamily: G, fontSize: "1.3rem", fontWeight: 500, marginBottom: 4 }}>{val}</div>
                <div style={{ color: "#9aaa9e", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: I }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Gallery */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 500, color: green }}>{settings?.resPageGalleryHeading ?? "Life at Stamford School"}</h2>
              <div style={{ width: 40, height: 2, background: gold, margin: "14px auto 0" }} />
            </div>

            {/* Main slide */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 2, background: green }}>
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={urlFor(src)}
                  alt={`Gallery ${i + 1}`}
                  style={{
                    width: "100%",
                    aspectRatio: "16/7",
                    objectFit: "cover",
                    display: "block",
                    position: i === 0 ? "relative" : "absolute",
                    inset: 0,
                    opacity: slide === i ? 1 : 0,
                    transition: "opacity 0.7s ease",
                    zIndex: slide === i ? 1 : 0,
                  }}
                />
              ))}

              {/* Arrows */}
              <button
                onClick={() => goTo((slide - 1 + galleryImages.length) % galleryImages.length)}
                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "rgba(0,0,0,0.35)", border: "none", color: "#fff", width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button
                onClick={() => goTo((slide + 1) % galleryImages.length)}
                style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "rgba(0,0,0,0.35)", border: "none", color: "#fff", width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{ width: slide === i ? 24 : 8, height: 8, borderRadius: 4, background: slide === i ? gold : "#c4bdb0", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4, marginTop: 12 }}>
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  style={{ cursor: "pointer", overflow: "hidden", aspectRatio: "1", outline: slide === i ? `2px solid ${gold}` : "none", outlineOffset: 2 }}
                >
                  <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: slide === i ? 1 : 0.55, transition: "opacity 0.3s" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ background: "#fff", padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 500, color: green }}>{settings?.resPageFeaturesHeading ?? "Everything Taken Care Of"}</h2>
              <div style={{ width: 40, height: 2, background: gold, margin: "14px auto 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
              {features.map((f, i) => (
                <div key={f.title} style={{ background: cream, padding: "32px", borderTop: `3px solid ${i % 2 === 0 ? gold : green}` }}>
                  <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: green, marginBottom: 12 }}>{f.title}</h3>
                  <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.78 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Week schedule */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 500, color: green }}>{settings?.resPageWeekHeading ?? "A Typical Week"}</h2>
              <div style={{ width: 40, height: 2, background: gold, margin: "14px auto 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
              {[
                { day: "Sat 19 Jul", highlight: "Arrivals & welcome concert" },
                { day: "Sun & Mon", highlight: "Intensive course sessions & evening events" },
                { day: "Tuesday", highlight: "Open masterclass & guest artist" },
                { day: "Wed 23 Jul", highlight: "Final showcase & farewell" },
              ].map((d) => (
                <div key={d.day} style={{ background: "#fff", padding: "28px 24px", borderTop: `3px solid ${gold}` }}>
                  <div style={{ color: gold, fontWeight: 600, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontFamily: I }}>{d.day}</div>
                  <div style={{ color: green, fontSize: "0.92rem", lineHeight: 1.6, fontFamily: I }}>{d.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: green, padding: "64px 0", textAlign: "center" }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: "#fff", marginBottom: 12 }}>{settings?.resPageCtaHeading ?? "Join Us for Summer 2027"}</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", marginBottom: 32, fontFamily: I }}>{settings?.resPageCtaSubtext ?? "Applications open soon · 19–23 July · Stamford School"}</p>
          <Link href="/apply" className="btn-gold">Register Your Interest</Link>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
