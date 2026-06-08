import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../../shared/case-studies.js";

const CaseStudyPreview = () => {
  return (
    <section id="case-studies" className="relative py-[75px] bg-surface-navy">
      <div className="section-container">
        <div className="mb-16">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Our Projects
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Challenge → Approach →{" "}
              <span className="text-gradient">Transformation</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={study.path}
              className="group card-premium-no-glow flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div
                className={`h-48 rounded-xl ${study.bgColor} mb-6 flex items-center justify-center overflow-hidden`}
              >
                {study.image ? (
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span
                    className={`font-display text-4xl font-bold ${study.textColor} opacity-30 group-hover:opacity-50 transition-opacity`}
                  >
                    {study.client}
                  </span>
                )}
              </div>

              <span className="text-primary text-xs font-medium uppercase tracking-widest mb-2">
                {study.category}
              </span>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                {study.client}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </h3>

              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {study.summary}
              </p>

              <div className="flex gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Challenge</p>
                  <p className="text-sm font-medium">{study.cardChallenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Result</p>
                  <p className="text-sm font-medium text-primary">{study.cardOutcome}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
