import { sanityClient, queries, getSiteSettings } from "./lib/sanity";
import { courses as staticCourses, faqs as staticFaqs, partnerLogos as staticPartners } from "./lib/data";
import HomeClient from "./components/HomeClient";

export const revalidate = 60;

export default async function HomePage() {
  const [settings, courses, generalFaqs, partners] = await Promise.all([
    getSiteSettings(),
    sanityClient.fetch(queries.courses).catch(() => []),
    sanityClient
      .fetch(`*[_type == "faqCategory" && key == "general"][0].faqs[0..3]{ question, answer }`)
      .catch(() => []),
    sanityClient.fetch(queries.partners).catch(() => []),
  ]);
  const faqs = (generalFaqs || []).map((f: any, i: number) => ({ _id: `h-${i}`, question: f.question, answer: f.answer }));

  const partnersWithLogos = (partners || []).filter((p: any) => p.logo).map((p: any) => ({ src: p.logo, href: p.href || "#", alt: p.name || "" }));
  const partnersMapped = partnersWithLogos.length ? partnersWithLogos : staticPartners;

  return (
    <HomeClient
      settings={settings}
      courses={courses.length     ? courses  : staticCourses}
      faqs={faqs.length           ? faqs     : staticFaqs}
      partnerLogos={partnersMapped}
    />
  );
}
