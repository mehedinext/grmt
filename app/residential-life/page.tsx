import { getSiteSettings } from "../lib/sanity";
import ResidentialLifeClient from "./ResidentialLifeClient";

export default async function ResidentialLifePage() {
  const settings = await getSiteSettings();
  return <ResidentialLifeClient settings={settings} />;
}
