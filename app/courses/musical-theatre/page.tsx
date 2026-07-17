import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MusicalTheatrePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Course — Musical Theatre</p>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Musical Theatre
              </h1>
              <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                Find your voice on stage. Singing, acting, movement and stagecraft — combined into one week-long performing arts experience that culminates in a live showcase performance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/apply" className="btn-gold">Apply for Musical Theatre</Link>
                <Link href="/courses" className="btn-outline">All Courses</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Level", value: "All" },
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
                  About the Musical Theatre Course
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Musical Theatre course is a full performing arts experience. Students work across singing, acting, movement and stagecraft — discovering and developing their performance identity in a supportive, creative environment.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The week builds toward a final showcase performance on the last evening, giving students a real stage experience before an audience of families and fellow campers. No prior stage experience is required — only enthusiasm and commitment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1B3A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>A Typical Day</h3>
                <div className="space-y-3">
                  {[
                    ["09:00", "Morning vocal warm-up"],
                    ["09:30", "Acting class & scene study"],
                    ["11:00", "Movement & choreography"],
                    ["14:00", "Song performance workshop"],
                    ["15:30", "Ensemble rehearsal"],
                    ["19:30", "Showcase rehearsal or evening social"],
                  ].map(([time, activity]) => (
                    <div key={time} className="flex gap-6 items-start border-b border-gray-100 pb-3">
                      <span className="text-[#C9A84C] text-xs font-mono w-12 shrink-0 mt-0.5">{time}</span>
                      <span className="text-gray-600 text-sm">{activity}</span>
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
                    "Vocal technique sessions",
                    "Acting & scene study",
                    "Choreography classes",
                    "Stagecraft workshops",
                    "Final showcase performance",
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
                  Open to all levels. No prior stage experience is required — just enthusiasm, commitment and a love of performing.
                </p>
              </div>
              <Link href="/apply" className="btn-gold block text-center">
                Apply for Musical Theatre
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
