import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SelfIdentificationCards from "@/components/home/SelfIdentificationCards";
import PartnerLogos from "@/components/home/PartnerLogos";
import ServicePreview from "@/components/home/ServicePreview";
import AILabTeaser from "@/components/home/AILabTeaser";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import CommunitySection from "@/components/home/CommunitySection";
import CollectivePreview from "@/components/home/CollectivePreview";
import AIChatbot from "@/components/chat/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SelfIdentificationCards />
        <PartnerLogos />
        <ServicePreview />
        <AILabTeaser />
        <CaseStudyPreview />
        <CommunitySection />
        <CollectivePreview />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
