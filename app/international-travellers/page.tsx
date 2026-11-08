import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export const revalidate = 60;

const FALLBACK_STAMFORD = "https://cdn.sanity.io/images/ji1ggnuz/production/d8a4b4a6345dc343d5ced421d62d0578be064b51-2000x1333.jpg";
const FALLBACK_GROUP = "https://cdn.sanity.io/images/ji1ggnuz/production/a9138015585895e4996170de2af9e2d5bd8fe928-1600x1067.jpg";

const defaultStats = [
  { val: "5 Days", label: "A Focused Summer Experience" },
  { val: "Residential Programme", label: "Stay, Learn and Make Music" },
  { val: "Pastoral Support", label: "A Safe and Caring Environment" },
  { val: "International Community", label: "Young Musicians Around the World" },
];

const defaultFeatures = [
  { title: "Strengthen Your College & University Applications", body: "A distinguished international music programme that demonstrates talent, initiative, and a commitment to personal and artistic growth." },
  { title: "Work Towards Recognised Awards", body: "Use your GRMSC experience towards qualifications such as the Duke of Edinburgh's Award, Arts Award and The Congressional Award." },
  { title: "Experience a Different Culture", body: "Live and learn in historic Stamford, discover British culture, and make friends from the UK and around the world." },
  { title: "Experience Boarding School Life", body: "Enjoy the independence, community and camaraderie of a UK boarding school, with dedicated pastoral support throughout." },
];

const defaultDetails = [
  { title: "English Language Requirement", body: "Students should have a sufficient level of spoken and written English to participate confidently in lessons, rehearsals, group activities and residential life.\n\nIf families are unsure whether the course is suitable, please contact GRP to discuss it." },
  { title: "Travelling to Stamford", body: "International travellers are very welcome at GRMSC. Families can contact Green Room Place (GRP) for further information and support regarding travel, arrival and course logistics." },
  { title: "Documents and Preparation", body: "Families should ensure passports, visas (where required), travel insurance and any relevant medical information are in place before travel." },
  { title: "Pastoral Care and Communication", body: "Pastoral support is available on site throughout the course, with a dedicated residential and pastoral team on hand to help travellers settle in and feel at home.\n\nGRMSC will communicate key arrival information in advance, including travel guidance and what to expect on site." },
];

