import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PianoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Course — Piano</p>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Piano
              </h1>
              <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                An intensive week of daily piano tuition, masterclasses, ensemble performance and evening recitals — designed for dedicated students at Grade 4 and above who want to take a meaningful step forward.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/apply" className="btn-gold">Apply for Piano</Link>
                <Link href="/courses" className="btn-outline">All Courses</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Grade", value: "4–8" },
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
                  About the Piano Course
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Green Room Piano course places students in an immersive, conservatoire-style environment for one transformative week. Each day combines individual lessons with group masterclasses, allowing students to learn both from expert tutors and from hearing their peers play.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The week culminates in an evening recital — a highlight for students and families alike, and a genuine performance experience in a supportive setting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1B3A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  A Typical Day
                </h3>
                <div className="space-y-3">
                  {[
                    ["09:00", "Morning warm-up & technique class"],
                    ["10:00", "Individual lesson with your tutor"],
                    ["11:30", "Group masterclass"],
                    ["14:00", "Repertoire workshop"],
                    ["16:00", "Practice time & sight-reading"],
                    ["19:30", "Evening concert or social programme"],
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
                    "Daily individual piano lesson",
                    "Group masterclasses",
                    "Sight-reading workshops",
                    "Technique & scales sessions",
                    "Evening recital performance",
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
                  Applicants should be working at approximately Grade 4 ABRSM standard or above. A short repertoire list will be requested at the point of application.
                </p>
              </div>
              <Link href="/apply" className="btn-gold block text-center">
                Apply for Piano
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
