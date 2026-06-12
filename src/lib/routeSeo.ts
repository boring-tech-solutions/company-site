export const SITE_URL = "https://www.boringtechsolutions.com";

interface RouteSeoEntry {
  title: string;
  description: string;
  url: string;
}

export const DEFAULT_SEO: RouteSeoEntry = {
  title: "Boring Tech Solutions | Practical AI for Real Business Impact",
  description:
    "Boring Tech Solutions helps small and mid-sized organizations start with practical AI systems that reduce costs, streamline workflows, and support teams without hype.",
  url: `${SITE_URL}/`,
};

export const routeSeo: Record<string, RouteSeoEntry> = {
  "/": {
    title: "Boring Tech Solutions | Practical AI for Real Business Impact",
    description:
      "Boring Tech Solutions helps small and mid-sized organizations start with practical AI systems that reduce costs, streamline workflows, and support teams without hype.",
    url: `${SITE_URL}/`,
  },
  "/ai-lab": {
    title: "AI Lab | Responsible Applied AI Systems",
    description:
      "Explore Boring Tech Solutions' AI Lab for practical agents, workflow automation, decision support, and responsible AI systems built for real operational problems.",
    url: `${SITE_URL}/ai-lab`,
  },
  "/data-compliance": {
    title: "Data Compliance | Govora Youth Data Governance",
    description:
      "Govora helps Alberta youth-serving organizations manage consent, access control, retention, audit logs, and PIPEDA or FOIP data governance requirements.",
    url: `${SITE_URL}/data-compliance`,
  },
  "/our-past-work": {
    title: "Our Past Work | Boring Tech Solutions Case Studies",
    description:
      "See Boring Tech Solutions projects across AI implementation, custom software, youth data compliance, and learning platforms built for measurable operational impact.",
    url: `${SITE_URL}/our-past-work`,
  },
  "/contact": {
    title: "Contact Boring Tech Solutions | Book a Coffee Chat",
    description:
      "Contact Boring Tech Solutions in Edmonton to discuss practical AI, automation, custom software, or youth data compliance projects.",
    url: `${SITE_URL}/contact`,
  },
  "/about/creig-phiri": {
    title: "Creig Phiri | Founder at Boring Tech Solutions",
    description:
      "Meet Creig Phiri, founder at Boring Tech Solutions and systems architect focused on practical AI, cloud architecture, data governance, and community technology.",
    url: `${SITE_URL}/about/creig-phiri`,
  },
  "/about/shradha-maira": {
    title: "Shradha Maira | Founding Team at Boring Tech Solutions",
    description:
      "Meet Shradha Maira, founding team member at Boring Tech Solutions focused on strategy, brand architecture, partnerships, and product direction for practical technology.",
    url: `${SITE_URL}/about/shradha-maira`,
  },
  "/community/northern-landing": {
    title: "Northern Landing | BTS Community Project",
    description:
      "A BTS community project shaped by Creig and Shradha's lived experience arriving in Canada, focused on trusted newcomer information, learning tools, civic participation, and navigation support.",
    url: `${SITE_URL}/community/northern-landing`,
  },
};

export function getRouteSeo(pathname: string): RouteSeoEntry {
  return routeSeo[pathname] ?? DEFAULT_SEO;
}
