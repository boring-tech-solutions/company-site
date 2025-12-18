import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, Phone } from "lucide-react";
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
      // TODO: Replace with actual Airtable webhook URL
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
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lionsAtWorkContact})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
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

      {/* Contact Content */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="card-premium p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:hello@boringtechsolutions.com" className="text-primary hover:underline">
                  hello@boringtechsolutions.com
                </a>
              </div>

              <div className="card-premium p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">Edmonton, Alberta, Canada</p>
              </div>

              <div className="card-premium p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Book a Call</h3>
                <a 
                  href="https://cal.com/boring-tech-solutions/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Schedule a 15-min chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-premium p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-background ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or question..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-background ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </div>
  );
};

export default Contact;
