import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PromotionsSection from "@/components/PromotionsSection";
import StatsSection from "@/components/StatsSection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandsSection />
      <ServicesSection />
      <NewsSection />
      <FeaturesSection />
      <PromotionsSection />
      <StatsSection />
      <LocationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
