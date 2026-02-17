import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  MessageCircle,
  ClipboardCheck,
  FileSpreadsheet,
  Mail,
  Clock,
  Laptop,
  AlertTriangle,
  ShieldCheck,
  Users,
  Bell,
  Trash2,
  FileSearch,
  Sparkles,
  Quote,
  GraduationCap,
  Phone,
  Video,
  Handshake,
  Check,
  Lock,
  UserCheck,
  FileText,
  Heart,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GovoraSales = () => {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const toggleCard = (index: number) => {
        setFlippedCards((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index],
        );
    };

    const riskCards = [
        {
            question: "Do you use Excel for youth lists?",
            risk: "Anyone can copy or share it.",
            icon: FileSpreadsheet,
        },
        {
            question: "Do you send youth info by email or WhatsApp?",
            risk: "These messages stay forever.",
            icon: Mail,
        },
        {
            question: "Do you keep youth records for years?",
            risk: "Old data increases risk.",
            icon: Clock,
        },
        {
            question: "Do staff keep files on personal laptops?",
            risk: "Lost devices expose all info.",
            icon: Laptop,
        },
    ];

    const scenarios = [
        { text: "Lost laptop with youth lists", icon: Laptop },
        { text: "Wrong email sent to the wrong person", icon: Mail },
        { text: "Parent asking where their child's info is", icon: Users },
        { text: "Funder asking about retention timelines", icon: Clock },
    ];

    const features = [
        {
            feature: "All youth info in one place",
            benefit: "You always know where it is.",
            icon: Lock,
        },
        {
            feature: "Staff access control",
            benefit: "Only the right people can see sensitive info.",
            icon: UserCheck,
        },
        {
            feature: "Automatic reminders",
            benefit: "No need to remember deletion dates.",
            icon: Bell,
        },
        {
            feature: "Simple deletion",
            benefit: "One click, safe delete.",
            icon: Trash2,
        },
        {
            feature: "Audit log",
            benefit: "Know who saw what.",
            icon: FileSearch,
        },
        {
            feature: "Guided setup",
            benefit: "You don't need tech skills.",
            icon: Sparkles,
        },
    ];

    const testimonials = [
        {
            quote: "We used to keep everything in Excel. Now parents feel safer.",
            author: "Program Director",
            org: "Youth Mentorship Alberta",
        },
        {
            quote: "Funders trust us more because we can show our process.",
            author: "Executive Director",
            org: "Community Youth Services",
        },
    ];

    const supportCards = [
        {
            title: "Free Youth Data Audit",
            description:
                "We look at your current process and tell you the risks — in simple words.",
            icon: ClipboardCheck,
        },
        {
            title: "Workshop With Anderson",
            description:
                "A friendly, easy explanation for your whole team. In-person or online.",
            icon: GraduationCap,
        },
        {
            title: "Get a Human to Explain It",
            description:
                "A quick call or visit. No tech talk. Just clear steps.",
            icon: Phone,
        },
    ];

    const valueStack = [
        "One safe place for youth info",
        "Staff access control",
        "Automatic reminders",
        "Simple deletion",
        "Audit logs for funders & parents",
        "Free audit",
        "Free workshop",
        "Step-by-step onboarding",
        "Friendly human support",
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="relative z-10">
                {/* SECTION 1 — HERO */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-navy">
                    {/* Background Elements */}
                    <div className="absolute inset-0 tech-grid opacity-30" />
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                    <div className="section-container relative z-10 py-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 animate-fade-in">
                                <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                    Youth Data Governance & Compliance
                                </span>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                                    One Safe Place for All Your{" "}
                                    <span className="text-primary">
                                        Youth Information
                                    </span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                    If you work with young people, you collect
                                    personal information every day. Many teams
                                    keep this data in many places —
                                    spreadsheets, WhatsApp, email, shared
                                    drives.{" "}
                                    <span className="text-destructive font-medium">
                                        This is risky… and you may not know it.
                                    </span>
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        className="group text-lg px-8 py-6"
                                    >
                                        <Play className="mr-2" size={20} />
                                        Watch: Where Is Your Youth Data?
                                        <ArrowRight
                                            className="ml-2 group-hover:translate-x-1 transition-transform"
                                            size={18}
                                        />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
                                    >
                                        <MessageCircle
                                            className="mr-2"
                                            size={20}
                                        />
                                        Get a Human to Explain It
                                    </Button>
                                </div>
                                <Button
                                    variant="link"
                                    className="text-primary hover:text-primary/80 text-lg p-0"
                                >
                                    <ClipboardCheck
                                        className="mr-2"
                                        size={20}
                                    />
                                    Free Youth Data Audit
                                    <ChevronRight className="ml-1" size={16} />
                                </Button>
                            </div>

                            <div
                                className="relative animate-fade-in"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <div className="card-premium p-8">
                                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 tech-dots" />
                                        <div className="text-center space-y-4 relative z-10">
                                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto glow-gold">
                                                <Play
                                                    className="text-primary-foreground ml-1"
                                                    size={32}
                                                />
                                            </div>
                                            <p className="text-foreground font-medium">
                                                2-Minute Explainer Video
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — DOES THIS LOOK LIKE YOU? */}
                <section className="py-24 bg-surface-teal relative overflow-hidden">
                    <div className="absolute inset-0 circuit-pattern" />
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Self Assessment
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                                Does This Look Like You?
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Tap each card to see the hidden risk
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {riskCards.map((card, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleCard(index)}
                                    className="cursor-pointer"
                                >
                                    <Card
                                        className={`h-64 transition-all duration-500 transform border-0 ${
                                            flippedCards.includes(index)
                                                ? "bg-destructive scale-105"
                                                : "card-premium-no-glow hover:scale-105"
                                        }`}
                                    >
                                        <CardContent className="h-full flex flex-col items-center justify-center p-6 text-center">
                                            {!flippedCards.includes(index) ? (
                                                <>
                                                    <card.icon
                                                        className="text-primary mb-4"
                                                        size={48}
                                                    />
                                                    <p className="text-lg font-medium text-foreground">
                                                        {card.question}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mt-3">
                                                        Tap to reveal risk
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <AlertTriangle
                                                        className="text-destructive-foreground mb-4"
                                                        size={48}
                                                    />
                                                    <p className="text-xl font-bold text-destructive-foreground">
                                                        {card.risk}
                                                    </p>
                                                </>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button
                                size="lg"
                                className="group text-lg px-10 py-6"
                            >
                                <ClipboardCheck className="mr-2" size={20} />
                                Take 5-Question Risk Quiz
                                <ArrowRight
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                    size={18}
                                />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — WHY THIS MATTERS */}
                <section className="py-24 bg-surface-navy relative">
                    <div className="absolute inset-0 tech-dots opacity-50" />
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Why This Matters
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                                A Small Mistake Can Create{" "}
                                <span className="text-destructive">
                                    Big Problems
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {scenarios.map((scenario, index) => (
                                <Card
                                    key={index}
                                    className="card-premium-no-glow border-destructive/20 hover:border-destructive/40 transition-colors"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <scenario.icon
                                                className="text-destructive"
                                                size={28}
                                            />
                                        </div>
                                        <p className="text-lg font-medium text-foreground">
                                            {scenario.text}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button
                                size="lg"
                                className="group text-lg px-10 py-6"
                            >
                                <ClipboardCheck className="mr-2" size={20} />
                                Get a Free Youth Data Audit (10 minutes)
                                <ArrowRight
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                    size={18}
                                />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — MEET Govora */}
                <section className="py-24 bg-surface-teal-light relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                The Solution
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                                A Simple System to{" "}
                                <span className="text-primary">
                                    Protect Youth Information
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {features.map((item, index) => (
                                <Card
                                    key={index}
                                    className="card-premium group"
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                                                <item.icon
                                                    className="text-primary icon-animate"
                                                    size={28}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground mb-1">
                                                    {item.feature}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {item.benefit}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="group text-lg px-8 py-6"
                            >
                                <Play className="mr-2" size={20} />
                                Watch: How Govora Works
                                <ArrowRight
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                    size={18}
                                />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
                            >
                                <FileText className="mr-2" size={20} />
                                Bring Your Intake Form — Free Demo
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — SOCIAL PROOF */}
                <section className="py-24 bg-surface-navy relative">
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Testimonials
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                                Youth Programs Like Yours Are{" "}
                                <span className="text-primary">
                                    Already Using Govora
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="card-premium">
                                    <CardContent className="p-8">
                                        <Quote
                                            className="text-primary mb-4"
                                            size={40}
                                        />
                                        <p className="text-xl text-foreground mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                                <Users
                                                    className="text-primary-foreground"
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-foreground">
                                                    {testimonial.author}
                                                </p>
                                                <p className="text-muted-foreground">
                                                    {testimonial.org}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-10 py-6 border-primary/50 hover:bg-primary/10"
                            >
                                <MessageCircle className="mr-2" size={20} />
                                Talk to Another Organization Using Govora
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — REAL-WORLD SUPPORT */}
                <section className="py-24 bg-surface-teal relative overflow-hidden">
                    <div className="absolute inset-0 circuit-pattern" />
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Support
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                                You Don't Have to Do This{" "}
                                <span className="text-primary">Alone</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {supportCards.map((card, index) => (
                                <Card
                                    key={index}
                                    className="card-premium group"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                                            <card.icon
                                                className="text-primary icon-animate"
                                                size={36}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3">
                                            {card.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {card.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button
                                size="lg"
                                className="group text-lg px-10 py-6"
                            >
                                <GraduationCap className="mr-2" size={20} />
                                Book Anderson's Free Workshop
                                <ArrowRight
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                    size={18}
                                />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — VALUE STACK */}
                <section className="py-24 bg-surface-navy relative">
                    <div className="absolute inset-0 tech-dots opacity-30" />
                    <div className="section-container relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Everything Included
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                                What You Get With{" "}
                                <span className="text-primary">Govora</span>
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {valueStack.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 card-premium-no-glow p-5"
                                    >
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check
                                                className="text-primary"
                                                size={20}
                                            />
                                        </div>
                                        <span className="text-lg text-foreground font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8 — FINAL CTA PANEL */}
                <section className="py-24 bg-surface-teal-light relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
                    <div className="section-container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest">
                                Get Started
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-8">
                                Choose the Option That{" "}
                                <span className="text-primary">
                                    Feels Right for You
                                </span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                                <Button
                                    size="lg"
                                    className="group text-lg px-6 py-6"
                                >
                                    <Play className="mr-2" size={20} />
                                    Watch Full Demo
                                </Button>
                                <Button
                                    size="lg"
                                    className="group text-lg px-6 py-6"
                                >
                                    <MessageCircle className="mr-2" size={20} />
                                    Get a Human to Explain It
                                </Button>
                                <Button
                                    size="lg"
                                    className="group text-lg px-6 py-6"
                                >
                                    <ClipboardCheck
                                        className="mr-2"
                                        size={20}
                                    />
                                    Free Youth Data Audit
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-6 py-6 border-primary/50 hover:bg-primary/10"
                                >
                                    <GraduationCap className="mr-2" size={20} />
                                    Book Anderson's Workshop
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-6 py-6 border-primary/50 hover:bg-primary/10 sm:col-span-2 lg:col-span-1"
                                >
                                    <Handshake className="mr-2" size={20} />
                                    Meet in Person
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                <Heart className="text-destructive" size={20} />
                                <p className="text-lg">
                                    No pressure. No commitments. We make youth
                                    data protection simple, safe, and
                                    stress-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default GovoraSales;
