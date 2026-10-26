import { getSiteSettings, sanityClient, queries } from "../lib/sanity";
import FacultyPageClient from "./FacultyPageClient";

export const revalidate = 60;

export default async function FacultyPage() {
  const [settings, sanityTutors] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.tutors).catch(() => []),
  ]);

  const tutors: any[] = (sanityTutors || []) as any[];

  return <FacultyPageClient settings={settings} tutors={tutors} />;
}
