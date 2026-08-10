// Sanity migration: replace `courses.find(...)` with:
//   const course = await sanity.fetch(
//     groq`*[_type == "course" && slug.current == $slug][0]`,
//     { slug: params.slug }
//   );
// And replace generateStaticParams with a Sanity slugs fetch.

import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { courses } from "../../lib/data";
import { urlFor } from "../../lib/image";
import { getSiteSettings } from "../../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug.current }));
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [settings, course] = await Promise.all([
    getSiteSettings(),
    Promise.resolve(courses.find((c) => c.slug.current === params.slug)),
  ]);
  if (!course) notFound();

  const accentColor = course.heroColor;

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <div style={{ background: accentColor, position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${urlFor(course.heroImage)})`,
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25,
          }} />
          <div style={{
            position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto",
            padding: "80px clamp(16px, 3vw, 40px)",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48, alignItems: "center",
          }}>
            <div>
              <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontFamily: I }}>
                Course — {course.title}
              </p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>
                {course.title}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480, fontSize: "0.95rem" }}>
                {course.tagline}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/apply" className="btn-gold">Register Interest</Link>
                <Link href="/courses" className="btn-outline-white">All Courses</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {course.heroStats.map(({ label, value }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 20px" }}>
                  <div style={{ color: gold, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 8, fontFamily: I }}>{label}</div>
                  <div style={{ color: "#fff", fontFamily: G, fontSize: "1.5rem", fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>

            {/* Main body */}
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, color: accentColor, marginBottom: 16 }}>
                {course.aboutHeading}
              </h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 24 }} />
              {course.about.map((para, i) => (
                <p key={i} style={{ color: "#3d5c51", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: i < course.about.length - 1 ? 16 : 40 }}>
                  {para}
                </p>
              ))}

              {/* Schedule or Topics */}
              {course.detailType === "schedule" && course.schedule && (
                <>
                  <h3 style={{ fontFamily: G, fontSize: "1.4rem", fontWeight: 500, color: accentColor, marginBottom: 20 }}>A Typical Day</h3>
                  <div>
                    {course.schedule.map(({ time, activity }) => (
                      <div key={time} style={{ display: "flex", gap: 24, alignItems: "flex-start", borderBottom: "1px solid #e0dbd0", padding: "14px 0" }}>
                        <span style={{ color: gold, fontSize: "0.78rem", fontFamily: "monospace", width: 44, flexShrink: 0, marginTop: 2 }}>{time}</span>
                        <span style={{ color: "#3d5c51", fontSize: "0.9rem" }}>{activity}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {course.detailType === "topics" && course.topics && (
                <>
                  <h3 style={{ fontFamily: G, fontSize: "1.4rem", fontWeight: 500, color: accentColor, marginBottom: 20 }}>Topics Covered</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                    {course.topics.map((t) => (
                      <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", padding: "12px 16px", border: "1px solid #e0dbd0", fontSize: "0.88rem", color: "#3d5c51" }}>
                        <span style={{ color: gold, flexShrink: 0, fontSize: "0.7rem" }}>&#9670;</span>{t}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: accentColor, padding: "32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: "#fff", marginBottom: 20 }}>{"What's Included"}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {course.includes.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 12, color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                      <span style={{ color: gold, flexShrink: 0, fontSize: "0.7rem", marginTop: 3 }}>&#9670;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: gold, padding: "28px 32px" }}>
                <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: "#fff", marginBottom: 10 }}>Entry Requirements</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", lineHeight: 1.7 }}>{course.requirements}</p>
              </div>
              <Link href="/apply" className="btn-gold" style={{ textAlign: "center", display: "block" }}>Register Interest</Link>
            </div>
          </div>
        </section>

        {/* Other courses */}
        <section style={{ background: "#fff", padding: "clamp(48px, 6vw, 72px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
            <h2 style={{ fontFamily: G, fontSize: "1.5rem", fontWeight: 500, color: accentColor, marginBottom: 24 }}>Other Courses</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
              {courses.filter((c) => c.slug.current !== course.slug.current).map((c) => (
                <Link key={c.slug.current} href={`/courses/${c.slug.current}`} style={{ textDecoration: "none", background: cream, padding: "28px 24px", display: "block", borderTop: `3px solid ${gold}` }}>
                  <p style={{ color: gold, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", fontFamily: I, fontWeight: 600, marginBottom: 8 }}>{c.grade}</p>
                  <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: accentColor, marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ color: "#5a7a6a", fontSize: "0.83rem", lineHeight: 1.7 }}>{c.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
