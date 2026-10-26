import { getSiteSettings, sanityClient, queries } from "../lib/sanity";
import ResidentialLifeClient from "./ResidentialLifeClient";

export const revalidate = 60;

export default async function ResidentialLifePage() {
  const [settings, gallery, features] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.galleryImages).catch(() => []),
    sanityClient.fetch(queries.resFeatures).catch(() => []),
  ]);
  const galleryImages = (gallery || []).map((g: any) => g.url).filter(Boolean);
  return (
    <ResidentialLifeClient
      settings={settings}
      galleryImages={galleryImages.length ? galleryImages : undefined}
      features={features?.length ? features : undefined}
    />
  );
}
