import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "AIFY",
    category: "AI Implementation",
    description: "Transforming business operations through intelligent automation and predictive analytics.",
    challenge: "Complex manual workflows",
    transformation: "70% efficiency gain",
  },
  {
    title: "YACO",
    category: "Custom Software",
    description: "Building robust infrastructure for youth advocacy and community organizing.",
    challenge: "Disconnected systems",
    transformation: "Unified platform",
  },
  {
    title: "YDCS",
    category: "Data Compliance",
    description: "Comprehensive data compliance solution for youth-serving organizations.",
    challenge: "Compliance complexity",
    transformation: "Automated workflows",
  },
];

const CaseStudyPreview = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Case Studies</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Challenge → Approach →{" "}
              <span className="text-gradient">Transformation</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto group">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group card-premium cursor-pointer flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="h-48 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-6 flex items-center justify-center overflow-hidden">
                <span className="font-display text-4xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
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
    </section>
  );
};

export default CaseStudyPreview;