export default async function InternationalTravellersPage() {
  const settings: any = await getSiteSettings();

  const heroEyebrow = settings?.intlHeroEyebrow ?? "International Travellers";
  const heroHeading = settings?.intlHeroHeading ?? "International Travellers";
  const heroBody = settings?.intlHeroBody ?? "A world-class, residential music summer camp in Stamford, England, for young musicians from around the globe.";
  const heroImage = settings?.intlHeroImage ?? FALLBACK_STAMFORD;

  const s1Heading = settings?.intlS1Heading ?? "More Than a Music Camp.";
  const s1Body = settings?.intlS1Body ?? "For international participants, GRMSC offers a unique opportunity to develop as a musician, experience life at a leading British boarding school, and immerse yourself in a different culture, all within a supportive, international community.";
  const s1Image = settings?.intlS1Image ?? FALLBACK_GROUP;

  const stats = settings?.intlStats?.length ? settings.intlStats : defaultStats;
  const features = settings?.intlFeatures?.length ? settings.intlFeatures : defaultFeatures;
  const details = settings?.intlDetails?.length ? settings.intlDetails : defaultDetails;

  const quoteText = settings?.intlQuoteText ?? "A summer that builds skills, broadens horizons, and opens doors for the future.";
  const quoteImage = settings?.intlQuoteImage ?? FALLBACK_STAMFORD;

  const faqCardHeading = settings?.intlFaqCardHeading ?? "FAQs for International Travellers";
  const faqCardBody = settings?.intlFaqCardBody ?? "Find answers to common questions about travel, arrival, residential life and more.";

  const joinHeading = settings?.intlJoinHeading ?? "Join a Global Community at GRMSC";
  const joinBody = settings?.intlJoinBody ?? "Develop your musicianship, gain recognised awards, experience a new culture and enjoy life at a prestigious UK boarding school.";

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68 }}>

        {/* HERO */}
        <section style={{ background: green, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="intl-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(28px, 5vw, 56px)", alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.65rem", fontFamily: I, textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600, marginBottom: 14 }}>{heroEyebrow}</p>
              <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>{heroHeading}</h1>
              <div style={{ width: 44, height: 2, background: gold, marginBottom: 22 }} />
              <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1.02rem)", lineHeight: 1.8 }}>{heroBody}</p>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
              <img src={heroImage} alt="Stamford historic town" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* STATS ROW */}
        <section style={{ background: cream, padding: "clamp(32px, 5vw, 56px) 0", borderBottom: "1px solid #e4ddce" }}>
          <div className="intl-stats-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(20px, 3vw, 40px)" }}>
            {stats.map((s: any, i: number) => (
              <div key={i} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <StatIcon idx={i} />
                <div style={{ fontFamily: G, fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: green, fontWeight: 500, lineHeight: 1.2 }}>{s.val}</div>
                <div style={{ fontFamily: I, fontSize: "0.65rem", color: "#7a8d81", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MORE THAN A MUSIC CAMP */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="intl-two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: green, fontWeight: 500, marginBottom: 20, lineHeight: 1.15 }}>{s1Heading}</h2>
              <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85 }}>{s1Body}</p>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
              <img src={s1Image} alt="International students at GRMSC" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* FEATURE GRID (4 columns) */}
        <section style={{ background: cream, padding: "0 0 clamp(40px, 6vw, 72px)", borderBottom: "1px solid #e4ddce" }}>
          <div className="intl-feat-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 56px) 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(24px, 3vw, 40px)" }}>
            {features.map((f: any, i: number) => (
              <div key={i}>
                <FeatIcon idx={i} />
                <h3 style={{ fontFamily: G, fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", color: green, fontWeight: 500, lineHeight: 1.3, margin: "18px 0 12px" }}>{f.title}</h3>
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.88rem", lineHeight: 1.8 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE BANNER (image + dark green pull quote) */}
        <section className="intl-quote" style={{ background: cream, display: "grid", gridTemplateColumns: "1.3fr 1fr", minHeight: 320 }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={quoteImage} alt="Students at Stamford" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ background: green, padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 60px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ color: gold, fontFamily: G, fontSize: "3rem", lineHeight: 1, marginBottom: 14 }}>“</div>
            <p style={{ fontFamily: G, fontStyle: "italic", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: "#fff", lineHeight: 1.45, marginBottom: 20 }}>{quoteText}</p>
            <div style={{ width: 44, height: 2, background: gold }} />
          </div>
        </section>

        {/* DETAILS 2x2 */}
        <section style={{ background: cream, padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div className="intl-details-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 4vw, 56px) clamp(32px, 5vw, 72px)" }}>
            {details.map((d: any, i: number) => (
              <div key={i}>
                <h3 style={{ fontFamily: G, fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: green, fontWeight: 500, marginBottom: 12, lineHeight: 1.25 }}>{d.title}</h3>
                <div style={{ width: 36, height: 2, background: gold, marginBottom: 16 }} />
                <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 0.98rem)", lineHeight: 1.85, whiteSpace: "pre-wrap" }}>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ CARD */}
        <section style={{ background: cream, padding: "0 0 clamp(48px, 7vw, 80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)" }}>
            <div className="intl-faq-card" style={{ background: "#f3ecda", padding: "clamp(28px, 4vw, 44px) clamp(28px, 5vw, 52px)", borderRadius: 4, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 22, flex: "1 1 400px" }}>
                <div style={{ flexShrink: 0 }}>
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: G, fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: green, fontWeight: 500, marginBottom: 6 }}>{faqCardHeading}</h3>
                  <p style={{ color: "#5a7a6a", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.6 }}>{faqCardBody}</p>
                </div>
              </div>
              <Link href="/faqs#international-travellers" className="btn-gold">View FAQs →</Link>
            </div>
          </div>
        </section>

        {/* JOIN CTA (dark green footer) */}
        <section style={{ background: green, padding: "clamp(48px, 7vw, 80px) 0", textAlign: "center" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px, 4vw, 56px)" }}>
            <h2 style={{ fontFamily: G, fontSize: "clamp(2rem, 3.4vw, 2.8rem)", color: "#fff", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>{joinHeading}</h2>
            <div style={{ width: 44, height: 2, background: gold, margin: "0 auto 22px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: I, fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.75, marginBottom: 36 }}>{joinBody}</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Contact GRP →</Link>
              <Link href="/apply" className="btn-outline-white">Apply Now →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer settings={settings} />

      <style>{`
        @media (max-width: 760px) {
          .intl-hero-grid, .intl-two-col, .intl-quote { grid-template-columns: 1fr !important; }
          .intl-stats-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px !important; }
          .intl-feat-grid { grid-template-columns: 1fr 1fr !important; }
          .intl-details-grid { grid-template-columns: 1fr !important; }
          .intl-quote { min-height: auto !important; }
          .intl-quote > div:first-child { aspect-ratio: 4/3; }
        }
        @media (max-width: 520px) {
          .intl-feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function StatIcon({ idx }: { idx: number }) {
  const s = { fill: "none", stroke: gold, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (idx === 0) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
  );
  if (idx === 1) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><path d="M3 11l9-7 9 7M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>
  );
  if (idx === 2) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
  );
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg>
  );
}

function FeatIcon({ idx }: { idx: number }) {
  const s = { fill: "none", stroke: gold, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (idx === 0) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><path d="M22 10L12 4 2 10l10 6 10-6z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>
  );
  if (idx === 1) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><path d="M7 4c-1 4-3 5-3 8 0 5 4 9 8 9s8-4 8-9c0-3-2-4-3-8" /><path d="M9 14c0-2 1-4 3-4s3 2 3 4" /><circle cx="12" cy="17" r="1.5" /></svg>
  );
  if (idx === 2) return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg>
  );
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...s}><path d="M3 18V11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" /><path d="M3 18h18" /><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" /></svg>
  );
}
