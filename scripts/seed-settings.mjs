import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skgcXGdbKNTFYPSYzsCpExKy2EmANMjk5FE3UJ4KhBEYeYPLuuQe4FD48yoOTm6Mj1sAP5RfGLsmfUCJI",
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",

  // Navbar
  navLogoSubtitle: "Green Room Music Summer Camp",
  navCtaLabel: "Apply Now",
  navCtaHref: "/apply",

  // Hero
  heroBadge: "Residential · Summer 2027",
  heroHeadingLine1: "Green Room Music",
  heroHeadingLine2: "Summer Camp",
  heroSubtext: "A residential summer camp for young musicians aged 10–17.",
  heroLocation: "Stamford School",
  heroDate: "19–23 July 2027",
  heroCta1Label: "Explore the Courses →",
  heroCta1Href: "/courses",
  heroCta2Label: "Apply Now",
  heroCta2Href: "/apply",

  // Stats strip
  stats: [
    { _key: "s1", val: "19–23 July 2027", label: "Camp Dates" },
    { _key: "s2", val: "3 Courses", label: "Piano · Theory · Singing" },
    { _key: "s3", val: "Ages 10–17", label: "Open to all abilities" },
    { _key: "s4", val: "Stamford School", label: "Lincolnshire, England" },
    { _key: "s5", val: "Full Residential", label: "Board & lodging included" },
  ],

  // Courses section
  coursesSectionHeading: "Three Specialist Courses",

  // Why GRMSC
  whyHeading: "Why GRMSC?",
  whyItems: [
    { _key: "w1", title: "Serious Music-Making", desc: "High-quality teaching and inspiring repertoire for committed young musicians." },
    { _key: "w2", title: "Beautiful Setting", desc: "Learn and live at the historic Stamford School in the heart of Lincolnshire." },
    { _key: "w3", title: "Confidence Through Performance", desc: "Opportunities to perform, collaborate and grow as confident artists." },
    { _key: "w4", title: "Safe Residential Experience", desc: "Pastoral care and wellbeing are at the heart of everything we do." },
  ],

  // Residential preview
  resHeading: "Residential Life",
  resText: "Live, learn and make music in a supportive community. Students enjoy comfortable accommodation, nutritious meals and a programme that balances focused rehearsals with fun, friendship and relaxation.",
  resTags: [
    "En-suite accommodation",
    "Nutritious meals",
    "Pastoral care 24/7",
    "Daily rehearsals & classes",
    "Evening activities",
    "Lifelong friendships",
  ],

  // Tutors section
  tutorsHeading: "Meet the Faculty",

  // Dates section
  datesHeading: "Dates & Key Information",
  dateItems: [
    { _key: "d1", label: "Camp Dates", val: "19–23 July 2027", sub: "Five days residential" },
    { _key: "d2", label: "Ages", val: "10–17 years", sub: "All abilities welcome" },
    { _key: "d3", label: "Location", val: "Stamford School", sub: "Lincolnshire, England" },
    { _key: "d4", label: "Accommodation", val: "Full residential", sub: "Houseparents on site" },
    { _key: "d5", label: "Final Concert", val: "23 July 2027", sub: "Showcase for family & friends" },
  ],

  // FAQ section
  faqsHeading: "Frequently Asked Questions",

  // CTA Banner
  ctaEyebrow: "Green Room Music Summer Camp 2027",
  ctaHeadingLine1: "An Unforgettable Week",
  ctaHeadingLine2: "of Music & Inspiration",
  ctaSubtext: "19–23 July 2027 at Stamford School. Three specialist tracks, world-class tutors, and a residential experience unlike any other.",
  ctaCta1Label: "Apply Now →",
  ctaCta1Href: "/apply",
  ctaCta2Label: "Explore the Courses",
  ctaCta2Href: "/courses",

  // Partners
  partnersLabel: "Partners & Affiliates",

  // Footer
  footerTagline: "Green Room Music Summer Camp 2027",
  footerDescription: "19–23 July 2027 · Stamford School\nPiano · Music Theory · Singing Performance\nAges 10–17",
  footerInstagram: "https://www.instagram.com/greenroommusictheory/",
  footerFacebook: "https://m.facebook.com/people/Green-Room-Music-Theory/100088313820996/?locale=en_GB",
  footerContactEmail: "info@greenroomtheory.com",
  footerCopyright: "© 2027 Green Room Music Theory. All rights reserved.",

  // Courses page
  coursesPageEyebrow: "Summer 2027",
  coursesPageHeading: "Three Specialist Courses",
  coursesPageSubtext: "Choose one discipline and immerse fully. Each course runs simultaneously across the residential week at Stamford School.",
  coursesPageCtaHeading: "Ready to Apply?",
  coursesPageCtaSubtext: "Applications for Summer 2027 open soon. Register your interest now to be first in line.",

  // Faculty page
  facultyPageEyebrow: "Meet the Team",
  facultyPageHeading: "Our Faculty",
  facultyPageSubtext: "GRMSC is led by two specialist educators and performers who share a commitment to inspiring the next generation of musicians.",
  facultyPageQuote: "We believe every young musician deserves to experience what it feels like to truly inhabit the music — to own it, shape it, and share it.",
  facultyPageQuoteAttrib: "Will Fowler & Vivian Shiao",
  facultyPageCtaHeading: "Study with Will & Vivian",
  facultyPageCtaSubtext: "Applications for Summer 2027 open soon · 19–23 July · Stamford School",

  // Residential page
  resPageEyebrow: "Life at Camp",
  resPageHeading: "Residential Life",
  resPageSubtext: "Far more than a series of lessons — the residential experience is where the real magic of GRMSC happens.",
  resPageGalleryHeading: "Life at Stamford School",
  resPageFeaturesHeading: "Everything Taken Care Of",
  resPageWeekHeading: "A Typical Week",
  resPageCtaHeading: "Join Us for Summer 2027",
  resPageCtaSubtext: "Applications open soon · 19–23 July · Stamford School",

  // FAQs page
  faqsPageEyebrow: "Questions & Answers",
  faqsPageHeading: "Frequently Asked Questions",
  faqsPageSubtext: "Everything you need to know about GRMSC 2027. Can't find your answer? Get in touch.",

  // Fees page
  feesPageEyebrow: "Summer 2027",
  feesPageHeading: "Fees & Costs",
  feesPageSubtext: "Full pricing for GRMSC 2027 will be announced when applications open. Register your interest to be notified first.",
  feesPagePriceValue: "TBC",
  feesPagePriceNote: "Full fee announced early 2027",
  feesPagePriceDesc: "The fee covers the complete residential experience — five days of intensive tuition, full board accommodation, all materials, evening programme and the final showcase concert. Nothing extra to pay.",

  // Apply page
  applyPageEyebrow: "Summer 2027",
  applyPageHeading: "Register Your Interest",
  applyPageSubtext: "Applications open in early 2027. Register now to be first in line — no payment required at this stage.",
};

try {
  const result = await client.createOrReplace(siteSettings);
  console.log("✓ Site Settings created/updated:", result._id);
} catch (err) {
  console.error("Error:", err.message);
}
