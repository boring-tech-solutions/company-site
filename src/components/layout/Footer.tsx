import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";

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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group">
              Book a Coffee Chat
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Tell Us Your Challenge
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
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">B</span>
                </div>
                <span className="font-display font-semibold text-xl">Boring Tech</span>
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
                <li><a href="#" className="hover:text-foreground transition-colors">AI Implementation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Strategic AI Advisory</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Custom Software</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">YDCS</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AI Lab</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>
                  <a href="mailto:hello@boringtech.ca" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    hello@boringtech.ca
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
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
