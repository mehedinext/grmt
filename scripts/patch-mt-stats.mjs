// Patch music-theory examStats to 100% Pass Rate / 90% Distinction / 100+ Students Supported
import { createClient } from "@sanity/client";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) { console.error("Missing SANITY_API_WRITE_TOKEN"); process.exit(1); }

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

const examStats = [
  { _key: "mt-s1", stat: "100%", label: "Pass Rate" },
  { _key: "mt-s2", stat: "90%", label: "Distinction" },
  { _key: "mt-s3", stat: "100+", label: "Students Supported" },
];

const course = await client.fetch(`*[_type == "course" && slug.current == "music-theory"][0]{_id}`);
if (!course?._id) { console.error("music-theory not found"); process.exit(1); }

await client.patch(course._id).set({ examStats }).commit();
console.log("Patched music-theory examStats");
