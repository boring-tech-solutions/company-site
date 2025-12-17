import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openChatbotWithMessage } from "@/components/chat/AIChatbot";

const HeroSection = () => {
  const handleShowPossible = () => {
    openChatbotWithMessage("Show me what's possible with AI for my business");
  };
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

      {/* Mobile: Stacked layout with video filling screen */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Mobile Text - compact */}
        <div className="flex flex-col justify-center px-6 py-4 pt-6">
          <h1 className="text-2xl font-bold mb-2 font-sans text-center" style={{ lineHeight: '1.4' }}>
            Calm Precision in a{" "}
            <span className="text-gradient">Noisy Tech World</span>
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Your starting point for real-world AI — no hype, just impact.
          </p>
        </div>

        {/* Mobile Video - fills remaining height */}
        <div className="relative flex-1 min-h-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://image-cdn.quizapp.ca/boring-team-hero-video.mp4?ref=12222" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Mobile CTAs - fixed at bottom */}
        <div className="px-4 py-3 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-4 group glow-gold w-full" asChild>
              <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={16} />
                Book a Coffee Chat
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm px-4 py-4 group border-border hover:border-primary/50 w-full"
              onClick={handleShowPossible}
            >
              Show Me What's Possible
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 group border-border hover:border-primary/50"
            onClick={handleShowPossible}
          >
            Show Me What's Possible
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;