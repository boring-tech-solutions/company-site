import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";


const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10 pt-20">
        <CaseStudyPreview />
      </main>
      <Footer />
      
    </div>
  );
};

export default CaseStudies;
