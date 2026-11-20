import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CourseFAQs from "../../components/CourseFAQs";
import { getSiteSettings, sanityClient } from "../../lib/sanity";
import { urlFor } from "../../lib/image";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const defaultGlance = [
  // Row 1 - Essential information
  { icon: "📅", label: "Dates", value: "19-23 July 2027" },
  { icon: "📍", label: "Location", value: "Stamford School" },
  { icon: "👤", label: "Ages", value: "10-17" },
  { icon: "📊", label: "Level", value: "Intermediate & Advanced" },
  { icon: "🎵", label: "Minimum Standard", value: "ABRSM Grade 5 Equivalent" },
  // Row 2 - What's included & experience
  { icon: "🎹", label: "Musical Styles", value: "Classical · Jazz · Contemporary" },
  { icon: "👨‍🏫", label: "Individual Tuition", value: "One Private Lesson Included" },
  { icon: "⭐", label: "Special Guest", value: "Vivian Shiao" },
  { icon: "🎤", label: "Performance", value: "Final Performance Celebration" },
  { icon: "🍽️", label: "Boarding & Meals", value: "Included" },
];

const defaultProgramme = [
  "Studio Classes with Senior Piano Faculty",
  "One Private Lesson with Senior Faculty",
  "Masterclasses & Lectures with Honorary Guest Visiting Lecturer, Vivian Shiao",
  "Daily Dedicated Practice",
  "Sight-Reading, Scales & Technical Exercises",
  "Performance & Analysis Classes",
  "Jazz Piano",
  "Contemporary Keyboards",
  "Wellness for The Musician",
];

const defaultHeroAlertTitle = "Minimum playing standard: ABRSM Grade 5 equivalent";
const defaultRequirements = "Applicants should be playing at a minimum standard equivalent to ABRSM Grade 5. Students do not need to have taken or passed a Grade 5 examination - the grade is simply used as a guide to the expected playing standard for the course.";
const defaultCtaHeading = "Five days. A whole new perspective on music.";
const defaultCtaSubtext = "Students develop their playing, explore new styles, learn from exceptional musicians, perform and make friends - all while experiencing five days surrounded by other young people who share their passion for music.";
const defaultCtaTagline = "Come for the piano. Leave with much more.";

