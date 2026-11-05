import { sanityClient } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

type FaqItem = { question: string; answer: string };

export default async function CourseFAQs({ categoryKey, heading }: { categoryKey: string; heading?: string }) {
  const data = await sanityClient
    .fetch(
      `*[_type == "faqCategory" && key == $k][0]{ heading, intro, faqs[]{ question, answer } }`,
      { k: categoryKey }
    )
    .catch(() => null);

  const faqs: FaqItem[] = data?.faqs ?? [];
  if (!faqs.length) return null;

  return (
    <section style={{ background: cream, padding: "clamp(56px, 7vw, 88px) 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)" }}>
        <p style={{ color: gold, fontFamily: I, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600, marginBottom: 10 }}>
          Frequently Asked Questions
        </p>
        <h2 style={{ fontFamily: G, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 500, color: green, marginBottom: 14, lineHeight: 1.2 }}>
          {heading ?? data?.heading ?? "FAQs"}
        </h2>
        <div style={{ width: 40, height: 2, background: gold, marginBottom: 20 }} />
        {data?.intro && (
          <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 32, maxWidth: 720 }}>
            {data.intro}
          </p>
        )}
        <div style={{ borderTop: "1px solid #e4ddce" }}>
          {faqs.map((f, i) => (
            <details key={i} style={{ borderBottom: "1px solid #e4ddce", padding: "18px 0" }}>
              <summary style={{
                cursor: "pointer", listStyle: "none",
                display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20,
                fontFamily: G, fontSize: "1.1rem", fontWeight: 500, color: green, lineHeight: 1.4,
              }}>
                <span>{f.question}</span>
                <span style={{ color: gold, fontFamily: I, fontSize: "1.6rem", fontWeight: 300, lineHeight: 1, flexShrink: 0, transform: "translateY(-2px)" }}>+</span>
              </summary>
              <div style={{ marginTop: 14, color: "#3d5c51", fontFamily: I, fontSize: "0.92rem", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                {f.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
