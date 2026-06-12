export interface FounderProfileLink {
  label: string;
  href: string;
}

export interface FounderProfile {
  slug: string;
  path: string;
  canonicalUrl: string;
  title: string;
  description: string;
  name: string;
  role: string;
  shortRole: string;
  image: string;
  linkedIn: string;
  intro: string;
  body: string[];
  focusAreas: string[];
  publicLinks: FounderProfileLink[];
  relatedLinks: FounderProfileLink[];
  schema: {
    personId: string;
    jobTitle: string;
    organizationId: string;
    organizationName: string;
    organizationUrl: string;
    personSameAs: string[];
    organizationSameAs: string[];
    founderIds: string[];
  };
}

const siteUrl = "https://boringtechsolutions.com";
const organizationId = `${siteUrl}/#organization`;
const organizationName = "Boring Tech Solutions";
const organizationUrl = siteUrl;
const organizationSameAs = [
  "https://linkedin.com/company/boring-tech-solutions",
  "https://github.com/boring-tech-solutions",
];

export const founderProfiles = {
  creigPhiri: {
    slug: "creig-phiri",
    path: "/about/creig-phiri",
    canonicalUrl: `${siteUrl}/about/creig-phiri`,
    title: "Creig Phiri | Founder at Boring Tech Solutions",
    description:
      "Meet Creig Phiri, founder at Boring Tech Solutions and systems architect focused on practical AI, cloud architecture, data governance, and community technology.",
    name: "Creig Phiri",
    role: "Founder at Boring Tech Solutions",
    shortRole: "Systems Architect | AI Strategist",
    image: "https://images.boringtechsolutions.com/creig-linkedin-profile.webp",
    linkedIn: "https://linkedin.com/in/creigphiri",
    intro:
      "Creig Phiri is the founder of Boring Tech Solutions, where he helps organizations turn complex technical environments into clear, practical systems.",
    body: [
      "His work spans backend engineering, cloud architecture, compliance-focused design, and applied AI integration. He approaches technology with a bias toward calm execution, readable systems, and decisions that can be explained to the people who depend on them.",
      "At Boring Tech Solutions, Creig helps shape products and client work around practical use cases: automation that keeps people in control, data governance that supports trust, and software that fits the way teams actually operate.",
      "Creig also serves as Vice President of ZCUSA, where he supports technology programs connected to youth and newcomer communities.",
    ],
    focusAreas: [
      "Backend engineering and cloud architecture",
      "Practical AI systems and workflow automation",
      "Compliance-focused product design",
      "Community technology programs",
    ],
    publicLinks: [{ label: "creigphiri.ca", href: "https://creigphiri.ca" }],
    relatedLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Govora", href: "/data-compliance" },
      { label: "QuizApp", href: "/case-studies/quizapp" },
      { label: "Shradha Maira", href: "/about/shradha-maira" },
    ],
    schema: {
      personId: "https://boringtechsolutions.com/about/creig-phiri#person",
      jobTitle: "Founder",
      organizationId,
      organizationName,
      organizationUrl,
      personSameAs: ["https://linkedin.com/in/creigphiri", "https://creigphiri.ca"],
      organizationSameAs,
      founderIds: [
        "https://boringtechsolutions.com/about/creig-phiri#person",
        "https://boringtechsolutions.com/about/shradha-maira#person",
      ],
    },
  },
  shradhaMaira: {
    slug: "shradha-maira",
    path: "/about/shradha-maira",
    canonicalUrl: `${siteUrl}/about/shradha-maira`,
    title: "Shradha Maira | Co-Founder at Boring Tech Solutions",
    description:
      "Meet Shradha Maira, co-founder at Boring Tech Solutions and strategy director focused on brand clarity, partnerships, product direction, and practical AI adoption.",
    name: "Shradha Maira",
    role: "Co-Founder & Strategy Director at Boring Tech Solutions",
    shortRole: "Brand Architect | Strategist",
    image: "https://images.boringtechsolutions.com/shradha-linkedin-profile.webp",
    linkedIn: "https://linkedin.com/in/shradhamaira",
    intro:
      "Shradha Maira is the co-founder of Boring Tech Solutions, where she helps organizations turn emerging technology into clear stories, practical offers, and grounded product direction.",
    body: [
      "Her work sits at the intersection of brand strategy, partnerships, and user understanding. She brings experience across global agencies and Canadian tech ecosystems, with a focus on helping teams explain complex technology in ways that are useful, credible, and easy to trust.",
      "At Boring Tech Solutions, Shradha shapes the company's voice, client positioning, and product direction. She helps translate technical capability into offers and experiences that make sense for the organizations adopting them.",
      "Shradha approaches strategy with the same discipline the team brings to engineering: fewer inflated claims, more clarity about value, constraints, and the path to meaningful adoption.",
    ],
    focusAreas: [
      "Brand strategy and positioning",
      "Partnership development",
      "Product direction and user empathy",
      "Practical AI adoption planning",
    ],
    publicLinks: [{ label: "shradhamaira.ca", href: "https://shradhamaira.ca" }],
    relatedLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Responsible AI Consulting", href: "/services/responsible-ai-consulting" },
      { label: "Creig Phiri", href: "/about/creig-phiri" },
    ],
    schema: {
      personId: "https://boringtechsolutions.com/about/shradha-maira#person",
      jobTitle: "Co-Founder & Strategy Director",
      organizationId,
      organizationName,
      organizationUrl,
      personSameAs: ["https://linkedin.com/in/shradhamaira", "https://shradhamaira.ca"],
      organizationSameAs,
      founderIds: [
        "https://boringtechsolutions.com/about/creig-phiri#person",
        "https://boringtechsolutions.com/about/shradha-maira#person",
      ],
    },
  },
} satisfies Record<string, FounderProfile>;

export const creigPhiriProfile = founderProfiles.creigPhiri;
export const shradhaMairaProfile = founderProfiles.shradhaMaira;
