import Navbar from '@/components/Navbar';
import DynamicHero from '@/components/DynamicHero';
import HorizontalServices from '@/components/HorizontalServices';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DynamicHero />
      <HorizontalServices />
      <Testimonials />
      <Footer />
    </main>
  );
}
