// Seeds all new editable fields: new siteSettings fields, course awards,
// galleryImage docs, partner docs, staffMember docs.
// IDEMPOTENT: patches existing siteSettings; createOrReplace for seeded docs.
// NEVER DELETES EXISTING DATA — only adds/sets new fields.
//
// Run: node scripts/seed-everything-editable.mjs
import { createClient } from "@sanity/client";

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  "skgcXGdbKNTFYPSYzsCpExKy2EmANMjk5FE3UJ4KhBEYeYPLuuQe4FD48yoOTm6Mj1sAP5RfGLsmfUCJI";

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

// ─── Site Settings — PATCH only new fields (never clobber existing) ──────────
const newSettingsFields = {
  // Nav items
  navItems: [
    { _key: "n1", label: "Home", href: "/" },
    { _key: "n2", label: "Courses", href: "/courses" },
    { _key: "n3", label: "Residential Life", href: "/residential-life" },
    { _key: "n4", label: "Faculty", href: "/faculty" },
    { _key: "n5", label: "Fees", href: "/fees" },
    { _key: "n6", label: "FAQs", href: "/faqs" },
  ],

  // Hero slide 2
  heroSlide2Enabled: true,
  heroSlide2Eyebrow: "Green Room Music Summer Camp",
  heroSlide2Heading: "Grade 5\nMusic Theory\nCrash Course",
  heroSlide2Tagline: "100% Pass Rate",
  heroSlide2InfoTitle: "ABRSM Grade 5 Crash Course",
  heroSlide2InfoBody: "Covers 0 – Grade 5, also appropriate for students taking Grades 1, 2 and 3.",
  heroSlide2Cta1Label: "Learn More",
  heroSlide2Cta1Href: "/courses/music-theory",
  heroSlide2Cta2Label: "Apply Now",
  heroSlide2Cta2Href: "/apply",

  // Hero slide 3
  heroSlide3Enabled: true,
  heroSlide3Eyebrow: "More Than a Summer Camp",
  heroSlide3Heading: "Make your week count.",
  heroSlide3Body: "Your time at GRMSC can support progress towards recognised awards and qualifications in the UK and US.",
  heroSlide3Disclaimer: "Participation at GRMSC does not automatically guarantee award completion. Eligibility should be confirmed with the relevant award provider.",
  heroSlide3Cta1Label: "Explore Awards & Qualifications →",
  heroSlide3Cta1Href: "/courses",
  heroSlide3Cta2Label: "Learn More",
  heroSlide3Cta2Href: "/apply",
  heroSlide3Awards: [
    { _key: "a1", name: "Duke of Edinburgh's Award", sub: "Gold Residential + Skills", tag: "UK Students" },
    { _key: "a2", name: "Arts Award", sub: "Creative portfolio evidence", tag: "UK Students" },
    { _key: "a3", name: "The Congressional Award", sub: "Personal Development", tag: "US Students" },
  ],

  // Residential page stats + week
  resPageApplyLabel: "Apply Now",
  resStats: [
    { _key: "rs1", val: "5 Days", label: "Full residential programme" },
    { _key: "rs2", val: "3 Meals", label: "Daily, all diets catered" },
    { _key: "rs3", val: "24/7", label: "Pastoral support on site" },
    { _key: "rs4", val: "DBS Checked", label: "All staff, all sessions" },
  ],
  resWeekItems: [
    { _key: "rw1", day: "Sat 19 Jul", highlight: "Arrivals & welcome concert" },
    { _key: "rw2", day: "Sun & Mon", highlight: "Intensive course sessions & evening events" },
    { _key: "rw3", day: "Tuesday", highlight: "Open masterclass & guest artist" },
    { _key: "rw4", day: "Wed 23 Jul", highlight: "Final showcase & farewell" },
  ],

  // Faculty page extras
  facultyPageStaffHeading: "The Full Team",
  facultyPageCtaLabel: "Apply Now",

  // Fees page extras
  feesPagePriceLabel: "All-inclusive fee",
  feesPageApplyLabel: "Apply Now",
  feesPageApplyNote: "No payment required at this stage",
  feesPageBursaries: [
    { _key: "b1", title: "Sibling Discounts", description: "Details of sibling discounts will be confirmed when applications formally open. Register your interest to be notified." },
    { _key: "b2", title: "Bursary Places", description: "We are committed to accessibility. Bursary options will be available — details announced with the full fee schedule in early 2027." },
    { _key: "b3", title: "Early Bird", description: "Early registrations will be given priority access and may be eligible for an early-bird rate. Register now to secure your place." },
  ],

  // Apply page extras
  applyPageFormHeading: "Interest Registration Form",
  applyPageSubmitLabel: "Submit Registration",
  applyPageSubmitNote: "No payment required. We will be in touch when applications formally open for Summer 2027.",
  applyPageInfoStats: [
    { _key: "as1", val: "19–23 July 2027", label: "Dates" },
    { _key: "as2", val: "Ages 10–17", label: "Who" },
    { _key: "as3", val: "Stamford School", label: "Venue" },
    { _key: "as4", val: "3 Courses", label: "Choice" },
  ],

  // Footer legal line
  footerLegalLine: "Green Room Music Summer Camp · Stamford School · Lincolnshire",
  footerColumns: [
    {
      _key: "fc1", heading: "Courses", links: [
        { _key: "l1", href: "/courses/piano", label: "Piano" },
        { _key: "l2", href: "/courses/music-theory", label: "Music Theory" },
        { _key: "l3", href: "/courses/vocal-performance", label: "Vocal Performance" },
        { _key: "l4", href: "/courses", label: "All Courses" },
      ],
    },
    {
      _key: "fc2", heading: "Information", links: [
        { _key: "l5", href: "/faculty", label: "Faculty" },
        { _key: "l6", href: "/faqs", label: "FAQs" },
        { _key: "l7", href: "/residential-life", label: "Residential Life" },
        { _key: "l8", href: "/fees", label: "Fees" },
        { _key: "l9", href: "/apply", label: "Apply Now" },
      ],
    },
  ],
};

