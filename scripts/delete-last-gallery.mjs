import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const docs = await client.fetch(`*[_type == "galleryImage"] | order(order asc) { _id, order, "url": image.asset->url }`);
console.log(`Found ${docs.length} galleryImage docs.`);
if (docs.length === 0) process.exit(0);

const last = docs[docs.length - 1];
console.log(`Deleting last: _id=${last._id}, order=${last.order}, url=${last.url}`);
await client.delete(last._id);
console.log("Deleted.");
