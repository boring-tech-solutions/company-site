import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Globe } from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "QuizApp.ca",
    description: "Educational support for newcomers preparing for Canadian citizenship.",
  },
  {
    icon: Users,
    title: "Tech Youth Mentorship",
    description: "Training the next generation of engineers and tech leaders.",
  },
  {
    icon: Globe,
    title: "Civic Leadership",
    description: "Creig serves as Vice President of ZCUSA, building stronger communities.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative bg-surface-navy">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-navy via-surface-teal/30 to-surface-navy" />
      
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-primary" size={20} />
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Community</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Technology With <span className="text-gradient">Purpose</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              We believe in building technology that serves communities. Beyond our client work, we invest in initiatives that create lasting positive impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Partner With Us for Impact
              </Button>
              <Button variant="outline">
                Support Our Community Work
              </Button>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="card-premium flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <initiative.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
