"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

type Tutor = {
  _id: string;
  name?: string;
  role?: string;
  category?: "main" | "honorary" | "junior" | "boarding";
  bio?: string;
  shortBio?: string;
  bioFull?: string[];
  teaches?: string;
  teachesTags?: string[];
  profileTags?: string[];
  image?: string;
  isDSL?: boolean;
  isDeputyDSL?: boolean;
};

function Photo({ src, name, size = "100%", radius = 0, position = "center top" }: { src?: string; name?: string; size?: number | string; radius?: number; position?: string }) {
  const dim = typeof size === "number" ? `${size}px` : size;
  if (src) {
    return (
      <img
        src={src}
        alt={name ?? ""}
        style={{
          width: dim, height: dim, objectFit: "cover", objectPosition: position,
          display: "block", borderRadius: radius,
        }}
      />
    );
  }
  const initial = (name ?? "?").charAt(0).toUpperCase();
  return (
    <div style={{
      width: dim, height: dim, borderRadius: radius,
      background: "#dcd4c6",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontFamily: G, fontSize: "2.2rem", color: green, fontWeight: 500 }}>{initial}</span>
    </div>
  );
}

function PlusBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      aria-label="Open profile"
      style={{
        position: "absolute", top: 12, right: 12, zIndex: 2,
        width: 32, height: 32, borderRadius: "50%",
        background: "rgba(255,255,255,0.92)",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2v10M2 7h10" stroke={green} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function Chip({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "white" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: 999,
      background: variant === "white" ? "#fff" : cream,
      border: variant === "white" ? "1px solid #e0dbd0" : "1px solid transparent",
      color: green, fontFamily: I, fontSize: "0.72rem", fontWeight: 500,
    }}>{children}</span>
  );
}

