// Rename "Boarding & Pastoral" / "Boarding and Pastoral" -> "Boarding & Welfare" / "Boarding and Welfare"
// across siteSettings and all tutor documents.
import { createClient } from "@sanity/client";
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) { console.error("Missing SANITY_API_WRITE_TOKEN"); process.exit(1); }
const client = createClient({ projectId: "ji1ggnuz", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token });

function swap(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/Boarding\s*&\s*Pastoral/g, "Boarding & Welfare")
    .replace(/BOARDING\s*&\s*PASTORAL/g, "BOARDING & WELFARE")
    .replace(/Boarding\s*and\s*Pastoral/g, "Boarding and Welfare")
    .replace(/boarding\s*and\s*pastoral/g, "boarding and welfare");
}

// Site settings
const settings = await client.fetch(`*[_type=="siteSettings"][0]{_id,facultyBoardingSectionHeading,facultyBoardingSectionEyebrow,facultyBoardingSectionIntro}`);
const settingsPatch = {};
for (const k of ["facultyBoardingSectionHeading", "facultyBoardingSectionEyebrow", "facultyBoardingSectionIntro"]) {
  if (settings[k] && swap(settings[k]) !== settings[k]) settingsPatch[k] = swap(settings[k]);
}
if (Object.keys(settingsPatch).length) {
  await client.patch(settings._id).set(settingsPatch).commit();
  console.log("siteSettings patched:", Object.keys(settingsPatch));
}

// Tutors
const tutors = await client.fetch(`*[_type=="tutor"]{_id,name,role,teachesTags,shortBio,bio}`);
for (const t of tutors) {
  const patch = {};
  if (t.role && swap(t.role) !== t.role) patch.role = swap(t.role);
  if (Array.isArray(t.teachesTags)) {
    const newTags = t.teachesTags.map(swap);
    if (JSON.stringify(newTags) !== JSON.stringify(t.teachesTags)) patch.teachesTags = newTags;
  }
  if (t.shortBio && swap(t.shortBio) !== t.shortBio) patch.shortBio = swap(t.shortBio);
  if (Array.isArray(t.bio)) {
    const newBio = t.bio.map(swap);
    if (JSON.stringify(newBio) !== JSON.stringify(t.bio)) patch.bio = newBio;
  }
  if (Object.keys(patch).length) {
    await client.patch(t._id).set(patch).commit();
    console.log("tutor patched:", t._id, Object.keys(patch));
  }
}

console.log("done");
