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
    </main>
  );
}
