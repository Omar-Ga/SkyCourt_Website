import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import BrandsSection from "@/components/BrandsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <StatsSection />
      <BrandsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
