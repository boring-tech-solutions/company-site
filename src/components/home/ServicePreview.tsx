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
    ]
  },
  {
    icon: Compass,
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
    ]
  },
  {
    icon: Code,
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
    ]
  },
  {
    icon: Shield,
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
    ]
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
              className="bg-foreground rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98]"
              style={{ transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              {/* Card Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay to blend with color palette */}
                <div className="absolute inset-0 bg-background/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              </div>

              <div className="p-6 pt-4">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-background/10 border border-background/20 flex items-center justify-center flex-shrink-0 group-hover:bg-background/20 group-hover:border-background/30 transition-all duration-300">
                    <service.icon 
                      className="text-background icon-animate" 
                      size={24}
                    />
                  </div>

                  <div className="flex-grow">
                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-background transition-colors">
                      {service.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-background/80 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-background/60 mt-1.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
