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

type QA = { question: string; answer?: string };
type Category = {
  key: string;
  label: string;
  tagline?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  icon?: string; // "people" | "piano" | "music-note" | "microphone"
  faqs?: QA[];
};

const stroke = { fill: "none", stroke: gold, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Icon({ name }: { name?: string }) {
  switch (name) {
    case "piano":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <path d="M8 6v8M12 6v8M16 6v8" />
          <path d="M3 14h18" />
        </svg>
      );
    case "music-note":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
          <path d="M9 18V6l10-2v12" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      );
    case "microphone":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
        </svg>
      );
    case "people":
    default:
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
          <path d="M14.5 19c0-2 1.8-3.6 4.5-3.6S23 17 23 19" />
        </svg>
      );
  }
}

// Fallback used only if Sanity has no faqCategory documents yet.
const FALLBACK: Category[] = [
  {
    key: "general",
    label: "General",
    tagline: "Camp information, application process and practical details.",
    eyebrow: "General",
    heading: "General FAQs",
    intro:
      "Everything you need to know about Green Room Music Summer Camp, including key dates, location, accommodation, meals and the application process.",
    icon: "people",
    faqs: [
      { question: "When and where does Green Room Music Summer Camp take place?", answer: "GRMSC 2027 takes place from Monday 19 July to Friday 23 July 2027 at Stamford School in Lincolnshire, England." },
      { question: "What age groups can attend?", answer: "Placeholder answer." },
      { question: "What courses are available?", answer: "Placeholder answer." },
      { question: "Do students need previous musical experience?", answer: "Placeholder answer." },
      { question: "What is included in the course fee?", answer: "Placeholder answer." },
      { question: "How much does the summer camp cost?", answer: "Placeholder answer." },
      { question: "How do I apply?", answer: "Placeholder answer." },
      { question: "Is there a deposit or payment plan available?", answer: "Placeholder answer." },
    ],
  },
  {
    key: "piano",
    label: "Piano",
    tagline: "Course content, level, requirements and more.",
    eyebrow: "Piano",
    heading: "Piano FAQs",
    intro: "Everything about the Piano course — repertoire, required level, daily schedule, practice rooms and the final performance.",
    icon: "piano",
    faqs: [
      { question: "What level of piano is required?", answer: "Placeholder answer." },
      { question: "Do I need to bring my own instrument?", answer: "Placeholder answer." },
      { question: "How many hours of practice per day?", answer: "Placeholder answer." },
      { question: "Will there be a final performance?", answer: "Placeholder answer." },
    ],
  },
  {
    key: "music-theory",
    label: "Music Theory",
    tagline: "Course content, level, requirements and more.",
    eyebrow: "Music Theory",
    heading: "Music Theory FAQs",
    intro: "Everything about the Music Theory course — ABRSM grades covered, mock exams, materials provided and whether it suits your current level.",
    icon: "music-note",
    faqs: [
      { question: "Which ABRSM grades does the course cover?", answer: "Placeholder answer." },
      { question: "Are mock exams included?", answer: "Placeholder answer." },
      { question: "What materials will I need?", answer: "Placeholder answer." },
      { question: "Is this course suitable for complete beginners?", answer: "Placeholder answer." },
    ],
  },
  {
    key: "singing-performance",
    label: "Singing Performance",
    tagline: "Course content, level, requirements and more.",
    eyebrow: "Singing Performance",
    heading: "Singing Performance FAQs",
    intro: "Everything about the Singing Performance course — vocal styles, warm-ups, repertoire choice, microphone technique and the final concert.",
    icon: "microphone",
    faqs: [
      { question: "What vocal styles are taught?", answer: "Placeholder answer." },
      { question: "Will I perform solo?", answer: "Placeholder answer." },
      { question: "Do I need to prepare a song in advance?", answer: "Placeholder answer." },
      { question: "Is there microphone and stage training?", answer: "Placeholder answer." },
    ],
  },
];

