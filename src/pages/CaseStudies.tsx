import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import lionPresenting from "@/assets/lion-presenting.webp";


const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={lionPresenting}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="section-container relative z-10 pt-32 pb-20 text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Projects</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-2">
              Challenge → Approach →{" "}
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Real problems. Practical solutions. Measurable outcomes.
            </p>
          </div>
        </section>
        <CaseStudyPreview />
      </main>
      <Footer />

    </div>
  );
};

export default CaseStudies;
