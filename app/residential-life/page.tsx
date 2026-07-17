import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const features = [
  {
    icon: "🏠",
    title: "Accommodation",
    desc: "Students stay in comfortable, supervised residential rooms on site. Single-sex accommodation with dedicated houseparents ensures a safe and homely environment throughout the week.",
  },
  {
    icon: "🍽️",
    title: "Meals & Social Time",
    desc: "Three meals a day are provided, with menus designed around nutritional needs and dietary requirements. Mealtimes are a highlight — a chance to connect with students from all three courses.",
  },
  {
    icon: "🌙",
    title: "Evening Programme",
    desc: "Each evening features something special: student concerts, collaborative jams, film screenings, or social events that make the week unforgettable beyond the rehearsal room.",
  },
  {
    icon: "🛡️",
    title: "Pastoral Care",
    desc: "A dedicated pastoral team is on hand 24/7. All staff hold enhanced DBS checks and our safeguarding policy meets the highest standards. Parents receive daily updates.",
  },
  {
    icon: "🎵",
    title: "Practice Facilities",
    desc: "Students have supervised access to practice rooms throughout the day, so personal preparation time sits alongside the timetabled programme.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "One of the most valued outcomes of the camp is the friendships formed. Students leave with a peer network of fellow musicians and performers that often lasts for years.",
  },
];

export default function ResidentialLifePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Life at Camp</p>
              <h1
                className="text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Residential Life
              </h1>
              <p className="text-white/60 leading-relaxed max-w-lg">
                Green Room Summer Camp is far more than a series of lessons. The residential experience — shared meals, evening events, late-night conversations about music — is where the magic really happens.
              </p>
            </div>
            <div className="border-l border-white/10 pl-12 hidden lg:block">
              <div className="space-y-6">
                {[
                  ["7 days", "Full residential programme"],
                  ["3 meals", "Daily, all dietary needs catered"],
                  ["24/7", "Pastoral support on site"],
                  ["DBS checked", "All staff, all sessions"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-[#C9A84C] text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>{val}</div>
                    <div className="text-white/50 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">What to Expect</p>
              <h2
                className="text-4xl font-bold text-[#1B1B3A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Everything Taken Care Of
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="bg-white p-8 border border-gray-100 card-hover">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3
                    className="text-lg font-bold text-[#1B1B3A] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Week overview */}
        <section className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">The Week</p>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Typical Week at Camp
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { day: "Mon", highlight: "Arrivals & welcome concert" },
                { day: "Tue–Thu", highlight: "Intensive course sessions & evening events" },
                { day: "Fri", highlight: "Open masterclass & guest artist" },
                { day: "Sat", highlight: "Final showcase & farewell" },
              ].map((d) => (
                <div key={d.day} className="border border-white/10 p-6">
                  <div className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-2">{d.day}</div>
                  <div className="text-white/70 text-sm">{d.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FAF8F3] py-20 text-center">
          <h2
            className="text-3xl font-bold text-[#1B1B3A] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join Us for Summer 2027
          </h2>
          <p className="text-gray-500 text-sm mb-8">Applications open soon.</p>
          <Link href="/apply" className="btn-gold">
            Register Your Interest
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
