import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Binary } from "lucide-react";
import lionInLab from "@/assets/lion-in-lab.webp";

const AILabTeaser = () => {
  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden bg-surface-teal">
      <div className="section-container relative">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[550px]">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <img 
              src={lionInLab} 
              alt="AI Lab" 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50" />
          </div>
          
          {/* Animated Tech Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-16 right-16 w-20 h-20 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-pulse" />
          
          {/* Floating Binary/Tech Particles */}
          <div className="absolute top-20 left-1/2 text-primary/20 animate-float">
            <Binary size={24} />
          </div>
          <div className="absolute bottom-32 right-1/3 text-primary/15 animate-float" style={{ animationDelay: '1s' }}>
            <Zap size={20} />
          </div>
          
          {/* Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full min-h-[500px] md:min-h-[550px]">
            <div className="max-w-xl">
              {/* Section Header */}
              <span className="text-primary text-sm font-medium uppercase tracking-widest">AI Lab</span>
              
              {/* Heading */}
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Where Ideas
                <br />
                <span className="text-primary relative">
                  Come Alive
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C40 2 100 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40"/>
                  </svg>
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Explore our innovation hub where we prototype cutting-edge AI solutions, test bold ideas, and push the boundaries of what's possible.
              </p>

              {/* CTA */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6 relative overflow-hidden"
                  asChild
                >
                  <Link to="/ai-lab">
                    <span className="relative z-10 flex items-center">
                      Explore what we're upto
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AILabTeaser;
