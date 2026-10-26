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
    navCtaLabel, navCtaHref, navItems,

    heroHeadingLine1, heroHeadingLine2,
    heroLocation, heroDate,
    "heroImage": heroImage.asset->url,
    "heroBadgeImage": heroBadgeImage.asset->url,
    heroCta1Label, heroCta1Href, heroCta2Label, heroCta2Href,

    heroSlide2Eyebrow, heroSlide2Heading, heroSlide2Tagline,
    heroSlide2InfoTitle, heroSlide2InfoBody,
    "heroSlide2Image": heroSlide2Image.asset->url,
    "heroSlide2BadgeImage": heroSlide2BadgeImage.asset->url,
    heroSlide2Cta1Label, heroSlide2Cta1Href, heroSlide2Cta2Label, heroSlide2Cta2Href,

    heroSlide3Eyebrow, heroSlide3Heading, heroSlide3Body,
    "heroSlide3Image": heroSlide3Image.asset->url,
    heroSlide3Disclaimer,
    heroSlide3Cta1Label, heroSlide3Cta1Href, heroSlide3Cta2Label, heroSlide3Cta2Href,
    "heroSlide3Awards": heroSlide3Awards[]{ name, sub, tag, "logo": logo.asset->url },

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
    footerContactEmail, footerCopyright, footerLegalLine, footerColumns,

    coursesPageEyebrow, coursesPageHeading, coursesPageSubtext, coursesPageCtaHeading, coursesPageCtaSubtext,

    facultyPageEyebrow, facultyPageHeading, facultyPageSubtext, facultyPageStaffHeading,
    facultyPageQuote, facultyPageQuoteAttrib, facultyPageCtaHeading, facultyPageCtaSubtext, facultyPageCtaLabel,

    resPageEyebrow, resPageHeading, resPageSubtext, resPageGalleryHeading,
    resPageFeaturesHeading, resPageWeekHeading, resPageCtaHeading, resPageCtaSubtext, resPageApplyLabel,
    resStats, resWeekItems,

    faqsPageEyebrow, faqsPageHeading, faqsPageSubtext,

    feesPageEyebrow, feesPageHeading, feesPageSubtext,
    feesPagePriceLabel, feesPagePriceValue, feesPagePriceNote, feesPagePriceDesc,
    feesPageApplyLabel, feesPageApplyNote, feesPageBursaries,

    applyPageEyebrow, applyPageHeading, applyPageSubtext,
    applyPageFormHeading, applyPageSubmitLabel, applyPageSubmitNote, applyPageInfoStats
  }`,

  courses: `*[_type == "course"] | order(order asc) {
    _id, num, title, slug, grade, tagline, excerpt,
    "image": image.asset->url, imagePosition,
    heroColor, "heroImage": heroImage.asset->url,
    heroStats, aboutHeading, about,
    detailType, schedule, topics,
    includes, requirements, highlights,
    glance, programme, heroAlertTitle,
    ctaHeading, ctaSubtext, ctaTagline,
    examItems, whoFor, examStats,
    "awards": awards[]{ name, desc, "logo": logo.asset->url }
  }`,

  tutors: `*[_type == "tutor"] | order(order asc) {
    _id, name, role, bio, bioFull, teaches,
    "image": image.asset->url
  }`,

  faqs: `*[_type == "faq"] | order(order asc) { _id, question, answer }`,

  feeItems: `*[_type == "feeItem"] | order(order asc) { _id, title, description }`,

  resFeatures: `*[_type == "resFeature"] | order(order asc) { _id, title, description }`,

  galleryImages: `*[_type == "galleryImage"] | order(order asc) { _id, "url": image.asset->url, alt }`,

  partners: `*[_type == "partner"] | order(order asc) { _id, name, "logo": logo.asset->url, "href": url }`,

  staffMembers: `*[_type == "staffMember"] | order(order asc) { _id, name, role, department, "image": image.asset->url }`,
};

// Cached per-request fetch — safe to call from multiple components, only hits Sanity once
export const getSiteSettings = cache(async () => {
  return sanityClient.fetch(queries.siteSettings).catch(() => null);
});
