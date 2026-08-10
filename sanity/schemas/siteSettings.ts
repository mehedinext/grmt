import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── NAVBAR ──────────────────────────────────────────────────────────
    defineField({ name: "navLogoSubtitle", title: "Navbar — Logo Subtitle", type: "string", description: 'Small text under "GRMSC", e.g. "Green Room Music Summer Camp"' }),
    defineField({ name: "navCtaLabel", title: "Navbar — CTA Button Text", type: "string", description: 'e.g. "Register Interest"' }),
    defineField({ name: "navCtaHref", title: "Navbar — CTA Button Link", type: "string", description: 'e.g. "/apply"' }),

    // ── HERO ────────────────────────────────────────────────────────────
    defineField({ name: "heroBadge", title: "Hero — Badge Text", type: "string", description: 'e.g. "Residential · Summer 2027"' }),
    defineField({ name: "heroHeadingLine1", title: "Hero — Heading Line 1", type: "string", description: 'e.g. "Green Room Music"' }),
    defineField({ name: "heroHeadingLine2", title: "Hero — Heading Line 2", type: "string", description: 'e.g. "Summer Camp"' }),
    defineField({ name: "heroSubtext", title: "Hero — Subtext", type: "string" }),
    defineField({ name: "heroLocation", title: "Hero — Location", type: "string", description: 'e.g. "Stamford School"' }),
    defineField({ name: "heroDate", title: "Hero — Date", type: "string", description: 'e.g. "19–23 July 2027"' }),
    defineField({ name: "heroImage", title: "Hero — Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroCta1Label", title: "Hero — Button 1 Text", type: "string" }),
    defineField({ name: "heroCta1Href", title: "Hero — Button 1 Link", type: "string" }),
    defineField({ name: "heroCta2Label", title: "Hero — Button 2 Text", type: "string" }),
    defineField({ name: "heroCta2Href", title: "Hero — Button 2 Link", type: "string" }),

    // ── STATS STRIP ─────────────────────────────────────────────────────
    defineField({
      name: "stats",
      title: "Stats Strip (5 items)",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "val", type: "string", title: "Value" },
        { name: "label", type: "string", title: "Label" },
      ]}],
    }),

    // ── COURSES SECTION ─────────────────────────────────────────────────
    defineField({ name: "coursesSectionHeading", title: "Courses Section — Heading", type: "string" }),

    // ── WHY GRMSC ───────────────────────────────────────────────────────
    defineField({ name: "whyHeading", title: "Why GRMSC — Heading", type: "string" }),
    defineField({
      name: "whyItems",
      title: "Why GRMSC — Items (4)",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "desc", type: "text", title: "Description", rows: 2 },
      ]}],
    }),

    // ── RESIDENTIAL PREVIEW ─────────────────────────────────────────────
    defineField({ name: "resHeading", title: "Residential Preview — Heading", type: "string" }),
    defineField({ name: "resText", title: "Residential Preview — Paragraph", type: "text", rows: 3 }),
    defineField({ name: "resTags", title: "Residential Preview — Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "resImage", title: "Residential Preview — Image", type: "image", options: { hotspot: true } }),

    // ── TUTORS SECTION ──────────────────────────────────────────────────
    defineField({ name: "tutorsHeading", title: "Tutors Section — Heading", type: "string" }),

    // ── DATES & FAQ ─────────────────────────────────────────────────────
    defineField({ name: "datesHeading", title: "Dates Section — Heading", type: "string" }),
    defineField({
      name: "dateItems",
      title: "Dates Section — Items",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "val", type: "string", title: "Value" },
        { name: "sub", type: "string", title: "Sub-text" },
      ]}],
    }),
    defineField({ name: "faqsHeading", title: "FAQ Section — Heading", type: "string" }),

    // ── CTA BANNER ──────────────────────────────────────────────────────
    defineField({ name: "ctaEyebrow", title: "CTA Banner — Eyebrow Text", type: "string" }),
    defineField({ name: "ctaHeadingLine1", title: "CTA Banner — Heading Line 1", type: "string" }),
    defineField({ name: "ctaHeadingLine2", title: "CTA Banner — Heading Line 2", type: "string" }),
    defineField({ name: "ctaSubtext", title: "CTA Banner — Subtext", type: "text", rows: 2 }),
    defineField({ name: "ctaImage", title: "CTA Banner — Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "ctaCta1Label", title: "CTA Banner — Button 1 Text", type: "string" }),
    defineField({ name: "ctaCta1Href", title: "CTA Banner — Button 1 Link", type: "string" }),
    defineField({ name: "ctaCta2Label", title: "CTA Banner — Button 2 Text", type: "string" }),
    defineField({ name: "ctaCta2Href", title: "CTA Banner — Button 2 Link", type: "string" }),

    // ── PARTNERS ────────────────────────────────────────────────────────
    defineField({ name: "partnersLabel", title: "Partners Section — Label", type: "string" }),

    // ── FOOTER ──────────────────────────────────────────────────────────
    defineField({ name: "footerTagline", title: "Footer — Tagline", type: "string", description: 'e.g. "Green Room Music Summer Camp 2027"' }),
    defineField({ name: "footerDescription", title: "Footer — Description", type: "text", rows: 3, description: "Dates, courses, ages shown under tagline" }),
    defineField({ name: "footerInstagram", title: "Footer — Instagram URL", type: "url" }),
    defineField({ name: "footerFacebook", title: "Footer — Facebook URL", type: "url" }),
    defineField({ name: "footerContactEmail", title: "Footer — Contact Email", type: "string" }),
    defineField({ name: "footerCopyright", title: "Footer — Copyright Text", type: "string" }),

    // ── COURSES PAGE ────────────────────────────────────────────────────────────
    defineField({ name: "coursesPageEyebrow", title: "Courses Page — Eyebrow", type: "string" }),
    defineField({ name: "coursesPageHeading", title: "Courses Page — Heading", type: "string" }),
    defineField({ name: "coursesPageSubtext", title: "Courses Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "coursesPageCtaHeading", title: "Courses Page — CTA Heading", type: "string" }),
    defineField({ name: "coursesPageCtaSubtext", title: "Courses Page — CTA Subtext", type: "string" }),

    // ── FACULTY PAGE ────────────────────────────────────────────────────────────
    defineField({ name: "facultyPageEyebrow", title: "Faculty Page — Eyebrow", type: "string" }),
    defineField({ name: "facultyPageHeading", title: "Faculty Page — Heading", type: "string" }),
    defineField({ name: "facultyPageSubtext", title: "Faculty Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "facultyPageQuote", title: "Faculty Page — Pull Quote", type: "text", rows: 3 }),
    defineField({ name: "facultyPageQuoteAttrib", title: "Faculty Page — Quote Attribution", type: "string" }),
    defineField({ name: "facultyPageCtaHeading", title: "Faculty Page — CTA Heading", type: "string" }),
    defineField({ name: "facultyPageCtaSubtext", title: "Faculty Page — CTA Subtext", type: "string" }),

    // ── RESIDENTIAL LIFE PAGE ───────────────────────────────────────────────────
    defineField({ name: "resPageEyebrow", title: "Residential Page — Eyebrow", type: "string" }),
    defineField({ name: "resPageHeading", title: "Residential Page — Heading", type: "string" }),
    defineField({ name: "resPageSubtext", title: "Residential Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "resPageGalleryHeading", title: "Residential Page — Gallery Heading", type: "string" }),
    defineField({ name: "resPageFeaturesHeading", title: "Residential Page — Features Heading", type: "string" }),
    defineField({ name: "resPageWeekHeading", title: "Residential Page — Week Schedule Heading", type: "string" }),
    defineField({ name: "resPageCtaHeading", title: "Residential Page — CTA Heading", type: "string" }),
    defineField({ name: "resPageCtaSubtext", title: "Residential Page — CTA Subtext", type: "string" }),

    // ── FAQS PAGE ───────────────────────────────────────────────────────────────
    defineField({ name: "faqsPageEyebrow", title: "FAQs Page — Eyebrow", type: "string" }),
    defineField({ name: "faqsPageHeading", title: "FAQs Page — Heading", type: "string" }),
    defineField({ name: "faqsPageSubtext", title: "FAQs Page — Subtext", type: "text", rows: 2 }),

    // ── FEES PAGE ───────────────────────────────────────────────────────────────
    defineField({ name: "feesPageEyebrow", title: "Fees Page — Eyebrow", type: "string" }),
    defineField({ name: "feesPageHeading", title: "Fees Page — Heading", type: "string" }),
    defineField({ name: "feesPageSubtext", title: "Fees Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "feesPagePriceValue", title: "Fees Page — Price Value", type: "string", description: 'e.g. "TBC" or "£895"' }),
    defineField({ name: "feesPagePriceNote", title: "Fees Page — Price Note", type: "string", description: 'e.g. "Full fee announced early 2027"' }),
    defineField({ name: "feesPagePriceDesc", title: "Fees Page — Price Description", type: "text", rows: 3 }),

    // ── APPLY PAGE ──────────────────────────────────────────────────────────────
    defineField({ name: "applyPageEyebrow", title: "Apply Page — Eyebrow", type: "string" }),
    defineField({ name: "applyPageHeading", title: "Apply Page — Heading", type: "string" }),
    defineField({ name: "applyPageSubtext", title: "Apply Page — Subtext", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
