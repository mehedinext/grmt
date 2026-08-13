import { sanityClient, queries, getSiteSettings } from "./lib/sanity";
import { courses as staticCourses, tutors as staticTutors, faqs as staticFaqs, partnerLogos as staticPartners } from "./lib/data";
import HomeClient from "./components/HomeClient";

export const revalidate = 60;

export default async function HomePage() {
  const [settings, courses, tutors, faqs, partners] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.courses).catch(() => []),
    sanityClient.fetch(queries.tutors).catch(() => []),
    sanityClient.fetch(queries.faqs).catch(() => []),
    sanityClient.fetch(queries.partners).catch(() => []),
  ]);

  return (
    <HomeClient
      settings={settings}
      courses={courses.length     ? courses  : staticCourses}
      tutors={tutors.length       ? tutors   : staticTutors}
      faqs={faqs.length           ? faqs     : staticFaqs}
      partnerLogos={staticPartners}
    />
  );
}
