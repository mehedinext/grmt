// Patch singing-performance course glance to new 8-item layout
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

const glance = [
  { _key: "sp-g1", label: "Dates", value: "19-23 July 2027" },
  { _key: "sp-g2", label: "Location", value: "Stamford School" },
  { _key: "sp-g3", label: "Ages", value: "10-17" },
  { _key: "sp-g4", label: "Experience", value: "No Experience Needed" },
  { _key: "sp-g5", label: "Singing Audition", value: "Singing Assessment Video\n(Audition) Required" },
  { _key: "sp-g6", label: "Styles Explored", value: "Musical Theatre · Classical\nContemporary · Jazz" },
  { _key: "sp-g7", label: "Faculty", value: "West End Performers\nProfessional Artists & Educators" },
  { _key: "sp-g8", label: "Performance", value: "Every Student Performs in the\nGRMSC Final Performance" },
];

const course = await client.fetch(`*[_type == "course" && slug.current == "singing-performance"][0]{_id}`);
if (!course?._id) { console.error("singing-performance not found"); process.exit(1); }

await client.patch(course._id).set({ glance }).commit();
console.log("Patched singing-performance glance ->", course._id);
