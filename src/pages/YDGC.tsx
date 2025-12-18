import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Lock,
  Eye,
  Trash2,
  Database,
  Scale,
  Heart,
  HelpCircle,
  Building2,
  Sparkles,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lionPresenting from "@/assets/lion-presenting.webp";
import lionServerRoom from "@/assets/lion-server-room.webp";
import lionsCoding from "@/assets/lions-coding.webp";
import lionsRooftop from "@/assets/lions-rooftop.webp";
import lionsHuddle from "@/assets/lions-huddle.webp";

const YDGC = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Consent & Purpose Tracking",
      description: "Document why youth data is collected, how it may be used, and who approved its use.",
      bgColor: "bg-[#D93D3D]",
    },
    {
      icon: Lock,
      title: "Role-Based Access Control",
      description: "Ensure staff and volunteers only access the data they are authorized to see.",
      bgColor: "bg-[#101A26]",
    },
    {
      icon: Trash2,
      title: "Automated Retention & Deletion",
      description: "Apply retention rules automatically and remove data when no longer required.",
      bgColor: "bg-[#F2C84B]",
      textDark: true,
    },
    {
      icon: Eye,
      title: "Audit Logs & Accountability",
      description: "Maintain clear, defensible records of data access and changes.",
      bgColor: "bg-[#1B3540]",
    },
    {
      icon: Database,
      title: "Program-Ready Infrastructure",
      description: "Support multiple programs, reporting periods, and youth cohorts.",
      bgColor: "bg-[#D9B343]",
      textDark: true,
    },
  ];

  const faqs = [
    {
      question: "Why is youth data governance becoming urgent right now?",
      answer: "Because the way data is handled has changed faster than the rules most organizations are relying on. In an AI-enabled environment, youth data can be copied, synced, shared, and retained indefinitely—often without clear visibility. Organizations that address this early are finding it easier to maintain funding and credibility.",
    },
    {
      question: "Are common tools like Dropbox or Google Drive a risk?",
      answer: "They can be. While convenient, these tools were not designed for youth data governance. They often lack clear retention rules, make it difficult to prove who accessed data and when, and do not reliably enforce role-based access as staff change.",
    },
    {
      question: "Is funding actually being affected by these issues?",
      answer: "Increasingly, yes. Funders are asking more detailed governance questions, expecting evidence not assurances, and flagging risk when answers are unclear. Organizations relying solely on shared storage tools often struggle to respond confidently.",
    },
    {
      question: "Can't we fix this with policies or staff training?",
      answer: "Policies and training are important, but they do not scale on their own. Most governance gaps appear when staff turnover occurs, volunteers rotate, or data lives longer than expected. YDGC turns policy into practice by enforcing governance automatically.",
    },
    {
      question: "Is YDGC difficult to adopt?",
      answer: "No. YDGC is designed for lean teams and real-world constraints. Most organizations find that automating governance reduces administrative burden, simplifies reporting, and frees staff to focus on service delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lionPresenting})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Data Compliance</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Youth Data, <span className="text-gradient">Governed With Care</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Data governance and compliance infrastructure designed specifically for Alberta organizations working with children and youth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6"
                asChild
              >
                <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="/contact">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is YDGC - Cards Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Governance <span className="text-gradient">Built Into Systems</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Security */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#D93D3D] p-8 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#101A26]/20" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#101A26]/10 translate-x-8 translate-y-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#101A26]/20 flex items-center justify-center mb-6">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Secure by Design</h3>
                <p className="text-white/80 text-sm">Built for organizations carrying a duty of care to protect sensitive youth information.</p>
              </div>
            </div>

            {/* Card 2 - Compliance */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#101A26] p-8 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#1B3540]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#F2C84B]/10 -translate-x-8 translate-y-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1B3540] flex items-center justify-center mb-6">
                  <Scale className="text-[#F2C84B]" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Compliance Ready</h3>
                <p className="text-white/80 text-sm">Aligned with PIPEDA, FOIP, and common funder expectations across Alberta.</p>
              </div>
            </div>

            {/* Card 3 - Ethics */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#F2C84B] p-8 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#D9B343] -translate-y-8 translate-x-8" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#101A26]/10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#101A26]/20 flex items-center justify-center mb-6">
                  <Heart className="text-[#101A26]" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#101A26] mb-2">Ethics at Core</h3>
                <p className="text-[#101A26]/70 text-sm">Shaped by direct experience working alongside children and youth in Alberta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Text Focused */}
      <section className="py-24 bg-[#1B3540]">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Core Features</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              What YDGC <span className="text-primary">Does</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border-2 border-primary/30 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon 
                    className="text-primary transition-all duration-500 group-hover:scale-110" 
                    size={28} 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section - Text Focused */}
      <section className="relative py-28 overflow-hidden bg-surface-teal">

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Clock className="w-6 h-6" />
              <span className="text-base font-semibold uppercase tracking-wider">Why Now</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A New Data <span className="text-gradient">Reality</span>
            </h2>

            <p className="text-foreground text-xl md:text-2xl mb-12 leading-relaxed">
              Youth-serving organizations are operating in a fundamentally different data environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left max-w-3xl mx-auto">
              {[
                "Clear consent and purpose for data collection",
                "Controlled access to sensitive information",
                "Defined retention and deletion practices",
                "Accountability during audits and funding reviews",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-foreground text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/30 max-w-3xl mx-auto">
              <p className="text-foreground text-xl font-semibold leading-relaxed">
                YDGC replaces uncertainty with structure—helping organizations meet modern expectations without slowing down service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* For Funders Section - Background Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={lionsHuddle} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl ml-auto">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">For Funders</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Designed With <span className="text-gradient">Funders in Mind</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              YDGC helps organizations demonstrate governance maturity to stakeholders
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "Strong data governance maturity" },
                { icon: Scale, text: "Reduced compliance and reputational risk" },
                { icon: Eye, text: "Operational readiness for audits" },
                { icon: Heart, text: "Responsible stewardship of funding" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border"
                >
                  <item.icon className="text-primary flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                  <p className="text-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1B3540]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
              <Shield className="text-primary" size={40} />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Build Trust Into Your Data Systems
            </h2>

            <p className="text-white/70 text-lg mb-10">
              Youth data deserves care, structure, and accountability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6"
                asChild
              >
                <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10" asChild>
                <a href="/contact">Discuss Partnerships</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer hideCTA />
      <AIChatbot />
    </div>
  );
};

export default YDGC;