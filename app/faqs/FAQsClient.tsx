// Sanity migration: import faqs from a groq fetch instead of data.ts
"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { faqs } from "../lib/data";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export default function FAQsClient({ settings }: { settings?: any }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <div style={{ background: green, padding: "72px 0 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <p style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I }}>{settings?.faqsPageEyebrow ?? "Questions & Answers"}</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              {settings?.faqsPageHeading ?? "Frequently Asked Questions"}
            </h1>
            <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 500, fontFamily: I }}>
              {settings?.faqsPageSubtext ?? "Everything you need to know about GRMSC 2027. Can't find your answer? Get in touch."}
            </p>
          </div>
        </div>

        {/* FAQ accordion */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ background: "#fff" }}>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", borderBottom: open === i ? "none" : "1px solid #ede8df",
                      cursor: "pointer", padding: "22px 32px", textAlign: "left",
                      color: open === i ? gold : green,
                      fontFamily: I, fontSize: "0.92rem", fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                  >
                    <span style={{ paddingRight: 24 }}>{faq.question}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: `1.5px solid ${open === i ? gold : "#d4cec4"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "border-color 0.2s",
                    }}>
                      <svg width="10" height="10" fill="none" stroke={open === i ? gold : "#9aaa9e"} strokeWidth="2" viewBox="0 0 24 24"
                        style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}>
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: open === i ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                    borderBottom: "1px solid #ede8df",
                  }}>
                    <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.85, padding: "4px 32px 24px", fontFamily: I }}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact nudge */}
            <div style={{ marginTop: 32, background: "#fff", padding: "36px 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, borderTop: `3px solid ${gold}` }}>
              <div>
                <h3 style={{ fontFamily: G, fontSize: "1.25rem", color: green, marginBottom: 6 }}>Still have questions?</h3>
                <p style={{ color: "#5a7a6a", fontSize: "0.85rem", fontFamily: I }}>We&apos;re happy to help — get in touch and we&apos;ll respond promptly.</p>
              </div>
              <Link href="/apply" className="btn-gold">Contact Us</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
