import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  shortRole: string;
  bio: string[];
  linkedIn: string;
  cardColor: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Creig Phiri",
    role: "Co-Founder & CTO",
    shortRole: "Systems Architect • AI Strategist",
    bio: [
      "Creig is the engineering mind behind Boring Tech Solutions. Known for his ability to turn chaotic technical environments into structured, elegant systems, he brings over a decade of expertise across backend engineering, cloud architecture, compliance-focused design, and AI integration.",
      "He leads BTS with his signature philosophy: build slowly, think deeply, and always engineer for integrity.",
      "Creig also serves as Vice President of the ZCUSA, driving technology programs that uplift youth and newcomer communities."
    ],
    linkedIn: "https://linkedin.com/in/creigphiri",
    cardColor: "from-amber-400 to-amber-300",
    initials: "CP"
  },
  {
    name: "Shradha Maira",
    role: "Co-Founder & Strategy Director",
    shortRole: "Brand Architect • Strategist",
    bio: [
      "Shradha shapes the voice, strategy, and impact of Boring Tech Solutions. With 10+ years across global agencies and Canadian tech ecosystems, she brings sharp strategic thinking, deep empathy for users, and a storytelling instinct that translates complex technology into something people actually understand.",
      "She leads the company's marketing, partnerships, and product direction — and holds the operational vision of where Boring Tech is going next."
    ],
    linkedIn: "https://linkedin.com/in/shradhamaira",
    cardColor: "from-violet-300 to-indigo-200",
    initials: "SM"
  },
  {
    name: "Watson",
    role: "Software Engineer & Creative Technologist",
    shortRole: "Full-Stack • Cloud Architecture",
    bio: [
      "Watson is the engineer who turns ideas into clean, scalable systems. With experience across full-stack development, microservices, Google Cloud infrastructure, DevOps, VR prototyping, and agile environments, he brings a rare blend of creativity and discipline.",
      "He's known for building user-centric applications, optimizing system performance, and bringing a sense of joy and curiosity into every engineering challenge.",
      "A true inventor at heart — capable of turning abstract vision into something real, fast."
    ],
    linkedIn: "https://linkedin.com/in/watson",
    cardColor: "from-slate-300 to-gray-200",
    initials: "W"
  },
  {
    name: "Nomatter Anderson",
    role: "Cybersecurity Architect & AI Engineer",
    shortRole: "Security • Compliance Frameworks",
    bio: [
      "Anderson is the Collective's guardian — ensuring every system we build is secure, compliant, and resilient. With 14+ years across cloud security, cybersecurity architecture, incident response, and compliance frameworks like ISO 27001, NIST, SOC 2, HIPAA, GDPR, and Zero Trust, he brings heavyweight expertise to every project.",
      "He has engineered secure systems for AWS, Check Point, and enterprise clients across multiple continents.",
      "When Anderson is on a project, clients know their data, infrastructure, and governance are in safe, disciplined hands."
    ],
    linkedIn: "https://linkedin.com/in/nomatteranderson",
    cardColor: "from-blue-200 to-slate-200",
    initials: "NA"
  },
  {
    name: "Thando Ncube",
    role: "Senior Software Architect",
    shortRole: "Distributed Systems • ML Platforms",
    bio: [
      "Thando is a powerhouse architect whose work blends system design with machine intelligence. He has built large-scale distributed platforms, engineered microservices with sub-150ms response times, and designed graph-based recommendation engines powered by real-time machine learning.",
      "With experience across Seismic, Level Ground Creatives, and high-performance API infrastructures, Thando specializes in creating systems that are fault-tolerant, high-speed, and designed for growth.",
      "He brings a strategic mind and engineering precision that elevates every project the Collective touches."
    ],
    linkedIn: "https://linkedin.com/in/thandoncube",
    cardColor: "from-rose-200 to-orange-100",
    initials: "TN"
  }
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-dots opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            The Pride
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient">Collective</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A pride of deeply skilled experts who come together project-by-project to deliver work that moves the needle.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <button
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="group focus:outline-none focus:ring-2 focus:ring-primary rounded-[3rem]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-44 md:w-52 h-80 md:h-96 rounded-[3rem] overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Top colored section with name */}
                <div className={`h-[45%] bg-gradient-to-b ${member.cardColor} p-4 flex flex-col justify-end items-center text-center`}>
                  <h3 className="font-display text-lg md:text-xl font-bold text-charcoal-deep mb-1">
                    {member.name.split(' ')[0]}
                  </h3>
                  <p className="text-charcoal-deep/70 text-xs md:text-sm font-medium">
                    {member.shortRole.split(' • ')[0]}
                  </p>
                </div>
                
                {/* Bottom section with avatar */}
                <div className="h-[55%] bg-charcoal-deep flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-4 border-background/20 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {member.initials}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Profile Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className={`-mx-6 -mt-6 mb-6 p-8 bg-gradient-to-br ${selectedMember.cardColor} rounded-t-lg`}>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-charcoal-deep/90 flex items-center justify-center border-4 border-white/30 shadow-xl">
                      <span className="font-display text-2xl font-bold text-foreground">
                        {selectedMember.initials}
                      </span>
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-charcoal-deep">
                        {selectedMember.name}
                      </DialogTitle>
                      <p className="text-charcoal-deep/80 font-medium">
                        {selectedMember.role}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium">
                  {selectedMember.shortRole}
                </p>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {selectedMember.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white" 
                    asChild
                  >
                    <a 
                      href={selectedMember.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;