const defaultAwards = [
  { logo: "/partners/dofe.png", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity.", href: "https://www.dukeofed.org/" },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey.", href: "https://www.artsaward.org.uk/site/?id=64" },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible musical activity may contribute towards Personal Development.", href: "https://congressionalaward.org/" },
];

const awardHrefByName: Record<string, string> = {
  "Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "The Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "Arts Award": "https://www.artsaward.org.uk/site/?id=64",
  "The Congressional Award": "https://congressionalaward.org/",
};

export const revalidate = 60;

export default async function PianoCoursePage() {
  const [settings, course, willImage] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(`*[_type == "course" && slug.current == "piano"][0]{ glance, programme, heroAlertTitle, requirements, ctaHeading, ctaSubtext, ctaTagline, "awards": awards[]{ name, desc, "logo": logo.asset->url } }`).catch(() => null),
    sanityClient.fetch<string | null>(`*[_id == "tutor-will"][0].image.asset->url`).catch(() => null),
  ]);
  const awards = course?.awards?.length ? course.awards : defaultAwards;
  const glance = course?.glance?.length ? course.glance : defaultGlance;
  const programme = course?.programme?.length ? course.programme : defaultProgramme;
  const heroAlertTitle = course?.heroAlertTitle || defaultHeroAlertTitle;
  const heroAlertBody = course?.requirements || defaultRequirements;
  const ctaHeading = course?.ctaHeading || defaultCtaHeading;
  const ctaSubtext = course?.ctaSubtext || defaultCtaSubtext;
  const ctaTagline = course?.ctaTagline || defaultCtaTagline;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO (SPLIT: TEXT LEFT | IMAGE RIGHT) ── */}
        <section className="piano-hero" style={{ background: green, display: "grid", gridTemplateColumns: "1fr 1fr", height: "calc(100vh - 68px)", minHeight: 580, maxHeight: 900 }}>
          <div style={{ padding: "clamp(40px, 5vw, 72px) clamp(24px, 5vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 680, overflow: "auto" }}>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Piano Course</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem, 1.3vw, 1.2rem)", marginBottom: 22, fontStyle: "italic" }}>Intermediate &amp; Advanced Pianists · Ages 10-17 · Minimum Playing Standard: ABRSM Grade 5 Equivalent</p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.8, marginBottom: 32 }}>
              Designed for intermediate and advanced young pianists, the Green Room Music Summer Camp Piano Course combines high-level musical training with performance, creativity and the energy of an international residential summer camp. The week culminates in the GRMSC Final Performance Celebration, bringing together students from both the Piano and Vocal Departments.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <Link href="/apply" className="btn-gold">Apply for the Piano Course</Link>
              <Link href="/residential-life" className="btn-outline-white">Explore Residential Life</Link>
            </div>
            {/* Minimum standard card (inline, cleaner) */}
            <div style={{ background: "rgba(200,154,59,0.08)", borderLeft: `3px solid ${gold}`, padding: "14px 18px", borderRadius: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                <span style={{ color: gold, fontFamily: I, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{heroAlertTitle}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: I, fontSize: "0.82rem", lineHeight: 1.65, marginBottom: 10 }}>
                {heroAlertBody}
              </p>
              <a href="https://www.abrsm.org/sites/default/files/2026-06/Piano%20Performance%20Grades%20Syllabus%202027%20%26%202028.pdf" target="_blank" rel="noopener noreferrer" style={{ color: gold, fontFamily: I, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>View ABRSM Piano Syllabus ↗</a>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src="/gallery/piano-hero-no-logo.jpg" alt="Piano performance"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "75% center" }} />
          </div>
        </section>

        <style>{`
          @media (max-width: 860px) {
            .piano-hero { grid-template-columns: 1fr !important; height: auto !important; max-height: none !important; min-height: 0 !important; }
            .piano-hero > div:first-child { overflow: visible !important; padding-top: 48px; padding-bottom: 48px; }
            .piano-hero > div:last-child { min-height: 320px; order: -1; }
          }
        `}</style>

        {/* ── COURSE AT A GLANCE ── */}
        <section style={{ background: green }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(20px,5vw,72px)" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600 }}>Course at a Glance</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {glance.map((g: any) => (
                <div key={g.label} style={{ padding: "20px 22px", background: green, borderBottom: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ color: gold, fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 6, fontWeight: 600 }}>{g.label}</div>
                  <div style={{ color: "#fff", fontFamily: G, fontSize: "1rem", fontWeight: 500, lineHeight: 1.4, whiteSpace: "pre-line" }}>{g.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THREE COLUMNS: Learn · Programme · Analysing ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>

            {/* Learn from Outstanding Musicians */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Learn from Outstanding Musicians</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Led by faculty director Will Fowler, students work with world-renowned faculty, distinguished educators and exciting rising performers, gaining insight from a range of teaching styles and musical perspectives throughout the week. A highlight of the programme is masterclasses and lectures with Honorary Guest, Vivian Shiao. Students also have the opportunities to learn from and hear performances by GRMSC Junior Teaching Artists - rising spotlight musicians appearing in this year's Green Room Piano Festival at St. Martin's Church, Stamford.
              </p>
              {/* Will Fowler card - Faculty Director */}
              <Link href="/faculty#tutor-will" style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: `1px solid rgba(200,154,59,0.2)`, padding: "16px 18px", borderRadius: 4, textDecoration: "none", transition: "all 0.2s ease", marginBottom: 12 }}>
                {willImage ? (
                  <img src={willImage} alt="Will Fowler" style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", flexShrink: 0 }} />
                ) : (
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: G, fontSize: "1.05rem", color: green, fontStyle: "italic", marginBottom: 2 }}>Will Fowler</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: gold, fontWeight: 700 }}>Faculty Director</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9a8a" }}>Head of Piano</div>
                </div>
                <span style={{ color: gold, fontSize: "1.1rem", fontFamily: I, flexShrink: 0 }}>→</span>
              </Link>
              {/* Vivian card - clickable to Faculty page */}
              <Link href="/faculty#tutor-vivian" style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: `1px solid rgba(200,154,59,0.2)`, padding: "16px 18px", borderRadius: 4, textDecoration: "none", transition: "all 0.2s ease" }}>
                <img src="/vivian-shiao.webp" alt="Vivian Shiao" style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: G, fontSize: "1.05rem", color: green, fontStyle: "italic", marginBottom: 2 }}>Vivian Shiao</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: gold, fontWeight: 700 }}>Steinway &amp; Sons</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9a8a" }}>Top Teacher Award Recipient</div>
                </div>
                <span style={{ color: gold, fontSize: "1.1rem", fontFamily: I, flexShrink: 0 }}>→</span>
              </Link>
            </div>

            {/* The Piano Programme */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 014 0"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>The Piano Programme</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 18 }}>
                A comprehensive programme designed to inspire and challenge every pianist.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, padding: 0 }}>
                {programme.map((item: string) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.55 }}>
                    <span style={{ color: gold, flexShrink: 0, marginTop: 7, fontSize: "0.5rem", lineHeight: 1 }}>◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.85rem", lineHeight: 1.75 }}>
                By exploring classical, jazz and contemporary music, students are encouraged to become more versatile, adaptable and well-rounded performers.
              </p>
            </div>

          </div>
        </section>

        {/* ── CLASSICAL + CONTEMPORARY IMAGE PAIR ── */}
        <section style={{ background: cream, paddingBottom: "clamp(56px, 7vw, 88px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 72px)" }}>
            <div className="piano-image-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 2vw, 20px)" }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
                <img src="/gallery/piano-final-performance.jpg" alt="Grand piano performance" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
                <img src="/gallery/piano-red-keyboard.jpg" alt="Contemporary keyboard" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 760px) {
              .piano-image-pair { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── THREE COLUMNS: Approach · More Than Piano · Awards ── */}
        <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>

            {/* The Green Room Approach */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>The Green Room Approach</h2>
              </div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.78rem", fontWeight: 700, marginBottom: 12 }}>Less passive learning. More doing.</p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 24 }}>
                Our programme combines specialist tuition with our distinctive activity-style approach to learning, creating an environment where students are encouraged to experiment, collaborate, perform, question and discover. The result is learning that feels energetic, creative and memorable - without compromising on musical depth.
              </p>
              <blockquote style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontFamily: G, fontSize: "1.2rem", color: green, fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>
                  "We take the music seriously. We just don't believe learning it has to be boring."
                </p>
                <p style={{ fontFamily: I, fontSize: "0.75rem", color: gold, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  - Will Fowler, Artistic Director / Head of Piano
                </p>
              </blockquote>
            </div>

            {/* More Than Piano */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>More Than Piano</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Students specialise in their chosen course, but the wider GRMSC experience brings the whole camp together. Meals, activities, recreation, social events and selected wellbeing sessions are shared across courses, giving students the opportunity to meet young musicians beyond their own department.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                With students joining us from the UK and internationally, GRMSC becomes a vibrant community of young people living, learning, performing and making friends together.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/279-Green_Room_Music_Concert_Summer_2025.jpg" alt="GRMSC students" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Make Your Week Count */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Make Your Week Count</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Experiences at GRMSC may also support students working towards recognised external awards and qualifications.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {awards.map((a: any) => {
                  const href = a.href ?? awardHrefByName[a.name];
                  const inner = (
                    <>
                      <img src={urlFor(a.logo)} alt={a.name} style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
                      <div>
                        <div style={{ color: green, fontFamily: I, fontSize: "0.82rem", fontWeight: 700, marginBottom: 2 }}>{a.name}</div>
                        <div style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.78rem", lineHeight: 1.55 }}>{a.desc}</div>
                      </div>
                    </>
                  );
                  return href ? (
                    <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 14, textDecoration: "none" }}>{inner}</a>
                  ) : (
                    <div key={a.name} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>{inner}</div>
                  );
                })}
              </div>
              <p style={{ color: "#9abaaa", fontFamily: I, fontSize: "0.72rem", lineHeight: 1.6 }}>
                Eligibility and requirements vary. Parents and guardians should confirm suitability and any necessary approval with the relevant Award Leader, Adviser or awarding organisation.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE FINAL CONCERT ── */}
        <section style={{ background: green, position: "relative", overflow: "hidden" }}>
          <img src="/gallery/piano-final-performance.jpg" alt="Final concert"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,7vw,80px) clamp(24px,5vw,72px)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "start" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 500, color: "#fff", marginBottom: 16 }}>The Final Performance Celebration</h2>
              <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: I, fontSize: "clamp(0.88rem,1.1vw,1rem)", lineHeight: 1.8, maxWidth: 640 }}>
                The course concludes with the Green Room Music Summer Camp Final Performance Celebration, featuring all students from both the Piano and Vocal Departments. It gives students the opportunity to bring together what they have developed throughout the week, celebrate their progress and perform as part of the wider GRMSC community.
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 500, color: green, lineHeight: 1.15, marginBottom: 20 }}>
                {ctaHeading}
              </h2>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 8, whiteSpace: "pre-line" }}>
                {ctaSubtext}
              </p>
              <p style={{ color: gold, fontFamily: G, fontSize: "1.05rem", fontStyle: "italic", marginBottom: 32 }}>
                {ctaTagline}
              </p>
              <Link href="/apply" className="btn-gold">Apply for the Piano Course →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/piano-hero-no-logo.jpg" alt="Piano performance"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        <CourseFAQs categoryKey="piano" heading="Piano Course FAQs" />

      </main>
      <Footer settings={settings} />
    </>
  );
}
