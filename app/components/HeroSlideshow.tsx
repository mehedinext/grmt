"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    label: "Residential Course",
    heading: "A residential music\nsummer course\nfor ages 10–17",
    sub: "19–23 July 2027 · Stamford School",
    cta: "Apply Now",
    href: "/apply",
    bg: "https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg",
  },
  {
    id: 2,
    label: "Piano",
    heading: "Master the keys in one\ntransformative week",
    sub: "Expert tuition from conservatoire-trained pianists",
    cta: "Explore Piano",
    href: "/courses/piano",
    bg: "https://greenroomtheory.com/wp-content/uploads/2025/09/014-GreenRoomMusicTheorySummer2025-scaled.jpg",
  },
  {
    id: 3,
    label: "Music Theory",
    heading: "Unlock the\nlanguage of music",
    sub: "ABRSM Grade 5 crash course and beyond",
    cta: "Explore Music Theory",
    href: "/courses/music-theory",
    bg: "https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg",
  },
  {
    id: 4,
    label: "Musical Theatre",
    heading: "Find your\nvoice on stage",
    sub: "Singing, acting, movement and a final showcase performance",
    cta: "Explore Musical Theatre",
    href: "/courses/musical-theatre",
    bg: "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }

  const slide = slides[current];

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#082F27" }}>
      {/* Background photo */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: animating ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      />
      {/* Green overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,47,39,0.90) 0%, rgba(8,47,39,0.60) 55%, rgba(8,47,39,0.35) 100%)" }} />

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 48px 100px",
          opacity: animating ? 0 : 1, transform: animating ? "translateY(14px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, background: "#C89A3B" }} />
            <span style={{ color: "#C89A3B", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
              {slide.label}
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "var(--font-garamond)",
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.12,
            marginBottom: 24,
            whiteSpace: "pre-line",
          }}>
            {slide.heading}
          </h1>

          {/* Sub */}
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", marginBottom: 40, fontFamily: "var(--font-inter)", lineHeight: 1.6 }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Link href={slide.href} className="btn-gold">{slide.cta}</Link>
            <Link href="/courses" className="btn-outline-white">View All Courses</Link>
          </div>

          {/* Fact strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[["19–23 July 2027", "Dates"], ["Ages 10–17", "Open to"], ["Stamford School", "Venue"], ["3 Courses", "Disciplines"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ color: "#C89A3B", fontFamily: "var(--font-garamond)", fontSize: "1.1rem", fontWeight: 600 }}>{val}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "var(--font-inter)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 3 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 28 : 8, height: 8,
              borderRadius: 4, border: "none", cursor: "pointer",
              background: i === current ? "#C89A3B" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => goTo((current - 1 + slides.length) % slides.length)} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.3rem", zIndex: 3 }}>‹</button>
      <button onClick={() => goTo((current + 1) % slides.length)} style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.3rem", zIndex: 3 }}>›</button>
    </section>
  );
}
