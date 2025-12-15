import { Button } from "@/components/ui/button";
import { FlaskConical, ArrowRight, Sparkles } from "lucide-react";

const AILabTeaser = () => {
  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/3 rounded-full blur-3xl animate-float delay-300" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon Area */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-glow">
                    <FlaskConical className="text-primary" size={36} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-primary" size={18} />
                    <span className="text-primary text-sm font-medium uppercase tracking-widest">AI Lab</span>
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Step Into the Jeep
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6">
                    Explore the terrain we're charting next. Test our latest prototypes, join beta programs, or suggest the next experiment.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      Test a Prototype
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                    <Button variant="outline">
                      Join the Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILabTeaser;
