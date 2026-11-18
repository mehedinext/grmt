// Replace Focus with Format in music-theory glance + clear hero slide 3 CTA labels on siteSettings.
import { createClient } from "@sanity/client";
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) { console.error("Missing SANITY_API_WRITE_TOKEN"); process.exit(1); }
const client = createClient({ projectId: "ji1ggnuz", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token });

const glance = [
  { _key: "mt-g1", label: "Dates", value: "19-23 July 2027" },
  { _key: "mt-g2", label: "Location", value: "Stamford School" },
  { _key: "mt-g3", label: "Ages", value: "10-17" },
  { _key: "mt-g4", label: "Levels", value: "Beginner - ABRSM Grade 5" },
  { _key: "mt-g5", label: "Format", value: "5 Days / 4 Nights\nFully Residential" },
  { _key: "mt-g6", label: "Exam Prep", value: "Past Papers & Mock Exams" },
  { _key: "mt-g7", label: "Boarding & Meals", value: "Included" },
  { _key: "mt-g8", label: "Pass Rate", value: "100%" },
];

const course = await client.fetch(`*[_type == "course" && slug.current == "music-theory"][0]{_id}`);
await client.patch(course._id).set({ glance }).commit();
console.log("Patched music-theory glance");

const settings = await client.fetch(`*[_type == "siteSettings"][0]{_id}`);
await client.patch(settings._id).unset(["heroSlide3Cta1Label", "heroSlide3Cta1Href", "heroSlide3Cta2Label", "heroSlide3Cta2Href"]).commit();
console.log("Cleared hero slide 3 CTA fields on siteSettings");
