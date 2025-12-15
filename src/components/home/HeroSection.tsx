import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep via-background to-background" />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-40" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-pulse-subtle" />
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">AI Solutions for SMEs</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in delay-100">
            Calm Precision in a{" "}
            <span className="text-gradient">Noisy Tech World</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            We're the company you start AI with — practical, ethical, and SME-friendly solutions that reduce costs, streamline workflows, and help your team do more with less.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group glow-gold"
            >
              <MessageCircle className="mr-2" size={20} />
              Book a Coffee Chat
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 group border-border hover:border-primary/50"
            >
              Show Me What's Possible
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mt-6 animate-fade-in delay-400">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
              Not sure where to start?
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
              Talk to an AI Specialist
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
              Tell Us Your Challenge
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
