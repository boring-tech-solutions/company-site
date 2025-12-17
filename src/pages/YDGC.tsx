import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, FileSearch, Layers, CheckCircle2, Heart, Building2, Sparkles, ArrowRight, ChevronDown, Lock, Eye, Trash2, Database, TrendingUp, AlertTriangle, Scale, BadgeCheck, Briefcase, Globe, Lightbulb, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ydgcHero from "@/assets/ydgc-hero.webp";
import ydgcCompliance from "@/assets/ydgc-compliance.webp";
import ydgcEthics from "@/assets/ydgc-ethics.webp";
const YDGC = () => {
  const features = [{
    icon: CheckCircle2,
    title: "Consent & Purpose Tracking",
    description: "Document why youth data is collected, how it may be used, and who approved its use.",
    color: "from-emerald-500/20 to-emerald-500/5"
  }, {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Ensure staff and volunteers only access the data they are authorized to see.",
    color: "from-blue-500/20 to-blue-500/5"
  }, {
    icon: Trash2,
    title: "Automated Retention & Deletion",
    description: "Apply retention rules automatically and remove data when no longer required.",
    color: "from-rose-500/20 to-rose-500/5"
  }, {
    icon: Eye,
    title: "Audit Logs & Accountability",
    description: "Maintain clear, defensible records of data access and changes.",
    color: "from-amber-500/20 to-amber-500/5"
  }, {
    icon: Database,
    title: "Program-Ready Infrastructure",
    description: "Support multiple programs, reporting periods, and youth cohorts.",
    color: "from-violet-500/20 to-violet-500/5"
  }];
  const adoptionReasons = [{
    icon: Lightbulb,
    text: "AI-enabled tools are becoming unavoidable in everyday operations"
  }, {
    icon: TrendingUp,
    text: "Funder expectations are becoming clearer, even when not formally mandated"
  }, {
    icon: Users,
    text: "Manual processes do not scale across programs, cohorts, and staff turnover"
  }, {
    icon: AlertTriangle,
    text: "Boards and leadership are asking sharper questions about risk"
  }];
  const complianceFrameworks = [{
    name: "PIPEDA",
    full: "Personal Information Protection and Electronic Documents Act"
  }, {
    name: "FOIP",
    full: "Freedom of Information and Protection of Privacy Act, Alberta"
  }, {
    name: "Funders",
    full: "Common governance expectations from Alberta-based funders and public bodies"
  }];
  const ethicsPrinciples = [{
    icon: Database,
    text: "Data minimization by default"
  }, {
    icon: Scale,
    text: "Clear purpose limitation"
  }, {
    icon: Heart,
    text: "Respect for youth dignity"
  }, {
    icon: Shield,
    text: "No profiling or surveillance"
  }];
  const funderBenefits = [{
    icon: BadgeCheck,
    text: "Strong data governance maturity"
  }, {
    icon: Shield,
    text: "Reduced compliance and reputational risk"
  }, {
    icon: FileSearch,
    text: "Operational readiness for audits"
  }, {
    icon: Heart,
    text: "Responsible stewardship of funding"
  }];
  const faqs = [{
    question: "Why is youth data governance becoming urgent right now?",
    answer: "Because the way data is handled has changed faster than the rules most organizations are relying on. In an AI-enabled environment, youth data can be copied, synced, shared, and retained indefinitely—often without clear visibility. Funders and reviewers are increasingly aware of this gap and are asking organizations to demonstrate how governance actually works in practice, not just on paper. Organizations that address this early are finding it easier to maintain funding and credibility. Those that wait are often forced to react under pressure."
  }, {
    question: "Are common tools like Dropbox, Google Drive, or shared folders a risk?",
    answer: "They can be. While tools like Dropbox and shared cloud drives are convenient, they were not designed for youth data governance. In many organizations, these tools: lack clear, enforceable retention rules; make it difficult to prove who accessed data and when; allow files to be copied, synced, or retained indefinitely; and do not reliably enforce role-based access as staff change. As a result, organizations may unknowingly fall out of alignment with privacy and governance expectations—especially during audits or funding reviews."
  }, {
    question: "Does this mean we're already in violation?",
    answer: "Not necessarily—but many organizations cannot confidently prove they are not. In funding and audit contexts, the issue is often less about intent and more about demonstrability: Can you show when youth data expires? Can you prove who accessed it? Can you demonstrate that deletion actually occurred? YDGC exists to remove this uncertainty by embedding governance directly into systems."
  }, {
    question: "Is funding actually being affected by these issues?",
    answer: "Increasingly, yes. Even when funders do not mandate a specific platform, they are: asking more detailed governance questions; expecting evidence, not assurances; and flagging risk when answers are unclear or inconsistent. Organizations relying solely on shared storage tools often struggle to respond confidently—leading to delays, conditions, or increased scrutiny."
  }, {
    question: "Are other organizations already moving away from shared drives?",
    answer: "Yes. Many Alberta-based organizations are transitioning away from general-purpose storage for youth data—not because of panic, but because expectations have shifted. Boards and funders now expect systems that enforce governance, not tools that rely on best intentions. YDGC is designed for organizations that want to align with where expectations are going—not where they used to be."
  }, {
    question: "Can't we fix this with policies or staff training?",
    answer: "Policies and training are important, but they do not scale on their own. Most governance gaps appear when: staff turnover occurs; volunteers rotate; programs overlap; or data lives longer than expected. YDGC turns policy into practice by enforcing governance automatically—reducing reliance on memory and manual checks."
  }, {
    question: "What happens if we continue as-is for now?",
    answer: "For many organizations, nothing happens—until a review, audit, or renewal brings these questions forward. At that point, governance gaps become time-sensitive, resource-intensive, and stressful to address. Organizations that adopt YDGC earlier typically experience smoother funding cycles and fewer last-minute compliance exercises."
  }, {
    question: "Is YDGC difficult to adopt?",
    answer: "No. YDGC is designed for lean teams and real-world constraints. Most organizations find that automating governance: reduces administrative burden; simplifies reporting; and frees staff to focus on service delivery."
  }, {
    question: "How do we know if this applies to us?",
    answer: "The fastest way is to see how your current tools would hold up under a funding or audit review. That's why most organizations start with a demo."
  }];
  return <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src={ydgcHero} alt="Data protection illustration" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" />
          
          <div className="section-container relative py-32">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
                <Shield size={16} className="animate-pulse" />
                <span>By Boring Tech Solutions</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                Youth Data,
                <br />
                <span className="text-primary relative">
                  Governed With Care
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 4 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                Youth Data Governance & Compliance Infrastructure for Alberta organizations
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6" asChild>
                  <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group" asChild>
                  <a href="#how-it-works">
                    See How It Works
                    <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={20} />
          </div>
        </section>

        {/* What Is YDGC - Card Style */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-t border-primary/10">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                  <Sparkles size={18} className="animate-pulse" />
                  <span>What Is YDGC</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Data Governance,
                  <br />
                  <span className="text-primary">Built Into Your Systems</span>
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    YDGC is a youth data governance and compliance infrastructure designed specifically for <strong className="text-foreground">Alberta-based organizations</strong> that work with children and youth.
                  </p>
                  <p>
                    It embeds ethical data handling, accountability, and compliance <strong className="text-foreground">directly into daily operations</strong>—so governance is built into systems, not left to policy binders.
                  </p>
                </div>
                
                <div className="mt-8 p-6 rounded-2xl bg-card border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <p className="text-foreground font-medium pl-4">
                    Delivered as a secure, subscription-based platform—purpose-built for organizations carrying a duty of care.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[{
                  icon: Shield,
                  label: "Secure by Design"
                }, {
                  icon: Users,
                  label: "Youth-Focused"
                }, {
                  icon: Scale,
                  label: "Compliant"
                }, {
                  icon: Heart,
                  label: "Ethical"
                }].map((item, idx) => <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                      <item.icon className="text-primary mb-3" size={28} />
                      <span className="font-medium">{item.label}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/50 border-t border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                  <HelpCircle size={18} />
                  <span>Is This Relevant To Me</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold">Q{index + 1}.</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Why YDGC Exists - Timeline Style */}
        <section className="py-24 bg-gradient-to-br from-amber-950/20 via-background to-background border-t border-amber-500/10">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                  <AlertTriangle size={18} />
                  <span>The Challenge</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  A New Data Reality
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Youth-serving organizations are operating in a fundamentally different data environment than even a few years ago.
                </p>
              </div>
              
              {/* Visual Timeline */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
                
                <div className="space-y-8">
                  {[{
                  title: "The Old World",
                  desc: "Spreadsheets, shared drives, and email worked when data volumes were smaller.",
                  side: "left"
                }, {
                  title: "The AI Age",
                  desc: "Sensitive youth information moves faster and can be processed by tools never designed with children in mind.",
                  side: "right"
                }, {
                  title: "Rising Expectations",
                  desc: "Privacy, accountability, and data stewardship expectations are rising across Alberta's funding landscape.",
                  side: "left"
                }].map((item, idx) => <div key={idx} className={`relative flex items-center ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`flex-1 ${item.side === 'right' ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors">
                          <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="flex-1 hidden md:block" />
                    </div>)}
                </div>
              </div>
              
              {/* Requirements Box */}
              <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="font-display text-xl font-semibold mb-6 text-center">
                  Today, organizations must demonstrate:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["Clear consent and purpose for data collection", "Controlled access to sensitive information", "Defined retention and deletion practices", "Accountability during audits and funding reviews"].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-foreground">
                  YDGC replaces uncertainty with structure—helping organizations meet modern expectations without slowing down service delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-24 bg-gradient-to-br from-blue-950/20 via-background to-primary/5 border-t border-blue-500/10">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Clock size={18} />
                <span>Timing</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Organizations Are Adopting YDGC Now
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organizations across Alberta are strengthening their data governance for these key reasons:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {adoptionReasons.map((reason, index) => <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="text-primary" size={24} />
                  </div>
                  <p className="text-muted-foreground text-sm">{reason.text}</p>
                </div>)}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-foreground max-w-3xl mx-auto px-4 py-6 rounded-2xl bg-card border border-border">
                YDGC supports organizations that want to stay ahead—by embedding governance into systems early, rather than reacting under pressure later.
              </p>
            </div>
          </div>
        </section>

        {/* What YDGC Does - Features */}
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-emerald-950/20 via-card to-card border-t border-emerald-500/10">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Layers size={18} />
                <span>Core Features</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                What YDGC Does
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive governance tools designed for youth-serving organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => <div key={index} className="group relative p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <feature.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Compliance Section - With Image */}
        <section className="py-24 bg-gradient-to-br from-violet-950/20 via-background to-primary/5 border-t border-violet-500/10 overflow-hidden">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
                  <img src={ydgcCompliance} alt="Compliance illustration" className="relative rounded-3xl border border-border shadow-2xl" />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                  <Shield size={18} />
                  <span>Compliance</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Built for Alberta's
                  <br />
                  <span className="text-primary">Compliance Reality</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  YDGC translates Alberta's privacy expectations into practical, operational workflows.
                </p>

                <div className="space-y-4 mb-8">
                  {complianceFrameworks.map((framework, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-primary" size={24} />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{framework.name}</span>
                        <p className="text-sm text-muted-foreground">{framework.full}</p>
                      </div>
                    </div>)}
                </div>

                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="text-foreground font-medium text-center">
                    Compliance implemented through systems—not memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics Section - With Image */}
        <section className="py-24 bg-gradient-to-br from-rose-950/20 via-card to-card border-t border-rose-500/10">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Heart size={18} className="animate-pulse" />
                <span>Ethics</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ethics at the Core
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                YDGC is shaped by direct experience working alongside children, youth, and vulnerable communities in Alberta.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This includes long-term volunteer mentorship with <strong className="text-foreground">Big Brothers Big Sisters of Edmonton</strong> and career mentorship through programs such as <strong className="text-foreground">All In For Youth</strong>.
              </p>

              <h3 className="font-display text-lg font-semibold mb-4">Design Principles:</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ethicsPrinciples.map((principle, index) => <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors group">
                    <principle.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-muted-foreground text-sm text-center">{principle.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Funders Section */}
        <section className="py-24 bg-gradient-to-br from-cyan-950/20 via-background to-card border-t border-cyan-500/10">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Building2 size={18} />
                <span>For Funders</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Designed With Funders in Mind
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12">
                YDGC helps organizations demonstrate governance maturity to stakeholders
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {funderBenefits.map((benefit, index) => <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                    <benefit.icon className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="text-muted-foreground text-sm">{benefit.text}</p>
                  </div>)}
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border">
                <h3 className="font-display text-lg font-semibold mb-6">Well-suited for organizations engaging with:</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[{
                  icon: Globe,
                  text: "Municipal, provincial, and federal funding"
                }, {
                  icon: Briefcase,
                  text: "Alberta innovation grants"
                }, {
                  icon: Heart,
                  text: "Foundations prioritizing trust"
                }].map((item, idx) => <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
                      <item.icon className="text-primary" size={16} />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why BTS Section */}
        <section className="py-24 bg-gradient-to-br from-primary/15 via-card to-card border-t border-primary/20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-6">
                <Sparkles size={18} />
                <span>Our Approach</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Boring Tech Solutions
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12">
                We build calm, reliable infrastructure for organizations doing important work.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {[{
                title: "Ethical Technology",
                desc: "Design that prioritizes people",
                icon: Heart,
                color: "from-rose-500/20"
              }, {
                title: "Compliance-Ready",
                desc: "Systems built for audits",
                icon: Shield,
                color: "from-blue-500/20"
              }, {
                title: "Long-Term Focus",
                desc: "Sustainability over hype",
                icon: Clock,
                color: "from-amber-500/20"
              }].map((item, index) => <div key={index} className="group relative p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative">
                      <item.icon className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>)}
              </div>

              <p className="mt-12 text-lg font-medium text-foreground">
                Our approach favors clarity, responsibility, and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-primary/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }} />
          
          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Shield className="text-primary" size={40} />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Build Trust Into Your Data Systems
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Youth data deserves care, structure, and accountability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6" asChild>
                  <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <a href="/contact">
                    Discuss Pilots or Partnerships
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer hideCTA />
      <AIChatbot />
    </div>;
};
export default YDGC;