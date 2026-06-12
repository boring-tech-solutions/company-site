import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Linkedin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import type { FounderProfile } from "@/data/founderProfiles";

interface FounderProfileTemplateProps {
  profile: FounderProfile;
}

const FounderProfileTemplate = ({ profile }: FounderProfileTemplateProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profile.path]);

  usePageSeo({
    title: profile.title,
    description: profile.description,
    canonicalUrl: profile.canonicalUrl,
    ogType: "profile",
  });

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": profile.schema.personId,
        name: profile.name,
        jobTitle: profile.schema.jobTitle,
        description: profile.description,
        image: profile.image,
        url: profile.canonicalUrl,
        sameAs: profile.schema.personSameAs,
        worksFor: {
          "@id": profile.schema.organizationId,
        },
      },
      {
        "@type": "Organization",
        "@id": profile.schema.organizationId,
        name: profile.schema.organizationName,
        url: profile.schema.organizationUrl,
        sameAs: profile.schema.organizationSameAs,
        founder: profile.schema.founderIds.map((personId) => ({
          "@id": personId,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        <section className="relative overflow-hidden bg-surface-navy pt-32 pb-20">
          <div className="absolute inset-0 tech-dots opacity-20" />
          <div className="section-container relative z-10">
            <div className="mb-10">
              <Button variant="ghost" asChild className="px-0 text-muted-foreground hover:text-foreground">
                <Link to="/about">
                  <ArrowLeft className="mr-2" size={18} />
                  Back to About
                </Link>
              </Button>
            </div>

            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
              <div className="relative max-w-sm">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="max-w-4xl">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                  {profile.role}
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
                  {profile.name}
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                  {profile.intro}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Start a conversation
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={18} />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                {profile.publicLinks.length > 0 && (
                  <div className="mt-8">
                    <p className="text-primary text-xs font-medium uppercase tracking-widest mb-4">
                      Personal sites
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {profile.publicLinks.map((link) => (
                        <Button key={link.href} variant="outline" asChild>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
              <article className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                {profile.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>

              <aside className="card-premium-no-glow">
                <p className="text-primary text-xs font-medium uppercase tracking-widest mb-4">
                  Focus areas
                </p>
                <ul className="space-y-4">
                  {profile.focusAreas.map((focusArea) => (
                    <li key={focusArea} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 flex-shrink-0 text-primary" size={18} />
                      <span>{focusArea}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/40">
          <div className="section-container">
            <div className="max-w-4xl">
              <p className="text-primary text-xs font-medium uppercase tracking-widest mb-4">
                Explore related pages
              </p>
              <div className="flex flex-wrap gap-3">
                {profile.relatedLinks.map((link) => (
                  <Button key={link.href} variant="outline" asChild>
                    <Link to={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </div>
  );
};

export default FounderProfileTemplate;
