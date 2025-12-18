import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Globe } from "lucide-react";
import prideOfLions from "@/assets/pride-of-lions.webp";

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
    <>
      {/* Hero Section with Background Image */}
      <section id="community" className="py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${prideOfLions})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-primary" size={20} />
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Community</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technology With <span className="text-gradient">Purpose</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              We believe in building technology that serves communities. Beyond our client work, we invest in initiatives that create lasting positive impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Partner With Us for Impact
              </Button>
              <Button variant="outline">
                Support Our Community Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section with Solid Background */}
      <section className="py-20 bg-surface-teal">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="card-premium flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <initiative.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
