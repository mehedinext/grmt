// Seeds missing tutor + feeItem docs. Migrates resFeature.body → description.
// Idempotent — skips anything already correct.
import { createClient } from "@sanity/client";
import fs from "node:fs";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function uploadFile(absPath, filename) {
  const asset = await client.assets.upload("image", fs.readFileSync(absPath), { filename });
  console.log(`    ✓ uploaded ${filename} → ${asset._id}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

// ── TUTORS ────────────────────────────────────────────────────────────
const TUTORS = [
  {
    _id: "tutor-will", order: 1, name: "Will Fowler", role: "Artistic Director",
    bio: "Classically trained British musician, actor and educator. Musical Director of Green Room Piano Festival, with over 12 years of teaching experience across stage, studio and education.",
    bioFull: [
      "Will Fowler is a classically trained British musician, actor and educator who has worked internationally across stage, studio and education. He currently performs the role of 'Maestro' and serves as Music Captain in Norwegian Cruise Line's production of the Olivier Award-nominated West End show The Choir of Man.",
      "His performance credits include appearances at the Royal Albert Hall, broadcasts on BBC Radio 3, and session work at the world-renowned Abbey Road Studios and Angel Studios. More recently, Will performed at the release of Slade's biography, alongside Helen O'Hara of Dexys Midnight Runners.",
      "Will trained at The Purcell School and the Royal Academy of Music Junior Department, before continuing his studies at the San Francisco Conservatory of Music and the American Academy of Dramatic Arts in Los Angeles.",
      "Alongside his performing career, Will has over 12 years of teaching experience, working with students across a wide range of ages and abilities. He is Musical Director of Green Room Piano Festival and is passionate about creating ambitious, supportive musical environments in which young musicians can develop both technically and artistically.",
    ],
    teaches: "Piano · Chamber Music · Performance",
    imageFile: "/tmp/will-fowler-photo.png", imageName: "will-fowler-photo.png",
  },
  {
    _id: "tutor-vivian", order: 2, name: "Vivian Shiao", role: "Honorary Guest Lecturer",
    bio: "Concert pianist, Steinway Top Teacher Award recipient and USC Music Education graduate. Recognised internationally as a prodigy and appointed Steinway Educational Partner in 2018.",
    bioFull: [
      "Vivian Shiao, a native of Taipei, Taiwan, discovered her deep passion for the piano at the remarkable age of three, igniting a lifelong journey of musical dedication. Recognised as a prodigy in her field, she swiftly garnered international recognition as a concert pianist.",
      "Shiao completed her M.A. in Music Education from USC, supported by several prestigious scholarships, and enriched her education as a visiting scholar at Stanford University. She holds a Higher Education Teaching Certificate from Harvard University.",
      "In 2015–2016, Vivian Shiao received the honour of being inducted into the NAPW (National Association of Professional Women) Woman of the Year Circle. Her appointment as a Steinway Educational Partner in 2018 marked another milestone in her career, and she took on the role of CAPMT Pasadena Chapter Chair for the Piano and Ensemble Festival.",
      "In 2019, she was bestowed with the title of honorary music educator by Steinway & Sons, and in 2022, she earned the distinguished Steinway Top Teacher Award, further illuminating her exceptional contributions to the field of music education. In 2023, Ms. Shiao was honoured with the CAPMT Outstanding Member State Recognition Award.",
      "Vivian looks forward to her UK visit and to being GRMSC's Honorary Guest Visiting Lecturer.",
    ],
    teaches: "Music Theory · Ensemble · Ear Training",
    imageFile: "/Users/mehedihasan/green-room-camp/public/vivian-shiao.webp", imageName: "vivian-shiao.webp",
  },
];

// ── FEE ITEMS ──────────────────────────────────────────────────────────
const FEE_ITEMS = [
  { _id: "fee-1", order: 1, title: "Tuition", description: "Daily lessons, masterclasses and workshops with specialist tutors." },
  { _id: "fee-2", order: 2, title: "Accommodation", description: "Full board residential at Stamford School with houseparents on site." },
  { _id: "fee-3", order: 3, title: "All Meals", description: "Breakfast, lunch and dinner included. All dietary needs catered for." },
  { _id: "fee-4", order: 4, title: "Evening Programme", description: "Concerts, social events and activities every evening of the course." },
  { _id: "fee-5", order: 5, title: "Course Materials", description: "All sheet music, workbooks and resources provided." },
  { _id: "fee-6", order: 6, title: "Final Showcase", description: "Performance for family and friends on the last evening." },
];

async function seedTutors() {
  console.log("\n═══ TUTORS ═══");
  for (const t of TUTORS) {
    const existing = await client.getDocument(t._id).catch(() => null);
    if (existing) { console.log(`  SKIP ${t.name} — already exists`); continue; }
    console.log(`  Creating ${t.name}...`);
    const image = await uploadFile(t.imageFile, t.imageName);
    await client.create({
      _id: t._id, _type: "tutor",
      order: t.order, name: t.name, role: t.role,
      bio: t.bio, bioFull: t.bioFull, teaches: t.teaches, image,
    });
    console.log(`    ✓ created`);
  }
}

async function seedFeeItems() {
  console.log("\n═══ FEE ITEMS ═══");
  for (const f of FEE_ITEMS) {
    const existing = await client.getDocument(f._id).catch(() => null);
    if (existing) { console.log(`  SKIP ${f.title} — already exists`); continue; }
    await client.create({ _id: f._id, _type: "feeItem", order: f.order, title: f.title, description: f.description });
    console.log(`  ✓ created ${f.title}`);
  }
}

async function fixResFeatures() {
  console.log("\n═══ RESIDENTIAL FEATURES ═══");
  const docs = await client.fetch(`*[_type == "resFeature"]{_id, title, description, body, imageSlug}`);
  for (const doc of docs) {
    const needsMigrate = (!doc.description || doc.description === "") && doc.body;
    const hasOrphan = "body" in doc || "imageSlug" in doc;
    if (!needsMigrate && !hasOrphan) { console.log(`  SKIP ${doc.title} — already clean`); continue; }
    const patch = client.patch(doc._id);
    if (needsMigrate) {
      patch.set({ description: doc.body });
      console.log(`  → ${doc.title}: migrate body → description`);
    }
    const toUnset = [];
    if ("body" in doc) toUnset.push("body");
    if ("imageSlug" in doc) toUnset.push("imageSlug");
    if (toUnset.length) {
      patch.unset(toUnset);
      console.log(`    unset: ${toUnset.join(", ")}`);
    }
    await patch.commit();
    console.log(`    ✓ patched ${doc._id}`);
  }
}

async function run() {
  await seedTutors();
  await seedFeeItems();
  await fixResFeatures();
  console.log("\nAll done.");
}
run().catch((e) => { console.error(e); process.exit(1); });
