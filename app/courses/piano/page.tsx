import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getSiteSettings } from "../../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

const glance = [
  { icon: "👤", label: "Ages", value: "10–17" },
  { icon: "📊", label: "Level", value: "Intermediate & Advanced" },
  { icon: "🎵", label: "Minimum Standard", value: "ABRSM Grade 5 Equivalent" },
  { icon: "📅", label: "Dates", value: "19–23 July 2027" },
  { icon: "📍", label: "Location", value: "Stamford School" },
  { icon: "🏠", label: "Format", value: "5 Days / 4 Nights\nFully Residential" },
  { icon: "🍽️", label: "Boarding & Meals", value: "Included" },
  { icon: "🎹", label: "Musical Styles", value: "Classical · Jazz · Contemporary" },
  { icon: "👨‍🏫", label: "Individual Tuition", value: "One Private Lesson Included" },
  { icon: "🎤", label: "Performance", value: "GRMSC Final Concert" },
  { icon: "⭐", label: "Special Guest", value: "Vivian Shiao · Steinway & Sons Top Teacher Award Recipient" },
];

const programme = [
  "Studio Classes with Senior Piano Faculty",
  "One Private Lesson",
  "Daily Dedicated Practice",
  "Technique & Musicianship",
  "Sight-Reading",
  "Performance Classes",
  "Jazz Piano",
  "Introduction to Contemporary Music",
  "Analysing the Greats",
  "Musician Wellness",
  "Masterclasses & Special Sessions",
];

const awards = [
  { logo: "/partners/dofe.png", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey." },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible musical activity may contribute towards Personal Development." },
];

