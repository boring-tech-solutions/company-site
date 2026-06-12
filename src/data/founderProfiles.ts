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
  relatedLinks: FounderProfileLink[];
  schema: {
    jobTitle: string;
    worksFor: string;
    sameAs: string[];
  };
}

const siteUrl = "https://boringtechsolutions.com";

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
    relatedLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Govora", href: "/data-compliance" },
      { label: "QuizApp", href: "/case-studies/quizapp" },
      { label: "Shradha Maira", href: "/about/shradha-maira" },
    ],
    schema: {
      jobTitle: "Founder",
      worksFor: "Boring Tech Solutions",
      sameAs: ["https://linkedin.com/in/creigphiri"],
    },
  },
  shradhaMaira: {
    slug: "shradha-maira",
    path: "/about/shradha-maira",
    canonicalUrl: `${siteUrl}/about/shradha-maira`,
    title: "Shradha Maira | Founding Team at Boring Tech Solutions",
    description:
      "Meet Shradha Maira, founding team member at Boring Tech Solutions focused on strategy, brand architecture, partnerships, and product direction for practical technology.",
    name: "Shradha Maira",
    role: "Founding Team at Boring Tech Solutions",
    shortRole: "Brand Architect | Strategist",
    image: "https://images.boringtechsolutions.com/shradha-linkedin-profile.webp",
    linkedIn: "https://linkedin.com/in/shradhamaira",
    intro:
      "Shradha Maira helps shape the voice, strategy, and impact of Boring Tech Solutions.",
    body: [
      "With more than 10 years across global agencies and Canadian tech ecosystems, Shradha brings strategic thinking, user empathy, and a storytelling instinct that helps translate complex technology into language people can understand.",
      "At Boring Tech Solutions, she supports marketing, partnerships, and product direction, connecting the company's practical AI, data governance, and learning platform work to the needs of the people using it.",
      "Her work helps keep products and client conversations grounded in clear positioning, useful communication, and operational choices that fit real teams.",
    ],
    focusAreas: [
      "Brand architecture and market positioning",
      "Product direction and user communication",
      "Partnership strategy",
      "Practical technology storytelling",
    ],
    relatedLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Govora", href: "/data-compliance" },
      { label: "QuizApp", href: "/case-studies/quizapp" },
      { label: "Creig Phiri", href: "/about/creig-phiri" },
    ],
    schema: {
      jobTitle: "Founding Team",
      worksFor: "Boring Tech Solutions",
      sameAs: ["https://linkedin.com/in/shradhamaira"],
    },
  },
} satisfies Record<string, FounderProfile>;

export const creigPhiriProfile = founderProfiles.creigPhiri;
export const shradhaMairaProfile = founderProfiles.shradhaMaira;
