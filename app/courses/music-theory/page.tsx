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
  { label: "Ages", value: "10–17" },
  { label: "Focus", value: "ABRSM Music Theory\nExam Preparation" },
  { label: "Levels", value: "Beginner → Grade 5" },
  { label: "Dates", value: "19–23 July 2027" },
  { label: "Location", value: "Stamford School" },
  { label: "Format", value: "5 Days / 4 Nights\nFully Residential" },
  { label: "Boarding & Meals", value: "Included" },
  { label: "Exam Prep", value: "Past Papers · Exam Technique\nMock Exams" },
  { label: "Ideal For", value: "Students Preparing for\nGrades 1–5" },
];

const examContent = [
  ["Focused ABRSM Theory Tuition", "Question Strategy"],
  ["Grades 1–5 Content", "Revision & Consolidation"],
  ["Guided Practice", "Multiple Mock Examinations"],
  ["Past Paper Work", "Individual Feedback"],
  ["Exam Technique", "Green Room Activity-Style Learning"],
];

const whoFor = [
  "Are preparing for an ABRSM Music Theory examination",
  "Need to complete Grade 5 Theory",
  "Want to make rapid progress over the summer",
  "Have gaps in their existing theory knowledge",
  "Find traditional theory lessons difficult or unengaging",
  "Would benefit from intensive revision before an upcoming exam",
  "Want to build their understanding from the fundamentals upwards",
];

const awards = [
  { logo: "/partners/dofe.png", name: "The Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey." },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development." },
];

