import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import PromotionsSection from "@/components/PromotionsSection";
import StatsSection from "@/components/StatsSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import LocationSection from "@/components/LocationSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <PromotionsSection />
      <StatsSection />
      <BrandsSection />
      <TestimonialsSection />
      <NewsSection />
      <LocationSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
