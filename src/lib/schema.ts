import { SITE_URL } from "@/lib/routeSeo";

export { SITE_URL };

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const CREIG_PERSON_ID = `${SITE_URL}/about/creig-phiri#person`;
export const SHRADHA_PERSON_ID = `${SITE_URL}/about/shradha-maira#person`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Boring Tech Solutions",
  url: SITE_URL,
  description:
    "Boring Tech Solutions is an Edmonton-based software development and AI consulting company helping businesses, nonprofits, and public-sector organizations build practical technology systems.",
  foundingDate: "2024",
  areaServed: ["Edmonton", "Alberta", "Canada"],
  knowsAbout: [
    "Software development",
    "AI consulting",
    "Workflow automation",
    "Nonprofit technology",
    "Data management",
    "Compliance-focused software",
  ],
  logo: "https://images.boringtechsolutions.com/logo.webp",
  sameAs: [
    "https://www.linkedin.com/company/boring-tech-solutions",
    "https://github.com/boring-tech-solutions",
  ],
  founder: [
    { "@id": CREIG_PERSON_ID },
    { "@id": SHRADHA_PERSON_ID },
  ],
};
