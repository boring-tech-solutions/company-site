import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommunitySection from "@/components/home/CommunitySection";
import CollectivePreview from "@/components/home/CollectivePreview";


const Community = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <CommunitySection />
        <CollectivePreview />
      </main>
      <Footer hideCTA />
      
    </div>
  );
};

export default Community;
