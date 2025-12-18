import { useState } from "react";
import { Link } from "react-router-dom";
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
  Calendar,
  FileText,
  Heart,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const YDGC2 = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
      description: "A quick call or visit. No tech talk. Just clear steps.",
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
    <div className="min-h-screen bg-[#FDF8F3]">
      <Header />
      <main className="pt-20">
        {/* SECTION 1 — HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F3] to-[#E8F4F8]">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
                  One Safe Place for All Your{" "}
                  <span className="text-[#4A90A4]">Youth Information</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#4A5568] leading-relaxed">
                  If you work with young people, you collect personal
                  information every day. Many teams keep this data in many
                  places — spreadsheets, WhatsApp, email, shared drives.{" "}
                  <span className="font-semibold text-[#C05746]">
                    This is risky… and you may not know it.
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#4A90A4] hover:bg-[#3A7A8E] text-white text-lg px-8 py-6 rounded-xl shadow-lg"
                  >
                    <Play className="mr-2" size={20} />
                    Watch: Where Is Your Youth Data?
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#E8A838] text-[#C08030] hover:bg-[#E8A838] hover:text-white text-lg px-8 py-6 rounded-xl"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Get a Human to Explain It
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="text-[#4A90A4] hover:text-[#3A7A8E] text-lg underline underline-offset-4"
                >
                  <ClipboardCheck className="mr-2" size={20} />
                  Free Youth Data Audit
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-video bg-gradient-to-br from-[#E8F4F8] to-[#D4E8F0] rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-[#4A90A4] rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Play className="text-white ml-1" size={32} />
                      </div>
                      <p className="text-[#4A5568] font-medium">
                        2-Minute Explainer Video
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E8A838] rounded-full opacity-20"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#4A90A4] rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — DOES THIS LOOK LIKE YOU? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                Does This Look Like You?
              </h2>
              <p className="text-xl text-[#4A5568]">
                Tap each card to see the hidden risk
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskCards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => toggleCard(index)}
                  className="cursor-pointer perspective-1000"
                >
                  <Card
                    className={`h-64 transition-all duration-500 transform ${
                      flippedCards.includes(index)
                        ? "bg-[#C05746] text-white scale-105"
                        : "bg-[#F7FAFC] hover:shadow-xl hover:scale-105"
                    } rounded-2xl border-0 shadow-lg`}
                  >
                    <CardContent className="h-full flex flex-col items-center justify-center p-6 text-center">
                      {!flippedCards.includes(index) ? (
                        <>
                          <card.icon
                            className="text-[#4A90A4] mb-4"
                            size={48}
                          />
                          <p className="text-lg font-medium text-[#2D3748]">
                            {card.question}
                          </p>
                          <p className="text-sm text-[#718096] mt-2">
                            Tap to reveal risk
                          </p>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="text-white mb-4" size={48} />
                          <p className="text-xl font-bold">{card.risk}</p>
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
                className="bg-[#E8A838] hover:bg-[#D09828] text-white text-lg px-10 py-6 rounded-xl shadow-lg"
              >
                <ClipboardCheck className="mr-2" size={20} />
                Take 5-Question Risk Quiz
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY THIS MATTERS */}
        <section className="py-16 md:py-24 bg-[#FDF8F3]">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                A Small Mistake Can Create{" "}
                <span className="text-[#C05746]">Big Problems</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {scenarios.map((scenario, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#FEE2E2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <scenario.icon className="text-[#C05746]" size={28} />
                    </div>
                    <p className="text-lg font-medium text-[#2D3748]">
                      {scenario.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#4A90A4] hover:bg-[#3A7A8E] text-white text-lg px-10 py-6 rounded-xl shadow-lg"
              >
                <ClipboardCheck className="mr-2" size={20} />
                Get a Free Youth Data Audit (10 minutes)
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4 — MEET YDGC */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#E8F4F8] to-[#D4E8F0]">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                A Simple System to{" "}
                <span className="text-[#4A90A4]">Protect Youth Information</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#E8F4F8] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#4A90A4]" size={28} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D3748] mb-1">
                          {item.feature}
                        </h3>
                        <p className="text-[#4A5568]">{item.benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#4A90A4] hover:bg-[#3A7A8E] text-white text-lg px-8 py-6 rounded-xl shadow-lg"
              >
                <Play className="mr-2" size={20} />
                Watch: How YDGC Works
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#E8A838] text-[#C08030] hover:bg-[#E8A838] hover:text-white text-lg px-8 py-6 rounded-xl"
              >
                <FileText className="mr-2" size={20} />
                Bring Your Intake Form — Free Demo
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — SOCIAL PROOF */}
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                Youth Programs Like Yours Are{" "}
                <span className="text-[#4A90A4]">Already Using YDGC</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-[#FDF8F3] rounded-2xl border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <Quote className="text-[#E8A838] mb-4" size={40} />
                    <p className="text-xl text-[#2D3748] mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#4A90A4] rounded-full flex items-center justify-center">
                        <Users className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-[#2D3748]">
                          {testimonial.author}
                        </p>
                        <p className="text-[#718096]">{testimonial.org}</p>
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
                className="border-2 border-[#E8A838] text-[#C08030] hover:bg-[#E8A838] hover:text-white text-lg px-10 py-6 rounded-xl"
              >
                <MessageCircle className="mr-2" size={20} />
                Talk to Another Organization Using YDGC
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 6 — REAL-WORLD SUPPORT */}
        <section className="py-16 md:py-24 bg-[#FDF8F3]">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                You Don't Have to Do This{" "}
                <span className="text-[#4A90A4]">Alone</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {supportCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border-2 border-[#E8F4F8] shadow-lg hover:shadow-xl hover:border-[#4A90A4] transition-all"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#E8F4F8] to-[#D4E8F0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <card.icon className="text-[#4A90A4]" size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3748] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[#4A5568] text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#E8A838] hover:bg-[#D09828] text-white text-lg px-10 py-6 rounded-xl shadow-lg"
              >
                <GraduationCap className="mr-2" size={20} />
                Book Anderson's Free Workshop
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7 — VALUE STACK */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#E8F4F8] to-[#D4E8F0]">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-4">
                What You Get With{" "}
                <span className="text-[#4A90A4]">YDGC</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {valueStack.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md"
                  >
                    <div className="w-10 h-10 bg-[#D1FAE5] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-[#059669]" size={20} />
                    </div>
                    <span className="text-lg text-[#2D3748] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA PANEL */}
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
                Choose the Option That{" "}
                <span className="text-[#4A90A4]">Feels Right for You</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#4A90A4] hover:bg-[#3A7A8E] text-white text-lg px-6 py-6 rounded-xl shadow-lg"
                >
                  <Play className="mr-2" size={20} />
                  Watch Full Demo
                </Button>
                <Button
                  size="lg"
                  className="bg-[#E8A838] hover:bg-[#D09828] text-white text-lg px-6 py-6 rounded-xl shadow-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Get a Human to Explain It
                </Button>
                <Button
                  size="lg"
                  className="bg-[#4A90A4] hover:bg-[#3A7A8E] text-white text-lg px-6 py-6 rounded-xl shadow-lg"
                >
                  <ClipboardCheck className="mr-2" size={20} />
                  Free Youth Data Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white text-lg px-6 py-6 rounded-xl"
                >
                  <GraduationCap className="mr-2" size={20} />
                  Book Anderson's Workshop
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white text-lg px-6 py-6 rounded-xl sm:col-span-2 lg:col-span-1"
                >
                  <Handshake className="mr-2" size={20} />
                  Meet in Person
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#718096]">
                <Heart className="text-[#C05746]" size={20} />
                <p className="text-lg">
                  No pressure. No commitments. We make youth data protection
                  simple, safe, and stress-free.
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

export default YDGC2;
