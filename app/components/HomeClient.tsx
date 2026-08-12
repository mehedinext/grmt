"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { Tutor, Course, Faq } from "../lib/data";
import { urlFor } from "../lib/image";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

function useFadeIn(threshold = 0.12) {
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

type Settings = {
  heroBadge?: string;
  heroHeadingLine1?: string;
  heroHeadingLine2?: string;
  heroSubtext?: string;
  heroLocation?: string;
  heroDate?: string;
  heroCta1Label?: string;
  heroCta1Href?: string;
  heroCta2Label?: string;
  heroCta2Href?: string;
  stats?: { val: string; label: string }[];
  coursesSectionHeading?: string;
  whyHeading?: string;
  whyItems?: { title: string; desc: string }[];
  resHeading?: string;
  resText?: string;
  resTags?: string[];
  tutorsHeading?: string;
  datesHeading?: string;
  dateItems?: { label: string; val: string; sub: string }[];
  faqsHeading?: string;
  ctaEyebrow?: string;
  ctaHeadingLine1?: string;
  ctaHeadingLine2?: string;
  ctaSubtext?: string;
  ctaCta1Label?: string;
  ctaCta1Href?: string;
  ctaCta2Label?: string;
  ctaCta2Href?: string;
  partnersLabel?: string;
  navLogoSubtitle?: string;
  navCtaLabel?: string;
  navCtaHref?: string;
  footerTagline?: string;
  footerDescription?: string;
  footerInstagram?: string;
  footerFacebook?: string;
  footerContactEmail?: string;
  footerCopyright?: string;
} | null;

type Props = {
  tutors: Tutor[];
  faqs: Faq[];
  partnerLogos: string[];
  courses: Course[];
  settings?: Settings;
};

const defaultStats = [
  { val: "19–23 July 2027", label: "Camp Dates" },
  { val: "3 Courses", label: "Piano · Theory · Singing" },
  { val: "Ages 10–17", label: "Open to all abilities" },
  { val: "Stamford School", label: "Lincolnshire, England" },
  { val: "Full Residential", label: "Board & lodging included" },
];

const defaultWhyItems = [
  {
    title: "Serious Music-Making",
    desc: "High-quality teaching and inspiring repertoire for committed young musicians.",
  },
  {
    title: "Beautiful Setting",
    desc: "Learn and live at the historic Stamford School in the heart of Lincolnshire.",
  },
  {
    title: "Confidence Through Performance",
    desc: "Opportunities to perform, collaborate and grow as confident artists.",
  },
  {
    title: "Safe Residential Experience",
    desc: "Pastoral care and wellbeing are at the heart of everything we do.",
  },
];

const whySvgs = [
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 22V8l12-3v14" /><circle cx="7" cy="22" r="3" /><circle cx="19" cy="19" r="3" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h22M5 21V10l9-6 9 6v11" /><rect x="11" y="14" width="6" height="7" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="14,3 17.5,10.5 26,11.5 20,17.5 21.5,26 14,22 6.5,26 8,17.5 2,11.5 10.5,10.5" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2l9 4v8c0 5.5-4 10-9 12C5 24 1 19.5 1 14V6l13-4z" />
    </svg>
  ),
];

const defaultResTags = [
  "En-suite accommodation",
  "Nutritious meals",
  "Pastoral care 24/7",
  "Daily rehearsals & classes",
  "Evening activities",
  "Lifelong friendships",
];

const defaultDateItems = [
  { label: "Camp Dates", val: "19–23 July 2027", sub: "Five days residential" },
  { label: "Ages", val: "10–17 years", sub: "All abilities welcome" },
  { label: "Location", val: "Stamford School", sub: "Lincolnshire, England" },
  { label: "Accommodation", val: "Full residential", sub: "Houseparents on site" },
  { label: "Final Concert", val: "23 July 2027", sub: "Showcase for family & friends" },
];

const heroImages = [
  "https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/043-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg",
];

export default function HomeClient({ tutors, faqs, partnerLogos, courses: allCourses, settings }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroReady] = useState(true);
  const [activeCard, setActiveCard] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const coursesSec = useFadeIn();
  const whySec = useFadeIn();
  const resLifeSec = useFadeIn();
  const tutorsSec = useFadeIn();
  const datesSec = useFadeIn();
  const ctaSec = useFadeIn();
  const partnersSec = useFadeIn();

  const stats = settings?.stats?.length ? settings.stats : defaultStats;
  const whyItems = settings?.whyItems?.length ? settings.whyItems : defaultWhyItems;
  const resTags = settings?.resTags?.length ? settings.resTags : defaultResTags;
  const dateItems = settings?.dateItems?.length ? settings.dateItems : defaultDateItems;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* ─── HERO ─── */}
        <section style={{
          position: "relative",
          minHeight: "calc(100svh - 68px)",
          overflow: "hidden",
          background: green,
          display: "flex",
          alignItems: "center",
        }}>
          {/* Slideshow images */}
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="GRMSC students"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% top",
                opacity: heroSlide === i ? 1 : 0,
                transition: "opacity 1.2s ease",
                zIndex: 0,
              }}
            />
          ))}
          {/* Left-side overlay — solid on left behind text, sharp fade, fully clear by 55% */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(8,47,39,0.90) 0%, rgba(8,47,39,0.88) 30%, rgba(8,47,39,0.55) 43%, rgba(8,47,39,0.10) 52%, rgba(8,47,39,0) 58%)",
          }} />

          <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "80px clamp(16px, 3vw, 40px)" }}>
            <div style={{ maxWidth: 420 }}>
              {/* Steinway Educational Partner badge */}
              <div style={{ marginBottom: 28, opacity: heroReady ? 1 : 0, transition: "opacity 0.7s ease" }}>
                <img src="/partners/steinway-badge.png" alt="Steinway & Sons Educational Partner" style={{ height: 130, width: "auto", opacity: 0.92 }} />
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(200,154,59,0.5)",
                borderRadius: 3, padding: "7px 14px", marginBottom: 28,
                background: "rgba(200,154,59,0.1)",
                opacity: heroReady ? 1 : 0,
                transition: "opacity 0.7s ease 0.1s",
              }}>
                <span style={{ color: gold, fontSize: "0.63rem", fontFamily: I, textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>
                  {settings?.heroBadge ?? "Residential · Summer 2027"}
                </span>
              </div>

              <h1 style={{
                fontFamily: G,
                fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
                fontWeight: 500, color: "#fff", lineHeight: 1.08,
                marginBottom: 20,
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(24px)",
                transition: "opacity 0.85s cubic-bezier(.22,.68,0,1.1) 0.15s, transform 0.85s cubic-bezier(.22,.68,0,1.1) 0.15s",
              }}>
                {settings?.heroHeadingLine1 ?? "Green Room Music"}<br />
                {settings?.heroHeadingLine2 ?? "Summer Camp"}
              </h1>

              <p style={{
                color: "rgba(255,255,255,0.68)", fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                lineHeight: 1.78, marginBottom: 24, maxWidth: 420,
                opacity: heroReady ? 1 : 0,
                transition: "opacity 0.8s ease 0.3s",
              }}>
                {settings?.heroSubtext ?? "A residential summer camp for young musicians aged 10–17."}
              </p>

              <div style={{
                height: 2, background: gold, marginBottom: 22,
                width: heroReady ? 52 : 0,
                transition: "width 0.7s cubic-bezier(.22,.68,0,1) 0.45s",
              }} />

              <div style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 36,
                opacity: heroReady ? 1 : 0,
                transition: "opacity 0.8s ease 0.5s",
              }}>
                <span style={{ color: gold, fontSize: "0.85rem", fontFamily: I, fontWeight: 600 }}>
                  {settings?.heroLocation ?? "Stamford School"}
                </span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontFamily: I }}>
                  {settings?.heroDate ?? "19–23 July 2027"}
                </span>
              </div>

              <div style={{
                display: "flex", gap: 12, flexWrap: "wrap",
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.62s, transform 0.7s ease 0.62s",
              }}>
                <Link href={settings?.heroCta1Href ?? "/courses"} className="btn-gold">
                  {settings?.heroCta1Label ?? "Explore the Courses →"}
                </Link>
                <Link href={settings?.heroCta2Href ?? "/apply"} className="btn-outline-white">
                  {settings?.heroCta2Label ?? "Apply Now"}
                </Link>
              </div>
            </div>
          </div>

          {/* Slide indicator dots */}
          <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 2 }}>
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlide(i)}
                style={{
                  width: heroSlide === i ? 24 : 8,
                  height: 8, borderRadius: 4,
                  background: heroSlide === i ? gold : "rgba(255,255,255,0.4)",
                  border: "none", cursor: "pointer",
                  transition: "all 0.3s ease", padding: 0,
                }}
              />
            ))}
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <div style={{ background: green, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "28px 0", flex: "1 1 160px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontFamily: G, fontSize: "1rem", color: "#fff", fontWeight: 500, marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: I, fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── COURSE CARDS ─── */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green }}>
                {settings?.coursesSectionHeading ?? "Three Specialist Courses"}
              </h2>
              <div style={{ width: 48, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            {(() => {
              const CardInner = ({ c, i }: { c: Course; i: number }) => (
                <div className="course-card" style={{ background: "#fff", overflow: "hidden", opacity: coursesSec.visible ? 1 : 0, transform: coursesSec.visible ? "none" : "translateY(32px)", transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s` }}>
                  <div style={{ overflow: "hidden", aspectRatio: "16/10" }}>
                    <img src={urlFor(c.image)} alt={c.title} className="course-img" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: c.imagePosition, display: "block", transition: "transform 0.55s ease" }} />
                  </div>
                  <div style={{ padding: "28px 32px 32px" }}>
                    <p style={{ color: gold, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: I, fontWeight: 600, marginBottom: 10 }}>{c.grade}</p>
                    <h3 style={{ fontFamily: G, fontSize: "1.45rem", fontWeight: 500, color: green, marginBottom: 12 }}>{c.title}</h3>
                    <p style={{ color: "#5a7a6a", fontSize: "0.87rem", lineHeight: 1.78, marginBottom: 22 }}>{c.excerpt}</p>
                    <Link href={`/courses/${c.slug.current}`} style={{ color: gold, fontSize: "0.8rem", fontFamily: I, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>Learn More →</Link>
                  </div>
                </div>
              );
              return (
                <div ref={coursesSec.ref}>
                  {/* Desktop 3-col grid */}
                  <div className="course-grid-desktop">
                    {allCourses.map((c, i) => <CardInner key={c._id} c={c} i={i} />)}
                  </div>
                  {/* Mobile fade slideshow */}
                  <div className="course-grid-mobile">
                    <div style={{ position: "relative" }}>
                      {allCourses.map((c, i) => (
                        <div key={c._id} style={{
                          position: i === 0 ? "relative" : "absolute",
                          top: 0, left: 0, width: "100%",
                          opacity: activeCard === i ? 1 : 0,
                          zIndex: activeCard === i ? 1 : 0,
                          transition: "opacity 0.5s ease",
                          pointerEvents: activeCard === i ? "auto" : "none",
                        }}>
                          <CardInner c={c} i={i} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
                      {allCourses.map((_, i) => (
                        <button key={i} onClick={() => setActiveCard(i)} style={{ width: activeCard === i ? 24 : 8, height: 8, borderRadius: 4, background: activeCard === i ? gold : "#c4bdb0", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ─── WHY GRMSC ─── */}
        <section ref={whySec.ref} style={{ background: "#fff", padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div style={{
              textAlign: "center", marginBottom: 60,
              opacity: whySec.visible ? 1 : 0,
              transform: whySec.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green }}>
                {settings?.whyHeading ?? "Why GRMSC?"}
              </h2>
              <div style={{ width: 48, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div className="why-grid">
              {whyItems.map((w, i) => (
                <div key={i} style={{
                  textAlign: "center",
                  opacity: whySec.visible ? 1 : 0,
                  transform: whySec.visible ? "none" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${0.08 + i * 0.11}s, transform 0.6s ease ${0.08 + i * 0.11}s`,
                }}>
                  <div style={{
                    width: 76, height: 76, borderRadius: "50%",
                    border: `1.5px solid ${gold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px", color: gold,
                  }}>{whySvgs[i % whySvgs.length]}</div>
                  <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: green, marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ color: "#5a7a6a", fontSize: "0.85rem", lineHeight: 1.78 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESIDENTIAL LIFE ─── */}
        <section ref={resLifeSec.ref} style={{ background: cream, overflow: "hidden" }}>
          <div className="res-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div style={{
              position: "relative", minHeight: "clamp(260px, 50vw, 480px)", overflow: "hidden",
              opacity: resLifeSec.visible ? 1 : 0,
              transform: resLifeSec.visible ? "none" : "translateX(-40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>
              <img
                src="https://greenroomtheory.com/wp-content/uploads/2025/09/043-GreenRoomMusicTheorySummer2025-scaled.jpg"
                alt="Students at Stamford School"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{
              padding: "clamp(48px, 7vw, 80px) clamp(28px, 5vw, 64px)",
              display: "flex", flexDirection: "column", justifyContent: "center",
              opacity: resLifeSec.visible ? 1 : 0,
              transform: resLifeSec.visible ? "none" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", fontWeight: 500, color: green, marginBottom: 12 }}>
                {settings?.resHeading ?? "Residential Life"}
              </h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 24 }} />
              <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: 32 }}>
                {settings?.resText ?? "Live, learn and make music in a supportive community. Students enjoy comfortable accommodation, nutritious meals and a programme that balances focused rehearsals with fun, friendship and relaxation."}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {resTags.map((tag) => (
                  <span key={tag} style={{
                    border: "1px solid #c4bdb0", borderRadius: 3,
                    padding: "7px 13px", fontSize: "0.78rem",
                    color: "#4a6a5a", fontFamily: I,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/residential-life" style={{ color: gold, fontFamily: I, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>
                  Learn about residential life →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EXPERT TUTORS ─── */}
        <section ref={tutorsSec.ref} style={{ background: "#fff", padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <div style={{
              textAlign: "center", marginBottom: 56,
              opacity: tutorsSec.visible ? 1 : 0,
              transform: tutorsSec.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green }}>
                {settings?.tutorsHeading ?? "Meet the Faculty"}
              </h2>
              <div style={{ width: 48, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, maxWidth: 680, margin: "0 auto",
              opacity: tutorsSec.visible ? 1 : 0,
              transform: tutorsSec.visible ? "none" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}>
              {tutors.map((t) => (
                <div key={t._id} style={{ textAlign: "center" }} className="card-hover">
                  <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
                    <img
                      src={urlFor(t.image)}
                      alt={t.name}
                      style={{
                        width: 140, height: 140, borderRadius: "50%",
                        objectFit: "cover", objectPosition: "center top",
                        border: `3px solid ${gold}`,
                        display: "block",
                      }}
                    />
                  </div>
                  <h3 style={{ fontFamily: G, fontSize: "1.25rem", fontWeight: 500, color: green, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: I, fontWeight: 600, marginBottom: 14 }}>{t.role}</p>
                  <p style={{ color: "#5a7a6a", fontSize: "0.85rem", lineHeight: 1.72 }}>{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DATES & FAQ ─── */}
        <section ref={datesSec.ref} style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 72 }}>
            {/* Key dates */}
            <div style={{
              opacity: datesSec.visible ? 1 : 0,
              transform: datesSec.visible ? "none" : "translateY(28px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 500, color: green, marginBottom: 32 }}>
                {settings?.datesHeading ?? "Dates & Key Information"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {dateItems.map((d, i) => (
                  <div key={d.label} style={{
                    display: "flex", alignItems: "flex-start", gap: 20,
                    padding: "18px 0",
                    borderBottom: "1px solid #d4cec4",
                  }}>
                    <span style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 28, height: 28, borderRadius: "50%",
                      background: gold, color: "#fff",
                      fontSize: "0.65rem", fontFamily: I, fontWeight: 700,
                      flexShrink: 0, marginTop: 2,
                    }}>{i + 1}</span>
                    <div>
                      <div style={{ color: "#9aaa9e", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: I, marginBottom: 3 }}>{d.label}</div>
                      <div style={{ color: green, fontFamily: G, fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.3 }}>{d.val}</div>
                      <div style={{ color: "#9aaa9e", fontSize: "0.75rem", fontFamily: I, marginTop: 2 }}>{d.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div style={{
              opacity: datesSec.visible ? 1 : 0,
              transform: datesSec.visible ? "none" : "translateY(28px)",
              transition: "opacity 0.65s ease 0.16s, transform 0.65s ease 0.16s",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 500, color: green, marginBottom: 32 }}>
                {settings?.faqsHeading ?? "Frequently Asked Questions"}
              </h2>
              <div>
                {faqs.slice(0, 4).map((faq, i) => (
                  <div key={faq._id} style={{ borderBottom: "1px solid #d4cec4" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                        background: "none", border: "none", cursor: "pointer",
                        padding: "18px 0", textAlign: "left",
                        color: green, fontFamily: I, fontSize: "0.9rem", fontWeight: 500,
                      }}
                    >
                      {faq.question}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: gold, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease", marginLeft: 12 }}>
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div style={{ maxHeight: openFaq === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                      <p style={{ color: "#5a7a6a", fontSize: "0.87rem", lineHeight: 1.78, paddingBottom: 18 }}>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section ref={ctaSec.ref} style={{ position: "relative", overflow: "hidden", padding: "clamp(72px, 10vw, 120px) 0" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(8,47,39,0.85)" }} />
          <div style={{
            position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "0 clamp(20px, 4vw, 60px)",
            textAlign: "center",
            opacity: ctaSec.visible ? 1 : 0,
            transform: ctaSec.visible ? "none" : "translateY(32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ height: 1, width: 48, background: "rgba(200,154,59,0.4)" }} />
              <div style={{ width: 44, height: 44, borderRadius: "50%", border: `1px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: G, fontSize: "0.85rem", color: gold, fontWeight: 500, letterSpacing: "0.04em" }}>GR</span>
              </div>
              <div style={{ height: 1, width: 48, background: "rgba(200,154,59,0.4)" }} />
            </div>
            <p style={{ fontFamily: I, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.22em", color: gold, marginBottom: 20 }}>
              {settings?.ctaEyebrow ?? "Green Room Music Summer Camp 2027"}
            </p>
            <h2 style={{ fontFamily: G, fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 500, color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>
              {settings?.ctaHeadingLine1 ?? "An Unforgettable Week"}<br />
              {settings?.ctaHeadingLine2 ?? "of Music & Inspiration"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", lineHeight: 1.8, maxWidth: 540, margin: "0 auto 44px" }}>
              {settings?.ctaSubtext ?? "19–23 July 2027 at Stamford School. Three specialist tracks, world-class tutors, and a residential experience unlike any other."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", alignItems: "center" }}>
              <Link href={settings?.ctaCta1Href ?? "/apply"} className="btn-gold">
                {settings?.ctaCta1Label ?? "Register Your Interest →"}
              </Link>
              <Link href={settings?.ctaCta2Href ?? "/courses"} className="btn-outline-white">
                {settings?.ctaCta2Label ?? "Explore the Courses"}
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PARTNERS ─── */}
        <section ref={partnersSec.ref} style={{
          background: "#fff", borderTop: "1px solid #e8e3da", padding: "44px 0",
          opacity: partnersSec.visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}>
          <p style={{ textAlign: "center", fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#bbb", marginBottom: 32 }}>
            {settings?.partnersLabel ?? "Partners & Affiliates"}
          </p>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((src, i) => (
                <img key={i} src={src} alt="Partner" style={{
                  height: 52, maxHeight: 52, width: "auto", maxWidth: 120, objectFit: "contain", flexShrink: 0, margin: "0 56px",
                  opacity: 0.75,
                  filter: "grayscale(15%)",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
