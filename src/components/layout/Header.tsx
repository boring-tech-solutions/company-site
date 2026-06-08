import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteChrome } from "../../../shared/site-chrome.js";

const renderHeaderLink = (link, className, onClick) => {
  if (link.linkType === "router") {
    return (
      <Link to={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { header, logo } = siteChrome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to={logo.href} className="flex items-center group">
            <img src={logo.src} alt={logo.alt} className="h-24 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {header.primaryNav.map((link) => (
              <div key={link.href}>
                {renderHeaderLink(
                  link,
                  cn(
                    "transition-colors text-md font-medium",
                    link.linkType === "router" && location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  ),
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className={cn(
                location.pathname === header.secondaryCta.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              asChild
            >
              <Link to={header.secondaryCta.href}>{header.secondaryCta.label}</Link>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href={header.primaryCta.href} target="_blank" rel="noopener noreferrer">
                {header.primaryCta.label}
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 w-screen h-screen bg-background z-40 animate-fade-in">
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
              {header.primaryNav.map((link) => (
                <div key={link.href}>
                  {renderHeaderLink(
                    link,
                    cn(
                      "transition-colors text-2xl font-medium",
                      link.linkType === "router" && location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary",
                    ),
                    () => setIsMobileMenuOpen(false),
                  )}
                </div>
              ))}
              <div className="pt-8 flex flex-col gap-4 w-full max-w-xs">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full text-lg py-6",
                    location.pathname === header.secondaryCta.href && "border-primary text-primary",
                  )}
                  asChild
                >
                  <Link to={header.secondaryCta.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {header.secondaryCta.label}
                  </Link>
                </Button>
                <Button className="w-full bg-primary text-primary-foreground text-lg py-6" asChild>
                  <a href={header.primaryCta.href} target="_blank" rel="noopener noreferrer">
                    {header.primaryCta.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
