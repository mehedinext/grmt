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
  { icon: "📅", label: "Dates", value: "19–23 July 2027" },
  { icon: "🍽️", label: "Boarding & Meals", value: "Included" },
  { icon: "📍", label: "Location", value: "Stamford School" },
  { icon: "🏠", label: "Format", value: "5 Days / 4 Nights\nFully Residential" },
  { icon: "🎭", label: "Styles Explored", value: "Musical Theatre\nClassical · Jazz" },
  { icon: "👨‍🏫", label: "Course Director", value: "Conor Mathers" },
  { icon: "🎤", label: "Faculty", value: "Professional Performers\n& Educators" },
  { icon: "⭐", label: "Performance", value: "Every Student Performs in the GRMSC Final Performance" },
];

const programme = [
  "Musical Theatre",
  "Stagecraft & Communication",
  "Classical Vocal Performance",
  "Ensemble Work",
  "Jazz Vocal Styles",
  "Musician Wellness",
  "Vocal Technique",
  "Masterclasses & Special Sessions",
  "Performance & Interpretation",
  "Preparation for the GRMSC Final Performance",
  "Acting Through Song",
];

const awards = [
  { logo: "/partners/dofe.png", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and performance experiences may contribute towards an existing Arts Award journey." },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development." },
];

export default async function VocalPerformancePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <img src="/gallery/195-Green_Room_Music_Concert_Summer_2025.jpg" alt="Vocal performance"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `linear-gradient(to top, ${green} 0%, rgba(8,47,39,0.75) 40%, rgba(8,47,39,0.3) 70%, rgba(8,47,39,0.1) 100%)` }} />

          <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "clamp(32px,6vw,80px) clamp(20px,5vw,72px) clamp(40px,7vw,88px)" }}>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 500, color: "#fff", lineHeight: 1, marginBottom: 14 }}>Vocal Performance</h1>
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem,1.4vw,1.2rem)", fontStyle: "italic", marginBottom: 16 }}>Musical Theatre · Classical · Jazz</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: I, fontSize: "clamp(0.85rem,1vw,0.96rem)", lineHeight: 1.75, marginBottom: 12, maxWidth: 560 }}>
              The Green Room Music Summer Camp Vocal Performance Course is designed for young singers aged 10–17 who want to develop their voice, confidence and versatility as performers. Led by Course Director Conor Mathers, students work with an experienced faculty of professional performers and educators, including artists with credits across London's West End and professional touring productions.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: I, fontSize: "clamp(0.82rem,0.95vw,0.9rem)", lineHeight: 1.75, marginBottom: 12, maxWidth: 520 }}>
              Across five immersive days, students explore Musical Theatre, Classical and Jazz performance, developing the skills needed to become more confident, expressive and well-rounded young performers.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: I, fontSize: "clamp(0.82rem,0.95vw,0.9rem)", lineHeight: 1.75, marginBottom: 32, maxWidth: 520 }}>
              Every student takes part in the Green Room Music Summer Camp Final Performance, bringing the Piano and Vocal Departments together at the end of the week.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Apply for Vocal Performance</Link>
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

        {/* ── THREE COLUMNS: Learn · Programme · Three Styles ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>

            {/* Learn from Working Performers */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Learn from Working Performers</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                The Vocal Performance Course is led by Conor Mathers, alongside a faculty of professional singers, actors, musicians and educators.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8 }}>
                Students have the opportunity to learn from performers with experience across London's West End, professional touring productions and the wider performance industry — gaining insight from artists who understand both the craft and realities of performing professionally.
              </p>
            </div>

            {/* The Vocal Performance Programme */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>The Vocal Performance Programme</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 18 }}>
                A varied programme combining vocal development, performance training and creative exploration.
              </p>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px 12px", marginBottom: 20 }}>
                {programme.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.82rem", lineHeight: 1.5 }}>
                    <span style={{ color: gold, flexShrink: 0, marginTop: 4, fontSize: "0.5rem" }}>◆</span>{item}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.85rem", lineHeight: 1.75 }}>
                Exploring different styles encourages students to become more versatile, adaptable and confident performers.
              </p>
            </div>

            {/* Three Styles. One Performer. */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Three Styles. One Performer.</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                Throughout the course, students experience contrasting vocal styles and discover how different repertoire demands different approaches to sound, interpretation, storytelling and performance. Musical Theatre develops communication and character. Classical work builds musicianship, control and vocal understanding. Jazz encourages individuality, musical freedom and stylistic awareness.
              </p>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", aspectRatio: "16/9", background: green }}>
                <img src="/gallery/241-Green_Room_Music_Concert_Summer_2025.jpg" alt="Concert performance" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── THREE COLUMNS: More Than Singing · Approach · One Community ── */}
        <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>

            {/* More Than Just Singing */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>More Than Just Singing</h2>
              </div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.78rem", fontWeight: 700, marginBottom: 12 }}>Finding the performer behind the voice.</p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8 }}>
                Vocal performance is about much more than producing a good sound. Students are encouraged to think about how they communicate with an audience, how they interpret material and how confidently they inhabit the stage. Performance-focused sessions explore the connection between voice, character, movement and storytelling.
              </p>
            </div>

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
                <p style={{ fontFamily: G, fontSize: "1.2rem", color: green, fontStyle: "italic", lineHeight: 1.5 }}>
                  "We take performance seriously. We just don't believe learning it has to be boring."
                </p>
              </blockquote>
            </div>

            {/* One Camp. One Community. */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(200,154,59,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h2 style={{ fontFamily: I, fontSize: "0.7rem", fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.12em" }}>One Camp. One Community.</h2>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Students specialise within their chosen course, but the wider GRMSC experience brings everyone together. Meals, activities, recreation, social events and selected wellbeing sessions are shared across courses, allowing Vocal Performance students to meet young musicians beyond their own department.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                With students joining us from the UK and internationally, GRMSC becomes a vibrant community of young performers living, learning, creating and making friends together.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/279-Green_Room_Music_Concert_Summer_2025.jpg" alt="GRMSC community" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── MAKE YOUR WEEK COUNT + FINAL PERFORMANCE (2-col) ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>

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
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                {awards.map((a) => (
                  <div key={a.name} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <img src={a.logo} alt={a.name} style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0, filter: "invert(1)", mixBlendMode: "multiply" }} />
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

            {/* The Final Performance */}
            <div style={{ background: green, borderRadius: 4, padding: "clamp(32px,4vw,48px)", position: "relative", overflow: "hidden" }}>
              <img src="/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg" alt="Final performance"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15, zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", border: `1.5px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: "#fff", marginBottom: 16 }}>The Final Performance</h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                  Every Vocal Performance student takes part in the Green Room Music Summer Camp Final Performance. Bringing together students from both the Vocal and Piano Departments, the final event gives performers the opportunity to share what they have developed throughout the week in front of an audience.
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8 }}>
                  It is the culmination of five days of training, rehearsing, experimenting and performing — and a chance for the entire GRMSC community to celebrate together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ background: green, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                Five days. Three styles. One unforgettable experience.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 8 }}>
                Students develop their voices, explore new styles, learn from professional performers, build confidence, take to the stage and make friends with young musicians from around the world.
              </p>
              <p style={{ color: gold, fontFamily: G, fontSize: "1.05rem", fontStyle: "italic", marginBottom: 32 }}>
                Find the voice. Build the confidence. Become the performer.
              </p>
              <Link href="/apply" className="btn-gold">Apply for Vocal Performance →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/195-Green_Room_Music_Concert_Summer_2025.jpg" alt="Young performer at piano"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
