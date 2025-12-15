import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Compass, Code, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Implementation & Automation",
    description: "Custom agents, workflow automation, document intelligence, and predictive analytics tailored for your business.",
    outcome: "Reduce costs and boost efficiency",
  },
  {
    icon: Compass,
    title: "Strategic AI Advisory",
    description: "Your starting point for AI. Includes readiness assessment, workflow diagnosis, and a tailored plan for your business.",
    outcome: "Clarity and confidence to move forward",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Backend systems, cloud infrastructure, secure APIs, and data pipelines built with precision.",
    outcome: "Reliable, scalable technology",
  },
  {
    icon: Shield,
    title: "Youth Data Compliance System",
    description: "PIPEDA & FOIP workflows, consent tracking, automated retention, and audit logs for youth-serving organizations.",
    outcome: "Reduce legal and operational risk",
  },
];

const ServicePreview = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Practical Solutions,{" "}
              <span className="text-gradient">Real Results</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto group">
            Explore All Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-foreground border border-foreground/90 rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98]"
              style={{ transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-background/10 border border-background/20 flex items-center justify-center flex-shrink-0 group-hover:bg-background/20 group-hover:border-background/30 transition-all duration-300">
                  <service.icon 
                    className="text-background icon-animate" 
                    size={28}
                  />
                </div>

                <div className="flex-grow">
                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mb-2 text-background transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-background/70 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Outcome */}
                  <div className="inline-flex items-center gap-2 text-background text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-background" />
                    {service.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
