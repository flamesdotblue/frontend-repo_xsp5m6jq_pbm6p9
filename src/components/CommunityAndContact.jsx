import { Building2, Clock, Mail, Palette, Trophy, Users } from "lucide-react";
import { useState } from "react";

export default function CommunityAndContact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Visiting Hours for Parents</h3>
          <div className="mt-4 divide-y overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <Row icon={<Clock className="h-5 w-5" />} title="Mon - Fri" value="3:30 PM – 5:30 PM" />
            <Row icon={<Clock className="h-5 w-5" />} title="Saturday" value="10:00 AM – 12:30 PM" />
            <Row icon={<Clock className="h-5 w-5" />} title="By Appointment" value="Contact Class Teacher" />
          </div>

          <h3 className="mt-10 text-2xl font-bold text-gray-900">Infrastructure Excellence</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Facility icon={<Building2 className="h-5 w-5" />} title="STEM Labs" desc="Robotics, AI, and 3D Printing" />
            <Facility icon={<Palette className="h-5 w-5" />} title="Arts Wing" desc="Studios for music, dance, and fine arts" />
            <Facility icon={<Trophy className="h-5 w-5" />} title="Sports Complex" desc="Indoor arena and Olympic-size field" />
            <Facility icon={<Users className="h-5 w-5" />} title="Auditorium" desc="1000-seat performance theatre" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900">Ask Us Anything</h3>
          <p className="mt-1 text-gray-600">Have a question? Send us a message and we’ll get back to you soon.</p>
          <ContactForm />

          <h3 className="mt-10 text-2xl font-bold text-gray-900">Student Projects</h3>
          <p className="mt-1 text-gray-600">A glimpse of creativity and innovation from our classrooms.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {projectImages.map((src, i) => (
              <img key={i} src={src} alt="Student project" className="h-28 w-full rounded-lg object-cover" />
            ))}
          </div>

          <h3 className="mt-10 text-2xl font-bold text-gray-900">Life at School</h3>
          <p className="mt-1 text-gray-600">Clubs, houses, community service, field trips, and more — a rich life beyond the classroom.</p>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, title, value }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-2 text-gray-700">{icon}<span className="font-medium">{title}</span></div>
      <span className="text-sm text-gray-600">{value}</span>
    </div>
  );
}

function Facility({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-blue-700">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
  }
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-blue-700"><Mail className="h-5 w-5" /><span className="font-semibold">Contact Form</span></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" placeholder="How can we help?" />
      </div>
      <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Send Message</button>
    </form>
  );
}

const projectImages = [
  "https://images.unsplash.com/photo-1581091014765-7c54e34a5a2b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=800&auto=format&fit=crop",
];
