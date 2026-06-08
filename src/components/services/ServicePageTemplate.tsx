import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Layers3,
  Lock,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/seo/PageSeo";
import type { ServicePageData } from "@/data/servicePages";

const concernIcons = [AlertTriangle, Users, Lock, Compass];
const buildIcons = [Workflow, Layers3, ShieldCheck, BarChart3];
const principleIcons = [Users, Scale, ShieldCheck, Compass];

interface ServicePageTemplateProps {
  page: ServicePageData;
}

const ServicePageTemplate = ({ page }: ServicePageTemplateProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <PageSeo title={page.title} description={page.description} canonicalUrl={page.canonicalUrl} />
      <Header />

      <main className="relative z-10">
        <section className="relative min-h-[78vh] overflow-hidden flex items-end pt-32">
          <div className="absolute inset-0">
            <img src={page.image} alt={page.h1} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          </div>

          <div className="section-container relative z-10 pb-16">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                  <Sparkles size={14} />
                  Service page
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6 leading-tight">
                  {page.h1}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
                  {page.heroAngle}
                </p>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mt-6">
                  {page.heroBody}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="group" asChild>
                    <Link to={page.cta.path}>
                      {page.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card/85 backdrop-blur-sm border border-border rounded-3xl p-6 md:p-8">
                <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-4">
                  What to expect
                </div>
                <ul className="space-y-4">
                  {page.heroBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {page.concernsSection.heading}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Common problems and concerns
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {page.concernsSection.cards.map((card, index) => {
                const Icon = concernIcons[index % concernIcons.length];

                return (
                  <div key={card.label} className="bg-card border border-border rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{card.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="max-w-3xl mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {page.buildsSection.heading}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                What BTS builds and provides
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {page.buildsSection.cards.map((card, index) => {
                const Icon = buildIcons[index % buildIcons.length];

                return (
                  <div key={card.label} className="card-premium-no-glow group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{card.label}</h3>
                        <p className="text-muted-foreground leading-relaxed">{card.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {page.principlesSection.heading}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Industries and principles we keep in view
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {page.principlesSection.cards.map((card, index) => {
                const Icon = principleIcons[index % principleIcons.length];

                return (
                  <div key={card.label} className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="text-primary" size={18} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{card.label}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{card.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="max-w-3xl mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {page.outcomesSection.heading}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                Outcomes clients look for
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {page.outcomesSection.items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={20} />
                  <p className="text-foreground/90 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {page.cta.heading}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    {page.cta.body}
                  </p>
                </div>

                <div className="flex lg:justify-end">
                  <Button size="lg" className="group w-full sm:w-auto" asChild>
                    <Link to={page.cta.path}>
                      {page.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default ServicePageTemplate;
