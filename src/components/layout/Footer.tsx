import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";
import { siteChrome } from "../../../shared/site-chrome.js";

interface FooterProps {
  hideCTA?: boolean;
}

const renderFooterLink = (link) => {
  if (link.linkType === "router") {
    return (
      <Link to={link.href} className="hover:text-foreground transition-colors">
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className="hover:text-foreground transition-colors">
      {link.label}
    </a>
  );
};

const Footer = ({ hideCTA = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { footer, logo } = siteChrome;

  return (
    <footer className={`bg-surface-dark ${hideCTA ? '' : 'border-t border-border'}`}>
      {/* CTA Section */}
      {!hideCTA && <div className="section-container py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {footer.cta.titlePrefix}
            <span className="text-gradient">{footer.cta.titleHighlight}</span>
            {footer.cta.titleSuffix}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {footer.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group" asChild>
              <a href={footer.cta.primaryAction.href} target="_blank" rel="noopener noreferrer">
                {footer.cta.primaryAction.label}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to={footer.cta.secondaryAction.href}>
                {footer.cta.secondaryAction.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>}

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {footer.brand.copy}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                <span>{footer.brand.location}</span>
              </div>
            </div>

            {footer.sections.map((section) => (
              <div key={section.heading}>
                <h4 className="font-display font-semibold mb-4">{section.heading}</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {section.links.map((link) => (
                    <li key={`${section.heading}-${link.label}`}>
                      {renderFooterLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold mb-4">{footer.connect.heading}</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>
                  <a href={`mailto:${footer.connect.email}`} className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    {footer.connect.email}
                  </a>
                </li>
                <li>
                  <a href={footer.connect.linkedin.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Linkedin size={16} />
                    {footer.connect.linkedin.label}
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
            {footer.legal.length > 0 && (
              <div className="flex gap-6 text-muted-foreground text-sm">
                {footer.legal.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
