"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

type Settings = any;

export default function ApplyClient({ settings }: { settings?: Settings }) {
  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream, minHeight: "100vh" }}>
        <section style={{ background: green, padding: "clamp(72px, 10vw, 120px) 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", textAlign: "center" }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 600, fontFamily: I, marginBottom: 20 }}>Summer 2027</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Applications Opening Soon</h1>
            <div style={{ width: 44, height: 2, background: gold, margin: "0 auto 26px" }} />
            <p style={{ color: "rgba(255,255,255,0.72)", fontFamily: I, fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.8, marginBottom: 36, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
              Applications for Green Room Music Summer Camp 2027 will open on <strong style={{ color: "#fff", fontWeight: 600 }}>Monday 30th November, 2026</strong>. In the meantime, if you have any questions about the camp, our courses or the audition process, please get in touch.
            </p>
            <Link href="/contact" className="btn-gold">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
    </>
  );
}
