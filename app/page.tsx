"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

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

const faqs = [
  { q: "What is included?", a: "Tuition, full board accommodation, all materials, evening programme and the final showcase concert are all included in the course fee." },
  { q: "Is accommodation provided?", a: "Yes. Students stay in comfortable, supervised residential rooms at Stamford School with dedicated houseparents on site throughout." },
  { q: "How are students supervised?", a: "All staff hold enhanced DBS checks. A dedicated pastoral team is available 24/7 and parents receive regular updates during the week." },
  { q: "How do I apply?", a: "Complete the interest form on our Apply page. Applications for Summer 2027 will open soon — register your interest now to be first to know." },
];

const tutors = [
  {
    name: "Will Fowler",
    role: "Co-Artistic Director",
    desc: "Pianist, educator and coach with a passion for nurturing musical excellence and curiosity. Will leads our piano and chamber music programme.",
    img: "https://greenroomtheory.com/wp-content/uploads/2025/01/will-fowler-photo.png",
  },
  {
    name: "Vivian Shiao",
    role: "Co-Artistic Director",
    desc: "Pianist and teacher dedicated to inspiring young musicians through imaginative teaching and collaborative music-making. Vivian leads our theory and ensemble programmes.",
    img: "https://greenroomtheory.com/wp-content/uploads/2023/09/img_068.webp",
  },
];

