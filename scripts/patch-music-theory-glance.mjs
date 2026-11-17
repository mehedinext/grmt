// Patch music-theory course's glance array to new 8-item layout matching Will's mockup.
// Run: node --env-file=.env.local scripts/patch-music-theory-glance.mjs
import { createClient } from "@sanity/client";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN — run with --env-file=.env.local");
  process.exit(1);
}

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

const newGlance = [
  { _key: "mt-g1", label: "Dates", value: "19-23 July 2027" },
  { _key: "mt-g2", label: "Location", value: "Stamford School" },
  { _key: "mt-g3", label: "Ages", value: "10-17" },
  { _key: "mt-g4", label: "Levels", value: "Beginner - ABRSM Grade 5" },
  { _key: "mt-g5", label: "Focus", value: "ABRSM Theory Exams\nGrade 5 - Our Most Popular" },
  { _key: "mt-g6", label: "Exam Prep", value: "Past Papers & Mock Exams\nIncluded" },
  { _key: "mt-g7", label: "Boarding & Meals", value: "Included" },
  { _key: "mt-g8", label: "Pass Rate", value: "100%" },
];

const course = await client.fetch(`*[_type == "course" && slug.current == "music-theory"][0]{_id}`);
if (!course?._id) {
  console.error("music-theory course not found");
  process.exit(1);
}

await client.patch(course._id).set({ glance: newGlance }).commit();
console.log("Patched music-theory glance ->", course._id);
