import { ChevronRight, School } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500" />
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
        alt="School campus"
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-70"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex items-center gap-3 text-white/90">
          <a href="#home" className="hover:text-white">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Our School</span>
        </div>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20 backdrop-blur">
              <School className="h-4 w-4" />
              Welcome to
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Springfield International School
            </h1>
            <p className="mt-4 max-w-2xl text-white/90">
              Inspiring curious minds, nurturing character, and building future-ready leaders through holistic education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-lg bg-white px-5 py-3 font-medium text-blue-700 shadow hover:shadow-md">Learn More</a>
              <a href="#contact" className="rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/30 hover:bg-white/15">Contact Us</a>
            </div>
          </div>
          <div className="">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-white">
                <Stat label="Students" value="1200+" />
                <Stat label="Teachers" value="85" />
                <Stat label="Clubs" value="25" />
                <Stat label="Awards" value="60+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/10 p-4 text-center ring-1 ring-white/20">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}
