import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const faculty = [
  {
    name: "Dr. Eleanor Shaw",
    role: "Piano — Head of Keyboard Studies",
    bio: "Eleanor studied at the Royal Academy of Music and holds a Doctorate in Performance from the Guildhall School. She has performed across Europe and is a respected ABRSM examiner. She brings warmth, rigour and inspiration to every lesson.",
    initials: "ES",
  },
  {
    name: "Marcus Webb",
    role: "Music Theory — Course Director",
    bio: "Marcus is a composer and educator with over fifteen years of experience teaching music theory at conservatoire level. His approach combines analytical depth with creative exploration, making complex concepts genuinely accessible.",
    initials: "MW",
  },
  {
    name: "Priya Nair",
    role: "Musical Theatre — Vocal Director",
    bio: "Priya trained at the London Academy of Music & Dramatic Art and has performed in West End productions. As a vocal director and singing teacher, she specialises in helping young performers unlock their authentic voice.",
    initials: "PN",
  },
  {
    name: "James Calloway",
    role: "Musical Theatre — Movement & Acting",
    bio: "James is a professional actor and movement director with credits in theatre, film and television. He leads the acting and choreography sessions with creativity, patience and a gift for encouraging performers at every level.",
    initials: "JC",
  },
];

export default function FacultyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-[#1B1B3A] py-24 text-center">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Meet the Team</p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Faculty
          </h1>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed px-6">
            Green Room Summer Camp brings together specialist educators and professional performers who share a passion for nurturing young talent.
          </p>
        </div>

        {/* Faculty grid */}
        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((f) => (
              <div key={f.name} className="bg-white border border-gray-100 p-8 flex gap-6 card-hover">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-[#1B1B3A] flex items-center justify-center shrink-0 text-[#C9A84C] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                  {f.initials}
                </div>
                <div>
                  <h2
                    className="text-xl font-bold text-[#1B1B3A] mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {f.name}
                  </h2>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">{f.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-[#1B1B3A] py-20 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Learn from the Best
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Our faculty are selected not only for their expertise, but for their ability to inspire young musicians and performers.
          </p>
          <Link href="/apply" className="btn-gold">
            Apply for Summer 2027
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
