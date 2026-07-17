import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";

const courses = [
  {
    title: "Piano",
    href: "/courses/piano",
    icon: "🎹",
    description:
      "An intensive week of daily piano lessons, masterclasses, ensemble work and evening recitals. Suitable for Grade 4–8 students looking to take their playing to the next level.",
  },
  {
    title: "Music Theory",
    href: "/courses/music-theory",
    icon: "♪",
    description:
      "Covering ABRSM theory up to Grade 8 and beyond — harmony, counterpoint, ear training and composition in a structured, fast-paced residential environment.",
  },
  {
    title: "Musical Theatre",
    href: "/courses/musical-theatre",
    icon: "🎭",
    description:
      "Singing, acting, movement and stagecraft combined. Students work toward a showcase performance on the final evening, guided by professional theatre practitioners.",
  },
];

const testimonials = [
  {
    name: "Amelia R.",
    role: "Piano student, age 16",
    quote:
      "The week completely transformed my relationship with music. The tutors were incredible and the other students became lifelong friends.",
  },
  {
    name: "James T.",
    role: "Music Theory student, age 15",
    quote:
      "I came in struggling with harmony and left feeling genuinely confident. The pace was challenging but always supportive.",
  },
  {
    name: "Sofia M.",
    role: "Musical Theatre student, age 17",
    quote:
      "The final showcase was one of the proudest moments of my life. I can't wait to come back next year.",
  },
];

const siteFeatures = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Built with Next.js — this site loads in under a second. Google rewards fast sites with higher rankings.",
  },
  {
    icon: "🔍",
    title: "Full SEO Control",
    desc: "Edit every meta title, description, and structured data tag. Complete control over how you appear in search results.",
  },
  {
    icon: "✏️",
    title: "Easy Content Editing",
    desc: "Powered by Sanity CMS — update text, swap images, and add pages through a simple dashboard. No developer needed.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroSlideshow />

        {/* About */}
        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">About the Camp</p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1B1B3A] leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                One Week.
                <br />
                Three Courses.
                <br />
                A Summer to Remember.
              </h2>
              <div className="w-14 h-0.5 bg-[#C9A84C] my-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Green Room Music Summer Camp is an intensive, week-long residential programme for young musicians and performers aged 13–18. Running in Summer 2027, the camp brings together three specialist tracks — Piano, Music Theory, and Musical Theatre — under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Students benefit from expert tuition, daily masterclasses, peer collaboration and a rich programme of evening events — all within a safe, inspiring residential environment.
              </p>
              <Link href="/apply" className="btn-gold">
                Apply for Summer 2027
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1B1B3A] text-white p-8 flex flex-col justify-center">
                <div className="text-[#C9A84C] text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>3</div>
                <div className="text-sm text-white/70 uppercase tracking-widest">Specialist Courses</div>
              </div>
              <div className="bg-[#C9A84C] p-8 flex flex-col justify-center">
                <div className="text-[#1B1B3A] text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>1</div>
                <div className="text-sm text-[#1B1B3A]/80 uppercase tracking-widest">Week Residential</div>
              </div>
              <div className="bg-[#C9A84C] p-8 flex flex-col justify-center">
                <div className="text-[#1B1B3A] text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>13–18</div>
                <div className="text-sm text-[#1B1B3A]/80 uppercase tracking-widest">Age Range</div>
              </div>
              <div className="bg-[#1B1B3A] text-white p-8 flex flex-col justify-center">
                <div className="text-[#C9A84C] text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>2027</div>
                <div className="text-sm text-white/70 uppercase tracking-widest">Summer Programme</div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">What We Offer</p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Three Courses to Choose From
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((c) => (
                <div key={c.title} className="border border-white/10 p-8 card-hover group">
                  <div className="text-4xl mb-5">{c.icon}</div>
                  <h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{c.description}</p>
                  <Link href={c.href} className="btn-outline text-xs">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why this site */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Built with Next.js + Sanity CMS</p>
              <h2
                className="text-4xl font-bold text-[#1B1B3A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What Makes This Site Different
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteFeatures.map((f) => (
                <div key={f.title} className="text-center p-8 border border-gray-100 hover:border-[#C9A84C] transition-colors">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3
                    className="text-xl font-bold text-[#1B1B3A] mb-3"
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

        {/* Residential Life preview */}
        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-3">
              {["Morning Sessions", "Masterclasses", "Evening Events", "Ensemble Work"].map((label, i) => (
                <div
                  key={label}
                  className="aspect-square bg-[#1B1B3A] flex items-end p-4"
                  style={{ opacity: 0.75 + i * 0.08 }}
                >
                  <span className="text-[#C9A84C] text-xs uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Life at Camp</p>
              <h2
                className="text-4xl font-bold text-[#1B1B3A] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                More Than Just Lessons
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                From morning warm-ups to evening concerts, life at Green Room Summer Camp is immersive and joyful. Students share meals, rehearsal spaces and experiences that go far beyond the classroom.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Safe, fully supervised accommodation is provided throughout the week, with a dedicated pastoral team on hand around the clock.
              </p>
              <Link href="/residential-life" className="btn-gold">
                Discover Residential Life
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#1B1B3A] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Student Voices</p>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What Our Students Say
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 p-8">
                  <p className="text-[#C9A84C] text-3xl mb-4">"</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply / Contact */}
        <section className="bg-[#FAF8F3] py-24" id="apply">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Get In Touch</p>
              <h2
                className="text-4xl font-bold text-[#1B1B3A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Apply for Summer 2027
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6 mb-6" />
              <p className="text-gray-500 text-sm">
                Applications for Summer 2027 open soon. Register your interest below and we will notify you the moment places are available.
              </p>
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Which Course?</label>
                <select className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors text-gray-600">
                  <option value="">Select a course</option>
                  <option>Piano</option>
                  <option>Music Theory</option>
                  <option>Musical Theatre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors resize-none"
                  placeholder="Any questions or additional information..."
                />
              </div>
              <button type="submit" className="btn-gold w-full text-center">
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
