// Uploads course card + hero images to Sanity, patches each course doc.
// Idempotent: skips images already set.
import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function uploadAsset(relPath) {
  const abs = path.join(PUBLIC, relPath.replace(/^\//, ""));
  if (!fs.existsSync(abs)) { console.log(`  ⚠️  missing: ${abs}`); return null; }
  const asset = await client.assets.upload("image", fs.readFileSync(abs), { filename: path.basename(abs) });
  console.log(`  ✓ uploaded ${relPath} → ${asset._id}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

const SOURCES = [
  { slug: "piano",             image: "/gallery/281-Green_Room_Music_Concert_Summer_2025.jpg", heroImage: "/gallery/014-GreenRoomMusicTheorySummer2025.jpg" },
  { slug: "music-theory",      image: "/gallery/395-Green_Room_Music_Concert_Summer_2025.jpg", heroImage: "/gallery/020-GreenRoomMusicTheorySummer2025.jpg" },
  { slug: "vocal-performance", image: "/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg", heroImage: "/gallery/034-GreenRoomMusicTheorySummer2025.jpg" },
];

async function run() {
  for (const src of SOURCES) {
    const course = await client.fetch(`*[_type == "course" && slug.current == $slug][0]{ _id, image, heroImage }`, { slug: src.slug });
    if (!course) { console.log(`SKIP ${src.slug} — no course doc`); continue; }
    console.log(`\n${src.slug} (${course._id})`);
    const patch = {};
    if (!course.image) {
      const img = await uploadAsset(src.image);
      if (img) patch.image = img;
    } else console.log("  skip image (already set)");
    if (!course.heroImage) {
      const hero = await uploadAsset(src.heroImage);
      if (hero) patch.heroImage = hero;
    } else console.log("  skip heroImage (already set)");
    if (Object.keys(patch).length) {
      await client.patch(course._id).set(patch).commit();
      console.log("  ✓ patched", Object.keys(patch));
    }
    // publish any draft
    const draftId = `drafts.${course._id}`;
    const draft = await client.getDocument(draftId).catch(() => null);
    if (draft) {
      const { _id, _rev, _createdAt, _updatedAt, ...body } = draft;
      await client.transaction().createOrReplace({ ...body, _id: course._id }).delete(draftId).commit();
      console.log("  ✓ published draft");
    }
  }
  console.log("\nDone.");
}
run().catch((e) => { console.error(e); process.exit(1); });
