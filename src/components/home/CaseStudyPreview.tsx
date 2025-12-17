import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const caseStudies = [
  {
    title: "AIFY",
    category: "AI Implementation",
    description: "Transforming business operations through intelligent automation and predictive analytics.",
    challenge: "Complex manual workflows",
    transformation: "70% efficiency gain",
    fullDescription: "AIFY partnered with us to revolutionize their operational workflows through cutting-edge AI implementation. Their team was drowning in manual data processing, repetitive tasks, and inefficient communication channels that were costing them valuable time and resources.",
    approach: "We developed a comprehensive AI-powered automation suite that included intelligent document processing, predictive analytics dashboards, and automated workflow orchestration. Our solution integrated seamlessly with their existing tech stack.",
    results: [
      "70% reduction in manual data processing time",
      "45% improvement in decision-making speed",
      "24/7 automated customer support handling",
      "Real-time predictive insights for business planning"
    ],
    technologies: ["Machine Learning", "NLP", "Python", "React", "AWS"],
    timeline: "4 months",
    bgColor: "bg-destructive",
    textColor: "text-white",
    mutedColor: "text-white/70",
  },
  {
    title: "YACO",
    category: "Custom Software",
    description: "Building robust infrastructure for youth advocacy and community organizing.",
    challenge: "Disconnected systems",
    transformation: "Unified platform",
    fullDescription: "Youth Advocacy & Community Organizing (YACO) needed a unified platform to coordinate their grassroots efforts across multiple communities. Their existing tools were fragmented, making collaboration difficult and impact measurement nearly impossible.",
    approach: "We built a custom software platform that unified communication, event management, volunteer coordination, and impact tracking into a single, intuitive interface designed specifically for community organizers.",
    results: [
      "300% increase in volunteer coordination efficiency",
      "Unified data across 15+ community chapters",
      "Real-time impact measurement and reporting",
      "Mobile-first design for field organizers"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    timeline: "6 months",
    bgColor: "bg-primary",
    textColor: "text-charcoal-deep",
    mutedColor: "text-charcoal-deep/70",
  },
  {
    title: "YDCS",
    category: "Data Compliance",
    description: "Comprehensive data compliance solution for youth-serving organizations.",
    challenge: "Compliance complexity",
    transformation: "Automated workflows",
    fullDescription: "Youth Data Compliance System (YDCS) was developed to address the critical need for PIPEDA and FOIP compliance in youth-serving organizations. These organizations handle sensitive data but often lack the resources to manage complex regulatory requirements.",
    approach: "We created an end-to-end compliance management system featuring automated consent tracking, intelligent data retention policies, comprehensive audit logging, and easy-to-use dashboards for compliance officers.",
    results: [
      "100% compliance with PIPEDA & FOIP requirements",
      "80% reduction in manual compliance tasks",
      "Automated consent renewal workflows",
      "Complete audit trail for regulatory inspections"
    ],
    technologies: ["TypeScript", "React", "Supabase", "Edge Functions", "Encryption"],
    timeline: "5 months",
    bgColor: "bg-charcoal",
    textColor: "text-white",
    mutedColor: "text-white/70",
  },
  {
    title: "QuizApp",
    category: "Learning Platform",
    description: "Empowering newcomers with accessible, structured citizenship learning.",
    challenge: "Fragmented resources",
    transformation: "Structured learning",
    fullDescription: "Newcomers preparing for the Canadian citizenship test often face fragmented, inaccessible learning resources. Materials are dense, language barriers are high, and many learners struggle to study consistently without guidance, feedback, or culturally inclusive support. Traditional study methods make it difficult to measure readiness, track progress, or adapt learning to individual needs—especially for adult learners balancing work, family, and settlement pressures.",
    approach: "We built QuizApp, a dedicated learning platform designed specifically for citizenship test preparation. QuizApp transforms the Discover Canada guide into structured, bite-sized quizzes that support repetition, comprehension, and confidence-building. The platform emphasizes clarity, accessibility, and consistency—meeting learners where they are. The experience is self-paced and intuitive, designed for adult learners and English language learners, and focused on retention, not rote memorization.",
    results: [
      "Improved learner engagement through interactive quizzes",
      "Clear progress tracking to support consistent study habits",
      "Increased learner confidence through immediate feedback",
      "Accessible learning experience for diverse newcomer communities",
      "Scalable platform suitable for workshops, classrooms, and independent study"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Tailwind"],
    timeline: "4 months",
    bgColor: "bg-blue-600",
    textColor: "text-white",
    mutedColor: "text-white/70",
  },
];

const CaseStudyPreview = () => {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Past Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Challenge → Approach →{" "}
              <span className="text-gradient">Transformation</span>
            </h2>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => setSelectedStudy(study)}
              className="group card-premium cursor-pointer flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`h-48 rounded-xl ${study.bgColor} mb-6 flex items-center justify-center overflow-hidden`}>
                <span className={`font-display text-4xl font-bold ${study.textColor} opacity-30 group-hover:opacity-50 transition-opacity`}>
                  {study.title}
                </span>
              </div>

              {/* Category */}
              <span className="text-primary text-xs font-medium uppercase tracking-widest mb-2">
                {study.category}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                {study.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {study.description}
              </p>

              {/* Stats */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Challenge</p>
                  <p className="text-sm font-medium">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Result</p>
                  <p className="text-sm font-medium text-primary">{study.transformation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Dialog */}
      <Dialog open={!!selectedStudy} onOpenChange={() => setSelectedStudy(null)}>
        <DialogContent className="max-w-3xl border-none p-0 overflow-hidden">
          {selectedStudy && (
            <div className={`relative min-h-[600px] ${selectedStudy.bgColor}`}>
              {/* Content */}
              <div className={`relative z-10 p-8 ${selectedStudy.textColor}`}>
                {/* Header */}
                <DialogHeader className="mb-6">
                  <span className={`text-xs font-medium uppercase tracking-widest ${selectedStudy.mutedColor} mb-2 block`}>
                    {selectedStudy.category}
                  </span>
                  <DialogTitle className={`font-display text-3xl md:text-4xl font-bold ${selectedStudy.textColor}`}>
                    {selectedStudy.title}
                  </DialogTitle>
                  <p className={`${selectedStudy.mutedColor} mt-2`}>
                    {selectedStudy.description}
                  </p>
                </DialogHeader>

                {/* Challenge Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={20} />
                    <h4 className="font-bold text-base uppercase tracking-wide">The Challenge</h4>
                  </div>
                  <p className={`${selectedStudy.mutedColor} leading-relaxed`}>
                    {selectedStudy.fullDescription}
                  </p>
                </div>

                {/* Approach Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={20} />
                    <h4 className="font-bold text-base uppercase tracking-wide">Our Approach</h4>
                  </div>
                  <p className={`${selectedStudy.mutedColor} leading-relaxed`}>
                    {selectedStudy.approach}
                  </p>
                </div>

                {/* Results Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={20} />
                    <h4 className="font-bold text-base uppercase tracking-wide">Results</h4>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedStudy.results.map((result, idx) => (
                      <li key={idx} className={`flex items-start gap-2 text-sm ${selectedStudy.mutedColor}`}>
                        <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Timeline */}
                <div className="flex flex-wrap gap-6 mb-6 pt-4 border-t border-white/20">
                  <div>
                    <p className={`text-xs ${selectedStudy.mutedColor} uppercase mb-1`}>Timeline</p>
                    <p className="text-sm font-semibold">{selectedStudy.timeline}</p>
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs ${selectedStudy.mutedColor} uppercase mb-1`}>Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs px-2 py-1 rounded-full ${selectedStudy.textColor === 'text-white' ? 'bg-white/20' : 'bg-charcoal-deep/20'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudyPreview;