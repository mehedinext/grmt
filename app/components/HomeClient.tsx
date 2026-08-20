"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { Tutor, Course, Faq, PartnerLogo } from "../lib/data";
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
  partnerLogos: PartnerLogo[];
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

const heroSlides = [
  { type: "main" as const },
  { type: "theory" as const },
  { type: "awards" as const },
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
      setHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
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

        {/* ─── HERO WRAPPER — 3 slides ─── */}
        <div style={{ position: "relative" }}>

          {/* ══ SLIDE 1: Main GRMSC — full-bleed photo + left green gradient overlay ══ */}
          <section style={{
            position: heroSlide === 0 ? "relative" : "absolute", inset: heroSlide === 0 ? "auto" : 0,
            opacity: heroSlide === 0 ? 1 : 0, transition: "opacity 0.8s ease",
            zIndex: heroSlide === 0 ? 1 : 0, pointerEvents: heroSlide === 0 ? "auto" : "none",
            minHeight: "calc(100svh - 68px)", overflow: "hidden", display: "flex", alignItems: "center",
          }}>
            {/* Full-bleed photo */}
            <img src="/gallery/106-GreenRoomMusicTheorySummer2025.jpg" alt="GRMSC students"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
            {/* Subtle left gradient — never solid, always shows photo */}
            <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "linear-gradient(to right, rgba(8,47,39,0.65) 0%, rgba(8,47,39,0.5) 25%, rgba(8,47,39,0.18) 52%, rgba(8,47,39,0) 70%)" }} />
            {/* Content — same maxWidth/padding as navbar so text aligns with logo */}
            <div style={{ position: "relative", zIndex: 2, width: "100%", minHeight: "calc(100svh - 68px)", display: "flex", flexDirection: "column" }}>
              <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 clamp(16px,3vw,40px)", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Steinway badge — same left edge as navbar logo */}
                <div style={{ paddingTop: 24, paddingBottom: 16 }}>
                  <img src="/partners/steinway-badge-color.png" alt="Steinway Educational Partner" style={{ height: 76, width: "auto", opacity: 0.9 }} />
                </div>
                {/* Hero text — vertically centred */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", paddingBottom: "clamp(48px,6vw,72px)" }}>
                  <div style={{ maxWidth: 520 }}>
                    <h1 style={{ fontFamily: G, fontSize: "clamp(2.6rem,4.2vw,4.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.06, marginBottom: 20 }}>Green Room Music<br />Summer Camp</h1>
                    <div style={{ width: 48, height: 2, background: gold, marginBottom: 20 }} />
                    <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: I, fontSize: "clamp(0.9rem,1.1vw,1rem)", fontWeight: 500, marginBottom: 32 }}>Stamford School · 19–23 July 2027</p>
                    <div className="hero-cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <Link href="/courses" className="hero-btn btn-gold">Explore Courses</Link>
                      <Link href="/apply" className="hero-btn btn-outline-white">Apply Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══ SLIDE 2: Grade 5 Music Theory — dark navy, same 2-col layout ══ */}
          <section className="hero-new-section" style={{
            display: "flex", minHeight: "calc(100svh - 68px)", overflow: "hidden", background: "#0D1B2A",
            opacity: heroSlide === 1 ? 1 : 0, transition: "opacity 0.8s ease",
            position: heroSlide === 1 ? "relative" : "absolute", inset: heroSlide === 1 ? "auto" : 0,
            zIndex: heroSlide === 1 ? 1 : 0, pointerEvents: heroSlide === 1 ? "auto" : "none",
          }}>
            <div className="hero-left-panel" style={{ flex: "0 0 44%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,56px) clamp(40px,6vw,80px) clamp(24px,5vw,72px)", position: "relative", zIndex: 2, background: "#0D1B2A" }}>
              {/* Top branding */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none"><path d="M6 18V4.5L16 2v14" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="3.5" cy="18" r="2.5" stroke={gold} strokeWidth="1.4"/><circle cx="13.5" cy="16" r="2.5" stroke={gold} strokeWidth="1.4"/></svg>
                <span style={{ color: gold, fontFamily: I, fontSize: "0.76rem", letterSpacing: "0.06em" }}>Green Room Music Summer Camp</span>
              </div>
              {/* Big heading */}
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.6rem,4.2vw,4.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.06, marginBottom: 22 }}>Grade 5<br />Music Theory<br />Crash Course</h1>
              {/* Gold divider */}
              <div style={{ width: 48, height: 2, background: gold, marginBottom: 18 }} />
              {/* Pass rate */}
              <p style={{ color: "#fff", fontFamily: I, fontSize: "clamp(0.96rem,1.3vw,1.15rem)", fontWeight: 400, marginBottom: 28 }}>100% Pass Rate</p>
              {/* Info card */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 32, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,154,59,0.3)", borderRadius: 8, padding: "16px 18px" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", border: `1.5px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <div>
                  <div style={{ color: gold, fontFamily: I, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 6 }}>ABRSM Grade 5 Crash Course</div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: I, fontSize: "0.82rem", lineHeight: 1.55 }}>Covers 0 – Grade 5, also appropriate for students taking Grades 1, 2 and 3.</p>
                </div>
              </div>
              {/* Pill button */}
              <div className="hero-cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/courses/music-theory" className="hero-btn" style={{ border: `1.5px solid ${gold}`, color: gold, padding: "13px 30px", borderRadius: 999, fontSize: "0.78rem", fontFamily: I, fontWeight: 600, textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase", display: "inline-block" }}>Learn More</Link>
                <Link href="/apply" className="hero-btn btn-outline-white">Apply Now</Link>
              </div>
            </div>
            <div className="hero-right-panel" style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "40%", zIndex: 1, pointerEvents: "none", background: "linear-gradient(to right, #0D1B2A 0%, rgba(13,27,42,0.85) 40%, rgba(13,27,42,0.35) 70%, rgba(13,27,42,0) 100%)" }} />
              <img src="/gallery/034-GreenRoomMusicTheorySummer2025.jpg" alt="Grade 5 Music Theory" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
            {/* ABRSM logo — top right */}
            <div style={{ position: "absolute", top: 24, right: 28, zIndex: 5 }}>
              <img src="/partners/abrsm.png" alt="ABRSM" style={{ height: 28, width: "auto", maxWidth: 100 }} />
            </div>
          </section>

          {/* ══ SLIDE 3: Awards — "Make your week count" full-bleed photo + left gradient ══ */}
          <section style={{
            position: heroSlide === 2 ? "relative" : "absolute", inset: heroSlide === 2 ? "auto" : 0,
            opacity: heroSlide === 2 ? 1 : 0, transition: "opacity 0.8s ease",
            zIndex: heroSlide === 2 ? 1 : 0, pointerEvents: heroSlide === 2 ? "auto" : "none",
            minHeight: "calc(100svh - 68px)", overflow: "hidden", display: "flex", alignItems: "center", background: green,
          }}>
            <img src="/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg" alt="GRMSC concert"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
            />
            {/* Solid left → transparent gradient */}
            <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: `linear-gradient(to right, ${green} 0%, ${green} 25%, rgba(8,47,39,0.88) 40%, rgba(8,47,39,0.5) 58%, rgba(8,47,39,0.12) 74%, rgba(8,47,39,0) 84%)` }} />
            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "clamp(100px,12vw,140px) clamp(24px,5vw,72px) clamp(60px,8vw,80px)" }}>
              <div style={{ maxWidth: 580 }}>
                <div style={{ display: "inline-flex", border: `1px solid rgba(200,154,59,0.6)`, borderRadius: 3, padding: "5px 14px", marginBottom: 24, background: "rgba(200,154,59,0.08)" }}>
                  <span style={{ color: gold, fontSize: "0.6rem", fontFamily: I, textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600 }}>More Than a Summer Camp</span>
                </div>
                <h2 style={{ fontFamily: G, fontSize: "clamp(2.6rem,4.5vw,4.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.04, marginBottom: 18 }}>Make your week count.</h2>
                <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: I, fontSize: "clamp(0.88rem,1.1vw,1rem)", lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
                  Your time at GRMSC can support progress towards recognised awards and qualifications in the UK and US.
                </p>
                {/* 3 award cards */}
                <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
                  {[
                    { logo: "/partners/dofe.png", name: "Duke of Edinburgh's Award", sub: "Gold Residential + Skills", tag: "UK Students" },
                    { logo: "/partners/arts-award.png", name: "Arts Award", sub: "Creative portfolio evidence", tag: "UK Students" },
                    { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", sub: "Personal Development", tag: "US Students" },
                  ].map((a) => (
                    <div key={a.name} style={{ flex: "1 1 150px", background: "rgba(0,0,0,0.42)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 6, padding: "14px 14px 10px", backdropFilter: "blur(6px)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <img src={a.logo} alt={a.name} style={{ height: 36, width: 36, objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen", flexShrink: 0 }} />
                        <div>
                          <div style={{ color: "#fff", fontFamily: I, fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.3 }}>{a.name}</div>
                          <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: I, fontSize: "0.68rem", marginTop: 2 }}>{a.sub}</div>
                        </div>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 8 }}>
                        <span style={{ color: gold, fontFamily: I, fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{a.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Buttons */}
                <div className="hero-cta-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                  <Link href="/courses" className="hero-btn btn-gold">Explore Awards &amp; Qualifications →</Link>
                  <Link href="/apply" className="hero-btn btn-outline-white">Learn More</Link>
                </div>
                <p style={{ color: "rgba(255,255,255,0.32)", fontFamily: I, fontSize: "0.66rem", lineHeight: 1.55, maxWidth: 480 }}>
                  Participation at GRMSC does not automatically guarantee award completion. Eligibility should be confirmed with the relevant award provider.
                </p>
              </div>
            </div>
          </section>

          {/* ── Shared slide dots ── */}
          <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20 }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} style={{
                width: heroSlide === i ? 24 : 8, height: 8, borderRadius: 4,
                background: heroSlide === i ? gold : "rgba(255,255,255,0.35)",
                border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
              }} />
            ))}
          </div>

        </div>

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
            <div style={{ textAlign: "center", marginTop: 48, opacity: tutorsSec.visible ? 1 : 0, transition: "opacity 0.7s ease 0.3s" }}>
              <Link href="/faculty" className="btn-outline-green">Meet the Full Faculty →</Link>
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
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((p, i) => {
                const isSteinway = p.src.includes("steinway");
                return (
                  <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" style={{
                    flexShrink: 0, margin: "0 48px",
                    width: isSteinway ? 90 : 120,
                    height: isSteinway ? 90 : 56,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0.75, transition: "opacity 0.2s",
                    textDecoration: "none",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                  >
                    <img src={p.src} alt={p.alt} style={{
                      maxWidth: "100%", maxHeight: "100%",
                      width: "auto", height: "auto",
                      objectFit: "contain", display: "block",
                    }} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
