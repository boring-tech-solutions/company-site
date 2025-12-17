import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "https://image-cdn.quizapp.ca/logo.webp";
import { cn } from "@/lib/utils";

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

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "AI Lab", href: "/ai-lab" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Community", href: "/community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Boring Tech Solutions"
              className="h-24 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "transition-colors text-sm font-medium",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">Book a Coffee Chat</a>
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
          <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black/95 z-40 animate-fade-in">
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "transition-colors text-2xl font-medium",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col gap-4 w-full max-w-xs">
                <Button variant="outline" className="w-full text-lg py-6" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
                <Button className="w-full bg-primary text-primary-foreground text-lg py-6" asChild>
                  <a href="https://cal.com/boring-tech-solutions/15min" target="_blank" rel="noopener noreferrer">Book a Coffee Chat</a>
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