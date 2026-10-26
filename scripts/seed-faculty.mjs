// Seeds the faculty page: patches existing Will + Vivian with new category/tag fields,
// creates 7 new tutor docs (no images — Will uploads later), seeds Site Settings defaults.
// Idempotent — safe to re-run.
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ── PATCHES for existing tutors ────────────────────────────────
const PATCHES = {
  "tutor-will": {
    order: 1,
    category: "main",
    role: "Artistic Director & Head of Piano",
    teachesTags: ["Piano", "Music Theory", "Singing Performance"],
    profileTags: ["Piano", "Chamber Music", "Performance"],
    isDSL: true,
  },
  "tutor-vivian": {
    order: 100,
    category: "honorary",
    role: "Honorary Guest Visiting Lecturer",
    teachesTags: ["Piano", "Pedagogy", "Performance"],
    profileTags: ["Piano", "Pedagogy", "Performance"],
    shortBio: "We are delighted to welcome Vivian Shiao as our Honorary Guest Visiting Lecturer. Vivian is a celebrated pianist and pedagogue, and a valued friend of Green Room Music Summer Camp. She will be delivering specialist sessions during the week, sharing her expertise and insights with our students.",
  },
};

// ── NEW TUTOR DOCS ─────────────────────────────────────────────
const NEW_TUTORS = [
  { _id: "tutor-conor",     order: 2, name: "Conor Mathers",      role: "Head of Singing Performance", category: "main",     teachesTags: ["Singing Performance", "Music Theory"],   bio: "", bioFull: [] },
  { _id: "tutor-serena",    order: 3, name: "Serena Shah",        role: "Head of Music Theory",         category: "main",     teachesTags: ["Music Theory", "Piano"],                 bio: "", bioFull: [] },
  { _id: "tutor-rhiannon",  order: 4, name: "Rhiannon Bennett",   role: "Head of Boarding & Pastoral",  category: "main",     teachesTags: ["Singing Performance (Acting)"],          bio: "", bioFull: [], isDeputyDSL: true },
  { _id: "tutor-leo",       order: 20, name: "Leo Little",        role: "Junior Teaching Artist",       category: "junior",   teachesTags: ["Piano"],                                 bio: "", bioFull: [] },
  { _id: "tutor-rebekah",   order: 21, name: "Rebekah Tan",       role: "Junior Teaching Artist",       category: "junior",   teachesTags: ["Piano"],                                 bio: "", bioFull: [] },
  { _id: "tutor-sophie",    order: 30, name: "Sophie Wells",      role: "Nurse",                        category: "boarding", teachesTags: ["Boarding & Pastoral"],                   bio: "", bioFull: [], isDeputyDSL: true },
  { _id: "tutor-elisabeth", order: 31, name: "Elisabeth Thompson",role: "Boarding & Pastoral",          category: "boarding", teachesTags: ["Boarding & Pastoral"],                   bio: "", bioFull: [] },
];

// ── SITE SETTINGS defaults ─────────────────────────────────────
const SETTINGS_DEFAULTS = {
  facultyPageEyebrow: "SUMMER 2027",
  facultyPageHeading: "Our Faculty",
  facultyPageSubtext: "Our faculty are experienced musicians, educators and performing arts professionals, passionate about inspiring the next generation. Together, they create a supportive, creative and challenging environment where every student can grow.",
  facultyMainSectionEyebrow: "MAIN FACULTY",
  facultyMainSectionHeading: "Artistic Leadership & Teaching Faculty",
  facultyMainSectionSubtext: "Our core faculty lead the academic programme across Piano, Music Theory and Singing Performance.",
  facultyHonorarySectionEyebrow: "HONORARY GUEST VISITING LECTURER",
  facultyJuniorSectionEyebrow: "PIANO DEPARTMENT",
  facultyJuniorSectionHeading: "Junior Teaching Artists",
  facultyBoardingSectionEyebrow: "BOARDING & PASTORAL TEAM",
  facultyBoardingSectionHeading: "Boarding & Pastoral Team",
  safeguardingHeading: "Safeguarding & Student Welfare",
  safeguardingBody: "The safety and wellbeing of our students is at the heart of Green Room Music Summer Camp. All members of staff working at the camp have enhanced DBS checks and are committed to providing a safe, supportive and inclusive environment.",
};

async function run() {
  console.log("═══ PATCHING existing tutors ═══");
  for (const [id, patch] of Object.entries(PATCHES)) {
    const doc = await client.getDocument(id).catch(() => null);
    if (!doc) { console.log(`  SKIP ${id} — doc not found`); continue; }
    // Only set fields that are missing (don't overwrite Will's edits)
    const toSet = {};
    for (const [k, v] of Object.entries(patch)) {
      if (doc[k] === undefined || doc[k] === null || (Array.isArray(doc[k]) && doc[k].length === 0) || doc[k] === "") {
        toSet[k] = v;
      }
    }
    if (Object.keys(toSet).length === 0) { console.log(`  SKIP ${id} — all fields already set`); continue; }
    await client.patch(id).set(toSet).commit();
    console.log(`  ✓ patched ${id}:`, Object.keys(toSet).join(", "));
  }

  console.log("\n═══ CREATING new tutors ═══");
  for (const t of NEW_TUTORS) {
    const existing = await client.getDocument(t._id).catch(() => null);
    if (existing) { console.log(`  SKIP ${t.name} — already exists`); continue; }
    await client.create({ _id: t._id, _type: "tutor", ...t });
    console.log(`  ✓ created ${t.name} (${t.category})`);
  }

  console.log("\n═══ PATCHING siteSettings defaults ═══");
  const settings = await client.getDocument("siteSettings").catch(() => null);
  if (!settings) { console.log("  SKIP — no siteSettings doc"); }
  else {
    const toSet = {};
    for (const [k, v] of Object.entries(SETTINGS_DEFAULTS)) {
      if (settings[k] === undefined || settings[k] === null || settings[k] === "") toSet[k] = v;
    }
    if (Object.keys(toSet).length === 0) console.log("  SKIP — all defaults already set");
    else {
      await client.patch("siteSettings").set(toSet).commit();
      console.log(`  ✓ patched siteSettings:`, Object.keys(toSet).join(", "));
    }
  }

  console.log("\nAll done.");
}
run().catch(e => { console.error(e); process.exit(1); });
