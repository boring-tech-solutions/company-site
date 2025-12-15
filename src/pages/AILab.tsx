import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AILabTeaser from "@/components/home/AILabTeaser";
import AIChatbot from "@/components/chat/AIChatbot";

const AILab = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 tech-dots pointer-events-none opacity-50" />
      <Header />
      <main className="relative z-10 pt-20">
        <AILabTeaser />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default AILab;
