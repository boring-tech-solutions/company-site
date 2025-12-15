import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AILabTeaser from "@/components/home/AILabTeaser";
import AIChatbot from "@/components/chat/AIChatbot";

const AILab = () => {
  return (
    <div className="min-h-screen bg-background relative">
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
