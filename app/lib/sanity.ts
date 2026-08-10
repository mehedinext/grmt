import { createClient } from "next-sanity";
import { cache } from "react";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

// GROQ queries — one place to update when schema changes
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0] {
    navLogoSubtitle, navCtaLabel, navCtaHref,
    heroBadge, heroHeadingLine1, heroHeadingLine2, heroSubtext,
    heroLocation, heroDate, "heroImage": heroImage.asset->url,
    heroCta1Label, heroCta1Href, heroCta2Label, heroCta2Href,
    stats,
    coursesSectionHeading,
    whyHeading, whyItems,
    resHeading, resText, resTags, "resImage": resImage.asset->url,
    tutorsHeading,
    datesHeading, dateItems, faqsHeading,
    ctaEyebrow, ctaHeadingLine1, ctaHeadingLine2, ctaSubtext,
    "ctaImage": ctaImage.asset->url,
    ctaCta1Label, ctaCta1Href, ctaCta2Label, ctaCta2Href,
    partnersLabel,
    footerTagline, footerDescription, footerInstagram, footerFacebook,
    footerContactEmail, footerCopyright,
    coursesPageEyebrow, coursesPageHeading, coursesPageSubtext, coursesPageCtaHeading, coursesPageCtaSubtext,
    facultyPageEyebrow, facultyPageHeading, facultyPageSubtext, facultyPageQuote, facultyPageQuoteAttrib, facultyPageCtaHeading, facultyPageCtaSubtext,
    resPageEyebrow, resPageHeading, resPageSubtext, resPageGalleryHeading, resPageFeaturesHeading, resPageWeekHeading, resPageCtaHeading, resPageCtaSubtext,
    faqsPageEyebrow, faqsPageHeading, faqsPageSubtext,
    feesPageEyebrow, feesPageHeading, feesPageSubtext, feesPagePriceValue, feesPagePriceNote, feesPagePriceDesc,
    applyPageEyebrow, applyPageHeading, applyPageSubtext
  }`,

  courses: `*[_type == "course"] | order(order asc) {
    _id, num, title, slug, grade, tagline, excerpt,
    "image": image.asset->url, imagePosition,
    heroColor, "heroImage": heroImage.asset->url,
    heroStats, aboutHeading, about,
    detailType, schedule, topics,
    includes, requirements, highlights
  }`,

  tutors: `*[_type == "tutor"] | order(order asc) {
    _id, name, role, bio, bioFull, teaches,
    "image": image.asset->url
  }`,

  faqs: `*[_type == "faq"] | order(order asc) { _id, question, answer }`,

  feeItems: `*[_type == "feeItem"] | order(order asc) { _id, title, description }`,

  resFeatures: `*[_type == "resFeature"] | order(order asc) { _id, title, description }`,

  galleryImages: `*[_type == "galleryImage"] | order(order asc) { _id, "url": image.asset->url, alt }`,

  partners: `*[_type == "partner"] | order(order asc) { _id, name, "logo": logo.asset->url }`,
};

// Cached per-request fetch — safe to call from multiple components, only hits Sanity once
export const getSiteSettings = cache(async () => {
  return sanityClient.fetch(queries.siteSettings).catch(() => null);
});