export default function FacultyPageClient({ settings, tutors }: { settings: any; tutors: Tutor[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const open = useCallback((id: string) => setOpenId(id), []);
  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId, close]);

  const main      = tutors.filter(t => t.category === "main");
  const honorary  = tutors.filter(t => t.category === "honorary");
  const junior    = tutors.filter(t => t.category === "junior");
  const boarding  = tutors.filter(t => t.category === "boarding");
  const dsl       = tutors.find(t => t.isDSL);
  const deputies  = tutors.filter(t => t.isDeputyDSL);

  const openTutor = tutors.find(t => t._id === openId);

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* ─── HERO ─── */}
        <section className="fp-hero" style={{ position: "relative", background: green, overflow: "hidden" }}>
          <div
            className="fp-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: settings?.facultyHeroImage ? "1fr 1fr" : "1fr",
              alignItems: "stretch",
            }}
          >
            <div style={{ padding: "clamp(56px, 8vw, 112px) clamp(24px, 5vw, 72px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ color: gold, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 16, fontFamily: I, fontWeight: 600 }}>
                {settings?.facultyPageEyebrow ?? "SUMMER 2027"}
              </p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
                {settings?.facultyPageHeading ?? "Our Faculty"}
              </h1>
              <div style={{ width: 44, height: 2, background: gold, marginBottom: 24 }} />
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.8, maxWidth: 460, fontFamily: I }}>
                {settings?.facultyPageSubtext ?? "Our faculty are experienced musicians, educators and performing arts professionals, passionate about inspiring the next generation. Together, they create a supportive, creative and challenging environment where every student can grow."}
              </p>
            </div>
            {settings?.facultyHeroImage && (
              <div className="fp-hero-img" style={{ position: "relative", minHeight: 300 }}>
                <img src={settings.facultyHeroImage} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}
          </div>
        </section>

        {/* ─── MAIN FACULTY ─── */}
        {main.length > 0 && (
          <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
              <div className="fp-section-head" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", marginBottom: 40 }}>
                <div>
                  <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 10, fontFamily: I, fontWeight: 600 }}>
                    {settings?.facultyMainSectionEyebrow ?? "MAIN FACULTY"}
                  </p>
                  <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green, lineHeight: 1.15 }}>
                    {settings?.facultyMainSectionHeading ?? "Artistic Leadership & Teaching Faculty"}
                  </h2>
                  <div style={{ width: 44, height: 2, background: gold, marginTop: 14 }} />
                </div>
                <p style={{ color: "#5a7a6a", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 300, fontFamily: I, textAlign: "right" }}>
                  {settings?.facultyMainSectionSubtext ?? "Our core faculty lead the academic programme across Piano, Music Theory and Singing Performance."}
                </p>
              </div>

              <div className="fp-main-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {main.map(t => (
                  <div
                    key={t._id}
                    onClick={() => open(t._id)}
                    style={{
                      background: "#fff", cursor: "pointer",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      display: "flex", flexDirection: "column",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(8,47,39,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
                      <Photo src={t.image} name={t.name} />
                      <PlusBtn onClick={() => open(t._id)} />
                    </div>
                    <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontFamily: G, fontSize: "1.2rem", fontWeight: 500, color: green, marginBottom: 4 }}>{t.name}</h3>
                      <p style={{ color: gold, fontSize: "0.74rem", fontFamily: I, fontWeight: 500, marginBottom: 14, fontStyle: "italic" }}>{t.role}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                        {(t.teachesTags ?? []).map((tag, i) => <Chip key={i}>{tag}</Chip>)}
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <span style={{ color: gold, fontSize: "0.78rem", fontFamily: I, fontWeight: 600 }}>View profile →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── HONORARY GUEST ─── */}
        {honorary.length > 0 && honorary.map(t => (
          <section key={t._id} style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0", borderTop: "1px solid #e8e3da" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
              <div className="fp-honorary-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
                <div>
                  <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14, fontFamily: I, fontWeight: 600 }}>
                    {settings?.facultyHonorarySectionEyebrow ?? "HONORARY GUEST VISITING LECTURER"}
                  </p>
                  <h2 style={{ fontFamily: G, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 500, color: green, lineHeight: 1.1, marginBottom: 24 }}>{t.name}</h2>
                  <p style={{ color: "#3d5c51", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 28, fontFamily: I }}>
                    {t.shortBio ?? t.bio ?? ""}
                  </p>
                  <button
                    onClick={() => open(t._id)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      padding: "12px 24px",
                      background: "#fff", border: `1px solid ${gold}`, color: green,
                      fontFamily: I, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = green; }}
                  >
                    View profile →
                  </button>
                </div>
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Photo src={t.image} name={t.name} position="center 20%" />
                  <PlusBtn onClick={() => open(t._id)} />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ─── JUNIOR TEACHING ARTISTS ─── */}
        {junior.length > 0 && (
          <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0", borderTop: "1px solid #e8e3da" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
              <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 10, fontFamily: I, fontWeight: 600 }}>
                {settings?.facultyJuniorSectionEyebrow ?? "PIANO DEPARTMENT"}
              </p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green, marginBottom: 10 }}>
                {settings?.facultyJuniorSectionHeading ?? "Junior Teaching Artists"}
              </h2>
              <div style={{ width: 44, height: 2, background: gold, marginBottom: 36 }} />

              <div className="fp-horiz-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {junior.map(t => (
                  <div
                    key={t._id}
                    onClick={() => open(t._id)}
                    style={{
                      background: "#fff", cursor: "pointer",
                      display: "grid", gridTemplateColumns: "140px 1fr auto",
                      gap: 20, padding: 16, alignItems: "center",
                      transition: "box-shadow 0.25s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 24px rgba(8,47,39,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                      <Photo src={t.image} name={t.name} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: green, marginBottom: 4 }}>{t.name}</h3>
                      <p style={{ color: gold, fontSize: "0.72rem", fontFamily: I, fontStyle: "italic", marginBottom: 10 }}>{t.role}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                        {(t.teachesTags ?? []).map((tag, i) => <Chip key={i} variant="white">{tag}</Chip>)}
                      </div>
                      <span style={{ color: gold, fontSize: "0.76rem", fontFamily: I, fontWeight: 600 }}>View profile →</span>
                    </div>
                    <PlusBtn onClick={() => open(t._id)} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── BOARDING & PASTORAL TEAM ─── */}
        {boarding.length > 0 && (
          <section style={{ background: cream, padding: "clamp(56px, 8vw, 96px) 0", borderTop: "1px solid #e8e3da" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
              <p style={{ color: gold, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 10, fontFamily: I, fontWeight: 600 }}>
                {settings?.facultyBoardingSectionEyebrow ?? "BOARDING & PASTORAL TEAM"}
              </p>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 500, color: green, marginBottom: 10 }}>
                {settings?.facultyBoardingSectionHeading ?? "Boarding & Pastoral Team"}
              </h2>
              <div style={{ width: 44, height: 2, background: gold, marginBottom: 36 }} />

              <div className="fp-horiz-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {boarding.map(t => (
                  <div
                    key={t._id}
                    onClick={() => open(t._id)}
                    style={{
                      background: "#fff", cursor: "pointer",
                      display: "grid", gridTemplateColumns: "140px 1fr auto",
                      gap: 20, padding: 16, alignItems: "center",
                      transition: "box-shadow 0.25s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 24px rgba(8,47,39,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                      <Photo src={t.image} name={t.name} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: green, marginBottom: 4 }}>{t.name}</h3>
                      <p style={{ color: gold, fontSize: "0.72rem", fontFamily: I, fontStyle: "italic", marginBottom: 10 }}>{t.role}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                        {(t.teachesTags ?? []).map((tag, i) => <Chip key={i} variant="white">{tag}</Chip>)}
                      </div>
                      <span style={{ color: gold, fontSize: "0.76rem", fontFamily: I, fontWeight: 600 }}>View profile →</span>
                    </div>
                    <PlusBtn onClick={() => open(t._id)} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── SAFEGUARDING ─── */}
        {(dsl || deputies.length > 0) && (
          <section style={{ background: "#e8e3da", padding: "clamp(40px, 5vw, 56px) 0", borderTop: "1px solid #d4cec4" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)" }}>
              <div className="fp-safeguarding-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: "50%", background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: G, fontSize: "1.15rem", fontWeight: 500, color: green, marginBottom: 8 }}>
                      {settings?.safeguardingHeading ?? "Safeguarding & Student Welfare"}
                    </h3>
                    <p style={{ color: "#3d5c51", fontSize: "0.82rem", lineHeight: 1.7, fontFamily: I }}>
                      {settings?.safeguardingBody ?? "The safety and wellbeing of our students is at the heart of Green Room Music Summer Camp. All members of staff working at the camp have enhanced DBS checks and are committed to providing a safe, supportive and inclusive environment."}
                    </p>
                  </div>
                </div>

                {dsl && (
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ flexShrink: 0 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.16em", fontFamily: I, fontWeight: 600, marginBottom: 8 }}>DESIGNATED SAFEGUARDING LEAD (DSL)</p>
                      <h4 style={{ fontFamily: G, fontSize: "1rem", color: green, fontWeight: 500, marginBottom: 2 }}>{dsl.name}</h4>
                      <p style={{ color: "#5a7a6a", fontSize: "0.78rem", fontFamily: I }}>{dsl.role}</p>
                    </div>
                  </div>
                )}

                {deputies.length > 0 && (
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ flexShrink: 0 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: gold, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.16em", fontFamily: I, fontWeight: 600, marginBottom: 8 }}>DEPUTY SAFEGUARDING LEADS</p>
                      {deputies.map(d => (
                        <div key={d._id} style={{ marginBottom: 10 }}>
                          <h4 style={{ fontFamily: G, fontSize: "1rem", color: green, fontWeight: 500, marginBottom: 2 }}>{d.name}</h4>
                          <p style={{ color: "#5a7a6a", fontSize: "0.78rem", fontFamily: I }}>{d.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer settings={settings} />

      {/* ─── MODAL ─── */}
      {openTutor && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(8,47,39,0.78)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20, overflowY: "auto",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", maxWidth: 900, width: "100%",
              maxHeight: "90vh", overflowY: "auto",
              borderRadius: 4, position: "relative",
              display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0,
            }}
            className="fp-modal"
          >
            <button
              onClick={close}
              aria-label="Close profile"
              style={{
                position: "absolute", top: 16, right: 16, zIndex: 2,
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.95)", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke={green} strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="fp-modal-photo" style={{ aspectRatio: "1", overflow: "hidden" }}>
              <Photo src={openTutor.image} name={openTutor.name} />
            </div>

            <div style={{ padding: "clamp(28px, 4vw, 44px)" }}>
              <h3 style={{ fontFamily: G, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", fontWeight: 500, color: green, marginBottom: 6 }}>{openTutor.name}</h3>
              <p style={{ color: gold, fontSize: "0.82rem", fontFamily: I, fontWeight: 600, fontStyle: "italic", marginBottom: 20 }}>{openTutor.role}</p>

              {((openTutor.profileTags?.length ?? 0) > 0 || (openTutor.teachesTags?.length ?? 0) > 0) && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {(openTutor.profileTags?.length ? openTutor.profileTags : openTutor.teachesTags ?? []).map((tag, i) => (
                    <Chip key={i}>{tag}</Chip>
                  ))}
                </div>
              )}

              {(openTutor.bioFull?.length ? openTutor.bioFull : openTutor.bio ? [openTutor.bio] : []).map((para, i) => (
                <p key={i} style={{ color: "#3d5c51", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: 14, fontFamily: I }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.fp-main-grid) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          :global(.fp-hero-grid) { grid-template-columns: 1fr !important; }
          :global(.fp-hero-img) { min-height: 240px !important; order: -1; }
          :global(.fp-honorary-grid) { grid-template-columns: 1fr !important; }
          :global(.fp-horiz-grid) { grid-template-columns: 1fr !important; }
          :global(.fp-section-head) { grid-template-columns: 1fr !important; }
          :global(.fp-section-head p) { text-align: left !important; }
          :global(.fp-safeguarding-grid) { grid-template-columns: 1fr !important; }
          :global(.fp-modal) { grid-template-columns: 1fr !important; }
          :global(.fp-modal-photo) { aspect-ratio: 16/9 !important; }
        }
        @media (max-width: 600px) {
          :global(.fp-main-grid) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
