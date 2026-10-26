// Uploads hardcoded hero images into Sanity + patches siteSettings with references.
// Also publishes any draft siteSettings so live reads the latest.
// Idempotent: skips image fields that already have a value.

import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";

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
  if (!fs.existsSync(abs)) {
    console.log(`  ⚠️  file missing: ${abs}`);
    return null;
  }
  const file = fs.readFileSync(abs);
  const asset = await client.assets.upload("image", file, {
    filename: path.basename(abs),
  });
  console.log(`  ✓ uploaded ${relPath} → ${asset._id}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function run() {
  console.log("Fetching siteSettings...");
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{ _id, heroImage, heroBadgeImage, heroSlide2Image, heroSlide2BadgeImage, heroSlide3Image, heroSlide3Awards }`);
  if (!settings) throw new Error("No siteSettings document");
  console.log("  settings _id:", settings._id);

  const patch = {};

  if (!settings.heroImage) {
    console.log("Uploading hero image (slide 1)...");
    const img = await uploadAsset("/gallery/106-GreenRoomMusicTheorySummer2025.jpg");
    if (img) patch.heroImage = img;
  } else console.log("  skip heroImage (already set)");

  if (!settings.heroBadgeImage) {
    console.log("Uploading Steinway badge (slide 1)...");
    const img = await uploadAsset("/partners/steinway-badge-color.png");
    if (img) patch.heroBadgeImage = img;
  } else console.log("  skip heroBadgeImage (already set)");

  if (!settings.heroSlide2Image) {
    console.log("Uploading hero image (slide 2)...");
    const img = await uploadAsset("/gallery/034-GreenRoomMusicTheorySummer2025.jpg");
    if (img) patch.heroSlide2Image = img;
  } else console.log("  skip heroSlide2Image (already set)");

  if (!settings.heroSlide2BadgeImage) {
    console.log("Uploading ABRSM badge (slide 2)...");
    const img = await uploadAsset("/partners/abrsm.png");
    if (img) patch.heroSlide2BadgeImage = img;
  } else console.log("  skip heroSlide2BadgeImage (already set)");

  if (!settings.heroSlide3Image) {
    console.log("Uploading hero image (slide 3)...");
    const img = await uploadAsset("/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg");
    if (img) patch.heroSlide3Image = img;
  } else console.log("  skip heroSlide3Image (already set)");

  // Award logos — only patch award items missing their logo
  const awardSources = [
    { name: "Duke of Edinburgh's Award", logo: "/partners/dofe.png" },
    { name: "Arts Award",                logo: "/partners/arts-award.png" },
    { name: "The Congressional Award",   logo: "/partners/congressional-award.jpeg" },
  ];
  const existingAwards = settings.heroSlide3Awards ?? [];
  let awardsPatched = false;
  const nextAwards = [...existingAwards];
  for (const src of awardSources) {
    const idx = nextAwards.findIndex(a => a?.name === src.name);
    if (idx === -1) continue;
    if (!nextAwards[idx].logo) {
      console.log(`Uploading award logo: ${src.name}`);
      const img = await uploadAsset(src.logo);
      if (img) {
        nextAwards[idx] = { ...nextAwards[idx], logo: img };
        awardsPatched = true;
      }
    }
  }
  if (awardsPatched) patch.heroSlide3Awards = nextAwards;
  else console.log("  skip award logos (all present or no matching award names)");

  if (Object.keys(patch).length === 0) {
    console.log("Nothing to patch. Done.");
  } else {
    console.log("\nPatching siteSettings (published):", Object.keys(patch));
    await client.patch(settings._id).set(patch).commit();
    console.log("  ✓ patched");
  }

  // Publish any draft of this doc so live reads the latest values
  const draftId = settings._id.startsWith("drafts.") ? settings._id : `drafts.${settings._id}`;
  const publishedId = settings._id.replace(/^drafts\./, "");
  const draft = await client.getDocument(draftId).catch(() => null);
  if (draft) {
    console.log("\nFound draft siteSettings — publishing...");
    const { _id, _rev, _createdAt, _updatedAt, ...body } = draft;
    await client
      .transaction()
      .createOrReplace({ ...body, _id: publishedId })
      .delete(draftId)
      .commit();
    console.log("  ✓ draft merged into published");
  } else {
    console.log("\nNo draft siteSettings to publish.");
  }

  console.log("\nAll done.");
}

run().catch((e) => { console.error(e); process.exit(1); });
