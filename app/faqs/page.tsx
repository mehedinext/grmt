import { getSiteSettings, sanityClient, queries } from "../lib/sanity";
import FAQsClient from "./FAQsClient";

export const revalidate = 60;

export default async function FAQsPage() {
  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.faqCategories).catch(() => []),
  ]);
  return <FAQsClient settings={settings} categories={categories ?? []} />;
}
