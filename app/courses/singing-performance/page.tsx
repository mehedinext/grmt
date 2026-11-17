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
  // Row 1
  { label: "Dates", value: "19-23 July 2027" },
  { label: "Location", value: "Stamford School" },
  { label: "Ages", value: "10-17" },
  { label: "Experience", value: "No Experience Needed" },
  // Row 2
  { label: "Singing Audition", value: "Singing Assessment Video\n(Audition) Required" },
  { label: "Styles Explored", value: "Musical Theatre · Classical\nContemporary · Jazz" },
  { label: "Faculty", value: "West End Performers\nProfessional Artists & Educators" },
  { label: "Performance", value: "Every Student Performs in the\nGRMSC Final Performance" },
];

const defaultProgramme = [
  "Vocal Technique & Voice Development",
  "Musical Theatre",
  "Classical Singing Performance",
  "Jazz Vocal Styles",
  "Acting Through Song",
  "Stagecraft & Communication",
  "Ensemble Work",
  "Masterclasses & Special Sessions",
  "Preparation for the GRMSC Final Performance",
];

const defaultCtaHeading = "Five days. Three styles. One unforgettable experience.";
const defaultCtaSubtext = "Students develop their voices, explore new styles, learn from professional performers, build confidence, take to the stage and make friends with young musicians from around the world.";
const defaultCtaTagline = "Find the voice. Build the confidence. Become the performer.";

const defaultAwards = [
  { logo: "/partners/dofe.png", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and performance experiences may contribute towards an existing Arts Award journey." },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development." },
];

export const revalidate = 60;

