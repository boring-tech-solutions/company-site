import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Compass, Code, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import serviceAiNetwork from "@/assets/service-ai-network.webp";
import serviceCompass from "@/assets/service-compass.webp";
import serviceCode from "@/assets/service-code.webp";
import serviceSecurity from "@/assets/service-security.webp";

const services = [
  {
    icon: Bot,
    title: "AI Implementation & Automation",
    description: "Custom agents, workflow automation, document intelligence, and predictive analytics tailored for your business.",
    image: serviceAiNetwork,
    expandedDescription: "Transform your operations with intelligent automation that works around the clock. We build custom AI agents that handle repetitive tasks, process documents with human-like understanding, and provide predictive insights that drive smarter decisions.",
    benefits: [
      "24/7 automated task handling",
      "90% reduction in manual data processing",
      "Real-time predictive analytics",
      "Seamless integration with existing tools"
    ],
    overlayColor: "bg-destructive/80 group-hover:bg-destructive/95",
    textColor: "text-white",
    dialogBg: "bg-destructive",
    dialogText: "text-white",
    dialogMuted: "text-white/70",
  },
  {
    icon: Compass,
    title: "Strategic AI Advisory",
    description: "Your starting point for AI. Includes readiness assessment, workflow diagnosis, and a tailored plan for your business.",
    image: serviceCompass,
    expandedDescription: "Not sure where to start with AI? We guide you through the maze. Our advisory service provides a comprehensive assessment of your current operations and creates a practical roadmap tailored to your business goals.",
    benefits: [
      "Complete AI readiness assessment",
      "Prioritized opportunity mapping",
      "Custom implementation roadmap",
      "ROI projections and risk analysis"
    ],
    overlayColor: "bg-white/90 group-hover:bg-white/95",
    textColor: "text-charcoal-deep",
    dialogBg: "bg-white",
    dialogText: "text-charcoal-deep",
    dialogMuted: "text-charcoal-deep/70",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Backend systems, cloud infrastructure, secure APIs, and data pipelines built with precision.",
    image: serviceCode,
    expandedDescription: "Build the foundation your business needs to scale. We architect and develop robust backend systems, cloud-native infrastructure, and secure APIs that power your applications.",
    benefits: [
      "Scalable cloud architecture",
      "Enterprise-grade security",
      "High-performance APIs",
      "Real-time data pipelines"
    ],
    overlayColor: "bg-primary/90 group-hover:bg-primary/95",
    textColor: "text-charcoal-deep",
    dialogBg: "bg-primary",
    dialogText: "text-charcoal-deep",
    dialogMuted: "text-charcoal-deep/70",
  },
  {
    icon: Shield,
    title: "Youth Data Compliance System",
    description: "PIPEDA & FOIP workflows, consent tracking, automated retention, and audit logs for youth-serving organizations.",
    image: serviceSecurity,
    expandedDescription: "Protect the young people you serve while meeting regulatory requirements. Our compliance system automates the complex workflows required by PIPEDA and FOIP.",
    benefits: [
      "Automated PIPEDA & FOIP compliance",
      "Comprehensive consent management",
      "Intelligent retention scheduling",
      "Complete audit trail"
    ],
    overlayColor: "bg-charcoal/90 group-hover:bg-charcoal/95",
    textColor: "text-white",
    dialogBg: "bg-charcoal",
    dialogText: "text-white",
    dialogMuted: "text-white/70",
  },
];

const ServicePreview = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
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
              className="relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 min-h-[400px] md:min-h-[450px]"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${service.overlayColor} transition-all duration-500`} />
              
              {/* Content */}
              <div className={`relative z-10 p-8 h-full flex flex-col justify-end ${service.textColor}`}>
                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-base leading-relaxed opacity-80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className={`max-w-2xl border-none p-0 overflow-hidden ${selectedService?.dialogBg}`}>
          {selectedService && (
            <>
              {/* Image - same as card */}
              <div className="relative w-full h-56 md:h-64">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${selectedService.dialogBg} opacity-40`} />
                <div className={`absolute inset-0 bg-gradient-to-t from-current via-transparent to-transparent ${selectedService.dialogBg}`} style={{ opacity: 0.8 }} />
              </div>

              <div className="p-6 pt-0 -mt-12 relative">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl ${selectedService.dialogText === 'text-white' ? 'bg-white/20 border-white/30' : 'bg-charcoal-deep/20 border-charcoal-deep/30'} border flex items-center justify-center`}>
                      <selectedService.icon className={selectedService.dialogText} size={24} />
                    </div>
                    <DialogTitle className={`font-display text-2xl font-bold ${selectedService.dialogText}`}>
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                {/* Expanded Description */}
                <p className={`${selectedService.dialogMuted} leading-relaxed mb-6`}>
                  {selectedService.expandedDescription}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${selectedService.dialogText} mb-3 uppercase tracking-wide`}>Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className={`flex items-center gap-2 text-sm ${selectedService.dialogMuted}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedService.dialogText === 'text-white' ? 'bg-white' : 'bg-charcoal-deep'} flex-shrink-0`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
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