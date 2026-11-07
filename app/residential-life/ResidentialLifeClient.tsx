"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

type Settings = any;

const FALLBACK_ACTIVITY = "https://cdn.sanity.io/images/ji1ggnuz/production/a9138015585895e4996170de2af9e2d5bd8fe928-1600x1067.jpg";
const FALLBACK_GROUP = "https://cdn.sanity.io/images/ji1ggnuz/production/d8a4b4a6345dc343d5ced421d62d0578be064b51-2000x1333.jpg";

const defaultWeek = [
  { day: "MONDAY", date: "19 JULY", label: "Arrivals and Welcome" },
  { day: "TUESDAY", date: "20 JULY", label: "" },
  { day: "WEDNESDAY", date: "21 JULY", label: "Intensive Course Sessions, Workshops and Residential Life" },
  { day: "THURSDAY", date: "22 JULY", label: "" },
  { day: "FRIDAY", date: "23 JULY", label: "Final Performance Celebration and Departure" },
];

export default function ResidentialLifeClient({ settings }: { settings?: Settings; galleryImages?: string[]; features?: any[] }) {
  const img = (field: string, fallback: string) => settings?.[field] ?? fallback;

  const heroImg = img("resLifeHeroImage", FALLBACK_GROUP);
  const image1 = img("resLifeImage1", FALLBACK_ACTIVITY);
  const bandImg = img("resLifeBandImage", FALLBACK_GROUP);
  const image2 = img("resLifeImage2", FALLBACK_ACTIVITY);
  const image3 = img("resLifeImage3", FALLBACK_GROUP);

  const heroEyebrow = settings?.resLifeHeroEyebrow ?? "Life at Camp";
  const heroHeading = settings?.resLifeHeroHeading ?? "Residential Life";
  const heroBody = settings?.resLifeHeroBody ?? "The residential experience at GRMSC is supportive, inspiring and fully immersive, where young musicians live, learn and create together in a safe, welcoming community.";

  const stats = settings?.resLifeStats?.length ? settings.resLifeStats : [
    { val: "5 Days", label: "Full Residential Programme" },
    { val: "3 Meals", label: "Daily, All Diets Catered" },
    { val: "24/7", label: "Pastoral Support On Site" },
    { val: "DBS Checked", label: "All Staff, All Sessions" },
  ];

  const s1Heading = settings?.resLifeS1Heading ?? "Three Courses. One Summer Camp.";
  const s1Body = settings?.resLifeS1Body ?? "Students may arrive as pianists, singers or theory students. But they arrive at the same camp. Outside specialist course sessions, students come together for meals, breaks, group activities, social events, selected wellbeing sessions and life within the boarding houses. Friendships aren't limited to a student's own course. For five days, everyone becomes part of the same Green Room community.";

  const s2aHeading = settings?.resLifeS2aHeading ?? "An International Community.";
  const s2aBody = settings?.resLifeS2aBody ?? "GRMSC welcomes young musicians from the UK and around the world. Different countries. Different backgrounds. Different musical interests. One shared passion. Residential life allows those friendships to develop naturally, over meals, between classes, during activities and throughout life in the boarding houses.";

  const s2bHeading = settings?.resLifeS2bHeading ?? "A Little More Independence.";
  const s2bBody = settings?.resLifeS2bBody ?? "Residential life gives students the opportunity to experience greater independence within a safe and carefully supported environment. It offers a glimpse into the rhythm of future college, university or conservatoire life. An opportunity to develop not only as a musician, but in confidence, independence and maturity.";

  const s3Heading = settings?.resLifeS3Heading ?? "Beyond the Classroom.";
  const s3Body = settings?.resLifeS3Body ?? "Green Room's activity-style approach to learning extends beyond our classrooms and rehearsal spaces. Selected activities throughout the week give students opportunities to engage with their surroundings, work collaboratively and experience learning in new ways, including activities within the beautiful town of Stamford.";

  const s4Heading = settings?.resLifeS4Heading ?? "Welcome to Stamford.";
  const s4Body = settings?.resLifeS4Body ?? "GRMSC takes place at Stamford School, in the heart of one of England's most beautiful historic market towns. Famously described by Sir John Betjeman as “the most attractive town in England,” Stamford becomes much more than simply the location of the camp. For five days, it becomes part of the Green Room experience.";

  const s5Heading = settings?.resLifeS5Heading ?? "A Brilliant Place to Call Home.";
  const s5Body = settings?.resLifeS5Body ?? "We are incredibly fortunate to host GRMSC at Stamford School. Its boarding houses, teaching spaces, performance facilities and wider campus give students everything they need to live, learn, rehearse, practise, perform and relax. Having the camp centred around the school allows students to become completely immersed in Green Room life.";

  const mealsHeading = settings?.resLifeMealsHeading ?? "Meals & Dining";
  const mealsBody = settings?.resLifeMealsBody ?? "Breakfast, lunch and dinner are provided throughout the residential. Students enjoy nutritious, balanced meals designed to support a busy week. Meals are also an important part of the social side of GRMSC. Students from across the different courses dine together. Dietary requirements and allergies can be provided during registration so that appropriate arrangements can be made.";

  const safeHeading = settings?.resLifeSafeHeading ?? "Pastoral Care & Safeguarding";
  const safeBody = settings?.resLifeSafeBody ?? "Safeguarding and student wellbeing are at the heart of everything we do. All GRMSC staff hold Enhanced DBS checks and undertake advanced safeguarding training, with a dedicated residential and pastoral structure in place throughout the programme. A resident nurse is also on site during the course, providing additional medical support and reassurance.";

  const weekHeading = settings?.resLifeWeekHeading ?? "A Typical Week";
  const weekSubtext = settings?.resLifeWeekSubtext ?? "A five-day residential programme of intensive music-making, learning and community.";
  const week = settings?.resLifeWeek?.length ? settings.resLifeWeek : defaultWeek;

  const joinHeading = settings?.resLifeJoinHeading ?? "Join Us for Summer 2027";
  const joinMeta = settings?.resLifeJoinMeta ?? "19-23 July · Stamford School";

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section style={{ background: green, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="rl-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px, 5vw, 56px)", alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.65rem", fontFamily: I, textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600, marginBottom: 14 }}>{heroEyebrow}</p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 500, color: "#fff", lineHeight: 1.08, marginBottom: 22 }}>{heroHeading}</h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1.02rem)", lineHeight: 1.8 }}>{heroBody}</p>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
              <img src={heroImg} alt="Residential life at GRMSC" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ background: cream, padding: "clamp(32px, 5vw, 56px) 0", borderBottom: "1px solid #e4ddce" }}>
          <div className="rl-stats-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(20px, 3vw, 40px)" }}>
            {stats.map((s: any, i: number) => (
              <div key={i} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <StatIcon idx={i} />
                <div style={{ fontFamily: G, fontSize: "clamp(1.3rem, 2vw, 1.75rem)", color: green, fontWeight: 500 }}>{s.val}</div>
                <div style={{ fontFamily: I, fontSize: "0.68rem", color: "#7a8d81", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <TwoCol heading={s1Heading} body={s1Body} image={image1} imageAlt="Students together outside the classroom" imageRight />

        {/* ── S2: TWO TEXT COLUMNS ── */}
        <section style={{ background: cream, padding: "clamp(12px, 3vw, 24px) 0 clamp(40px, 6vw, 72px)" }}>
          <div className="rl-two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h3 style={{ fontFamily: G, fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: green, fontWeight: 500, marginBottom: 18 }}>{s2aHeading}</h3>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85 }}>{s2aBody}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: G, fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: green, fontWeight: 500, marginBottom: 18 }}>{s2bHeading}</h3>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85 }}>{s2bBody}</p>
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH BAND IMAGE ── */}
        <section style={{ background: cream, paddingBottom: "clamp(40px, 6vw, 72px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/6", overflow: "hidden", borderRadius: 2 }}>
              <img src={bandImg} alt="GRMSC residential community" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        <TwoCol heading={s3Heading} body={s3Body} image={image2} imageAlt="Outdoor activities" imageRight />

        {/* ── S4: WELCOME TO STAMFORD ── */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="rl-two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StamfordIllustration />
            </div>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: green, fontWeight: 500, marginBottom: 18, lineHeight: 1.15 }}>{s4Heading}</h2>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85 }}>{s4Body}</p>
            </div>
          </div>
        </section>

        <TwoCol heading={s5Heading} body={s5Body} image={image3} imageAlt="Stamford School grounds" imageRight />

        {/* ── MEALS & SAFEGUARDING ── */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="rl-two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <ForkKnifeIcon />
                <h3 style={{ fontFamily: G, fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: green, fontWeight: 500 }}>{mealsHeading}</h3>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 0.98rem)", lineHeight: 1.85 }}>{mealsBody}</p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <ShieldIcon />
                <h3 style={{ fontFamily: G, fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: green, fontWeight: 500 }}>{safeHeading}</h3>
              </div>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 0.98rem)", lineHeight: 1.85 }}>{safeBody}</p>
            </div>
          </div>
        </section>

        {/* ── A TYPICAL WEEK ── */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0 clamp(56px, 8vw, 96px)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: green, fontWeight: 500, marginBottom: 14 }}>{weekHeading}</h2>
            <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.75, marginBottom: 48, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>{weekSubtext}</p>
            <div className="rl-week" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "clamp(8px, 1.5vw, 20px)", position: "relative" }}>
              <div style={{ position: "absolute", top: 16, left: "10%", right: "10%", height: 1, background: gold, opacity: 0.5, zIndex: 0 }} />
              {week.map((d: any, i: number) => (
                <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", border: `1.5px solid ${gold}`, background: cream, margin: "0 auto 16px" }} />
                  <div style={{ fontFamily: I, fontSize: "0.68rem", color: green, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 4 }}>{d.day}</div>
                  <div style={{ fontFamily: I, fontSize: "0.68rem", color: "#7a8d81", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>{d.date}</div>
                  {d.label && (
                    <div style={{ fontFamily: I, fontSize: "0.78rem", color: "#5a7a6a", lineHeight: 1.55 }}>{d.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN US CTA ── */}
        <section style={{ background: green, padding: "clamp(48px, 7vw, 80px) 0", textAlign: "center" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)" }}>
            <h2 style={{ fontFamily: G, fontSize: "clamp(2rem, 3.4vw, 2.8rem)", color: "#fff", fontWeight: 500, marginBottom: 14 }}>{joinHeading}</h2>
            <p style={{ color: gold, fontFamily: I, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600, marginBottom: 32 }}>{joinMeta}</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Apply Now</Link>
              <Link href="/apply" className="btn-outline-white">Register Interest</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />

      <style jsx global>{`
        @media (max-width: 760px) {
          .rl-hero-grid,
          .rl-two-col { grid-template-columns: 1fr !important; }
          .rl-stats-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px !important; }
          .rl-week { grid-template-columns: 1fr !important; }
          .rl-week > div { display: grid; grid-template-columns: 90px 1fr; gap: 14px; align-items: start; text-align: left !important; padding-left: 8px; }
          .rl-week > div > div:first-child { grid-row: 1 / span 3; margin: 6px 0 0 !important; }
        }
      `}</style>
    </>
  );
}

function TwoCol({ heading, body, image, imageAlt, imageRight }: { heading: string; body: string; image: string; imageAlt: string; imageRight?: boolean }) {
  return (
    <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0" }}>
      <div className="rl-two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }}>
        <div style={{ order: imageRight ? 1 : 2 }}>
          <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: green, fontWeight: 500, marginBottom: 20, lineHeight: 1.15 }}>{heading}</h2>
          <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85 }}>{body}</p>
        </div>
        <div style={{ order: imageRight ? 2 : 1, position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
          <img src={image} alt={imageAlt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function StatIcon({ idx }: { idx: number }) {
  const stroke = { fill: "none", stroke: gold, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (idx === 0) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
  if (idx === 1) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <path d="M8 3v8M4 3v5a4 4 0 0 0 8 0V3M16 3c0 4 2 6 2 10v8M20 3c-2 2-2 6-2 10" />
    </svg>
  );
  if (idx === 2) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...stroke}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M14.5 19c0-2 1.8-3.6 4.5-3.6S23 17 23 19" />
    </svg>
  );
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" {...stroke}>
      <path d="M16 3L5 7v8c0 6.5 4.5 11.5 11 14 6.5-2.5 11-7.5 11-14V7l-11-4z" />
      <path d="M11 16l3.5 3.5L21 13" />
    </svg>
  );
}

function ForkKnifeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v8M4 3v5a4 4 0 0 0 8 0V3M16 3c0 4 2 6 2 10v8M20 3c-2 2-2 6-2 10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3L5 7v8c0 6.5 4.5 11.5 11 14 6.5-2.5 11-7.5 11-14V7l-11-4z" />
      <path d="M11 16l3.5 3.5L21 13" />
    </svg>
  );
}

function StamfordIllustration() {
  return (
    <svg width="100%" height="auto" viewBox="0 0 220 180" fill="none" style={{ maxWidth: 260, color: gold, opacity: 0.85 }}>
      <g stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.6">
        <circle cx="20" cy="110" r="14" />
        <circle cx="34" cy="100" r="18" />
        <circle cx="50" cy="112" r="14" />
        <path d="M20 118v24M34 112v30M50 120v22" />
      </g>
      <g stroke="currentColor" strokeWidth="1.3" fill="none">
        <path d="M110 10l-6 10h12z" />
        <path d="M110 20v26" />
        <rect x="100" y="46" width="20" height="90" />
        <path d="M100 56h20M100 68h20M100 80h20M100 92h20" />
        <rect x="106" y="106" width="8" height="30" />
        <rect x="76" y="80" width="24" height="56" />
        <rect x="120" y="80" width="24" height="56" />
        <path d="M76 90h24M120 90h24M76 102h24M120 102h24M76 114h24M120 114h24" />
        <path d="M60 136h120" />
      </g>
      <g stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.6">
        <circle cx="170" cy="110" r="14" />
        <circle cx="186" cy="100" r="18" />
        <circle cx="200" cy="112" r="14" />
        <path d="M170 118v24M186 112v30M200 120v22" />
      </g>
    </svg>
  );
}
