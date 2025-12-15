import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePreview from "@/components/home/ServicePreview";
import AIChatbot from "@/components/chat/AIChatbot";

const Services = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10 pt-20">
        <ServicePreview />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Services;
