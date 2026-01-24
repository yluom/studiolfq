import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Info from '@/components/Info';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Location />
      <Info />
      <Footer />

      {/* Floating CTA */}
      <a
        href="https://www.airbnb.fr/rooms/17790371"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.5 2 5 5.5 5 9.5c0 5 7 12.5 7 12.5s7-7.5 7-12.5C19 5.5 15.5 2 12 2zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
        </svg>
        Réserver
      </a>
    </main>
  );
}
