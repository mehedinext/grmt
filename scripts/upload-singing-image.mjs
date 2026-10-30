// One-off: upload a Downloads image as the Singing / Vocal Performance card image.
import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";

const SRC = "/Users/mehedihasan/Downloads/iStock-511810363.jpg.jpeg";
const SLUG = "singing-performance";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function run() {
  if (!fs.existsSync(SRC)) { console.error("Missing source:", SRC); process.exit(1); }
  const course = await client.fetch(`*[_type == "course" && slug.current == $slug][0]{ _id }`, { slug: SLUG });
  if (!course) { console.error("No course doc for", SLUG); process.exit(1); }
  const asset = await client.assets.upload("image", fs.readFileSync(SRC), { filename: "singing-performance.jpg" });
  console.log("Uploaded asset:", asset._id);
  const img = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  await client.patch(course._id).set({ image: img, heroImage: img }).commit();
  console.log("Patched course image + heroImage on", course._id);
  const draftId = `drafts.${course._id}`;
  const draft = await client.getDocument(draftId).catch(() => null);
  if (draft) {
    const { _id, _rev, _createdAt, _updatedAt, ...body } = draft;
    await client.transaction().createOrReplace({ ...body, _id: course._id }).delete(draftId).commit();
    console.log("Published draft");
  }
}
run().catch((e) => { console.error(e); process.exit(1); });
