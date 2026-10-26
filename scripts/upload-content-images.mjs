// Uploads gallery images and partner logos into Sanity.
// Also publishes any draft documents so live reads the latest values.
// Idempotent: skips image fields that already have a value, and matches
// existing docs by order/name before creating new ones.

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

// ─── GALLERY ─────────────────────────────────────────────────────────────────
const GALLERY_PATHS = [
  "/gallery/106-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/103-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/039-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/038-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/037-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/036-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/014-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/012-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/104-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/105-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/040-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/041-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/042-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/043-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/044-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/045-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/046-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/047-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/048-GreenRoomMusicTheorySummer2025.jpg",
  "/gallery/049-GreenRoomMusicTheorySummer2025.jpg",
];

async function uploadGallery() {
  console.log("\n── GALLERY ──────────────────────────────");
  const existing = await client.fetch(`*[_type == "galleryImage"]{ _id, order, image, alt }`);
  console.log(`  found ${existing.length} existing galleryImage docs`);

  for (let i = 0; i < GALLERY_PATHS.length; i++) {
    const relPath = GALLERY_PATHS[i];
    const order = i;
    const alt = `Green Room Music camp photo ${i + 1}`;

    // Try to match by order
    const match = existing.find((d) => d.order === order);
    if (match) {
      if (match.image?.asset) {
        console.log(`  skip gallery #${order} (already has image)`);
        continue;
      }
      console.log(`  patching gallery #${order} (${match._id})`);
      const img = await uploadAsset(relPath);
      if (img) {
        await client.patch(match._id).set({ image: img, alt: match.alt ?? alt }).commit();
      }
    } else {
      // No doc for this order — create one
      console.log(`  creating gallery #${order}`);
      const img = await uploadAsset(relPath);
      if (img) {
        await client.create({ _type: "galleryImage", order, image: img, alt });
      }
    }
  }
}

// ─── PARTNERS ────────────────────────────────────────────────────────────────
const PARTNERS = [
  { name: "Steinway & Sons",                       match: /steinway/i,     logo: "/partners/steinway-gold.png", url: "https://www.steinwaylosangeles.com/" },
  { name: "ABRSM",                                 match: /abrsm/i,        logo: "/partners/abrsm.png",         url: "https://www.abrsm.org/en-gb" },
  { name: "Stanford University",                   match: /stanford/i,     logo: "/partners/stanford.png",      url: "https://www.stanford.edu/" },
  { name: "Harvard Graduate School of Education",  match: /harvard/i,      logo: "/partners/harvard.png",       url: "https://www.gse.harvard.edu/" },
  { name: "EPTA UK",                               match: /epta/i,         logo: "/partners/epta.png",          url: "https://epta-uk.org" },
  { name: "Pasadena Piano Academy",                match: /pasadena|ppa/i, logo: "/partners/ppa.png",           url: "https://www.pasadenapianoacademy.com/" },
];

async function uploadPartners() {
  console.log("\n── PARTNERS ─────────────────────────────");
  const existing = await client.fetch(`*[_type == "partner"]{ _id, name, logo, url, order }`);
  console.log(`  found ${existing.length} existing partner docs`);

  for (let i = 0; i < PARTNERS.length; i++) {
    const p = PARTNERS[i];
    const match = existing.find((d) => p.match.test(d.name || ""));

    if (match) {
      const patch = {};
      if (!match.logo?.asset) {
        console.log(`  uploading logo for ${match.name || p.name}`);
        const img = await uploadAsset(p.logo);
        if (img) patch.logo = img;
      }
      if (!match.url) patch.url = p.url;
      if (!match.name) patch.name = p.name;
      if (match.order === undefined || match.order === null) patch.order = i;

      if (Object.keys(patch).length > 0) {
        await client.patch(match._id).set(patch).commit();
        console.log(`  ✓ patched ${match.name || p.name}`);
      } else {
        console.log(`  skip ${match.name} (complete)`);
      }
    } else {
      console.log(`  creating partner: ${p.name}`);
      const img = await uploadAsset(p.logo);
      await client.create({
        _type: "partner",
        order: i,
        name: p.name,
        url: p.url,
        ...(img ? { logo: img } : {}),
      });
    }
  }
}

// ─── PUBLISH ALL DRAFTS ──────────────────────────────────────────────────────
async function publishAllDrafts() {
  console.log("\n── PUBLISHING DRAFTS ────────────────────");
  const drafts = await client.fetch(`*[_id in path("drafts.**")]`);
  console.log(`  found ${drafts.length} drafts`);

  for (const draft of drafts) {
    const publishedId = draft._id.replace(/^drafts\./, "");
    const { _id, _rev, _createdAt, _updatedAt, ...body } = draft;
    try {
      await client
        .transaction()
        .createOrReplace({ ...body, _id: publishedId })
        .delete(draft._id)
        .commit();
      console.log(`  ✓ published ${publishedId}`);
    } catch (e) {
      console.log(`  ✗ failed ${publishedId}: ${e.message}`);
    }
  }
}

async function run() {
  await uploadGallery();
  await uploadPartners();
  await publishAllDrafts();
  console.log("\nAll done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
