import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Heart, Users, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { SITE_URL } from "@/lib/schema";
import northernLandingHero from "@/assets/lions-huddle.webp";

const NorthernLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageSeo({
    title: "Northern Landing | BTS Community Project",
    description:
      "A BTS community project shaped by Creig and Shradha's lived experience arriving in Canada, focused on trusted newcomer information, learning tools, civic participation, and navigation support.",
    canonicalUrl: `${SITE_URL}/community/northern-landing`,
  });

  const relatedLinks = [
    { label: "Visit northernlanding.org", href: "https://northernlanding.org", external: true },
    { label: "QuizApp case study", href: "/case-studies/quizapp" },
    { label: "Creig Phiri", href: "/about/creig-phiri" },
    { label: "Shradha Maira", href: "/about/shradha-maira" },
  ] as const;

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-32 pb-20">
          <img
            src={northernLandingHero}
            alt="Community members working together"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium uppercase tracking-widest mb-5">
                <Heart className="h-4 w-4" />
                <span>Community Project</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                Northern Landing
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                Northern Landing is a BTS passion/community project shaped by Creig and Shradha's lived
                experience arriving in Canada as new immigrants. It sits alongside our client work and is shared
                here as community-focused work, not as a paid service or sales funnel.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <a href="https://northernlanding.org" target="_blank" rel="noreferrer">
                    Visit the project
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/community">
                    <ArrowRight className="mr-2" size={18} />
                    Back to Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="card-premium-no-glow">
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-widest">What it is</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  A community-backed project with practical roots
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The project reflects the kind of work BTS supports outside of client engagements: helping
                    people find trusted information, access learning tools, prepare for civic participation, and
                    navigate newcomer systems without adding extra friction.
                  </p>
                  <p>
                    The intent is practical, accessible, and community-focused. The page exists to surface the
                    project and the people connected to it, not to turn it into a product pitch.
                  </p>
                </div>
              </article>

              <aside className="card-premium-no-glow">
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-widest">Related links</span>
                </div>
                <div className="flex flex-col gap-3">
                  {relatedLinks.map((link) =>
                    link.external ? (
                      <Button key={link.href} variant="outline" asChild className="justify-start">
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      </Button>
                    ) : (
                      <Button key={link.href} variant="outline" asChild className="justify-start">
                        <Link to={link.href}>{link.label}</Link>
                      </Button>
                    ),
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NorthernLanding;
