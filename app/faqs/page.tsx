import { getSiteSettings } from "../lib/sanity";
import FAQsClient from "./FAQsClient";

export default async function FAQsPage() {
  const settings = await getSiteSettings();
  return <FAQsClient settings={settings} />;
}
