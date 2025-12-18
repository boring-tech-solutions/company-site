import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Globe } from "lucide-react";
import prideOfLions from "@/assets/pride-of-lions.webp";

const initiatives = [
  {
    icon: GraduationCap,
    title: "QuizApp.ca",
    description: "Educational support for newcomers preparing for Canadian citizenship.",
    bgColor: "bg-[#D93D3D]",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="140" cy="60" r="50" fill="#101A26" />
        <polygon points="30,20 90,20 60,70" fill="#101A26" />
        <rect x="20" y="140" width="40" height="40" fill="#101A26" transform="rotate(45 40 160)" />
        <circle cx="60" cy="100" r="12" fill="#101A26" />
        <circle cx="60" cy="100" r="6" fill="#F2C84B" />
        <path d="M 100 180 Q 130 140 160 180" fill="#101A26" />
      </svg>
    ),
  },
  {
    icon: Users,
    title: "Tech Youth Mentorship",
    description: "Training the next generation of engineers and tech leaders.",
    bgColor: "bg-[#101A26]",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <polygon points="50,30 80,30 65,60" fill="#1B3540" />
        <polygon points="120,20 150,20 135,50" fill="#1B3540" />
        <circle cx="120" cy="120" r="45" fill="#1B3540" />
        <circle cx="120" cy="120" r="30" fill="#101A26" />
        <rect x="60" y="100" width="20" height="20" fill="#F2C84B" transform="rotate(45 70 110)" />
        <circle cx="160" cy="60" r="8" fill="#F2C84B" />
        <circle cx="160" cy="60" r="4" fill="#101A26" />
        <path d="M 40 160 Q 80 120 80 180" fill="#1B3540" />
      </svg>
    ),
  },
  {
    icon: Globe,
    title: "Civic Leadership",
    description: "Creig serves as Vice President of ZCUSA, building stronger communities.",
    bgColor: "bg-[#F2C84B]",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="50" cy="80" r="60" fill="#D9B343" />
        <circle cx="140" cy="60" r="20" fill="#1B3540" />
        <circle cx="140" cy="60" r="10" fill="#101A26" />
        <polygon points="150,140 180,140 165,170" fill="#D9B343" />
        <rect x="80" y="130" width="25" height="25" fill="#1B3540" transform="rotate(45 92 142)" />
        <circle cx="60" cy="160" r="6" fill="#D93D3D" />
      </svg>
    ),
  },
];

const CommunitySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section id="community" className="pt-32 pb-24 relative">
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

      {/* Initiatives Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Our Initiatives</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setHoveredIndex(index)}
              >
                {/* Geometric Art Card */}
                <div className={`${initiative.bgColor} aspect-[4/5] rounded-2xl overflow-hidden relative transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                  {initiative.shapes}
                </div>
                
                {/* Title Below Card */}
                <h3 className="font-display font-bold text-lg mt-4 text-center uppercase tracking-wide text-foreground">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center mt-1">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>

          {/* Expanded Card Overlay */}
          {hoveredIndex !== null && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in cursor-pointer"
              onClick={() => setHoveredIndex(null)}
            >
              <div 
                className="w-[90vw] max-w-md animate-scale-in cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`${initiatives[hoveredIndex].bgColor} aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl`}>
                  {initiatives[hoveredIndex].shapes}
                </div>
                <h3 className="font-display font-bold text-xl mt-6 text-center uppercase tracking-wide text-foreground">
                  {initiatives[hoveredIndex].title}
                </h3>
                <p className="text-muted-foreground text-base text-center mt-2">
                  {initiatives[hoveredIndex].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
