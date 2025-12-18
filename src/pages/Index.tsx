import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicePreview from "@/components/home/ServicePreview";
import WhoWeAre from "@/components/home/WhoWeAre";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import AILabTeaser from "@/components/home/AILabTeaser";
import SelfIdentificationCards from "@/components/home/SelfIdentificationCards";
import PartnerLogos from "@/components/home/PartnerLogos";
import AIChatbot from "@/components/chat/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicePreview />
        <WhoWeAre />
        <CaseStudyPreview />
        <AILabTeaser />
        <SelfIdentificationCards />
        
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
