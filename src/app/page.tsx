import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import CatalogueSection from '@/components/CatalogueSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <PhilosophySection />
      <ServicesSection />
      <CatalogueSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