export default async function MusicTheoryPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <img src="/gallery/020-GreenRoomMusicTheorySummer2025.jpg" alt="Music Theory class in session"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `linear-gradient(to top, ${green} 0%, rgba(8,47,39,0.8) 38%, rgba(8,47,39,0.35) 65%, rgba(8,47,39,0.1) 100%)` }} />

          <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "clamp(32px,6vw,80px) clamp(20px,5vw,72px) clamp(40px,7vw,88px)" }}>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 500, color: "#fff", lineHeight: 1, marginBottom: 14 }}>Music Theory</h1>
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem,1.4vw,1.2rem)", fontStyle: "italic", marginBottom: 20 }}>The ABRSM Music Theory Crash Course</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: I, fontSize: "clamp(0.85rem,1vw,0.96rem)", lineHeight: 1.75, marginBottom: 12, maxWidth: 560 }}>
              An intensive five-day residential course for young musicians aged 10–17, preparing for ABRSM Music Theory examinations up to Grade 5.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: I, fontSize: "clamp(0.82rem,0.95vw,0.9rem)", lineHeight: 1.75, marginBottom: 24, maxWidth: 560 }}>
              From the fundamentals to Grade 5, students build strong foundations, fill gaps, practise exam technique and gain confidence through focused tuition, past papers and multiple mock examinations.
            </p>
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem,1.3vw,1.15rem)", fontStyle: "italic", marginBottom: 32 }}>
              From zero to Grade 5 – in one immersive week.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Apply for Music Theory</Link>
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

        {/* ── TWO COLUMNS: Fundamentals · Exam Prep ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "start" }}>

            {/* From the Fundamentals to Grade 5 */}
            <div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 8 }}>Build the knowledge. Prepare for the exam.</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 20 }}>From the Fundamentals<br />to Grade 5</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Music theory builds step by step. This course takes students through the essential knowledge required from the earliest grades through to ABRSM Grade 5 standard.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 28 }}>
                Whether your child is starting from the beginning or already preparing for Grade 5, our structured approach ensures every student makes significant progress in just five days.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/037-GreenRoomMusicTheorySummer2025.jpg" alt="Student studying music theory"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Intensive ABRSM Exam Preparation */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 12 }}>Intensive ABRSM<br />Exam Preparation</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                This is a focused crash course designed specifically to prepare students for ABRSM Music Theory exams.
              </p>
              <p style={{ color: green, fontFamily: I, fontSize: "0.82rem", fontWeight: 600, marginBottom: 14 }}>Students can expect:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px" }}>
                {examContent.map(([left, right]) => (
                  <>
                    <div key={left} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.84rem", lineHeight: 1.5 }}>
                      <span style={{ color: gold, flexShrink: 0, marginTop: 3 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                      </span>{left}
                    </div>
                    <div key={right} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.84rem", lineHeight: 1.5 }}>
                      <span style={{ color: gold, flexShrink: 0, marginTop: 3 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                      </span>{right}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TWO COLUMNS: Mock Exams · Green Room Method ── */}
        <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "start" }}>

            {/* Mock Exams */}
            <div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 8 }}>Practise before it counts.</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 20 }}>Mock Exams</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Students complete multiple mock examinations during the week, giving them the opportunity to experience exam-style conditions and become familiar with the structure and pace of an ABRSM Theory paper.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Mock results allow faculty to identify weaker areas and target teaching throughout the course.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 28 }}>
                By the end of the week, students will have greater clarity, stronger exam technique and the confidence to succeed.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/040-GreenRoomMusicTheorySummer2025.jpg" alt="Student completing mock exam"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* The Green Room Method */}
            <div>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 8 }}>The course that started it all.</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 20 }}>The Green Room Method</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Before Green Room Music Summer Camp expanded into Piano and Vocal Performance, Green Room began with Music Theory.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Our original residential course was built around one belief: <strong style={{ color: green }}>theory does not have to be boring.</strong>
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Alongside focused academic tuition and exam preparation, we use our distinctive activity-style approach to learning to help students understand and remember difficult concepts.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 24 }}>
                Students are encouraged to study, compete, collaborate, experiment and apply what they have learned.
              </p>
              <p style={{ color: green, fontFamily: I, fontSize: "0.88rem", fontWeight: 700, marginBottom: 28 }}>
                Serious exam preparation. Delivered differently.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/044-GreenRoomMusicTheorySummer2025.jpg" alt="Music theory class in session"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS + WHO IS THIS FOR ── */}
        <section style={{ background: cream, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "start" }}>

            {/* Previous Exam Results */}
            <div style={{ background: green, borderRadius: 4, padding: "clamp(32px,4vw,48px)" }}>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 8 }}>Proven progress.</p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.5rem,2.2vw,2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.2, marginBottom: 32 }}>Previous Exam Results</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
                {[
                  { stat: "100%", label: "Pass Rate" },
                  { stat: "75%", label: "Merit or Distinction" },
                  { stat: "100+", label: "Students Supported" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: G, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: gold, fontWeight: 500, lineHeight: 1, marginBottom: 8 }}>{s.stat}</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontFamily: I, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: I, fontSize: "0.75rem", lineHeight: 1.7 }}>
                Results from previous Green Room Music Theory programmes. Individual results vary according to starting level, preparation and engagement.
              </p>
            </div>

            {/* Who Is This Course For? */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 12 }}>Who Is This Course For?</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                The Music Theory Course is ideal for students who:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                {whoFor.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#3d5c51", fontFamily: I, fontSize: "0.88rem", lineHeight: 1.55 }}>
                    <span style={{ color: gold, flexShrink: 0, marginTop: 2 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                    </span>{item}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.85rem", lineHeight: 1.75 }}>
                Students do not need to already be at Grade 5 standard before attending. The programme supports students working across earlier grades through to Grade 5.
              </p>
            </div>
          </div>
        </section>

        {/* ── TWO COLUMNS: Community + Make Your Week Count ── */}
        <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "start" }}>

            {/* One Camp. One Community. */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 20 }}>One Camp.<br />One Community.</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Students specialise in their chosen course, but the wider GRMSC experience brings the whole camp together.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Meals, activities, recreation, social events and selected wellbeing sessions are shared across courses, giving Theory students the opportunity to meet pianists, singers and other young musicians beyond their own department.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                With students joining us from the UK and internationally, GRMSC becomes a vibrant community of young people living, learning and making friends together.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 28 }}>
                Because a week at Green Room is about much more than what happens in class.
              </p>
              <Link href="/residential-life" className="btn-outline-green">Explore Residential Life →</Link>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3", marginTop: 28 }}>
                <img src="/gallery/105-GreenRoomMusicTheorySummer2025.jpg" alt="GRMSC students together"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Make Your Week Count */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 12 }}>Make Your Week Count</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 24 }}>
                Experiences at GRMSC may also support students working towards recognised external awards and qualifications.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 24 }}>
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
              <p style={{ color: "#9abaaa", fontFamily: I, fontSize: "0.72rem", lineHeight: 1.6, marginBottom: 20 }}>
                Eligibility and requirements vary. Parents and guardians should confirm suitability and any necessary approval with the relevant Award Leader, Adviser or awarding organisation.
              </p>
              <Link href="/courses" className="btn-outline-green">Explore Awards &amp; Qualifications →</Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ background: green, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                Five days. One major step towards the exam.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 12 }}>
                Students arrive with different starting points. Some may be beginning their theory journey. Others may already be preparing for Grade 5.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 8 }}>
                Across one intensive residential week, they build knowledge, fill gaps, practise exam technique and gain the confidence needed to take the next step towards their ABRSM Music Theory examination.
              </p>
              <p style={{ color: gold, fontFamily: G, fontSize: "1.05rem", fontStyle: "italic", marginBottom: 32 }}>
                From the fundamentals to Grade 5. Faster, clearer and more engaging.
              </p>
              <Link href="/apply" className="btn-gold">Apply for Music Theory →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/036-GreenRoomMusicTheorySummer2025.jpg" alt="Music theory student"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
