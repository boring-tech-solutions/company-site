import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Desktop: Video as background */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile: Stacked layout */}
      <div className="md:hidden flex flex-col flex-1">
        {/* Mobile Video */}
        <div className="relative w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://image-cdn.quizapp.ca/boring-team-hero-video.mp4?ref=12222" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Mobile Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8">
          <h1 className="text-3xl font-bold mb-4 font-sans text-center" style={{ lineHeight: '1.5' }}>
            Calm Precision in a{" "}
            <span className="text-gradient">Noisy Tech World</span>
          </h1>
          <p className="text-base text-muted-foreground text-center">
            Your starting point for real-world AI — no hype, just impact.
          </p>
        </div>

        {/* Mobile CTAs */}
        <div className="px-6 pb-4">
          <div className="flex flex-col gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-5 group glow-gold w-full" asChild>
              <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={18} />
                Book a Coffee Chat
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-6 py-5 group border-border hover:border-primary/50 w-full">
              Show Me What's Possible
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop: Centered content */}
      <div className="hidden md:flex section-container relative z-10 flex-1 items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-100 font-sans" style={{ lineHeight: '1.5' }}>
            Calm Precision in a{" "}
            <span className="text-gradient">Noisy Tech World</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Your starting point for real-world AI — no hype, just impact.
          </p>
        </div>
      </div>

      {/* Desktop: CTA Buttons - Bottom aligned */}
      <div className="hidden md:block section-container relative z-10 pb-12">
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
    </section>
  );
};

export default HeroSection;