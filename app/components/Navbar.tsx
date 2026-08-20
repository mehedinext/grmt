"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/residential-life", label: "Residential Life" },
  { href: "/faculty", label: "Faculty" },
  { href: "/fees", label: "Fees" },
  { href: "/faqs", label: "FAQs" },
];

type Settings = {
  navLogoSubtitle?: string;
  navCtaLabel?: string;
  navCtaHref?: string;
} | null;

export default function Navbar({ settings }: { settings?: Settings }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const subtitle = settings?.navLogoSubtitle ?? "Green Room Music Summer Camp";
  const ctaLabel  = settings?.navCtaLabel    ?? "Apply Now";
  const ctaHref   = settings?.navCtaHref     ?? "/apply";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? green : "rgba(8,47,39,0.97)",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.28)" : "none",
      transition: "box-shadow 0.3s ease, background 0.3s ease",
    }}>
      <div style={{ padding: "0 clamp(40px, 5vw, 72px)", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Green Room Music Summer Camp" style={{ height: "clamp(38px, 4.5vw, 50px)", width: "auto", display: "block", maxWidth: 240 }} />
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? gold : "rgba(255,255,255,0.78)",
              fontSize: "0.82rem", textDecoration: "none",
              fontFamily: I, letterSpacing: "0.02em",
              transition: "color 0.2s",
              borderBottom: pathname === l.href ? `1px solid ${gold}` : "1px solid transparent",
              paddingBottom: 2,
            }}>
              {l.label}
            </Link>
          ))}
          <Link href={ctaHref} style={{
            border: "1px solid rgba(255,255,255,0.45)",
            color: "#fff", fontSize: "0.75rem",
            padding: "8px 20px", textDecoration: "none",
            fontFamily: I, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
            transition: "border-color 0.2s, background 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = gold; (e.currentTarget as HTMLElement).style.color = gold; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
          className="nav-mobile-btn"
        >
          {mobileOpen ? (
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: green, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                color: pathname === l.href ? gold : "rgba(255,255,255,0.8)",
                fontSize: "0.9rem", textDecoration: "none",
                fontFamily: I, padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href={ctaHref} className="btn-gold"
              style={{ textAlign: "center", marginTop: 20, display: "block" }}
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