export default async function PianoCoursePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <img src="/gallery/269-Green_Room_Music_Concert_Summer_2025.jpg" alt="Piano performance"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `linear-gradient(to top, ${green} 0%, rgba(8,47,39,0.7) 40%, rgba(8,47,39,0.3) 70%, rgba(8,47,39,0.1) 100%)` }} />

          <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "clamp(32px,6vw,80px) clamp(20px,5vw,72px) clamp(40px,7vw,88px)" }}>
            {/* Alert box */}
            <div style={{ background: "rgba(8,47,39,0.82)", border: `1px solid rgba(200,154,59,0.4)`, borderLeft: `4px solid ${gold}`, borderRadius: 4, padding: "16px 18px", maxWidth: 560, width: "100%", marginBottom: 36, backdropFilter: "blur(6px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                <span style={{ color: gold, fontFamily: I, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em" }}>Minimum playing standard: ABRSM Grade 5 equivalent</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: I, fontSize: "0.8rem", lineHeight: 1.6, marginBottom: 14 }}>
                Applicants should be playing at a minimum standard equivalent to ABRSM Grade 5. Students do not need to have taken or passed a Grade 5 examination — the grade is simply used as a guide to the expected playing standard for the course.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://www.abrsm.org/en-gb/exam-support/syllabuses/" target="_blank" rel="noopener noreferrer" style={{ color: gold, fontFamily: I, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", border: `1px solid ${gold}`, padding: "7px 14px", borderRadius: 2 }}>View ABRSM Piano Syllabus ↗</a>
                <Link href="/apply" style={{ color: "rgba(255,255,255,0.8)", fontFamily: I, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)", padding: "7px 14px", borderRadius: 2 }}>Contact Us</Link>
              </div>
            </div>

            <p style={{ color: gold, fontFamily: I, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 500, color: "#fff", lineHeight: 1, marginBottom: 16 }}>Piano Course</h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.9rem,1.2vw,1.05rem)", marginBottom: 20, fontStyle: "italic" }}>Intermediate &amp; Advanced Pianists · Ages 10–17</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: I, fontSize: "clamp(0.85rem,1vw,0.96rem)", lineHeight: 1.75, marginBottom: 32, maxWidth: 560 }}>
              Designed for intermediate and advanced young pianists, the Green Room Music Summer Camp Piano Course combines high-level musical training with performance, creativity and the energy of an international residential summer camp. Across five immersive days, students learn from exceptional musicians and educators while developing their technique, musicianship, confidence, versatility and individuality at the piano. The week culminates in the GRMSC Final Concert, bringing together students from both the Piano and Vocal Departments.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Apply for the Piano Course</Link>
              <Link href="/residential-life" className="btn-outline-white">Explore Residential Life</Link>
            </div>
          </div>
        </section>

        {/* ── COURSE AT A GLANCE ── */}
        <section style={{ background: green }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(20px,5vw,72px)" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600 }}>Course at a Glance</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {glance.map((g) => (
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
                Students work with world-renowned faculty, distinguished educators and exciting rising performers, gaining insight from a range of teaching styles and musical perspectives throughout the week. A highlight of the programme is an Honorary Guest Masterclass and Lecture with Vivian Shiao, recipient of the Steinway &amp; Sons Top Teacher Award. Students also have opportunities to learn from and hear performances by the GRMSC Junior Teaching Artists — rising musicians appearing in that year's Green Room Piano Festival.
              </p>
              {/* Vivian card */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: `1px solid rgba(200,154,59,0.2)`, padding: "16px 18px", borderRadius: 4 }}>
                <img src="/vivian-shiao.webp" alt="Vivian Shiao" style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: G, fontSize: "1.05rem", color: green, fontStyle: "italic", marginBottom: 2 }}>Vivian Shiao</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: gold, fontWeight: 700 }}>Steinway &amp; Sons</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9a8a" }}>Top Teacher Award Recipient</div>
                </div>
              </div>
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
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px 12px", marginBottom: 20 }}>
                {programme.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.82rem", lineHeight: 1.5 }}>
                    <span style={{ color: gold, flexShrink: 0, marginTop: 4, fontSize: "0.5rem" }}>◆</span>{item}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.85rem", lineHeight: 1.75 }}>
                By exploring classical, jazz and contemporary music, students are encouraged to become more versatile, adaptable and well-rounded performers.
              </p>
            </div>

            {/* Analysing the Greats */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Analysing the Greats</h2>
              </div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Watch. Listen. Learn.</p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                In Analysing the Greats, students watch video performances by some of the world's leading concert pianists and explore what makes their playing so compelling. Guided by faculty, students learn to listen critically, compare different interpretations and take inspiration from the very best performers — helping them develop their own musical ideas and artistic identity.
              </p>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", aspectRatio: "16/9", background: green }}>
                <img src="/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg" alt="Concert performance" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(200,154,59,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Our programme combines specialist tuition with our distinctive activity-style approach to learning, creating an environment where students are encouraged to experiment, collaborate, perform, question and discover. The result is learning that feels energetic, creative and memorable — without compromising on musical depth.
              </p>
              <blockquote style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontFamily: G, fontSize: "1.2rem", color: green, fontStyle: "italic", lineHeight: 1.5 }}>
                  "We take the music seriously. We just don't believe learning it has to be boring."
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
                {awards.map((a) => (
                  <div key={a.name} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <img src={a.logo} alt={a.name} style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0, filter: "invert(1)", mixBlendMode: "multiply", background: "transparent" }} />
                    <div>
                      <div style={{ color: green, fontFamily: I, fontSize: "0.82rem", fontWeight: 700, marginBottom: 2 }}>{a.name}</div>
                      <div style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.78rem", lineHeight: 1.55 }}>{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#9abaaa", fontFamily: I, fontSize: "0.72rem", lineHeight: 1.6, marginBottom: 16 }}>
                Eligibility and requirements vary. Parents and guardians should confirm suitability and any necessary approval with the relevant Award Leader, Adviser or awarding organisation.
              </p>
              <Link href="/courses" style={{ color: gold, fontFamily: I, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Explore Awards &amp; Qualifications →
              </Link>
            </div>
          </div>
        </section>

        {/* ── THE FINAL CONCERT ── */}
        <section style={{ background: green, position: "relative", overflow: "hidden" }}>
          <img src="/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg" alt="Final concert"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,7vw,80px) clamp(24px,5vw,72px)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "start" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 500, color: "#fff", marginBottom: 16 }}>The Final Concert</h2>
              <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: I, fontSize: "clamp(0.88rem,1.1vw,1rem)", lineHeight: 1.8, maxWidth: 640 }}>
                The course concludes with the Green Room Music Summer Camp Final Concert, featuring students from both the Piano and Vocal Departments. It gives students the opportunity to bring together what they have developed throughout the week, celebrate their progress and perform as part of the wider GRMSC community.
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 500, color: green, lineHeight: 1.15, marginBottom: 20 }}>
                Five days. A whole new perspective on music.
              </h2>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 8 }}>
                Students develop their playing, explore new styles, learn from exceptional musicians, perform and make friends — all while experiencing five days surrounded by other young people who share their passion for music.
              </p>
              <p style={{ color: gold, fontFamily: G, fontSize: "1.05rem", fontStyle: "italic", marginBottom: 32 }}>
                Come for the piano. Leave with much more.
              </p>
              <Link href="/apply" className="btn-gold">Apply for the Piano Course →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/269-Green_Room_Music_Concert_Summer_2025.jpg" alt="Piano performance"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
