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
  { label: "Levels", value: "Beginner - ABRSM Grade 5" },
  // Row 2
  { label: "Format", value: "5 Days / 4 Nights\nFully Residential" },
  { label: "Exam Prep", value: "Past Papers & Mock Exams" },
  { label: "Boarding & Meals", value: "Included" },
  { label: "Pass Rate", value: "100%" },
];

const defaultExamItems = [
  "Focused ABRSM Theory Tuition",
  "Question Strategy",
  "Grades 1-5 Content",
  "Revision & Consolidation",
  "Guided Practice",
  "Multiple Mock Examinations",
  "Past Paper Work",
  "Individual Feedback",
  "Exam Technique",
  "Green Room Activity-Style Learning",
];

const defaultWhoFor = [
  "Are preparing for an ABRSM Music Theory examination",
  "Need to complete Grade 5 Theory",
  "Want to make rapid progress over the summer",
  "Have gaps in their existing theory knowledge",
  "Find traditional theory lessons difficult or unengaging",
  "Would benefit from intensive revision before an upcoming exam",
  "Want to build their understanding from the fundamentals upwards",
];

const defaultExamStats = [
  { stat: "100%", label: "Pass Rate" },
  { stat: "90%", label: "Distinction" },
  { stat: "100+", label: "Students Supported" },
];

const defaultHeroAlertTitle = "The ABRSM Music Theory Crash Course";
const defaultCtaHeading = "Five days. One major step towards the exam.";
const defaultCtaSubtext = "Students arrive with different starting points. Across one intensive residential week, they build knowledge, fill gaps, practise exam technique and gain the confidence needed to take the next step towards their ABRSM Music Theory examination.";
const defaultCtaTagline = "From the fundamentals to Grade 5. Faster, clearer and more engaging.";

