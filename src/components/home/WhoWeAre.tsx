import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import lionsAtWork from "@/assets/lions-at-work.webp";

const teamMembers = [
  { initials: "CP" },
  { initials: "SM" },
  { initials: "W" },
  { initials: "J" },
  { initials: "T" },
  { initials: "A" },
];

const WhoWeAre = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <img 
        src={lionsAtWork} 
        alt="The Boring Tech Collective - Lions at work"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal-deep/90" />
      
      {/* Content */}
      <div className="relative z-10 section-container py-24 flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
          <Users className="text-primary" size={28} />
        </div>
        
        {/* Label */}
        <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
          The Boring Tech Collective
        </span>
        
        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Not an Agency. A{" "}
          <span className="text-gradient">Tactical Unit</span>.
        </h2>
        
        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          A Collective is a group of senior, low-ego professionals who assemble project 
          by project to deliver high-impact solutions. Like a pride of lions moving with 
          intention — strategic, efficient, and collaborative.
        </p>
        
        {/* Team Avatars */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="w-12 h-12 rounded-full bg-charcoal border-2 border-border flex items-center justify-center text-sm font-medium text-muted-foreground"
            >
              {member.initials}
            </div>
          ))}
          <div className="text-muted-foreground text-sm ml-2">
            + more
          </div>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-5 group" asChild>
            <Link to="/community">
              Apply to Join the Collective
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
          <Button variant="outline" className="text-base px-6 py-5 border-border hover:border-primary/50" asChild>
            <Link to="/contact">
              I'm a Student
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;