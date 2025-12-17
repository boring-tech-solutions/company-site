import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Clock, 
  FileSearch, 
  Layers, 
  CheckCircle2, 
  Heart, 
  Building2,
  Sparkles,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const YDGC = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Consent & Purpose Tracking",
      description: "Document why youth data is collected, how it may be used, and who approved its use—clearly and consistently."
    },
    {
      icon: Users,
      title: "Role-Based Access Control",
      description: "Ensure staff and volunteers only access the data they are authorized to see."
    },
    {
      icon: Clock,
      title: "Automated Retention & Secure Deletion",
      description: "Apply retention rules automatically and remove data when it is no longer required—reducing manual risk and oversight gaps."
    },
    {
      icon: FileSearch,
      title: "Audit Logs & Accountability",
      description: "Maintain clear, defensible records of data access and changes—critical during audits and funding reviews."
    },
    {
      icon: Layers,
      title: "Program-Ready Infrastructure",
      description: "Support multiple programs, reporting periods, and youth cohorts without duplicating systems."
    }
  ];

  const complianceFrameworks = [
    "PIPEDA (Personal Information Protection and Electronic Documents Act)",
    "FOIP (Freedom of Information and Protection of Privacy Act, Alberta)",
    "Common governance expectations from Alberta-based funders and public bodies"
  ];

  const ethicsPrinciples = [
    "Data minimization by default",
    "Clear purpose limitation",
    "Respect for youth dignity",
    "No profiling, surveillance, or secondary data use"
  ];

  const funderBenefits = [
    "Strong data governance maturity",
    "Reduced compliance and reputational risk",
    "Operational readiness for audits and renewals",
    "Responsible stewardship of public and donor funding"
  ];

  const adoptionReasons = [
    "AI-enabled tools are becoming unavoidable in everyday operations",
    "Funder expectations are becoming clearer, even when not formally mandated",
    "Manual processes do not scale across programs, cohorts, and staff turnover",
    "Boards and leadership are asking sharper questions about risk and accountability"
  ];

  const faqs = [
    {
      question: "Why is youth data governance becoming a priority now?",
      answer: "As digital and AI-assisted tools become more common, organizations are expected to demonstrate clearer oversight of how sensitive data is collected, accessed, retained, and deleted. Youth data carries a higher duty of care, and governance expectations are rising accordingly."
    },
    {
      question: "Is this about fear of AI or data misuse?",
      answer: "No. YDGC is not designed around fear. It is designed around clarity and responsibility. AI has accelerated how data moves and is processed. YDGC helps organizations ensure their systems keep pace—without restricting innovation or service delivery."
    },
    {
      question: "Are organizations being forced to adopt platforms like YDGC?",
      answer: "In most cases, adoption is driven by funder and governance expectations, not formal mandates. Organizations are choosing stronger data governance because funding, trust, and accountability are increasingly connected."
    },
    {
      question: "Is YDGC only for organizations worried about compliance?",
      answer: "No. While compliance is important, most organizations adopt YDGC to reduce operational risk, simplify reporting and audits, and build long-term credibility with funders and boards. Compliance becomes a by-product of good governance."
    },
    {
      question: "Does YDGC limit how organizations can use technology or AI?",
      answer: "No. YDGC does not prohibit tools or innovation. It provides guardrails—ensuring youth data is handled ethically, with clear purpose and accountability."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />
          
          <div className="section-container relative text-center py-24">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
              <Shield size={18} />
              <span>By Boring Tech Solutions</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Youth Data,<br />
              <span className="text-primary">Governed With Care</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Youth Data Governance & Compliance Infrastructure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group" asChild>
                <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">
                  See How Governance Works
                  <ChevronDown className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What Is YDGC */}
        <section className="py-24 bg-card/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>What Is YDGC</span>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                YDGC is a youth data governance and compliance infrastructure designed for Alberta-based organizations that work with children and youth.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                It embeds ethical data handling, accountability, and compliance directly into daily operations—so governance is built into systems, not left to policy binders or manual processes.
              </p>
              <p className="text-lg md:text-xl text-foreground font-medium mt-6">
                YDGC is delivered as a secure, subscription-based platform and is purpose-built for organizations carrying a duty of care.
              </p>
            </div>
          </div>
        </section>

        {/* Why YDGC Exists */}
        <section className="py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>Why YDGC Exists</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                A New Data Reality
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Youth-serving organizations are operating in a fundamentally different data environment than even a few years ago.
                </p>
                <p>
                  In the age of AI, sensitive youth information can move faster, be copied more easily, and be processed by tools never designed with children's data in mind. At the same time, expectations around privacy, accountability, and data stewardship are rising across Alberta's funding and regulatory landscape.
                </p>
                <p>
                  Most organizations did not set out to build complex data systems. Many relied on spreadsheets, shared drives, and email—tools that worked when data volumes were smaller and expectations were lower.
                </p>
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-xl font-semibold mb-6">Today, organizations are being asked to demonstrate:</h3>
                <ul className="space-y-4">
                  {[
                    "Clear consent and purpose for data collection",
                    "Controlled access to sensitive information",
                    "Defined retention and deletion practices",
                    "Accountability during audits and funding reviews"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                In many cases, stronger data governance has become essential to maintaining funding, trust, and credibility—not because of fear, but because responsible stewardship is now part of organizational maturity.
              </p>
              <p className="mt-6 text-lg font-medium text-foreground">
                YDGC exists to support this shift. It replaces uncertainty with structure and helps organizations meet modern expectations without slowing down service delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Why Organizations Are Adopting Now */}
        <section className="py-24 bg-card/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>Timing</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why Organizations Are Adopting YDGC Now
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Organizations across Alberta are strengthening their data governance because:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {adoptionReasons.map((reason, index) => (
                  <div key={index} className="p-6 rounded-xl bg-background border border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg font-medium text-foreground">
                YDGC supports organizations that want to stay ahead—by embedding governance into systems early, rather than reacting under pressure later.
              </p>
            </div>
          </div>
        </section>

        {/* What YDGC Does */}
        <section id="how-it-works" className="py-24">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>Features</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                What YDGC Does
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 bg-card/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Shield size={18} />
                <span>Compliance</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Built for Alberta's Compliance Reality
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                YDGC translates Alberta's privacy expectations into practical, operational workflows. It is designed to align with:
              </p>

              <div className="space-y-4 mb-8">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{framework}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground italic">
                YDGC does not replace legal advice. It provides systems that make compliance achievable in practice.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-foreground font-medium text-center">
                  Compliance implemented through systems—not memory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics Section */}
        <section className="py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Heart size={18} />
                <span>Ethics</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ethics at the Core
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                YDGC is shaped by direct experience working alongside children, youth, and vulnerable communities in Alberta.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This includes long-term volunteer mentorship with Big Brothers Big Sisters of Edmonton and career mentorship through programs such as All In For Youth—where trust, discretion, and care are essential.
              </p>

              <h3 className="font-display text-xl font-semibold mb-6">These experiences inform YDGC's design principles:</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {ethicsPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{principle}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg font-medium text-foreground">
                Ethics are not an add-on. They are built into how the system works.
              </p>
            </div>
          </div>
        </section>

        {/* Funders Section */}
        <section className="py-24 bg-card/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Building2 size={18} />
                <span>For Funders</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Designed With Funders in Mind
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                YDGC helps organizations demonstrate:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {funderBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-lg font-semibold mb-4">It is well-suited for organizations engaging with:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary" size={16} />
                  Municipal, provincial, and federal funding programs
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary" size={16} />
                  Alberta-based innovation and capacity-building grants
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary" size={16} />
                  Foundations prioritizing accountability and trust
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why BTS Section */}
        <section className="py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>Our Approach</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Boring Tech Solutions
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Boring Tech Solutions builds calm, reliable infrastructure for organizations doing important work.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Ethical Technology Design", icon: Heart },
                  { title: "Compliance-Ready Systems", icon: Shield },
                  { title: "Long-Term Sustainability", icon: Clock }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border">
                    <item.icon className="text-primary mx-auto mb-4" size={32} />
                    <p className="font-medium">{item.title}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg font-medium text-foreground">
                Our approach favors clarity, responsibility, and trust.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-card/50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                  <Sparkles size={18} />
                  <span>FAQ</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Build Trust Into Your Data Systems
              </h2>
              
              <p className="text-lg text-muted-foreground mb-10">
                Youth data deserves care, structure, and accountability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group" asChild>
                  <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">
                    Discuss Pilots or Partnerships
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default YDGC;
