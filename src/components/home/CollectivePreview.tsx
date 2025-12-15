import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const CollectivePreview = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
            <Users className="text-primary" size={28} />
          </div>

          {/* Content */}
          <span className="text-primary text-sm font-medium uppercase tracking-widest">The Boring Tech Collective</span>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Not an Agency. A <span className="text-gradient">Tactical Unit</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A Collective is a group of senior, low-ego professionals who assemble project by project to deliver high-impact solutions. Like a pride of lions moving with intention — strategic, efficient, and collaborative.
          </p>

          {/* Member Avatars Placeholder */}
          <div className="flex justify-center items-center gap-2 mb-10">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-muted border-2 border-card flex items-center justify-center text-muted-foreground text-xs font-medium -ml-3 first:ml-0"
              >
                {["CP", "SM", "W", "J", "T", "A"][index]}
              </div>
            ))}
            <div className="ml-2 text-muted-foreground text-sm">+ more</div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Apply to Join the Collective
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="outline">
              I'm a Student
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectivePreview;
