"use client";
import Link from "next/link";

type Settings = {
  footerTagline?: string;
  footerDescription?: string;
  footerInstagram?: string;
  footerFacebook?: string;
  footerContactEmail?: string;
  footerCopyright?: string;
} | null;

export default function Footer({ settings }: { settings?: Settings }) {
  const tagline   = settings?.footerTagline      ?? "Green Room Music Summer Camp 2027";
  const desc      = settings?.footerDescription  ?? "19–23 July 2027 · Stamford School\nPiano · Music Theory · Vocal Performance\nAges 10–17";
  const instagram = settings?.footerInstagram    ?? "https://www.instagram.com/greenroommusictheory/";
  const facebook  = settings?.footerFacebook     ?? "https://m.facebook.com/people/Green-Room-Music-Theory/100088313820996/?locale=en_GB";
  const email     = settings?.footerContactEmail ?? "info@greenroomtheory.com";
  const copyright = settings?.footerCopyright    ?? "© 2027 Green Room Music Theory. All rights reserved.";

  return (
    <footer style={{ background: "#082F27", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Decorative music note watermark */}
      <img
        src="/icon-music.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", right: -40, bottom: -20,
          height: 260, width: "auto", opacity: 0.07,
          pointerEvents: "none", mixBlendMode: "screen",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px clamp(16px, 3vw, 40px)" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Green Room Music Summer Camp"
              style={{ height: 38, width: "auto", marginBottom: 20 }}
            />
            <p style={{ color: "#C89A3B", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 10, fontFamily: "var(--font-inter)" }}>
              {tagline}
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 280, marginBottom: 24, whiteSpace: "pre-line" }}>
              {desc}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C89A3B"; (e.currentTarget as HTMLElement).style.color = "#C89A3B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C89A3B"; (e.currentTarget as HTMLElement).style.color = "#C89A3B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ color: "#C89A3B", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 20, fontFamily: "var(--font-inter)" }}>Courses</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/courses/piano", label: "Piano" },
                { href: "/courses/music-theory", label: "Music Theory" },
                { href: "/courses/vocal-performance", label: "Vocal Performance" },
                { href: "/courses", label: "All Courses" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s", fontFamily: "var(--font-inter)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: "#C89A3B", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 20, fontFamily: "var(--font-inter)" }}>Information</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/faculty", label: "Faculty" },
                { href: "/faqs", label: "FAQs" },
                { href: "/residential-life", label: "Residential Life" },
                { href: "/fees", label: "Fees" },
                { href: "/apply", label: "Apply Now" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s", fontFamily: "var(--font-inter)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24 }}>
              <h4 style={{ color: "#C89A3B", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 10, fontFamily: "var(--font-inter)" }}>Contact</h4>
              <a href={`mailto:${email}`} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none" }}>{email}</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 48, paddingTop: 28, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Green Room Music Theory. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", fontFamily: "var(--font-inter)" }}>
            Green Room Music Summer Camp · Stamford School · Lincolnshire
          </p>
        </div>
      </div>
    </footer>
  );
}
