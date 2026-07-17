import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MusicTheoryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Course — Music Theory</p>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Music Theory
              </h1>
              <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                Unlock the language of music. An intensive residential week covering harmony, counterpoint, ear training and composition — taught by specialist theory educators in a focused, supportive environment.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/apply" className="btn-gold">Apply for Music Theory</Link>
                <Link href="/courses" className="btn-outline">All Courses</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Level", value: "Gr. 5–8+" },
                { label: "Duration", value: "1 Week" },
                { label: "Age Range", value: "13–18" },
                { label: "Year", value: "2027" },
              ].map((s) => (
                <div key={s.label} className="border border-white/10 p-6">
                  <div className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{s.label}</div>
                  <div className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1B1B3A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  About the Music Theory Course
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Music theory is the foundation of musicianship — and this course goes far beyond exam preparation. Students explore the structures that underpin all music, from Bach chorales to contemporary composition, building skills that will enhance every aspect of their musical life.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The week balances analytical work with creative projects, giving students the opportunity to compose, arrange and respond to music in a practical way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1B3A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Topics Covered</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Four-part harmony",
                    "Counterpoint & species",
                    "Aural training & dictation",
                    "Score reading",
                    "Composition project",
                    "Musical analysis",
                    "ABRSM Grade 6–8 preparation",
                    "Figured bass",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3 text-sm text-gray-600 bg-white p-3 border border-gray-100">
                      <span className="text-[#C9A84C]">✦</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1B1B3A] p-8">
                <h3 className="text-white font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Daily theory seminars",
                    "Ear training workshops",
                    "Composition project",
                    "Score study sessions",
                    "Exam technique coaching",
                    "Full board accommodation",
                    "Pastoral support throughout",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/70">
                      <span className="text-[#C9A84C] shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#C9A84C] p-8">
                <h3 className="text-[#1B1B3A] font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  Entry Requirements
                </h3>
                <p className="text-[#1B1B3A]/80 text-sm leading-relaxed">
                  Students should have a working knowledge of music notation and be working at approximately Grade 5 theory level or above.
                </p>
              </div>
              <Link href="/apply" className="btn-gold block text-center">
                Apply for Music Theory
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
