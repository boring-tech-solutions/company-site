import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";

const logo = "https://image-cdn.quizapp.ca/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="section-container py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Navigate the <span className="text-gradient">AI Terrain</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start with a conversation. No pressure, no jargon — just practical advice on how AI can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group" asChild>
              <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">
                Book a Coffee Chat
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Tell Us Your Challenge
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="Boring Tech Solutions"
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Calm precision in a noisy tech world. AI solutions that augment humans, not replace them.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                <span>Edmonton, Alberta</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><Link to="/#services" className="hover:text-foreground transition-colors">AI Implementation</Link></li>
                <li><Link to="/#services" className="hover:text-foreground transition-colors">Strategic AI Advisory</Link></li>
                <li><Link to="/#services" className="hover:text-foreground transition-colors">Custom Software</Link></li>
                <li><Link to="/#services" className="hover:text-foreground transition-colors">YDCS</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/ai-lab" className="hover:text-foreground transition-colors">AI Lab</Link></li>
                <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><Link to="/community" className="hover:text-foreground transition-colors">Community</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>
                  <a href="mailto:hello@boringtechsolutions.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    hello@boringtechsolutions.com
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/boring-tech-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Boring Tech Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
