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
    defineField({
      name: "navItems",
      title: "Navbar — Menu Items",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Link" },
      ]}],
    }),

    // ── HERO SLIDE 1 (Main) ─────────────────────────────────────────────
    defineField({ name: "heroHeadingLine1", title: "Hero Slide 1 — Heading Line 1", type: "string" }),
    defineField({ name: "heroHeadingLine2", title: "Hero Slide 1 — Heading Line 2", type: "string" }),
    defineField({ name: "heroLocation", title: "Hero Slide 1 — Location", type: "string" }),
    defineField({ name: "heroDate", title: "Hero Slide 1 — Date", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Slide 1 — Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroBadgeImage", title: "Hero Slide 1 — Steinway Badge Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroCta1Label", title: "Hero Slide 1 — Button 1 Text", type: "string" }),
    defineField({ name: "heroCta1Href", title: "Hero Slide 1 — Button 1 Link", type: "string" }),
    defineField({ name: "heroCta2Label", title: "Hero Slide 1 — Button 2 Text", type: "string" }),
    defineField({ name: "heroCta2Href", title: "Hero Slide 1 — Button 2 Link", type: "string" }),

    // ── HERO SLIDE 2 (Theory) ───────────────────────────────────────────
    defineField({ name: "heroSlide2Eyebrow", title: "Hero Slide 2 — Eyebrow", type: "string" }),
    defineField({ name: "heroSlide2Heading", title: "Hero Slide 2 — Heading (use line breaks)", type: "text", rows: 3 }),
    defineField({ name: "heroSlide2Tagline", title: "Hero Slide 2 — Tagline", type: "string", description: 'e.g. "100% Pass Rate"' }),
    defineField({ name: "heroSlide2InfoTitle", title: "Hero Slide 2 — Info Card Title", type: "string" }),
    defineField({ name: "heroSlide2InfoBody", title: "Hero Slide 2 — Info Card Body", type: "text", rows: 2 }),
    defineField({ name: "heroSlide2Image", title: "Hero Slide 2 — Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroSlide2BadgeImage", title: "Hero Slide 2 — ABRSM Badge Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroSlide2Cta1Label", title: "Hero Slide 2 — Button 1 Text", type: "string" }),
    defineField({ name: "heroSlide2Cta1Href", title: "Hero Slide 2 — Button 1 Link", type: "string" }),
    defineField({ name: "heroSlide2Cta2Label", title: "Hero Slide 2 — Button 2 Text", type: "string" }),
    defineField({ name: "heroSlide2Cta2Href", title: "Hero Slide 2 — Button 2 Link", type: "string" }),

    // ── HERO SLIDE 3 (Awards) ───────────────────────────────────────────
    defineField({ name: "heroSlide3Eyebrow", title: "Hero Slide 3 — Eyebrow", type: "string" }),
    defineField({ name: "heroSlide3Heading", title: "Hero Slide 3 — Heading", type: "string" }),
    defineField({ name: "heroSlide3Body", title: "Hero Slide 3 — Body Paragraph", type: "text", rows: 3 }),
    defineField({ name: "heroSlide3Image", title: "Hero Slide 3 — Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroSlide3Disclaimer", title: "Hero Slide 3 — Disclaimer", type: "text", rows: 2 }),
    defineField({ name: "heroSlide3Cta1Label", title: "Hero Slide 3 — Button 1 Text", type: "string" }),
    defineField({ name: "heroSlide3Cta1Href", title: "Hero Slide 3 — Button 1 Link", type: "string" }),
    defineField({ name: "heroSlide3Cta2Label", title: "Hero Slide 3 — Button 2 Text", type: "string" }),
    defineField({ name: "heroSlide3Cta2Href", title: "Hero Slide 3 — Button 2 Link", type: "string" }),
    defineField({
      name: "heroSlide3Awards",
      title: "Hero Slide 3 — Award Cards",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "logo", type: "image", title: "Logo", options: { hotspot: true } },
        { name: "name", type: "string", title: "Name" },
        { name: "sub", type: "string", title: "Sub-text" },
        { name: "tag", type: "string", title: "Tag (e.g. UK Students)" },
      ]}],
    }),

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
    defineField({ name: "footerTagline", title: "Footer — Tagline", type: "string" }),
    defineField({ name: "footerDescription", title: "Footer — Description", type: "text", rows: 3 }),
    defineField({ name: "footerInstagram", title: "Footer — Instagram URL", type: "url" }),
    defineField({ name: "footerFacebook", title: "Footer — Facebook URL", type: "url" }),
    defineField({ name: "footerContactEmail", title: "Footer — Contact Email", type: "string" }),
    defineField({ name: "footerCopyright", title: "Footer — Copyright Text", type: "string" }),
    defineField({ name: "footerLegalLine", title: "Footer — Legal / Address Line", type: "string" }),
    defineField({
      name: "footerColumns",
      title: "Footer — Link Columns",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "heading", type: "string", title: "Column Heading" },
        { name: "links", type: "array", title: "Links", of: [{ type: "object", fields: [
          { name: "label", type: "string", title: "Label" },
          { name: "href", type: "string", title: "Link" },
        ]}] },
      ]}],
    }),

    // ── COURSES PAGE ────────────────────────────────────────────────────
    defineField({ name: "coursesPageEyebrow", title: "Courses Page — Eyebrow", type: "string" }),
    defineField({ name: "coursesPageHeading", title: "Courses Page — Heading", type: "string" }),
    defineField({ name: "coursesPageSubtext", title: "Courses Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "coursesPageCtaHeading", title: "Courses Page — CTA Heading", type: "string" }),
    defineField({ name: "coursesPageCtaSubtext", title: "Courses Page — CTA Subtext", type: "string" }),

    // ── FACULTY PAGE ────────────────────────────────────────────────────
    defineField({ name: "facultyPageEyebrow", title: "Faculty Page — Eyebrow", type: "string" }),
    defineField({ name: "facultyPageHeading", title: "Faculty Page — Heading", type: "string" }),
    defineField({ name: "facultyPageSubtext", title: "Faculty Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "facultyPageStaffHeading", title: "Faculty Page — Staff Grid Heading", type: "string" }),
    defineField({ name: "facultyPageQuote", title: "Faculty Page — Pull Quote", type: "text", rows: 3 }),
    defineField({ name: "facultyPageQuoteAttrib", title: "Faculty Page — Quote Attribution", type: "string" }),
    defineField({ name: "facultyPageCtaHeading", title: "Faculty Page — CTA Heading", type: "string" }),
    defineField({ name: "facultyPageCtaSubtext", title: "Faculty Page — CTA Subtext", type: "string" }),
    defineField({ name: "facultyPageCtaLabel", title: "Faculty Page — CTA Button Label", type: "string" }),

    // ── RESIDENTIAL LIFE PAGE ───────────────────────────────────────────
    defineField({ name: "resPageEyebrow", title: "Residential Page — Eyebrow", type: "string" }),
    defineField({ name: "resPageHeading", title: "Residential Page — Heading", type: "string" }),
    defineField({ name: "resPageSubtext", title: "Residential Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "resPageGalleryHeading", title: "Residential Page — Gallery Heading", type: "string" }),
    defineField({ name: "resPageFeaturesHeading", title: "Residential Page — Features Heading", type: "string" }),
    defineField({ name: "resPageWeekHeading", title: "Residential Page — Week Schedule Heading", type: "string" }),
    defineField({ name: "resPageCtaHeading", title: "Residential Page — CTA Heading", type: "string" }),
    defineField({ name: "resPageCtaSubtext", title: "Residential Page — CTA Subtext", type: "string" }),
    defineField({ name: "resPageApplyLabel", title: "Residential Page — Apply Button Label", type: "string" }),
    defineField({
      name: "resStats",
      title: "Residential Page — Stats Bar",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "val", type: "string", title: "Value" },
        { name: "label", type: "string", title: "Label" },
      ]}],
    }),
    defineField({
      name: "resWeekItems",
      title: "Residential Page — Week Items",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "day", type: "string", title: "Day" },
        { name: "highlight", type: "string", title: "Highlight" },
      ]}],
    }),

    // ── FAQS PAGE ───────────────────────────────────────────────────────
    defineField({ name: "faqsPageEyebrow", title: "FAQs Page — Eyebrow", type: "string" }),
    defineField({ name: "faqsPageHeading", title: "FAQs Page — Heading", type: "string" }),
    defineField({ name: "faqsPageSubtext", title: "FAQs Page — Subtext", type: "text", rows: 2 }),

    // ── FEES PAGE ───────────────────────────────────────────────────────
    defineField({ name: "feesPageEyebrow", title: "Fees Page — Eyebrow", type: "string" }),
    defineField({ name: "feesPageHeading", title: "Fees Page — Heading", type: "string" }),
    defineField({ name: "feesPageSubtext", title: "Fees Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "feesPagePriceLabel", title: "Fees Page — Price Label (eyebrow)", type: "string" }),
    defineField({ name: "feesPagePriceValue", title: "Fees Page — Price Value", type: "string" }),
    defineField({ name: "feesPagePriceNote", title: "Fees Page — Price Note", type: "string" }),
    defineField({ name: "feesPagePriceDesc", title: "Fees Page — Price Description", type: "text", rows: 3 }),
    defineField({ name: "feesPageApplyLabel", title: "Fees Page — Apply Button Label", type: "string" }),
    defineField({ name: "feesPageApplyNote", title: "Fees Page — Apply Button Note", type: "string" }),
    defineField({
      name: "feesPageBursaries",
      title: "Fees Page — Info Blocks (Bursaries, Discounts etc.)",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description", rows: 3 },
      ]}],
    }),

    // ── APPLY PAGE ──────────────────────────────────────────────────────
    defineField({ name: "applyPageEyebrow", title: "Apply Page — Eyebrow", type: "string" }),
    defineField({ name: "applyPageHeading", title: "Apply Page — Heading", type: "string" }),
    defineField({ name: "applyPageSubtext", title: "Apply Page — Subtext", type: "text", rows: 2 }),
    defineField({ name: "applyPageFormHeading", title: "Apply Page — Form Heading", type: "string" }),
    defineField({ name: "applyPageSubmitLabel", title: "Apply Page — Submit Button Label", type: "string" }),
    defineField({ name: "applyPageSubmitNote", title: "Apply Page — Submit Note", type: "text", rows: 2 }),
    defineField({
      name: "applyPageInfoStats",
      title: "Apply Page — Info Stats Bar",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "val", type: "string", title: "Value" },
        { name: "label", type: "string", title: "Label" },
      ]}],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
