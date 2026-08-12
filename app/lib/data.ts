// Single source of truth for all site content.
// Sanity migration: replace each export with a groq fetch.
// Images: src strings → urlFor(image).url()
// Slugs: slug strings → slug.current from Sanity documents

export type Tutor = {
  _id: string;
  name: string;
  role: string;
  bio: string;        // short bio — homepage / cards
  bioFull: string[];  // full paragraphs — faculty detail page
  teaches: string;    // e.g. "Piano · Chamber Music"
  image: string;
};

export type Course = {
  _id: string;
  slug: { current: string };
  num: string;
  title: string;
  grade: string;
  tagline: string;
  excerpt: string;
  image: string;
  imagePosition: string;
  heroColor: string;
  heroImage: string;
  heroStats: { label: string; value: string }[];
  aboutHeading: string;
  about: string[];
  detailType: "schedule" | "topics";
  schedule?: { time: string; activity: string }[];
  topics?: string[];
  includes: string[];
  requirements: string;
  highlights: string[];
};

export type Faq = {
  _id: string;
  question: string;
  answer: string;
};

export type FeeItem = {
  _id: string;
  title: string;
  description: string;
};

export type ResFeature = {
  _id: string;
  title: string;
  description: string;
};

export type StaffMember = {
  _id: string;
  name: string;
  role: string;
  department: string;
};

// ─── TUTORS ───────────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "tutor"] | order(order asc)`
export const tutors: Tutor[] = [
  {
    _id: "tutor-will",
    name: "Will Fowler",
    role: "Artistic Director",
    bio: "Pianist, educator and coach with a passion for nurturing musical excellence and curiosity. Will leads our piano and chamber music programme.",
    bioFull: [
      "Will Fowler is a pianist, educator and coach with a deep passion for nurturing musical excellence in young performers. He brings warmth, rigour and genuine enthusiasm to every session.",
      "As Co-Artistic Director of GRMSC, Will leads the Piano course and oversees the artistic direction of the wider programme — creating an environment where students are challenged and inspired in equal measure.",
    ],
    teaches: "Piano · Chamber Music · Performance",
    image: "https://greenroomtheory.com/wp-content/uploads/2025/01/will-fowler-photo.png",
  },
  {
    _id: "tutor-vivian",
    name: "Vivian Shiao",
    role: "Co-Artistic Director",
    bio: "Pianist and teacher dedicated to inspiring young musicians through imaginative teaching and collaborative music-making. Vivian leads our theory and ensemble programmes.",
    bioFull: [
      "Vivian Shiao is a pianist and teacher dedicated to inspiring young musicians through imaginative, thoughtful teaching and collaborative music-making.",
      "As Co-Artistic Director, Vivian leads the Music Theory and ensemble programmes at GRMSC — bringing intellectual depth and creative energy to everything she does.",
    ],
    teaches: "Music Theory · Ensemble · Ear Training",
    image: "https://greenroomtheory.com/wp-content/uploads/2023/09/img_068.webp",
  },
];

// ─── STAFF ────────────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "staffMember"] | order(order asc)`
export const staffMembers: StaffMember[] = [
  { _id: "staff-conor", name: "Conor Mathers", role: "Director of Vocal Performance", department: "Vocal Performance · Theory" },
  { _id: "staff-serena", name: "Serena Shah", role: "Teaching Artist", department: "Piano · Theory" },
  { _id: "staff-rhiannon", name: "Rhiannon Bennett", role: "Deputy DSL · Head of Boarding & Pastoral", department: "Vocal Performance" },
  { _id: "staff-sophie", name: "Sophie Wells", role: "Deputy DSL · Resident Nurse", department: "Boarding & Wellbeing" },
  { _id: "staff-leo", name: "Leo Little", role: "Piano Teaching Artist", department: "Piano" },
  { _id: "staff-rebekah", name: "Rebekah Tan", role: "Piano Teaching Artist", department: "Piano" },
  { _id: "staff-elisabeth", name: "Elisabeth Thompson", role: "Boarding Supervisor", department: "Boarding & Pastoral" },
];

