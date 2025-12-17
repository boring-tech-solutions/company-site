import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import TeamSection from "@/components/about/TeamSection";
import { ArrowRight, Compass, Mountain, Target, Users, Sparkles } from "lucide-react";
import lionsAtWork from "@/assets/lions-at-work-about.webp";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section with Image */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={lionsAtWork} 
              alt="The Boring Tech Collective - Lions at work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          </div>
          
          <div className="relative z-10 section-container pb-16 pt-32">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
                About Us — The Boring Tech Collective
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Quiet Excellence.{' '}
                <span className="text-gradient">Real Impact.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 tech-dots opacity-30" />
          
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Our Story</span>
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Technology doesn't need theatrics
                </h2>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Boring Tech Solutions was founded on a simple idea: technology doesn't need theatrics — 
                    just <span className="text-foreground font-medium">clarity, discipline, and calm precision</span>.
                  </p>
                  <p>
                    In a world loud with hype and inflated promises about artificial intelligence, 
                    we wanted to build something different: a company grounded in quiet excellence, 
                    rooted in values, and obsessed with delivering real-world impact.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card-premium p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                  
                  <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                    What began as two people — a systems architect (Creig) and a strategist (Shradha) — 
                    sitting in a small Edmonton living room, debating how Alberta's organizations could 
                    adopt AI safely and meaningfully, has grown into a <span className="text-primary font-semibold">Collective</span>: 
                    a pride of deeply skilled experts who come together project-by-project to deliver 
                    work that actually moves the needle.
                  </p>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {['C', 'S', '+'].map((initial, i) => (
                        <div 
                          key={i}
                          className="w-12 h-12 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">The founding pride</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* The Boring Way Section */}
        <section className="py-24 bg-card/50 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern" />
          
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                We call it{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">The Boring Way</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, label: 'Clear thinking' },
                { icon: Users, label: 'Ethical engineering' },
                { icon: Sparkles, label: 'No noise' },
                { icon: ArrowRight, label: 'No shortcuts' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="card-premium text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary icon-animate" />
                  </div>
                  <span className="font-display text-lg font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
                "Just mastery — moving through complexity like a lion guiding a Jeep across rugged terrain."
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="card-premium p-10 relative group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Compass className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-3xl">🧭</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Our Mission
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To make <span className="text-primary font-bold">AI practical, ethical, and accessible for Canadian organizations</span> — especially small and medium-sized businesses who want modern 
                    tools but don't know where to begin.
                  </p>
                </div>
              </div>
              
              {/* Vision */}
              <div className="card-premium p-10 relative group overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <Mountain className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-3xl">🌄</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Our Vision
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    An Alberta where <span className="text-accent font-medium">ethical AI, strong data practices, 
                    and community-centered innovation</span> are the norm — not the exception. Where technology 
                    empowers teams, strengthens trust, and amplifies impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default About;
