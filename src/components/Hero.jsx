import { ChevronRight, School } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex items-center gap-3 text-gray-700/80">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Our School</span>
        </div>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div className="">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm ring-1 ring-black/10 backdrop-blur">
              <School className="h-4 w-4 text-blue-700" />
              Welcome to
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Springfield International School
            </h1>
            <p className="mt-4 max-w-2xl text-gray-700">
              Inspiring curious minds, nurturing character, and building future-ready leaders through holistic education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white shadow-lg shadow-blue-700/20 transition hover:translate-y-[-1px] hover:shadow-xl">Learn More</a>
              <a href="#contact" className="rounded-lg bg-white/80 px-5 py-3 font-medium text-blue-700 ring-1 ring-black/10 backdrop-blur transition hover:bg-white">Contact Us</a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-4 gap-3">
              <Stat label="Students" value="1200+" />
              <Stat label="Teachers" value="85" />
              <Stat label="Clubs" value="25" />
              <Stat label="Awards" value="60+" />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-3xl bg-white/60 p-4 ring-1 ring-black/10 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
                alt="Students collaborating"
                className="h-80 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/80 p-4 text-center ring-1 ring-black/10 backdrop-blur">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs font-medium uppercase tracking-wide text-gray-600">{label}</div>
    </div>
  );
}
