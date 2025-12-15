import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SelfIdentificationCards from "@/components/home/SelfIdentificationCards";
import PartnerLogos from "@/components/home/PartnerLogos";
import AIChatbot from "@/components/chat/AIChatbot";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10 pt-20">
        <SelfIdentificationCards />
        <PartnerLogos />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default About;
