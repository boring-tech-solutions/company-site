import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      >
        <source src="https://image-cdn.quizapp.ca/boring-team-hero-video.mp4?ref=12222" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />

      {/* Main Content - Centered */}
      <div className="section-container relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-100 font-sans" style={{ lineHeight: '1.5' }}>
            Calm Precision in a{" "}
            <span className="text-gradient">Noisy Tech World</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Your starting point for real-world AI — no hype, just impact.
          </p>
        </div>
      </div>

      {/* CTA Buttons - Bottom aligned */}
      <div className="section-container relative z-10 pb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group glow-gold" asChild>
            <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Book a Coffee Chat
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 group border-border hover:border-primary/50">
            Show Me What's Possible
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;