async function patchSettings() {
  // Ensure siteSettings doc exists
  const existing = await client.getDocument("siteSettings").catch(() => null);
  if (!existing) {
    await client.createOrReplace({ _id: "siteSettings", _type: "siteSettings", ...newSettingsFields });
    console.log("✓ Created siteSettings with new fields");
    return;
  }

  // Only set fields that are empty/missing — don't overwrite anything Will has entered
  const patch = client.patch("siteSettings");
  for (const [key, value] of Object.entries(newSettingsFields)) {
    if (existing[key] === undefined || existing[key] === null ||
        (Array.isArray(existing[key]) && existing[key].length === 0)) {
      patch.set({ [key]: value });
    }
  }
  await patch.commit();
  console.log("✓ Patched siteSettings with new fields (preserving existing values)");
}

// ─── Course Awards — patch 3 courses ────────────────────────────────────────
async function patchCourseAwards() {
  const courses = await client.fetch(`*[_type == "course"]{ _id, slug }`);
  const awardsBySlug = {
    "piano": [
      { _key: "pa1", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
      { _key: "pa2", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey." },
      { _key: "pa3", name: "The Congressional Award", desc: "For US students, eligible musical activity may contribute towards Personal Development." },
    ],
    "music-theory": [
      { _key: "ma1", name: "The Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
      { _key: "ma2", name: "Arts Award", desc: "Creative and musical experiences may contribute towards an existing Arts Award journey." },
      { _key: "ma3", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development." },
    ],
    "vocal-performance": [
      { _key: "va1", name: "Duke of Edinburgh's Award", desc: "Including eligible Gold Residential and Skills activity." },
      { _key: "va2", name: "Arts Award", desc: "Creative and performance experiences may contribute towards an existing Arts Award journey." },
      { _key: "va3", name: "The Congressional Award", desc: "For US students, eligible activity may contribute towards Personal Development." },
    ],
  };

  for (const c of courses) {
    const slug = c?.slug?.current;
    const awards = awardsBySlug[slug];
    if (!awards) continue;
    const existing = await client.fetch(`*[_id == $id][0]{ awards }`, { id: c._id });
    if (existing?.awards?.length) {
      console.log(`– Course ${slug}: awards already set, skipping`);
      continue;
    }
    await client.patch(c._id).set({ awards }).commit();
    console.log(`✓ Patched course "${slug}" with awards`);
  }
}

// ─── Gallery Images (5 placeholder docs so Will can swap them in Studio) ────
async function seedGallery() {
  const existing = await client.fetch(`count(*[_type == "galleryImage"])`);
  if (existing > 0) {
    console.log(`– Gallery already has ${existing} docs, skipping`);
    return;
  }
  const urls = [
    "/gallery/106-GreenRoomMusicTheorySummer2025.jpg",
    "/gallery/103-GreenRoomMusicTheorySummer2025.jpg",
    "/gallery/039-GreenRoomMusicTheorySummer2025.jpg",
    "/gallery/038-GreenRoomMusicTheorySummer2025.jpg",
    "/gallery/037-GreenRoomMusicTheorySummer2025.jpg",
  ];
  for (let i = 0; i < urls.length; i++) {
    await client.createOrReplace({
      _id: `galleryImage-${i + 1}`,
      _type: "galleryImage",
      order: i + 1,
      alt: `GRMSC gallery ${i + 1}`,
      // image intentionally omitted — Will can upload. Keep docs as placeholders.
    });
  }
  console.log(`✓ Seeded ${urls.length} galleryImage docs (upload images in Studio)`);
}

// ─── Partners ───────────────────────────────────────────────────────────────
async function seedPartners() {
  const existing = await client.fetch(`count(*[_type == "partner"])`);
  if (existing > 0) {
    console.log(`– Partners already has ${existing} docs, skipping`);
    return;
  }
  const partners = [
    { name: "Steinway & Sons", url: "https://www.steinwaylosangeles.com/" },
    { name: "ABRSM", url: "https://www.abrsm.org/en-gb" },
    { name: "Stanford University", url: "https://www.stanford.edu/" },
    { name: "Harvard Graduate School of Education", url: "https://www.gse.harvard.edu/" },
    { name: "EPTA UK", url: "https://epta-uk.org" },
    { name: "Pasadena Piano Academy", url: "https://www.pasadenapianoacademy.com/" },
  ];
  for (let i = 0; i < partners.length; i++) {
    await client.createOrReplace({
      _id: `partner-${i + 1}`,
      _type: "partner",
      order: i + 1,
      name: partners[i].name,
      url: partners[i].url,
    });
  }
  console.log(`✓ Seeded ${partners.length} partner docs`);
}

// ─── Staff Members ──────────────────────────────────────────────────────────
async function seedStaff() {
  const existing = await client.fetch(`count(*[_type == "staffMember"])`);
  if (existing > 0) {
    console.log(`– Staff already has ${existing} docs, skipping`);
    return;
  }
  const staff = [
    { name: "Conor Mathers", role: "Director of Vocal Performance", department: "Vocal Performance · Theory" },
    { name: "Serena Shah", role: "Teaching Artist", department: "Piano · Theory" },
    { name: "Rhiannon Bennett", role: "Deputy DSL · Head of Boarding & Pastoral", department: "Vocal Performance" },
    { name: "Sophie Wells", role: "Deputy DSL · Resident Nurse", department: "Boarding & Wellbeing" },
    { name: "Leo Little", role: "Piano Teaching Artist", department: "Piano" },
    { name: "Rebekah Tan", role: "Piano Teaching Artist", department: "Piano" },
    { name: "Elisabeth Thompson", role: "Boarding Supervisor", department: "Boarding & Pastoral" },
  ];
  for (let i = 0; i < staff.length; i++) {
    await client.createOrReplace({
      _id: `staff-${i + 1}`,
      _type: "staffMember",
      order: i + 1,
      ...staff[i],
    });
  }
  console.log(`✓ Seeded ${staff.length} staffMember docs`);
}

(async () => {
  try {
    await patchSettings();
    await patchCourseAwards();
    await seedGallery();
    await seedPartners();
    await seedStaff();
    console.log("\n✓ All seed operations complete.");
  } catch (err) {
    console.error("Error:", err.message || err);
    process.exit(1);
  }
})();
