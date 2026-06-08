export const siteChrome = {
  logo: {
    alt: "Boring Tech Solutions",
    href: "/",
    src: "https://images.boringtechsolutions.com/logo.webp",
  },
  header: {
    primaryNav: [
      { label: "About Us", href: "/about", linkType: "router" },
      { label: "AI Lab", href: "/ai-lab", linkType: "router" },
      { label: "Our Projects", href: "/our-past-work", linkType: "router" },
      { label: "Data Compliance", href: "/data-compliance", linkType: "router" },
      { label: "Community", href: "/community", linkType: "router" },
      { label: "Blog", href: "/blog/", linkType: "anchor" },
    ],
    secondaryCta: {
      label: "Contact",
      href: "/contact",
      linkType: "router",
    },
    primaryCta: {
      label: "Book a Coffee Chat",
      href: "https://cal.com/boring-tech-solutions/15min",
      linkType: "external",
    },
  },
  footer: {
    cta: {
      titlePrefix: "Ready to Navigate the ",
      titleHighlight: "AI Terrain",
      titleSuffix: "?",
      body: "Start with a conversation. No pressure, no jargon - just practical advice on how AI can help your business.",
      primaryAction: {
        label: "Book a Coffee Chat",
        href: "https://cal.com/boring-tech-solutions/15min",
        linkType: "external",
      },
      secondaryAction: {
        label: "Tell Us Your Challenge",
        href: "/contact",
        linkType: "router",
      },
    },
    brand: {
      copy: "Calm precision in a noisy tech world. AI solutions that augment humans, not replace them.",
      location: "Edmonton, Alberta",
    },
    sections: [
      {
        heading: "Services",
        links: [
          { label: "AI Implementation", href: "/#services", linkType: "router" },
          { label: "Strategic AI Advisory", href: "/#services", linkType: "router" },
          { label: "Custom Software", href: "/#services", linkType: "router" },
          { label: "Data Compliance", href: "/data-compliance", linkType: "router" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about", linkType: "router" },
          { label: "AI Lab", href: "/ai-lab", linkType: "router" },
          { label: "Our Projects", href: "/our-past-work", linkType: "router" },
          { label: "Community", href: "/community", linkType: "router" },
          { label: "Blog", href: "/blog/", linkType: "anchor" },
        ],
      },
    ],
    connect: {
      heading: "Connect",
      email: "hello@boringtechsolutions.com",
      linkedin: {
        label: "LinkedIn",
        href: "https://linkedin.com/company/boring-tech-solutions",
        linkType: "external",
      },
    },
    legal: [],
  },
};
