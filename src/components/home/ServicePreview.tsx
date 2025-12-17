import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Compass, Code, Shield, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import serviceAiAutomation from "@/assets/lion-ai-automation.webp";
import serviceStrategicAdvisory from "@/assets/lion-strategic-advisory.webp";
import serviceSoftwareDev from "@/assets/lion-software-dev.webp";
import serviceCompliance from "@/assets/lion-compliance.webp";

const services = [
  {
    icon: Bot,
    category: "AI Implementation",
    title: "AI Implementation & Automation",
    description: "Custom agents, workflow automation, document intelligence, and predictive analytics tailored for your business.",
    outcome: "Reduce costs and boost efficiency",
    image: serviceAiAutomation,
    expandedDescription: "Transform your operations with intelligent automation that works around the clock. We build custom AI agents that handle repetitive tasks, process documents with human-like understanding, and provide predictive insights that drive smarter decisions. From customer service chatbots to complex workflow orchestration, we deliver solutions that integrate seamlessly with your existing systems.",
    benefits: [
      "24/7 automated task handling",
      "90% reduction in manual data processing",
      "Real-time predictive analytics",
      "Seamless integration with existing tools"
    ],
    bgColor: "bg-gradient-to-br from-amber-500/20 to-yellow-600/30",
    layout: "image-right" as const
  },
  {
    icon: Compass,
    category: "Strategic Advisory",
    title: "Strategic AI Advisory",
    description: "Your starting point for AI. Includes readiness assessment, workflow diagnosis, and a tailored plan for your business.",
    outcome: "Clarity and confidence to move forward",
    image: serviceStrategicAdvisory,
    expandedDescription: "Not sure where to start with AI? We guide you through the maze. Our advisory service provides a comprehensive assessment of your current operations, identifies high-impact opportunities for AI integration, and creates a practical roadmap tailored to your business goals and budget. No jargon, no hype—just clear, actionable guidance.",
    benefits: [
      "Complete AI readiness assessment",
      "Prioritized opportunity mapping",
      "Custom implementation roadmap",
      "ROI projections and risk analysis"
    ],
    bgColor: "bg-gradient-to-br from-primary/20 to-amber-600/30",
    layout: "image-bottom" as const
  },
  {
    icon: Code,
    category: "Software Development",
    title: "Custom Software Development",
    description: "Backend systems, cloud infrastructure, secure APIs, and data pipelines built with precision.",
    outcome: "Reliable, scalable technology",
    image: serviceSoftwareDev,
    expandedDescription: "Build the foundation your business needs to scale. We architect and develop robust backend systems, cloud-native infrastructure, and secure APIs that power your applications. Our data pipelines ensure your information flows efficiently from source to insight, enabling real-time decision making and seamless integrations.",
    benefits: [
      "Scalable cloud architecture",
      "Enterprise-grade security",
      "High-performance APIs",
      "Real-time data pipelines"
    ],
    bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-600/30",
    layout: "image-bottom" as const
  },
  {
    icon: Shield,
    category: "Compliance & Security",
    title: "Youth Data Compliance System",
    description: "PIPEDA & FOIP workflows, consent tracking, automated retention, and audit logs for youth-serving organizations.",
    outcome: "Reduce legal and operational risk",
    image: serviceCompliance,
    expandedDescription: "Protect the young people you serve while meeting regulatory requirements. Our compliance system automates the complex workflows required by PIPEDA and FOIP, tracks consent across all touchpoints, manages data retention schedules, and maintains comprehensive audit logs. Purpose-built for youth-serving organizations who take privacy seriously.",
    benefits: [
      "Automated PIPEDA & FOIP compliance",
      "Comprehensive consent management",
      "Intelligent retention scheduling",
      "Complete audit trail"
    ],
    bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-600/30",
    layout: "image-right" as const
  },
];

const ServicePreview = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#1B1B1B' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Agile Solutions,{" "}
            <span className="text-gradient">Measurable Results</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className={`${service.bgColor} rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] border border-border/20`}
              style={{ transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              {service.layout === 'image-right' ? (
                /* Layout: Text left, Image right */
                <div className="flex flex-col md:flex-row h-full min-h-[320px]">
                  {/* Text Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-foreground/60 text-sm font-medium">{service.category}</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold mt-2 mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-foreground font-medium text-sm group-hover:gap-3 transition-all">
                      More about {service.category}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl m-4 md:m-0 md:mr-4 md:my-4 group-hover:scale-105 transition-transform duration-500"
                      style={{ width: 'calc(100% - 2rem)', height: 'calc(100% - 2rem)' }}
                    />
                  </div>
                </div>
              ) : (
                /* Layout: Text top, Image bottom */
                <div className="flex flex-col h-full min-h-[380px]">
                  {/* Text Content */}
                  <div className="p-6 md:p-8 flex-shrink-0">
                    <span className="text-foreground/60 text-sm font-medium">{service.category}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold mt-2 mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-foreground font-medium text-sm group-hover:gap-3 transition-all">
                      More about {service.category}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  {/* Image */}
                  <div className="flex-1 px-4 pb-4 min-h-[160px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
          {selectedService && (
            <>
              {/* Image */}
              <div className="relative w-full h-48 md:h-56">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="p-6 pt-0 -mt-12 relative">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <selectedService.icon className="text-primary" size={24} />
                    </div>
                    <DialogTitle className="font-display text-2xl font-bold text-foreground">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                {/* Expanded Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedService.expandedDescription}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Talk to Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicePreview;
