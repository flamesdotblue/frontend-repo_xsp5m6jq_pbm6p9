import Hero from "./components/Hero";
import AboutAndValues from "./components/AboutAndValues";
import EventsAndHighlights from "./components/EventsAndHighlights";
import CommunityAndContact from "./components/CommunityAndContact";
import { School } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <AboutAndValues />
        <EventsAndHighlights />
        <CommunityAndContact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-blue-700">
          <School className="h-6 w-6" />
          <span className="font-semibold">Springfield International</span>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#events" className="hover:text-blue-700">Events</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Enroll Now</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Springfield International School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#events" className="hover:text-blue-700">Circulars</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
