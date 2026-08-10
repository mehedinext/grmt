import { getSiteSettings } from "../lib/sanity";
import ApplyClient from "./ApplyClient";

export default async function ApplyPage() {
  const settings = await getSiteSettings();
  return <ApplyClient settings={settings} />;
}
