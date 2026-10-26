// Seeds the 2 tutors (Will Fowler + Vivian Shiao) into Sanity with uploaded images.
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
  console.log(`  ✓ uploaded ${filename} → ${asset._id}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

const TUTORS = [
  {
    _id: "tutor-will",
    order: 1,
    name: "Will Fowler",
    role: "Artistic Director",
    bio: "Classically trained British musician, actor and educator. Musical Director of Green Room Piano Festival, with over 12 years of teaching experience across stage, studio and education.",
    bioFull: [
      "Will Fowler is a classically trained British musician, actor and educator who has worked internationally across stage, studio and education. He currently performs the role of 'Maestro' and serves as Music Captain in Norwegian Cruise Line's production of the Olivier Award-nominated West End show The Choir of Man.",
      "His performance credits include appearances at the Royal Albert Hall, broadcasts on BBC Radio 3, and session work at the world-renowned Abbey Road Studios and Angel Studios. More recently, Will performed at the release of Slade's biography, alongside Helen O'Hara of Dexys Midnight Runners.",
      "Will trained at The Purcell School and the Royal Academy of Music Junior Department, before continuing his studies at the San Francisco Conservatory of Music and the American Academy of Dramatic Arts in Los Angeles.",
      "Alongside his performing career, Will has over 12 years of teaching experience, working with students across a wide range of ages and abilities. He is Musical Director of Green Room Piano Festival and is passionate about creating ambitious, supportive musical environments in which young musicians can develop both technically and artistically.",
    ],
    teaches: "Piano · Chamber Music · Performance",
    imageFile: "/tmp/will-fowler-photo.png",
    imageName: "will-fowler-photo.png",
  },
  {
    _id: "tutor-vivian",
    order: 2,
    name: "Vivian Shiao",
    role: "Honorary Guest Lecturer",
    bio: "Concert pianist, Steinway Top Teacher Award recipient and USC Music Education graduate. Recognised internationally as a prodigy and appointed Steinway Educational Partner in 2018.",
    bioFull: [
      "Vivian Shiao, a native of Taipei, Taiwan, discovered her deep passion for the piano at the remarkable age of three, igniting a lifelong journey of musical dedication. Recognised as a prodigy in her field, she swiftly garnered international recognition as a concert pianist.",
      "Shiao completed her M.A. in Music Education from USC, supported by several prestigious scholarships, and enriched her education as a visiting scholar at Stanford University. She holds a Higher Education Teaching Certificate from Harvard University.",
      "In 2015–2016, Vivian Shiao received the honour of being inducted into the NAPW (National Association of Professional Women) Woman of the Year Circle. Her appointment as a Steinway Educational Partner in 2018 marked another milestone in her career, and she took on the role of CAPMT Pasadena Chapter Chair for the Piano and Ensemble Festival.",
      "In 2019, she was bestowed with the title of honorary music educator by Steinway & Sons, and in 2022, she earned the distinguished Steinway Top Teacher Award, further illuminating her exceptional contributions to the field of music education. In 2023, Ms. Shiao was honoured with the CAPMT Outstanding Member State Recognition Award.",
      "Vivian looks forward to her UK visit and to being GRMSC's Honorary Guest Visiting Lecturer.",
    ],
    teaches: "Music Theory · Ensemble · Ear Training",
    imageFile: "/Users/mehedihasan/green-room-camp/public/vivian-shiao.webp",
    imageName: "vivian-shiao.webp",
  },
];

async function run() {
  for (const t of TUTORS) {
    const existing = await client.getDocument(t._id).catch(() => null);
    if (existing) { console.log(`SKIP ${t.name} (${t._id}) — already exists`); continue; }
    console.log(`\nCreating ${t.name}...`);
    const image = await uploadFile(t.imageFile, t.imageName);
    const doc = {
      _id: t._id,
      _type: "tutor",
      order: t.order,
      name: t.name,
      role: t.role,
      bio: t.bio,
      bioFull: t.bioFull,
      teaches: t.teaches,
      image,
    };
    await client.create(doc);
    console.log(`  ✓ created tutor-${t.name}`);
  }
  console.log("\nDone.");
}
run().catch((e) => { console.error(e); process.exit(1); });