const partners = [
  "Stamford School",
  "ABRSM",
  "Trinity College London",
  "Duke of Edinburgh's Award",
  "Arts Award",
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const coursesSec = useFadeIn();
  const whySec = useFadeIn();
  const resLifeSec = useFadeIn();
  const tutorsSec = useFadeIn();
  const datesSec = useFadeIn();
  const ctaSec = useFadeIn();
  const partnersSec = useFadeIn();

  return (
    <>
      <Navbar />
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
          <img
            src="https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg"
            alt="GRMSC students"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
              transform: heroReady ? "scale(1)" : "scale(1.05)",
              transition: "transform 1.6s cubic-bezier(.22,.68,0,1)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(8,47,39,0.97) 0%, rgba(8,47,39,0.92) 30%, rgba(8,47,39,0.65) 55%, rgba(8,47,39,0.2) 80%, rgba(8,47,39,0.05) 100%)",
          }} />

          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px, 5vw, 64px)" }}>
            <div style={{ maxWidth: 580 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(200,154,59,0.5)",
                borderRadius: 3, padding: "7px 14px", marginBottom: 28,
                background: "rgba(200,154,59,0.1)",
                opacity: heroReady ? 1 : 0,
                transition: "opacity 0.7s ease 0.1s",
              }}>
                <span style={{ color: gold, fontSize: "0.63rem", fontFamily: I, textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>Residential · Summer 2027</span>
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
                Green Room Music<br />Summer Course
              </h1>

              <p style={{
                color: "rgba(255,255,255,0.68)", fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                lineHeight: 1.78, marginBottom: 24, maxWidth: 420,
                opacity: heroReady ? 1 : 0,
                transition: "opacity 0.8s ease 0.3s",
              }}>
                A residential summer course for young performers aged 10–17.
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
                <span style={{ color: gold, fontSize: "0.85rem", fontFamily: I, fontWeight: 600 }}>Stamford School</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontFamily: I }}>19–23 July 2027</span>
              </div>

              <div style={{
                display: "flex", gap: 12, flexWrap: "wrap",
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.62s, transform 0.7s ease 0.62s",
              }}>
                <Link href="/courses" className="btn-gold">Explore the Courses →</Link>
                <Link href="/apply" className="btn-outline-white">Register Interest</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COURSE CARDS ─── */}
        <div ref={coursesSec.ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {[
            {
              title: "Piano",
              label: "I",
              desc: "Develop technique, musicianship and expressive performance in an inspiring setting.",
              href: "/courses/piano",
              img: "https://greenroomtheory.com/wp-content/uploads/2025/09/014-GreenRoomMusicTheorySummer2025-scaled.jpg",
            },
            {
              title: "Music Theory",
              label: "II",
              desc: "Deepen understanding and analysis through engaging, practical study.",
              href: "/courses/music-theory",
              img: "https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg",
            },
            {
              title: "Musical Theatre",
              label: "III",
              desc: "Build vocal, acting and performance skills with confidence and creativity.",
              href: "/courses/musical-theatre",
              img: "https://greenroomtheory.com/wp-content/uploads/2025/09/039-GreenRoomMusicTheorySummer2025-scaled.jpg",
            },
          ].map((c, i) => (
            <div
              key={c.title}
              className="course-card"
              style={{
                position: "relative", overflow: "hidden", minHeight: 440,
                opacity: coursesSec.visible ? 1 : 0,
                transform: coursesSec.visible ? "none" : "translateY(44px)",
                transition: `opacity 0.65s ease ${i * 0.14}s, transform 0.65s ease ${i * 0.14}s`,
              }}
            >
              <img
                src={c.img} alt={c.title}
                className="course-img"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.55s ease" }}
              />
              <div
                className="course-overlay"
                style={{ position: "absolute", inset: 0, background: "rgba(8,47,39,0.72)", transition: "background 0.3s ease" }}
              />
              <div style={{ position: "relative", zIndex: 1, padding: "40px 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ color: "rgba(200,154,59,0.5)", fontFamily: G, fontSize: "3rem", fontWeight: 500, lineHeight: 1, marginBottom: 16 }}>{c.label}</div>
                <div style={{ width: 28, height: 1, background: gold, marginBottom: 18 }} />
                <h3 style={{ fontFamily: G, fontSize: "1.6rem", fontWeight: 500, color: "#fff", marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.63)", fontSize: "0.87rem", lineHeight: 1.78, marginBottom: 24 }}>{c.desc}</p>
                <Link href={c.href} style={{ color: gold, fontSize: "0.82rem", fontFamily: I, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── WHY GRMSC ─── */}
        <section ref={whySec.ref} style={{ background: "#fff", padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              textAlign: "center", marginBottom: 60,
              opacity: whySec.visible ? 1 : 0,
              transform: whySec.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green }}>Why GRMSC?</h2>
              <div style={{ width: 48, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 44 }}>
              {[
                {
                  title: "Serious Music-Making",
                  desc: "High-quality teaching and inspiring repertoire for committed young musicians.",
                  svg: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 22V8l12-3v14" /><circle cx="7" cy="22" r="3" /><circle cx="19" cy="19" r="3" />
                    </svg>
                  ),
                },
                {
                  title: "Beautiful Setting",
                  desc: "Learn and live at the historic Stamford School in the heart of Lincolnshire.",
                  svg: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h22M5 21V10l9-6 9 6v11" /><rect x="11" y="14" width="6" height="7" />
                    </svg>
                  ),
                },
                {
                  title: "Confidence Through Performance",
                  desc: "Opportunities to perform, collaborate and grow as confident artists.",
                  svg: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="14,3 17.5,10.5 26,11.5 20,17.5 21.5,26 14,22 6.5,26 8,17.5 2,11.5 10.5,10.5" />
                    </svg>
                  ),
                },
                {
                  title: "Safe Residential Experience",
                  desc: "Pastoral care and wellbeing are at the heart of everything we do.",
                  svg: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2l9 4v8c0 5.5-4 10-9 12C5 24 1 19.5 1 14V6l13-4z" />
                    </svg>
                  ),
                },
              ].map((w, i) => (
                <div key={w.title} style={{
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
                  }}>{w.svg}</div>
                  <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: green, marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ color: "#5a7a6a", fontSize: "0.85rem", lineHeight: 1.78 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESIDENTIAL LIFE ─── */}
        <section ref={resLifeSec.ref} style={{ background: cream, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              position: "relative", minHeight: 440, overflow: "hidden",
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
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", fontWeight: 500, color: green, marginBottom: 12 }}>Residential Life</h2>
              <div style={{ width: 36, height: 2, background: gold, marginBottom: 24 }} />
              <p style={{ color: "#5a7a6a", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: 32 }}>
                Live, learn and make music in a supportive community. Students enjoy comfortable accommodation, nutritious meals and a programme that balances focused rehearsals with fun, friendship and relaxation.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "En-suite accommodation",
                  "Nutritious meals",
                  "Pastoral care 24/7",
                  "Daily rehearsals & classes",
                  "Evening activities",
                  "Lifelong friendships",
                ].map((tag) => (
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
        <section ref={tutorsSec.ref} style={{ background: "#fff", padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              textAlign: "center", marginBottom: 56,
              opacity: tutorsSec.visible ? 1 : 0,
              transform: tutorsSec.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green }}>Meet the Tutors</h2>
              <div style={{ width: 48, height: 2, background: gold, margin: "16px auto 0" }} />
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, maxWidth: 680, margin: "0 auto",
              opacity: tutorsSec.visible ? 1 : 0,
              transform: tutorsSec.visible ? "none" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}>
              {tutors.map((t) => (
                <div key={t.name} style={{ textAlign: "center" }} className="card-hover">
                  <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
                    <img
                      src={t.img}
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
                  <p style={{ color: "#5a7a6a", fontSize: "0.85rem", lineHeight: 1.72 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DATES & FAQ ─── */}
        <section ref={datesSec.ref} style={{ background: cream, padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 72 }}>
            {/* Key dates */}
            <div style={{
              opacity: datesSec.visible ? 1 : 0,
              transform: datesSec.visible ? "none" : "translateY(28px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 500, color: green, marginBottom: 32 }}>Dates & Key Information</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { label: "Course Dates", val: "19–23 July 2027", sub: "Five days residential" },
                  { label: "Ages", val: "10–17 years", sub: "All instruments welcome" },
                  { label: "Location", val: "Stamford School", sub: "Lincolnshire, England" },
                  { label: "Accommodation", val: "Full residential", sub: "Houseparents on site" },
                  { label: "Final Concert", val: "23 July 2027", sub: "Showcase for family & friends" },
                ].map((d, i) => (
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
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 500, color: green, marginBottom: 32 }}>Frequently Asked Questions</h2>
              <div>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: "1px solid #d4cec4" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                        background: "none", border: "none", cursor: "pointer",
                        padding: "18px 0", textAlign: "left",
                        color: green, fontFamily: I, fontSize: "0.9rem", fontWeight: 500,
                      }}
                    >
                      {faq.q}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: gold, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease", marginLeft: 12 }}>
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div style={{ maxHeight: openFaq === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                      <p style={{ color: "#5a7a6a", fontSize: "0.87rem", lineHeight: 1.78, paddingBottom: 18 }}>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section ref={ctaSec.ref} style={{ position: "relative", overflow: "hidden", padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(8,47,39,0.88)" }} />
          <div style={{
            position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center",
            opacity: ctaSec.visible ? 1 : 0,
            transform: ctaSec.visible ? "none" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", border: `2px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: G, fontSize: "1.2rem", color: gold, fontWeight: 500 }}>GR</span>
              </div>
              <div>
                <h2 style={{ fontFamily: G, fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", fontWeight: 500, color: "#fff", marginBottom: 8 }}>Join the 2027 Residential Course</h2>
                <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "0.88rem", lineHeight: 1.68 }}>An unforgettable week of music, inspiration and friendship at one of Britain&apos;s finest schools.</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="/apply" className="btn-gold">Register Your Interest →</Link>
            </div>
          </div>
        </section>

        {/* ─── PARTNERS ─── */}
        <section ref={partnersSec.ref} style={{ background: "#fff", borderTop: "1px solid #e8e3da", padding: "40px clamp(24px, 5vw, 64px)" }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            opacity: partnersSec.visible ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}>
            <p style={{ textAlign: "center", fontFamily: I, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#aaa", marginBottom: 28 }}>Partners &amp; Affiliates</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 40px" }}>
              {partners.map((p) => (
                <span key={p} style={{
                  fontFamily: I, fontSize: "0.82rem", color: "#999",
                  letterSpacing: "0.02em", fontWeight: 500,
                  padding: "8px 0",
                }}>{p}</span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
