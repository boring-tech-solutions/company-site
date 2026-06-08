import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, ArrowLeft, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getCaseStudyBySlug } from "../../shared/case-studies.js";
import { usePageSeo } from "@/hooks/usePageSeo";
import NotFound from "@/pages/NotFound";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  usePageSeo(
    study
      ? {
          title: study.seoTitle,
          description: study.seoDescription,
          canonicalUrl: study.canonicalUrl,
        }
      : {
          title: "Case Study Not Found | Boring Tech Solutions",
          description: "The requested case study could not be found.",
          canonicalUrl: "https://boringtechsolutions.com/case-studies/",
        },
  );

  if (!study) {
    return <NotFound />;
  }

  const summaryPoints = [
    study.cardChallenge,
    study.cardOutcome,
    study.category,
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <section className={`relative overflow-hidden ${study.bgColor}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(18,24,33,0.2),_transparent_40%)]" />
          <div className="section-container relative z-10 pt-32 pb-20">
            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-end">
              <div className={study.textColor}>
                <div className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest ${study.mutedColor} mb-4`}>
                  <Sparkles className="w-4 h-4" />
                  <span>{study.category}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {study.client}
                </h1>
                <p className={`text-lg md:text-xl leading-relaxed max-w-3xl ${study.mutedColor}`}>
                  {study.hero}
                </p>
                <p className={`mt-6 text-base md:text-lg max-w-2xl ${study.mutedColor}`}>
                  {study.summary}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90 group" asChild>
                    <Link to="/contact">
                      {study.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-current text-current hover:bg-current/10" asChild>
                    <Link to="/our-past-work">
                      <ArrowLeft className="mr-2" size={18} />
                      Back to Projects
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="card-premium-no-glow bg-background/10 border-white/10 backdrop-blur-sm">
                <div className="space-y-5">
                  <div>
                    <p className={`text-xs uppercase tracking-widest ${study.mutedColor} mb-2`}>At a glance</p>
                    <ul className="space-y-3">
                      {summaryPoints.map((point) => (
                        <li key={point} className={`flex items-start gap-3 ${study.mutedColor}`}>
                          <CheckCircle2 className="mt-0.5 flex-shrink-0" size={18} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/15 pt-5">
                    <p className={`text-xs uppercase tracking-widest ${study.mutedColor} mb-3`}>Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1 text-sm ${
                            study.textColor === "text-white"
                              ? "border-white/20 bg-white/10 text-white"
                              : "border-charcoal-deep/15 bg-charcoal-deep/10 text-charcoal-deep"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-6">
              <article className="card-premium-no-glow">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">Problem</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">What needed to change</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {study.problem}
                </p>
              </article>

              <article className="card-premium-no-glow">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">Approach</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">How we shaped the work</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {study.approach}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-navy">
          <div className="section-container">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
              <article className="card-premium-no-glow">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">Outcome</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">What the team gained</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {study.outcome}
                </p>
              </article>

              <div className="space-y-6">
                <article className="card-premium-no-glow">
                  <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">Industry / context</p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {study.industryContext}
                  </p>
                </article>

                <article className="card-premium-no-glow">
                  <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">Project focus</p>
                  <p className="text-foreground text-base leading-relaxed">
                    {study.summary}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-container">
            <div className="card-premium-no-glow bg-card">
              <div className="max-w-3xl">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">
                  Next step
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Want to scope something similar?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {study.ctaLabel} with a team that keeps the work practical, calm, and built for real-world constraints.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group" asChild>
                    <Link to="/contact">
                      {study.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/our-past-work">Browse More Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
