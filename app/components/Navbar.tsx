"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const courses = [
    { href: "/courses/piano", label: "Piano" },
    { href: "/courses/music-theory", label: "Music Theory" },
    { href: "/courses/musical-theatre", label: "Musical Theatre" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B1B3A] shadow-lg" : "bg-[#1B1B3A]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://greenroomtheory.com/wp-content/uploads/2023/01/cropped-green-room-music-theory-logo-2.png"
            alt="Green Room Music"
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <div
              className="text-white text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Green Room
            </div>
            <div className="text-[#C9A84C] text-[10px] tracking-widest uppercase">
              Music Summer Camp
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm tracking-wide transition-colors ${
              pathname === "/" ? "text-[#C9A84C]" : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* Courses dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="text-sm tracking-wide text-white/80 hover:text-white flex items-center gap-1 transition-colors">
              Courses
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-sm overflow-hidden">
                {courses.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-5 py-3 text-sm text-[#1B1B3A] hover:bg-[#1B1B3A] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/faculty"
            className={`text-sm tracking-wide transition-colors ${
              pathname === "/faculty" ? "text-[#C9A84C]" : "text-white/80 hover:text-white"
            }`}
          >
            Faculty
          </Link>
          <Link
            href="/residential-life"
            className={`text-sm tracking-wide transition-colors ${
              pathname === "/residential-life" ? "text-[#C9A84C]" : "text-white/80 hover:text-white"
            }`}
          >
            Residential Life
          </Link>

          <Link href="/apply" className="btn-gold text-xs">
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B1B3A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Home</Link>
          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">Courses</p>
            {courses.map((c) => (
              <Link key={c.href} href={c.href} className="block text-white/70 hover:text-white text-sm py-1 pl-3" onClick={() => setMobileOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>
          <Link href="/faculty" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Faculty</Link>
          <Link href="/residential-life" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Residential Life</Link>
          <Link href="/apply" className="btn-gold text-center text-xs mt-2" onClick={() => setMobileOpen(false)}>Apply Now</Link>
        </div>
      )}
    </nav>
  );
}
