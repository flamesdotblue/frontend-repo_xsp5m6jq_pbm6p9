import { BookOpen, Star, Users } from "lucide-react";

export default function AboutAndValues() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Our School</h2>
          <p className="mt-4 text-gray-600">
            We are a community of learners dedicated to academic excellence, creativity, and compassionate citizenship. Our curriculum blends strong core academics with arts, sports, technology, and service learning.
          </p>
          <p className="mt-3 text-gray-600">
            With world-class facilities and an inclusive culture, we empower every student to discover their strengths and lead with integrity.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <ValueCard icon={<Star className="h-6 w-6" />} title="Mission" text="To nurture confident, compassionate, and curious learners." />
          <ValueCard icon={<BookOpen className="h-6 w-6" />} title="Vision" text="A vibrant learning community shaping leaders of tomorrow." />
          <ValueCard icon={<Users className="h-6 w-6" />} title="Values" text="Respect, Responsibility, Resilience, and Empathy." />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-blue-600">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