// ─── COURSES ──────────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "course"] | order(order asc)`
export const courses: Course[] = [
  {
    _id: "course-piano",
    slug: { current: "piano" },
    num: "01",
    title: "Piano",
    grade: "Grade 4–8",
    tagline: "Master the keys in one transformative week.",
    excerpt: "An intensive week of daily piano lessons, masterclasses, ensemble work and an evening recital. Expert tuition from conservatoire-trained pianists.",
    image: "https://greenroomtheory.com/wp-content/uploads/2025/09/014-GreenRoomMusicTheorySummer2025-scaled.jpg",
    imagePosition: "center 30%",
    heroColor: "#082F27",
    heroImage: "https://greenroomtheory.com/wp-content/uploads/2025/09/014-GreenRoomMusicTheorySummer2025-scaled.jpg",
    heroStats: [
      { label: "Grade", value: "4–8" },
      { label: "Duration", value: "5 Days" },
      { label: "Ages", value: "10–17" },
      { label: "Year", value: "2027" },
    ],
    aboutHeading: "About the Piano Course",
    about: [
      "The Green Room Piano course places students in an immersive, conservatoire-style environment for one transformative week at Stamford School. Each day combines individual lessons with group masterclasses, allowing students to learn from expert tutors and from hearing their peers play.",
      "The week culminates in an evening recital — a highlight for students and families, and a genuine performance experience in a supportive setting.",
    ],
    detailType: "schedule",
    schedule: [
      { time: "09:00", activity: "Morning warm-up & technique class" },
      { time: "10:00", activity: "Individual lesson with your tutor" },
      { time: "11:30", activity: "Group masterclass" },
      { time: "14:00", activity: "Repertoire workshop" },
      { time: "16:00", activity: "Practice time & sight-reading" },
      { time: "19:30", activity: "Evening concert or social programme" },
    ],
    includes: [
      "Daily individual piano lesson",
      "Group masterclasses",
      "Sight-reading workshops",
      "Technique & scales sessions",
      "Evening recital performance",
      "Full board accommodation",
      "Pastoral support throughout",
    ],
    requirements:
      "Applicants should be working at approximately Grade 4 ABRSM standard or above. A short repertoire list will be requested at application.",
    highlights: [
      "Daily one-to-one lessons",
      "Group masterclasses",
      "Evening recital performance",
      "Sight-reading & technique workshops",
    ],
  },
  {
    _id: "course-music-theory",
    slug: { current: "music-theory" },
    num: "02",
    title: "Music Theory",
    grade: "Grade 5–8 & beyond",
    tagline: "Unlock the language of music.",
    excerpt:
      "Harmony, counterpoint, ear training and composition. Includes a dedicated ABRSM Grade 5 crash course stream for students seeking this qualification.",
    image: "https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg",
    imagePosition: "center 20%",
    heroColor: "#0A2F47",
    heroImage: "https://greenroomtheory.com/wp-content/uploads/2025/09/012-GreenRoomMusicTheorySummer2025-scaled.jpg",
    heroStats: [
      { label: "Level", value: "Gr. 5–8+" },
      { label: "Duration", value: "5 Days" },
      { label: "Ages", value: "10–17" },
      { label: "Year", value: "2027" },
    ],
    aboutHeading: "About the Music Theory Course",
    about: [
      "Music theory is the foundation of musicianship — and this course goes far beyond exam preparation. Students explore the structures underpinning all music, from Bach chorales to contemporary composition, building skills that enhance every aspect of their musical life.",
      "A dedicated ABRSM Grade 5 crash course stream runs alongside the broader programme, giving students a fast-tracked route to this essential qualification.",
    ],
    detailType: "topics",
    topics: [
      "Four-part harmony",
      "Counterpoint & species",
      "Aural training & dictation",
      "Score reading",
      "Composition project",
      "Musical analysis",
      "ABRSM Grade 5–8 preparation",
      "Figured bass",
    ],
    includes: [
      "Daily theory seminars",
      "ABRSM Grade 5 crash course",
      "Ear training workshops",
      "Composition project",
      "Score study sessions",
      "Full board accommodation",
      "Pastoral support throughout",
    ],
    requirements:
      "Students should have a working knowledge of music notation. Approximately Grade 5 theory level or above recommended.",
    highlights: [
      "Harmony & counterpoint",
      "Aural training & dictation",
      "ABRSM Grade 5 crash course",
      "Composition project",
    ],
  },
  {
    _id: "course-singing-performance",
    slug: { current: "singing-performance" },
    num: "03",
    title: "Singing Performance",
    grade: "All levels welcome",
    tagline: "Find your voice and perform with confidence.",
    excerpt:
      "Vocal technique, performance coaching, sight-singing and stagecraft combined. Students work toward a showcase performance on the final evening.",
    image: "https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg",
    imagePosition: "center 15%",
    heroColor: "#082F27",
    heroImage: "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
    heroStats: [
      { label: "Level", value: "All" },
      { label: "Duration", value: "5 Days" },
      { label: "Ages", value: "10–17" },
      { label: "Year", value: "2027" },
    ],
    aboutHeading: "About the Singing Performance Course",
    about: [
      "Our Singing Performance course is a full vocal and performing arts experience. Students work across vocal technique, performance coaching, sight-singing and stagecraft — discovering and developing their unique voice in a supportive, creative environment.",
      "The week builds toward a final showcase performance, giving students a real stage experience before an audience of families and fellow students. No prior performance experience required — only enthusiasm and a love of singing.",
    ],
    detailType: "schedule",
    schedule: [
      { time: "09:00", activity: "Morning vocal warm-up" },
      { time: "09:30", activity: "Individual vocal coaching" },
      { time: "11:00", activity: "Sight-singing & aural training" },
      { time: "14:00", activity: "Song performance workshop" },
      { time: "15:30", activity: "Ensemble & harmony singing" },
      { time: "19:30", activity: "Showcase rehearsal or evening social" },
    ],
    includes: [
      "Individual vocal coaching sessions",
      "Sight-singing & aural training",
      "Performance technique workshops",
      "Stagecraft & stage presence",
      "Final showcase performance",
      "Full board accommodation",
      "Pastoral support throughout",
    ],
    requirements:
      "Open to all levels. No prior performance experience required — just enthusiasm, commitment and a love of singing.",
    highlights: [
      "Individual vocal coaching",
      "Sight-singing & aural training",
      "Performance technique & stagecraft",
      "Final showcase performance",
    ],
  },
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "faq"] | order(order asc)`
export const faqs: Faq[] = [
  {
    _id: "faq-1",
    question: "What is included in the course fee?",
    answer: "Tuition, full board accommodation at Stamford School, all course materials, evening programme activities and the final showcase concert are all included in the fee.",
  },
  {
    _id: "faq-2",
    question: "Is accommodation provided?",
    answer: "Yes. Students stay in comfortable, supervised residential rooms at Stamford School with dedicated houseparents on site throughout the week.",
  },
  {
    _id: "faq-3",
    question: "How are students supervised?",
    answer: "All staff hold enhanced DBS checks. A dedicated pastoral team is available 24/7. Parents receive regular updates during the week and are given direct contact details for the pastoral lead.",
  },
  {
    _id: "faq-4",
    question: "How do I apply?",
    answer: "Complete the interest registration form on our Apply page. Applications for Summer 2027 will open soon — register your interest now to be first in line when places become available.",
  },
  {
    _id: "faq-5",
    question: "What level do students need to be?",
    answer: "Piano and Music Theory courses are best suited to Grade 4–8+ students. Singing Performance is open to all levels — no prior stage experience required, just enthusiasm and a love of singing.",
  },
  {
    _id: "faq-6",
    question: "What are the age requirements?",
    answer: "GRMSC is open to students aged 10–17. Students must be within this age range on the first day of the course (19 July 2027).",
  },
  {
    _id: "faq-7",
    question: "Are dietary requirements catered for?",
    answer: "Yes. All dietary requirements and allergies are accommodated. Please provide details on your application form and we will confirm arrangements in advance.",
  },
  {
    _id: "faq-8",
    question: "Can students do DofE or Arts Award?",
    answer: "Yes. GRMSC can be used as evidence towards the Duke of Edinburgh's Award and Arts Award. Contact us to discuss how we can support this.",
  },
  {
    _id: "faq-9",
    question: "When do applications open?",
    answer: "Applications for Summer 2027 formally open in early 2027. Register your interest now and you will be the first to know when places become available.",
  },
  {
    _id: "faq-10",
    question: "Is there a sibling discount?",
    answer: "Information on sibling discounts and bursary options will be confirmed when applications formally open. Register your interest to be notified.",
  },
];

// ─── FEE ITEMS ────────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "feeItem"] | order(order asc)`
export const feeItems: FeeItem[] = [
  { _id: "fee-1", title: "Tuition", description: "Daily lessons, masterclasses and workshops with specialist tutors." },
  { _id: "fee-2", title: "Accommodation", description: "Full board residential at Stamford School with houseparents on site." },
  { _id: "fee-3", title: "All Meals", description: "Breakfast, lunch and dinner included. All dietary needs catered for." },
  { _id: "fee-4", title: "Evening Programme", description: "Concerts, social events and activities every evening of the course." },
  { _id: "fee-5", title: "Course Materials", description: "All sheet music, workbooks and resources provided." },
  { _id: "fee-6", title: "Final Showcase", description: "Performance for family and friends on the last evening." },
];

