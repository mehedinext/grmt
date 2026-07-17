"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    course: "Piano",
    tagline: "Master the keys in one transformative week",
    sub: "Expert tuition from conservatoire-trained pianists in an intimate residential setting.",
    cta: "Apply for Piano",
    href: "/courses/piano",
    accent: "#C9A84C",
    icon: "🎹",
  },
  {
    id: 2,
    course: "Music Theory",
    tagline: "Unlock the language of music",
    sub: "Intensive theory, ear training and analysis — designed to elevate every musician.",
    cta: "Apply for Music Theory",
    href: "/courses/music-theory",
    accent: "#C9A84C",
    icon: "♪",
  },
  {
    id: 3,
    course: "Musical Theatre",
    tagline: "Find your voice on stage",
    sub: "Singing, acting and movement combined — a full performing arts experience.",
    cta: "Apply for Musical Theatre",
    href: "/courses/musical-theatre",
    accent: "#C9A84C",
    icon: "🎭",
  },
  {
    id: 4,
    course: "Green Room Music Summer Camp 2027",
    tagline: "Three courses. One unforgettable summer.",
    sub: "A week-long residential programme for passionate young musicians and performers.",
    cta: "Apply Now",
    href: "/apply",
    accent: "#C9A84C",
    icon: "★",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4500);
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
    <section className="relative w-full min-h-screen bg-[#1B1B3A] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 50%)`,
        }}
      />
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />

      <div
        className="max-w-7xl mx-auto px-6 py-32 w-full transition-all duration-500"
        style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
      >
        <div className="max-w-3xl">
          {/* Course badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#C9A84C] text-3xl">{slide.icon}</span>
            <span className="text-[#C9A84C] text-xs uppercase tracking-[0.25em] font-medium">
              {slide.id === 4 ? "Summer 2027" : `Course — ${slide.course}`}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {slide.tagline}
          </h1>

          {/* Sub */}
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href={slide.href} className="btn-gold">
              {slide.cta}
            </Link>
            <Link href="/courses" className="btn-outline">
              View All Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-[#C9A84C]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-8 text-white/30 text-sm font-mono">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
      >
        ›
      </button>
    </section>
  );
}
