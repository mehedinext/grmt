import { createImageUrlBuilder as imageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Handles both plain URL strings (static data / GROQ projections)
// and raw Sanity image objects (if ever used without projection).
export function urlFor(source: any): string {
  if (!source) return "";
  if (typeof source === "string") return source;
  return builder.image(source).url();
}