export default async function SingingPerformancePage() {
  const [settings, course] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(`*[_type == "course" && slug.current == "singing-performance"][0]{ glance, programme, ctaHeading, ctaSubtext, ctaTagline, "awards": awards[]{ name, desc, "logo": logo.asset->url } }`).catch(() => null),
  ]);
  const awards = course?.awards?.length ? course.awards : defaultAwards;
  const glance = course?.glance?.length ? course.glance : defaultGlance;
  const programme = course?.programme?.length ? course.programme : defaultProgramme;
  const ctaHeading = course?.ctaHeading || defaultCtaHeading;
  const ctaSubtext = course?.ctaSubtext || defaultCtaSubtext;
  const ctaTagline = course?.ctaTagline || defaultCtaTagline;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO (SPLIT: TEXT LEFT | IMAGE RIGHT) ── */}
        <section className="singing-hero" style={{ background: green, display: "grid", gridTemplateColumns: "1fr 1fr", height: "calc(100vh - 68px)", minHeight: 580, maxHeight: 900 }}>
          <div style={{ padding: "clamp(40px, 5vw, 72px) clamp(24px, 5vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 680, overflow: "auto" }}>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Singing Performance</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem, 1.3vw, 1.2rem)", marginBottom: 22, fontStyle: "italic" }}>Musical Theatre · Classical · Jazz</p>
            <div style={{ background: "rgba(200,154,59,0.1)", borderLeft: `3px solid ${gold}`, padding: "12px 16px", borderRadius: 2, marginBottom: 22 }}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: I, fontSize: "0.82rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: gold, letterSpacing: "0.05em" }}>PLEASE NOTE:</strong> A Singing Assessment Video (Audition) is required as part of the application process. No previous singing or performance experience is necessary.
              </p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.78)", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 0.98rem)", lineHeight: 1.75, marginBottom: 14 }}>
              The Green Room Music Summer Camp Singing Performance Course is designed for young singers aged 10-17 who want to develop their voice, confidence and versatility as performers. The course welcomes enthusiastic beginners as well as more experienced young singers.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: I, fontSize: "clamp(0.86rem, 0.95vw, 0.94rem)", lineHeight: 1.75, marginBottom: 14 }}>
              Led by Course Director Conor Mathers, students work with an experienced faculty of professional performers and educators, including artists with credits across London's West End and professional touring productions.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: I, fontSize: "clamp(0.86rem, 0.95vw, 0.94rem)", lineHeight: 1.75, marginBottom: 24 }}>
              Across five immersive days, students explore Musical Theatre, Classical and Jazz performance, developing the skills needed to become more confident, expressive and well-rounded young performers.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Apply for Singing Performance</Link>
              <Link href="/residential-life" className="btn-outline-white">Explore Residential Life</Link>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src="/gallery/singing-performance.jpg" alt="Singing performance"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
        </section>

        <style>{`
          @media (max-width: 860px) {
            .singing-hero { grid-template-columns: 1fr !important; height: auto !important; max-height: none !important; min-height: 0 !important; }
            .singing-hero > div:first-child { overflow: visible !important; padding-top: 48px; padding-bottom: 48px; }
            .singing-hero > div:last-child { min-height: 320px; order: -1; }
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

        {/* ── TWO COLUMNS: Learn · Programme ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>

            {/* Learn from Working Performers */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Learn from Working Performers</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                The Singing Performance Course is led by Conor Mathers, alongside a faculty of professional singers, actors, musicians and educators.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Students have the opportunity to learn from performers with experience across London's West End, professional touring productions and the wider performance industry - gaining insight from artists who understand both the craft and realities of performing professionally.
              </p>
              {/* Conor card - clickable to Faculty page profile */}
              <Link href="/faculty#tutor-conor" style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: `1px solid rgba(200,154,59,0.2)`, padding: "16px 18px", borderRadius: 4, textDecoration: "none", transition: "all 0.2s ease" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: G, fontSize: "1.05rem", color: green, fontStyle: "italic", marginBottom: 2 }}>Conor Mathers</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: gold, fontWeight: 700 }}>Course Director</div>
                  <div style={{ fontFamily: I, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9a8a" }}>Head of Singing Performance</div>
                </div>
                <span style={{ color: gold, fontSize: "1.1rem", fontFamily: I, flexShrink: 0 }}>→</span>
              </Link>
            </div>

            {/* The Singing Performance Programme */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 014 0"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>The Singing Performance Programme</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 18 }}>
                A varied programme combining vocal development, performance training and creative exploration.
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
                Exploring different styles encourages students to become more versatile, adaptable and confident performers.
              </p>
            </div>

          </div>
        </section>

        {/* ── IMAGE PAIR ── */}
        <section style={{ background: cream, paddingBottom: "clamp(56px, 7vw, 88px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 72px)" }}>
            <div className="singing-image-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 2vw, 20px)" }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
                <img src="/gallery/241-Green_Room_Music_Concert_Summer_2025.jpg" alt="Concert performance" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
                <img src="/gallery/singing-performance.jpg" alt="Singing performance" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 760px) {
              .singing-image-pair { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── THREE COLUMNS: Approach · More Than Singing · Awards ── */}
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
                Our distinctive activity-style approach to learning combines specialist tuition with practical workshops, performance challenges, collaboration and creative exploration. Students are encouraged to sing, perform, experiment, question and discover.
              </p>
              <blockquote style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontFamily: G, fontSize: "1.2rem", color: green, fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>
                  "We take performance seriously. We just don't believe learning it has to be boring."
                </p>
                <p style={{ fontFamily: I, fontSize: "0.75rem", color: gold, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  - Rhiannon Bennett, GRMSC Acting Coach for Singing Performance
                </p>
              </blockquote>
            </div>

            {/* More Than Just Singing */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>More Than Just Singing</h2>
              </div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.78rem", fontWeight: 700, marginBottom: 12 }}>Finding the performer behind the voice.</p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Singing performance is about much more than producing a good sound. Students are encouraged to think about how they communicate with an audience, how they interpret material and how confidently they inhabit the stage.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Performance-focused sessions explore the connection between voice, character, movement and storytelling - helping students meet pianists, singers and other young musicians beyond their own department.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/279-Green_Room_Music_Concert_Summer_2025.jpg" alt="GRMSC community" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                {awards.map((a: any) => (
                  <div key={a.name} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <img src={urlFor(a.logo)} alt={a.name} style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: green, fontFamily: I, fontSize: "0.82rem", fontWeight: 700, marginBottom: 2 }}>{a.name}</div>
                      <div style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.78rem", lineHeight: 1.55 }}>{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#9abaaa", fontFamily: I, fontSize: "0.72rem", lineHeight: 1.6 }}>
                Eligibility and requirements vary. Parents and guardians should confirm suitability and any necessary approval with the relevant Award Leader, Adviser or awarding organisation.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE FINAL PERFORMANCE ── */}
        <section style={{ background: green, position: "relative", overflow: "hidden" }}>
          <img src="/gallery/piano-final-performance.jpg" alt="Final performance"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,7vw,80px) clamp(24px,5vw,72px)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "start" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 500, color: "#fff", marginBottom: 16 }}>The Final Performance Celebration</h2>
              <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: I, fontSize: "clamp(0.88rem,1.1vw,1rem)", lineHeight: 1.8, maxWidth: 640 }}>
                Every Singing Performance student takes part in the Green Room Music Summer Camp Final Performance Celebration. Bringing together students from both the Vocal and Piano Departments, the final event gives performers the opportunity to share what they have developed throughout the week - the culmination of five days of training, rehearsing, experimenting and performing.
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
              <Link href="/apply" className="btn-gold">Apply for Singing Performance →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/singing-performance.jpg" alt="Singing performance"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
        </section>

        <CourseFAQs categoryKey="singing-performance" heading="Singing Performance Course FAQs" />

      </main>
      <Footer settings={settings} />
    </>
  );
}
