import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Shield, CheckCircle, Zap, Target, Eye, Rocket, Settings } from "lucide-react";
import lionInLab from "@/assets/lion-in-lab.webp";

const AILab = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="section-container relative">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px]">
              <div className="absolute inset-0">
                <img 
                  src={lionInLab} 
                  alt="AI Lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
              </div>
              
              <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center h-full min-h-[500px]">
                <div className="max-w-2xl">
                  <span className="text-primary text-sm font-medium uppercase tracking-widest">AI Lab</span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-2">
                    Applied AI.
                    <br />
                    <span className="text-primary">Built Responsibly.</span>
                  </h1>
                  <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                    Practical AI systems that solve real operational problems—not experimental hype, but applied intelligence built to reduce manual work and strengthen trust.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group" asChild>
                      <Link to="/contact">
                        Talk to Us About an AI Use Case
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#projects">Explore Active Projects</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Lab Exists */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why the AI Lab Exists
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                AI adoption is accelerating—but many organizations are stuck between overhyped tools that don't fit their reality and avoiding AI due to privacy and compliance concerns.
              </p>
              <p className="text-foreground text-xl font-medium">
                We bridge that gap with <span className="text-primary">responsible, use-case-driven AI</span>, designed for organizations that need results without risk.
              </p>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                AI systems designed for real constraints, built with guardrails from day one.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* AI Agents */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">AI Agents for Operations</h3>
                <p className="text-muted-foreground mb-4">
                  Custom agents that automate high-friction tasks—data analysis, intake processing, document review.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Built-in permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Full auditability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Human oversight always
                  </li>
                </ul>
              </div>

              {/* Decision Support */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Decision Support Systems</h3>
                <p className="text-muted-foreground mb-4">
                  AI that assists—not replaces—human judgment. Surface insights and patterns while keeping decisions with people.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Strategy support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Evaluation assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Planning intelligence
                  </li>
                </ul>
              </div>

              {/* Ethical AI */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Ethical AI for Sensitive Domains</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized for environments where trust matters—youth services, education, governance workflows.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    No surveillance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    No profiling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={14} />
                    Guardrails always
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* AI Lab in Action */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">AI Lab in Action</h2>
              <p className="text-muted-foreground text-lg">Real projects. Real outcomes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Case Study 1 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Governance</div>
                <h3 className="font-display text-lg font-bold mb-3">Youth Data Governance Automation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Intelligent workflows for automated data retention, audit logging, and compliance reporting.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Lower compliance risk
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Clear audit trails
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Reduced admin load
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Education</div>
                <h3 className="font-display text-lg font-bold mb-3">AI-Enhanced Learning Platform</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Adaptive logic for content pacing and learner feedback—without profiling or invasive data use.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Higher engagement
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Improved retention
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Accessible at scale
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Operations</div>
                <h3 className="font-display text-lg font-bold mb-3">Operational Insight Agent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Reporting agent that analyzes datasets and produces executive-ready summaries.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Faster insights
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Fewer errors
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="text-primary" size={14} />
                    Better visibility
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground text-lg">A disciplined, ethics-first process.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { icon: Target, label: "Define the real problem" },
                  { icon: Eye, label: "Assess data & risk" },
                  { icon: Shield, label: "Design guardrails first" },
                  { icon: Zap, label: "Prototype fast" },
                  { icon: Settings, label: "Measure impact" },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                      <step.icon className="text-primary" size={24} />
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why BTS + Lab to Production */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Why Boring Tech Solutions
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We build AI systems that are calm, reliable, and production-ready—designed for real constraints and safe for sensitive environments.
                </p>
                <p className="text-foreground">
                  Our focus is <span className="text-primary font-semibold">long-term value</span>—not short-term attention.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="text-primary" size={24} />
                  <h3 className="font-display text-xl font-bold">From Lab to Production</h3>
                </div>
                <p className="text-muted-foreground">
                  Many of our production platforms begin life in the AI Lab. Ideas are tested rigorously, refined responsibly, and only deployed at scale once proven ethical and sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Explore What's Possible
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                AI doesn't have to be overwhelming or risky. When built with care, it becomes a quiet advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
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

export default AILab;
