import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
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
            {header.primaryNav.map((link) => {
              if (link.children && link.children.length > 0) {
                const isActive =
                  location.pathname.startsWith(link.href) ||
                  link.children.some((child) => location.pathname.startsWith(child.href));
                return (
                  <div key={link.href} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1 transition-colors text-md font-medium",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-card rounded-lg shadow-lg border border-border p-[5px] min-w-[440px]">
                        {link.children.map((child) => {
                          const childLink =
                            child.linkType === "router" ? (
                              <Link
                                to={child.href}
                                className="flex flex-col gap-0.5 px-3 py-2.5 rounded-md border-l-2 border-transparent hover:border-primary hover:bg-primary/5 transition-all group/item"
                              >
                                <span className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ) : (
                              <a
                                href={child.href}
                                className="flex flex-col gap-0.5 px-3 py-2.5 rounded-md border-l-2 border-transparent hover:border-primary hover:bg-primary/5 transition-all group/item"
                              >
                                <span className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </a>
                            );
                          return <div key={child.href}>{childLink}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}
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
          <div className="lg:hidden fixed inset-0 w-screen h-screen bg-background z-40 animate-fade-in overflow-y-auto">
            <div className="flex flex-col min-h-screen pt-24 pb-10 px-6">
              <nav className="flex flex-col w-full divide-y divide-border">
                {header.primaryNav.map((link) => {
                  if (link.children && link.children.length > 0) {
                    const isExpanded = mobileExpandedItem === link.href;
                    const isActive =
                      location.pathname === link.href ||
                      link.children.some((c) => location.pathname === c.href);
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center justify-between w-full py-4 text-left"
                          onClick={() => setMobileExpandedItem(isExpanded ? null : link.href)}
                        >
                          <span className={cn(
                            "text-2xl font-medium transition-colors",
                            isActive ? "text-primary" : "text-foreground",
                          )}>
                            {link.label}
                          </span>
                          <ChevronDown
                            size={20}
                            className={cn(
                              "text-muted-foreground transition-transform duration-200",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </button>
                        {isExpanded && (
                          <div className="flex flex-col gap-4 border-l-2 border-primary pl-4 pb-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => { setIsMobileMenuOpen(false); setMobileExpandedItem(null); }}
                                className="flex flex-col gap-0.5 group"
                              >
                                <span className={cn(
                                  "text-base font-semibold transition-colors",
                                  location.pathname === child.href ? "text-primary" : "text-foreground group-hover:text-primary",
                                )}>
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-sm text-muted-foreground">{child.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div key={link.href} className="py-4">
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
                  );
                })}
              </nav>
              <div className="mt-auto pt-8 flex flex-col gap-4 w-full">
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
