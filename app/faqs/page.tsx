"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const faqs = [
  { q: "What is included in the course fee?", a: "Tuition, full board accommodation at Stamford School, all course materials, evening programme activities and the final showcase concert are all included in the fee." },
  { q: "Is accommodation provided?", a: "Yes. Students stay in comfortable, supervised residential rooms at Stamford School with dedicated houseparents on site throughout the week." },
  { q: "How are students supervised?", a: "All staff hold enhanced DBS checks. A dedicated pastoral team is available 24/7. Parents receive regular updates during the week and are given direct contact details for the pastoral lead." },
  { q: "What level do students need to be?", a: "Piano and Music Theory courses are best suited to Grade 4–8+ students. Musical Theatre is open to all levels — no prior stage experience required, just enthusiasm and commitment." },
  { q: "What are the age requirements?", a: "GRMSC is open to students aged 10–17. Students must be within this age range on the first day of the course (19 July 2027)." },
  { q: "Are dietary requirements catered for?", a: "Yes. All dietary requirements and allergies are accommodated. Please provide details on your application form and we will confirm arrangements in advance." },
  { q: "Can students do DofE or Arts Award?", a: "Yes. GRMSC can be used as evidence towards the Duke of Edinburgh's Award (volunteering/skills sections) and Arts Award. Contact us to discuss how we can support this." },
  { q: "How do I apply?", a: "Complete the interest registration form on our Apply page. Applications for Summer 2027 will open soon — register your interest now to be first in line when places become available." },
  { q: "When do applications open?", a: "Applications for Summer 2027 formally open in early 2027. Register your interest now and you will be the first to know when places become available." },
  { q: "Is there a sibling discount?", a: "Information on sibling discounts and bursary options will be confirmed when applications formally open. Register your interest to be notified." },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <div style={{ background: green, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>Questions & Answers</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#fff", marginBottom: 20 }}>Frequently Asked Questions</h1>
            <div style={{ width: 36, height: 2, background: gold, margin: "0 auto 20px" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: I }}>
              Everything you need to know about GRMSC 2027. Can&apos;t find your answer? Get in touch.
            </p>
          </div>
        </div>

        <section style={{ background: cream, padding: "80px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ background: "#fff", padding: "clamp(24px, 5vw, 48px)" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #e0dbd0" }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", cursor: "pointer",
                      padding: "20px 0", textAlign: "left",
                      color: green, fontFamily: I, fontSize: "0.92rem", fontWeight: 500,
                    }}
                  >
                    {faq.q}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: gold, flexShrink: 0, transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease", marginLeft: 16 }}>
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div style={{ maxHeight: open === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                    <p style={{ color: "#5a7a6a", fontSize: "0.88rem", lineHeight: 1.8, paddingBottom: 20 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, background: green, padding: "32px 40px", textAlign: "center" }}>
              <p style={{ fontFamily: G, fontSize: "1.2rem", color: "#fff", marginBottom: 8 }}>Still have questions?</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", fontFamily: I, marginBottom: 24 }}>We&apos;re happy to help. Get in touch and we&apos;ll get back to you promptly.</p>
              <Link href="/apply" className="btn-gold">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
