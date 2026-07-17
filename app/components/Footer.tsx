import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B3A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://greenroomtheory.com/wp-content/uploads/2023/01/cropped-green-room-music-theory-logo-2.png"
              alt="Green Room Music"
              className="h-12 w-auto mb-4"
            />
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Green Room Music Summer Camp
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mt-3 max-w-xs">
              A week-long residential summer camp for young musicians. Piano, Music Theory & Musical Theatre — Summer 2027.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["instagram", "facebook", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-white/60"
                >
                  <span className="text-xs capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">Courses</h4>
            <ul className="space-y-2">
              {[
                { href: "/courses/piano", label: "Piano" },
                { href: "/courses/music-theory", label: "Music Theory" },
                { href: "/courses/musical-theatre", label: "Musical Theatre" },
                { href: "/courses", label: "All Courses" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">Information</h4>
            <ul className="space-y-2">
              {[
                { href: "/faculty", label: "Faculty" },
                { href: "/residential-life", label: "Residential Life" },
                { href: "/apply", label: "Apply Now" },
                { href: "https://greenroomtheory.com", label: "Main Website" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Contact</h4>
              <p className="text-white/60 text-sm">info@greenroomtheory.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2027 Green Room Music Theory. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with Next.js · Powered by Sanity CMS
          </p>
        </div>
      </div>
    </footer>
  );
}