// ─── RESIDENTIAL GALLERY ──────────────────────────────────────────────────────
// Sanity: groq`*[_type == "galleryImage"] | order(order asc){ url }`
export const galleryImages: string[] = [
  "https://greenroomtheory.com/wp-content/uploads/2025/09/106-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/103-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/101-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/043-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/038-GreenRoomMusicTheorySummer2025-scaled.jpg",
  "https://greenroomtheory.com/wp-content/uploads/2025/09/039-GreenRoomMusicTheorySummer2025-scaled.jpg",
];

// ─── RESIDENTIAL FEATURES ─────────────────────────────────────────────────────
// Sanity: groq`*[_type == "resFeature"] | order(order asc)`
export const resFeatures: ResFeature[] = [
  { _id: "res-1", title: "Accommodation", description: "Students stay in comfortable, supervised residential rooms at Stamford School. Single-sex accommodation with dedicated houseparents ensures a safe, homely environment." },
  { _id: "res-2", title: "Meals & Social Time", description: "Three meals a day provided, with menus designed around nutritional needs and dietary requirements. Mealtimes are a chance to connect with students from all three courses." },
  { _id: "res-3", title: "Evening Programme", description: "Each evening features something special: student concerts, collaborative jams, film screenings, or social events that make the week unforgettable beyond the rehearsal room." },
  { _id: "res-4", title: "Pastoral Care", description: "A dedicated pastoral team is on hand 24/7. All staff hold enhanced DBS checks and our safeguarding policy meets the highest standards. Parents receive daily updates." },
  { _id: "res-5", title: "Practice Facilities", description: "Students have supervised access to practice rooms throughout the day, so personal preparation time sits alongside the timetabled programme." },
  { _id: "res-6", title: "Community", description: "One of the most valued outcomes is the friendships formed. Students leave with a peer network of fellow musicians that often lasts for years." },
];

// ─── PARTNER LOGOS ────────────────────────────────────────────────────────────
// Sanity: groq`*[_type == "partner"] | order(order asc){ image }`
export const partnerLogos: string[] = [
  "/partners/steinway.png",
  "/partners/abrsm.png",
  "/partners/stanford.png",
  "/partners/harvard.png",
  "/partners/epta.png",
  "/partners/ppa.png",
];
