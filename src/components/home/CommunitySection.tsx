import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Globe } from "lucide-react";
import prideOfLions from "@/assets/pride-of-lions.webp";

const initiatives = [
  {
    icon: GraduationCap,
    title: "QuizApp.ca",
    description: "Educational support for newcomers preparing for Canadian citizenship.",
    bgColor: "bg-[#FF6B6B]",
    accentColor: "#4A5D4A",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="140" cy="60" r="50" fill="#4A5D4A" />
        <polygon points="30,20 90,20 60,70" fill="#4A5D4A" />
        <rect x="20" y="140" width="40" height="40" fill="#4A5D4A" transform="rotate(45 40 160)" />
        <circle cx="60" cy="100" r="12" fill="#4A5D4A" />
        <circle cx="60" cy="100" r="6" fill="#22C55E" />
        <path d="M 100 180 Q 130 140 160 180" fill="#4A5D4A" />
      </svg>
    ),
  },
  {
    icon: Users,
    title: "Tech Youth Mentorship",
    description: "Training the next generation of engineers and tech leaders.",
    bgColor: "bg-[#1E2A4A]",
    accentColor: "#3B82F6",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <polygon points="50,30 80,30 65,60" fill="#2D3A5A" />
        <polygon points="120,20 150,20 135,50" fill="#2D3A5A" />
        <circle cx="120" cy="120" r="45" fill="#06B6D4" />
        <circle cx="120" cy="120" r="30" fill="#1E2A4A" />
        <rect x="60" y="100" width="20" height="20" fill="#06B6D4" transform="rotate(45 70 110)" />
        <circle cx="160" cy="60" r="8" fill="#06B6D4" />
        <circle cx="160" cy="60" r="4" fill="#1E2A4A" />
        <path d="M 40 160 Q 80 120 80 180" fill="#2D3A5A" />
      </svg>
    ),
  },
  {
    icon: Globe,
    title: "Civic Leadership",
    description: "Creig serves as Vice President of ZCUSA, building stronger communities.",
    bgColor: "bg-[#FBBF24]",
    accentColor: "#F97316",
    shapes: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="50" cy="80" r="60" fill="#F97316" />
        <circle cx="140" cy="60" r="20" fill="#06B6D4" />
        <circle cx="140" cy="60" r="10" fill="#1E3A5F" />
        <polygon points="150,140 180,140 165,170" fill="#F97316" />
        <rect x="80" y="130" width="25" height="25" fill="#06B6D4" transform="rotate(45 92 142)" />
        <circle cx="60" cy="160" r="6" fill="#06B6D4" />
      </svg>
    ),
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

      {/* Initiatives Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Geometric Art Card */}
                <div className={`${initiative.bgColor} aspect-[4/5] rounded-2xl overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}>
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
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
