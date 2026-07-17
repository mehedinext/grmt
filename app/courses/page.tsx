import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  {
    title: "Piano",
    href: "/courses/piano",
    icon: "🎹",
    grade: "Grade 4–8",
    description:
      "An intensive week of daily piano lessons, masterclasses, ensemble work and evening recitals. Expert tuition from conservatoire-trained pianists in an intimate residential setting.",
    highlights: ["Daily one-to-one lessons", "Group masterclasses", "Evening recital performance", "Sight-reading & technique workshops"],
  },
  {
    title: "Music Theory",
    href: "/courses/music-theory",
    icon: "♪",
    grade: "Grade 5–8 & beyond",
    description:
      "Covering ABRSM theory up to Grade 8 and beyond — harmony, counterpoint, ear training and composition in a structured, fast-paced residential environment.",
    highlights: ["Harmony & counterpoint", "Aural training", "Composition projects", "Exam preparation"],
  },
  {
    title: "Musical Theatre",
    href: "/courses/musical-theatre",
    icon: "🎭",
    grade: "All levels welcome",
    description:
      "Singing, acting, movement and stagecraft combined. Students work toward a showcase performance on the final evening, guided by professional theatre practitioners.",
    highlights: ["Vocal technique & performance", "Acting & scene study", "Movement & choreography", "Final showcase performance"],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <div className="bg-[#1B1B3A] py-24 text-center">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Summer 2027</p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Courses
          </h1>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed px-6">
            Choose from three specialist tracks, each running simultaneously during the camp week. Students select one course and immerse fully in their discipline.
          </p>
        </div>

        {/* Course cards */}
        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            {courses.map((c, i) => (
              <div
                key={c.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 overflow-hidden ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className="bg-[#1B1B3A] p-12 flex flex-col justify-center lg:[direction:ltr]"
                >
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">{c.grade}</p>
                  <h2
                    className="text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {c.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{c.description}</p>
                  <Link href={c.href} className="btn-gold self-start">
                    Course Details
                  </Link>
                </div>
                <div className="bg-white p-12 flex flex-col justify-center lg:[direction:ltr]">
                  <h3
                    className="text-lg font-bold text-[#1B1B3A] mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-[#C9A84C] mt-0.5">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1B1B3A] py-20 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Apply?
          </h2>
          <p className="text-white/60 text-sm mb-8">Applications for Summer 2027 open soon.</p>
          <Link href="/apply" className="btn-gold">
            Register Your Interest
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