export default function FAQsClient({
  settings,
  categories,
}: {
  settings?: any;
  categories?: Category[];
}) {
  const data: Category[] = categories && categories.length ? categories : FALLBACK;

  const [activeKey, setActiveKey] = useState<string>(data[0].key);
  const [open, setOpen] = useState<number | null>(0);

  const active = data.find((c) => c.key === activeKey) ?? data[0];
  const heroImage: string | undefined = settings?.faqsHeroImage;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section
          className="faq-hero"
          style={{
            background: green,
            display: "grid",
            gridTemplateColumns: heroImage ? "1.1fr 1fr" : "1fr",
          }}
        >
          <div
            style={{
              padding:
                "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px) clamp(16px, 5vw, 80px)",
              maxWidth: 720,
            }}
          >
            <p
              style={{
                color: gold,
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                marginBottom: 14,
                fontFamily: I,
              }}
            >
              {settings?.faqsPageEyebrow ?? "Summer 2027"}
            </p>
            <h1
              style={{
                fontFamily: G,
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {settings?.faqsPageHeading ?? "Frequently Asked Questions"}
            </h1>
            <div style={{ width: 48, height: 2, background: gold, marginBottom: 22 }} />
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                maxWidth: 520,
                fontFamily: I,
              }}
            >
              {settings?.faqsPageSubtext ??
                "Find answers to common questions about Green Room Music Summer Camp. If you can't find what you're looking for, please get in touch | we're always happy to help."}
            </p>
          </div>
          {heroImage ? (
            <div
              className="faq-hero-image"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 320,
              }}
              aria-hidden
            />
          ) : null}
        </section>

        {/* Tabs */}
        <section style={{ background: cream, padding: "clamp(32px, 5vw, 56px) 0 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div className="faq-tabs" role="tablist">
              {data.map((cat) => {
                const isActive = cat.key === activeKey;
                return (
                  <button
                    key={cat.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveKey(cat.key);
                      setOpen(0);
                    }}
                    style={{
                      background: isActive ? green : "#efe8d8",
                      color: isActive ? "#fff" : green,
                      border: "none",
                      padding: "24px 20px 22px",
                      cursor: "pointer",
                      textAlign: "center",
                      borderBottom: isActive ? `3px solid ${gold}` : "3px solid transparent",
                      transition: "background 0.2s, color 0.2s",
                      fontFamily: I,
                    }}
                  >
                    <div style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}>
                      <Icon name={cat.icon} />
                    </div>
                    <div
                      style={{
                        fontFamily: G,
                        fontSize: "1.15rem",
                        fontWeight: 500,
                        color: isActive ? "#fff" : green,
                        marginBottom: 6,
                      }}
                    >
                      {cat.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        lineHeight: 1.5,
                        color: isActive ? "rgba(255,255,255,0.72)" : "#6b7a6f",
                      }}
                    >
                      {cat.tagline}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active category content */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0 clamp(56px, 8vw, 96px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <p
              style={{
                color: gold,
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                marginBottom: 12,
                fontFamily: I,
                fontWeight: 600,
              }}
            >
              {active.eyebrow ?? active.label}
            </p>
            <h2
              style={{
                fontFamily: G,
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 500,
                color: green,
                marginBottom: 14,
              }}
            >
              {active.heading ?? `${active.label} FAQs`}
            </h2>
            <div style={{ width: 48, height: 2, background: gold, marginBottom: 20 }} />
            {active.intro ? (
              <p
                style={{
                  color: "#5a7a6a",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  maxWidth: 680,
                  fontFamily: I,
                  marginBottom: 40,
                }}
              >
                {active.intro}
              </p>
            ) : null}

            <div style={{ background: "#fff" }}>
              {(active.faqs ?? []).map((faq, i) => (
                <div key={`${active.key}-${i}`}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="faq-row"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      borderBottom: open === i ? "none" : "1px solid #ede8df",
                      cursor: "pointer",
                      padding: "22px 32px",
                      textAlign: "left",
                      color: open === i ? gold : green,
                      fontFamily: I,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                  >
                    <span style={{ paddingRight: 24 }}>{faq.question}</span>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: gold,
                        fontSize: "1.4rem",
                        lineHeight: 1,
                      }}
                      aria-hidden
                    >
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: open === i ? "600px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                      borderBottom: "1px solid #ede8df",
                    }}
                  >
                    <p
                      style={{
                        color: "#5a7a6a",
                        fontSize: "0.9rem",
                        lineHeight: 1.85,
                        padding: "4px 32px 24px",
                        fontFamily: I,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact nudge */}
            <div
              className="faq-contact"
              style={{
                marginTop: 32,
                background: "#fff",
                padding: "36px 40px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                borderTop: `3px solid ${gold}`,
              }}
            >
              <div>
                <h3 style={{ fontFamily: G, fontSize: "1.25rem", color: green, marginBottom: 6 }}>
                  Still have a question?
                </h3>
                <p style={{ color: "#5a7a6a", fontSize: "0.85rem", fontFamily: I, marginBottom: 4 }}>
                  We&apos;re happy to help | get in touch and we&apos;ll respond promptly.
                </p>
                <p style={{ color: green, fontSize: "0.9rem", fontFamily: I, fontWeight: 600 }}>
                  <a href="tel:+447540875262" style={{ color: green, textDecoration: "none" }}>+44 7540 875262</a>
                </p>
              </div>
              <Link href="/apply" className="btn-gold">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .faq-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .faq-hero { grid-template-columns: 1fr !important; }
          .faq-hero-image { min-height: 220px !important; order: -1; }
          .faq-tabs { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 520px) {
          .faq-tabs { grid-template-columns: 1fr; }
          .faq-row { padding: 18px 20px !important; font-size: 0.9rem !important; }
          .faq-row + div p { padding: 4px 20px 20px !important; }
          .faq-contact { padding: 24px 20px !important; }
        }
      `}</style>

      <Footer settings={settings} />
    </>
  );
}