const defaultAwards = [
  { logo: "/partners/dofe.png", name: "The Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity.", href: "https://www.dukeofed.org/" },
  { logo: "/partners/arts-award.png", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey.", href: "https://www.artsaward.org.uk/site/?id=64" },
  { logo: "/partners/congressional-award.jpeg", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development.", href: "https://congressionalaward.org/" },
];

const awardHrefByName: Record<string, string> = {
  "Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "The Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "Arts Award": "https://www.artsaward.org.uk/site/?id=64",
  "The Congressional Award": "https://congressionalaward.org/",
};

export const revalidate = 60;

export default async function MusicTheoryPage() {
  const [settings, course] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(`*[_type == "course" && slug.current == "music-theory"][0]{ glance, examItems, whoFor, examStats, heroAlertTitle, ctaHeading, ctaSubtext, ctaTagline, "awards": awards[]{ name, desc, "logo": logo.asset->url } }`).catch(() => null),
  ]);
  const awards = course?.awards?.length ? course.awards : defaultAwards;
  const glance = course?.glance?.length ? course.glance : defaultGlance;
  const examItemsFlat: string[] = course?.examItems?.length ? course.examItems : defaultExamItems;
  // group exam items into pairs for the 2-column layout
  const examContent: string[][] = [];
  for (let i = 0; i < examItemsFlat.length; i += 2) {
    examContent.push([examItemsFlat[i], examItemsFlat[i + 1] || ""]);
  }
  const whoFor: string[] = course?.whoFor?.length ? course.whoFor : defaultWhoFor;
  const examStats = course?.examStats?.length ? course.examStats : defaultExamStats;
  const heroAlertTitle = course?.heroAlertTitle || defaultHeroAlertTitle;
  const ctaHeading = course?.ctaHeading || defaultCtaHeading;
  const ctaSubtext = course?.ctaSubtext || defaultCtaSubtext;
  const ctaTagline = course?.ctaTagline || defaultCtaTagline;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        {/* ── HERO (SPLIT: TEXT LEFT | IMAGE RIGHT) ── */}
        <section className="theory-hero" style={{ background: green, display: "grid", gridTemplateColumns: "1fr 1fr", height: "calc(100vh - 68px)", minHeight: 580, maxHeight: 900 }}>
          <div style={{ padding: "clamp(40px, 5vw, 72px) clamp(24px, 5vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 680, overflow: "auto" }}>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>Green Room Music Summer Camp</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Music Theory</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem, 1.3vw, 1.2rem)", marginBottom: 22, fontStyle: "italic" }}>{heroAlertTitle}</p>
            <p style={{ color: "rgba(255,255,255,0.78)", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.8, marginBottom: 18 }}>
              An intensive five-day residential course for young musicians aged 10-17, preparing for ABRSM Music Theory examinations from Grades 1-5. Grade 5 is our most popular choice, but students working towards Grades 1-4 are equally welcome and regularly join us.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: I, fontSize: "clamp(0.88rem, 0.95vw, 0.95rem)", lineHeight: 1.75, marginBottom: 20 }}>
              From complete beginners to Grade 5 students, everyone benefits from focused tuition tailored to their level, building strong foundations, filling gaps in knowledge and developing exam confidence through past papers, exam technique and multiple mock examinations.
            </p>
            <p style={{ color: gold, fontFamily: G, fontSize: "clamp(1rem, 1.3vw, 1.15rem)", fontStyle: "italic", marginBottom: 28 }}>
              From zero to Grade 5 - in one immersive week.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMZ4lqBWovMnSUA0X7bh6HZOnb0bWPjQzsqVlHLZfx6IYh2Q/viewform" target="_blank" rel="noopener noreferrer" className="btn-gold">Apply for Music Theory</Link>
              <Link href="/residential-life" className="btn-outline-white">Explore Residential Life</Link>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src="/gallery/music-theory-hero.jpg" alt="Music Theory class in session"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
        </section>

        <style>{`
          @media (max-width: 860px) {
            .theory-hero { grid-template-columns: 1fr !important; height: auto !important; max-height: none !important; min-height: 0 !important; }
            .theory-hero > div:first-child { overflow: visible !important; padding-top: 48px; padding-bottom: 48px; }
            .theory-hero > div:last-child { min-height: 320px; order: -1; }
          }
          @media (max-width: 720px) {
            .glance-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        {/* ── COURSE AT A GLANCE ── */}
        <section style={{ background: green }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(20px,5vw,72px)" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600 }}>Course at a Glance</p>
            </div>
            <div className="glance-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {glance.map((g: any) => (
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
                Music theory builds step by step. Our intensive five-day course takes students through the essential knowledge required from the earliest grades through to ABRSM Grade 5 standard.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Whether your child is a complete beginner, preparing for Grades 1-4 or working towards Grade 5, our structured approach ensures every student receives focused tuition tailored to their level, helping them make significant progress in just five days.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 28 }}>
                With a <strong style={{ color: green }}>100% pass rate</strong> and <strong style={{ color: green }}>90% Distinction rate</strong>, our proven approach combines expert teaching, practical exercises and thorough exam preparation to give students the knowledge, skills and confidence to succeed in their ABRSM Music Theory examinations.
              </p>
              <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
                <img src="/gallery/music-theory-engaged-students.jpg" alt="Music theory students writing exercises"
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
                {examContent.map(([left, right], i) => (
                  <div key={`row-${i}`} style={{ display: "contents" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.84rem", lineHeight: 1.5 }}>
                      <span style={{ color: gold, flexShrink: 0, marginTop: 3 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                      </span>{left}
                    </div>
                    {right ? (
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#3d5c51", fontFamily: I, fontSize: "0.84rem", lineHeight: 1.5 }}>
                        <span style={{ color: gold, flexShrink: 0, marginTop: 3 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                        </span>{right}
                      </div>
                    ) : <div />}
                  </div>
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
                Throughout the course, students work extensively with past ABRSM Music Theory papers, developing their understanding of exam questions, marking requirements and effective exam technique from the very beginning.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Students complete two mock examinations during the week: one paper-based and one online, giving them experience of both examination formats and the opportunity to practise under realistic exam conditions.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Results from these assessments allow our faculty to identify areas for improvement, provide personalised feedback and tailor teaching to each student's individual needs.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 28 }}>
                By the end of the week, students will have strengthened their knowledge, refined their exam technique and developed the confidence needed to approach their official ABRSM Music Theory examination with success.
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
                Before Green Room Music Summer Camp expanded into Piano and Singing Performance, Green Room began with Music Theory.
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
                {examStats.map((s: any) => (
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
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 500, color: green, lineHeight: 1.2, marginBottom: 16 }}>Who Is This Course For?</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16 }}>
                Our Music Theory Course is designed for any student aged 10-17 preparing for an ABRSM Music Theory examination (Grades 1-5), from complete beginners to those ready to sit their exam.
              </p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                The course is particularly well suited to students who:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginBottom: 20, padding: 0 }}>
                {[
                  { title: "Want to complete their Grade 5 Theory quickly", body: "our intensive crash-course approach helps students cover the syllabus and prepare for their examination in just five days, rather than spreading their learning over months of weekly lessons." },
                  { title: "Are preparing for ABRSM Grades 1-4", body: "students working towards earlier grades are equally welcome, with teaching tailored to their individual level and examination goals." },
                  { title: "Want to save time and money on private tuition", body: "an intensive week of expert teaching can reduce the need for months of additional one-to-one theory lessons." },
                  { title: "Would benefit from a stress-free approach for parents", body: "with tuition, supervised study, boarding and meals all taken care of, there's no need to organise weekly lessons alongside other commitments." },
                ].map((item) => (
                  <li key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.65 }}>
                    <span style={{ color: gold, flexShrink: 0, marginTop: 4 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                    </span>
                    <span><strong style={{ color: green }}>{item.title}</strong> - {item.body}</span>
                  </li>
                ))}
              </ul>
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

        {/* ── BOTTOM CTA ── */}
        <section style={{ background: green, padding: "clamp(56px,7vw,88px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                {ctaHeading}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 8, whiteSpace: "pre-line" }}>
                {ctaSubtext}
              </p>
              <p style={{ color: gold, fontFamily: G, fontSize: "1.05rem", fontStyle: "italic", marginBottom: 32 }}>
                {ctaTagline}
              </p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMZ4lqBWovMnSUA0X7bh6HZOnb0bWPjQzsqVlHLZfx6IYh2Q/viewform" target="_blank" rel="noopener noreferrer" className="btn-gold">Apply for Music Theory →</Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src="/gallery/music-theory-cta.jpg" alt="Music theory students working together"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        <CourseFAQs categoryKey="music-theory" heading="Music Theory Course FAQs" />

      </main>
      <Footer settings={settings} />
    </>
  );
}
