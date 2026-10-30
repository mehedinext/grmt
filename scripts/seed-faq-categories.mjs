// Seeds 4 FAQ categories (General, Piano, Music Theory, Singing Performance)
// with the structural placeholder content shown on the mockup.
// Idempotent: uses createOrReplace on fixed _ids. Safe to re-run.
// Run with:  node --env-file=.env.local scripts/seed-faq-categories.mjs
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const docs = [
  {
    _id: "faqCategory-general",
    _type: "faqCategory",
    order: 1,
    key: "general",
    label: "General",
    tagline: "Camp information, application process and practical details.",
    icon: "people",
    eyebrow: "General",
    heading: "General FAQs",
    intro:
      "Everything you need to know about Green Room Music Summer Camp, including key dates, location, accommodation, meals and the application process.",
    faqs: [
      { _key: "g1", question: "When and where does Green Room Music Summer Camp take place?", answer: "GRMSC 2027 takes place from Monday 19 July to Friday 23 July 2027 at Stamford School in Lincolnshire, England." },
      { _key: "g2", question: "What age groups can attend?", answer: "Placeholder answer." },
      { _key: "g3", question: "What courses are available?", answer: "Placeholder answer." },
      { _key: "g4", question: "Do students need previous musical experience?", answer: "Placeholder answer." },
      { _key: "g5", question: "What is included in the course fee?", answer: "Placeholder answer." },
      { _key: "g6", question: "How much does the summer camp cost?", answer: "Placeholder answer." },
      { _key: "g7", question: "How do I apply?", answer: "Placeholder answer." },
      { _key: "g8", question: "Is there a deposit or payment plan available?", answer: "Placeholder answer." },
    ],
  },
  {
    _id: "faqCategory-piano",
    _type: "faqCategory",
    order: 2,
    key: "piano",
    label: "Piano",
    tagline: "Course content, level, requirements and more.",
    icon: "piano",
    eyebrow: "Piano",
    heading: "Piano FAQs",
    intro:
      "Everything about the Piano course | repertoire, required level, daily schedule, practice rooms and the final performance.",
    faqs: [
      { _key: "p1", question: "What level of piano is required?", answer: "Placeholder answer." },
      { _key: "p2", question: "Do I need to bring my own instrument?", answer: "Placeholder answer." },
      { _key: "p3", question: "How many hours of practice per day?", answer: "Placeholder answer." },
      { _key: "p4", question: "Will there be a final performance?", answer: "Placeholder answer." },
    ],
  },
  {
    _id: "faqCategory-music-theory",
    _type: "faqCategory",
    order: 3,
    key: "music-theory",
    label: "Music Theory",
    tagline: "Course content, level, requirements and more.",
    icon: "music-note",
    eyebrow: "Music Theory",
    heading: "Music Theory FAQs",
    intro:
      "Everything about the Music Theory course | ABRSM grades covered, mock exams, materials provided and whether it suits your current level.",
    faqs: [
      { _key: "t1", question: "Which ABRSM grades does the course cover?", answer: "Placeholder answer." },
      { _key: "t2", question: "Are mock exams included?", answer: "Placeholder answer." },
      { _key: "t3", question: "What materials will I need?", answer: "Placeholder answer." },
      { _key: "t4", question: "Is this course suitable for complete beginners?", answer: "Placeholder answer." },
    ],
  },
  {
    _id: "faqCategory-singing-performance",
    _type: "faqCategory",
    order: 4,
    key: "singing-performance",
    label: "Singing Performance",
    tagline: "Course content, level, requirements and more.",
    icon: "microphone",
    eyebrow: "Singing Performance",
    heading: "Singing Performance FAQs",
    intro:
      "Everything about the Singing Performance course | vocal styles, warm-ups, repertoire choice, microphone technique and the final concert.",
    faqs: [
      { _key: "s1", question: "What vocal styles are taught?", answer: "Placeholder answer." },
      { _key: "s2", question: "Will I perform solo?", answer: "Placeholder answer." },
      { _key: "s3", question: "Do I need to prepare a song in advance?", answer: "Placeholder answer." },
      { _key: "s4", question: "Is there microphone and stage training?", answer: "Placeholder answer." },
    ],
  },
];

(async () => {
  const tx = client.transaction();
  for (const d of docs) tx.createOrReplace(d);
  const res = await tx.commit();
  console.log(`✔ Seeded ${res.results.length} FAQ categories`);
  for (const r of res.results) console.log("  -", r.id);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
