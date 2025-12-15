import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import AIChatbot from "@/components/chat/AIChatbot";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 tech-dots pointer-events-none opacity-50" />
      <Header />
      <main className="relative z-10 pt-20">
        <CaseStudyPreview />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default CaseStudies;
