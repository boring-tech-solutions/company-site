import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AIChatbot from "@/components/chat/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
