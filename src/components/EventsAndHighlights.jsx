import { Calendar, Megaphone, Star } from "lucide-react";

const events = [
  { date: "Nov 12", title: "Science Fair", desc: "Showcase of student innovations and experiments." },
  { date: "Nov 25", title: "Winter Concert", desc: "Performances by the school choir and band." },
  { date: "Dec 05", title: "Sports Day", desc: "Track and field events with house competitions." },
];

const circulars = [
  { title: "Half-Yearly Exams Schedule", date: "Oct 28, 2025" },
  { title: "Parent Orientation - Grade 6", date: "Oct 30, 2025" },
  { title: "Bus Route Update", date: "Nov 02, 2025" },
];

export default function EventsAndHighlights() {
  return (
    <section id="events" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Header icon={<Calendar className="h-5 w-5" />} title="School Events" subtitle="Join our vibrant calendar of learning and celebrations." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {events.map((e) => (
                <div key={e.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-blue-50 font-semibold text-blue-700">
                      <span className="text-xs">{e.date.split(" ")[0]}</span>
                      <span className="text-sm">{e.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{e.title}</h4>
                      <p className="text-sm text-gray-600">{e.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Header icon={<Megaphone className="h-5 w-5" />} title="Circulars" subtitle="Latest announcements and notices." />
            <div className="mt-6 space-y-3">
              {circulars.map((c) => (
                <div key={c.title} className="flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <div>
                    <p className="font-medium text-gray-900">{c.title}</p>
                    <p className="text-xs text-gray-600">{c.date}</p>
                  </div>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View</a>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-100 p-6">
              <div className="flex items-center gap-2 text-amber-700">
                <Star className="h-5 w-5" />
                <h4 className="font-semibold">Fun Facts</h4>
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-amber-800">
                <li>100% participation in at least one co-curricular activity</li>
                <li>Library of 20,000+ books and digital resources</li>
                <li>Solar-powered, eco-friendly campus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ icon, title, subtitle }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-blue-700">{icon}<span className="text-sm font-semibold uppercase tracking-wide">{title}</span></div>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}
