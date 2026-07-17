import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#1B1B3A] py-24 text-center">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Summer 2027</p>
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Apply Now
          </h1>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-lg mx-auto text-sm leading-relaxed px-6">
            Applications for Summer 2027 open soon. Complete the form below to register your interest and be first to know when places become available.
          </p>
        </div>

        <section className="bg-[#FAF8F3] py-24">
          <div className="max-w-2xl mx-auto px-6">
            <form className="bg-white border border-gray-100 p-10 space-y-6">
              <h2
                className="text-2xl font-bold text-[#1B1B3A] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Register Your Interest
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Student Name</label>
                  <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Age</label>
                  <input type="number" min={13} max={18} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors" placeholder="13–18" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Parent / Guardian Name</label>
                  <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Email Address</label>
                  <input type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors" placeholder="your@email.com" />
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
                <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Current Level / Experience</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors" placeholder="e.g. Grade 6 Piano, 2 years experience" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1B1B3A] mb-2">Any Questions or Additional Information?</label>
                <textarea rows={4} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] bg-white transition-colors resize-none" placeholder="Dietary requirements, accessibility needs, questions..." />
              </div>

              <button type="submit" className="btn-gold w-full text-center">
                Submit Interest
              </button>
              <p className="text-gray-400 text-xs text-center">
                We will be in touch as soon as applications formally open. No payment is required at this stage.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
