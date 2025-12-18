import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openChatbotWithMessage } from "@/components/chat/AIChatbot";

const HeroSection = () => {
  const handleShowPossible = () => {
    openChatbotWithMessage("Show me what's possible with AI for my business");
  };
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Video as background - all screen sizes */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover md:object-contain">
        <source src="https://image-cdn.quizapp.ca/boring-team-hero-video.mp4?ref=12222" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />

      {/* Centered content */}
      <div className="section-container relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in delay-100"
            style={{ lineHeight: "1.4" }}
          >
            Calm Precision in a <span className="text-gradient">Noisy Tech World</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Your starting point for real-world AI — no hype, just impact.
          </p>
        </div>
      </div>

      {/* CTA Buttons - Bottom aligned */}
      <div className="section-container relative z-10 pb-8 md:pb-12 px-6">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in delay-300">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group glow-gold w-full sm:w-auto"
            asChild
          >
            <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={18} />
              Book a Coffee Chat
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group border-border hover:border-primary/50 w-full sm:w-auto"
            onClick={handleShowPossible}
          >
            Show Me What's Possible
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
