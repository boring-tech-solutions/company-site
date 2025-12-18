import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import lionsAtWorkContact from "@/assets/lions-at-work-contact.webp";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const AIRTABLE_WEBHOOK_URL = "https://hooks.airtable.com/workflows/v1/YOUR_WEBHOOK_ID";
      
      await fetch(AIRTABLE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          submitted_at: new Date().toISOString(),
        }),
      });

      navigate("/contact/success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lionsAtWorkContact})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Horizontal Cards */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a 
              href="mailto:hello@boringtechsolutions.com"
              className="group relative overflow-hidden rounded-2xl bg-[#D93D3D] p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#101A26]/20" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#101A26]/10 translate-x-8 translate-y-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#101A26]/20 flex items-center justify-center mb-6">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-white/80 text-sm mb-4">Drop us a line anytime</p>
                <span className="inline-flex items-center text-white font-medium group-hover:gap-3 gap-2 transition-all text-sm break-all">
                  hello@boringtechsolutions.com
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#101A26] p-8 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#1B3540]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#F2C84B]/10 -translate-x-8 translate-y-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1B3540] flex items-center justify-center mb-6">
                  <MapPin className="text-[#F2C84B]" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-white/80 text-sm mb-4">Based in the heart of Alberta</p>
                <span className="text-[#F2C84B] font-medium">
                  Edmonton, Alberta, Canada
                </span>
              </div>
            </div>

            {/* Book a Call Card */}
            <a 
              href="https://cal.com/boring-tech-solutions/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#F2C84B] p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#D9B343] -translate-y-8 translate-x-8" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#101A26]/10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#101A26]/20 flex items-center justify-center mb-6">
                  <Calendar className="text-[#101A26]" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#101A26] mb-2">Book a Call</h3>
                <p className="text-[#101A26]/70 text-sm mb-4">Let's chat over coffee</p>
                <span className="inline-flex items-center text-[#101A26] font-medium group-hover:gap-3 gap-2 transition-all">
                  Schedule 15-min chat
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#1B3540]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Send us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-white/70">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/90 text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-[#101A26] border-[#101A26] text-white placeholder:text-white/40 h-14 text-base focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-[#101A26] border-[#101A26] text-white placeholder:text-white/40 h-14 text-base focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/90 text-base">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or question..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-[#101A26] border-[#101A26] text-white placeholder:text-white/40 text-base focus:border-primary resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-7 group font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </div>
  );
};

export default Contact;
