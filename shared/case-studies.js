const siteUrl = "https://www.boringtechsolutions.com";

export const caseStudies = [
  {
    slug: "aify",
    path: "/case-studies/aify",
    canonicalUrl: `${siteUrl}/case-studies/aify`,
    client: "AIFY",
    category: "AI Implementation",
    hero: "Practical AI automation for teams carrying too much manual process.",
    summary: "Transforming business operations through intelligent automation and predictive analytics.",
    cardChallenge: "Manual workflows",
    cardOutcome: "Clearer operations",
    problem:
      "AIFY had teams spending too much time on repetitive data processing, manual handoffs, and slow reporting loops. The work needed more consistency without forcing the team into a fragile one-size-fits-all tool.",
    approach:
      "We designed an AI-assisted automation layer around the existing workflow: document processing support, structured dashboards, and workflow orchestration that kept people in control of approvals and exceptions.",
    outcome:
      "The team gained a more reliable operating rhythm, faster access to useful business signals, and less repetitive administrative work in the day-to-day process.",
    techStack: ["Machine Learning", "NLP", "Python", "React", "AWS"],
    industryContext: "Operations, automation, and applied AI for growing teams.",
    ctaLabel: "Discuss an AI workflow",
    seoTitle: "ZUCSA All In For Youth Case Study | Practical AI Automation",
    seoDescription:
      "See how Boring Tech Solutions helped AIFY shape practical AI automation around real operational workflows, dashboards, and human oversight.",
  },
  {
    slug: "govora",
    path: "/case-studies/govora",
    canonicalUrl: `${siteUrl}/case-studies/govora`,
    client: "Govora.ca",
    category: "Data Compliance",
    hero: "Data governance workflows for youth-serving organizations handling sensitive records.",
    summary: "Comprehensive data compliance tooling for consent, retention, audit trails, and reporting.",
    cardChallenge: "Compliance complexity",
    cardOutcome: "Governed workflows",
    problem:
      "Youth-serving organizations often handle sensitive participant data without the staff capacity or software infrastructure needed to consistently manage consent, retention, and audit expectations.",
    approach:
      "We built Govora as a focused compliance management system with consent tracking, configurable retention workflows, audit logging, and dashboards that make governance tasks visible to staff.",
    outcome:
      "The product gives organizations a clearer path for managing privacy obligations, reducing manual coordination, and preparing evidence for internal reviews or regulatory conversations.",
    techStack: ["Python", "Vue.js", "AWS", "Edge Functions", "Encryption"],
    industryContext: "Youth services, nonprofit operations, Canadian privacy, and data governance.",
    ctaLabel: "Talk about data governance",
    seoTitle: "Govora Case Study | Youth Data Compliance Workflows",
    seoDescription:
      "Explore Govora, a Boring Tech Solutions case study focused on consent tracking, retention workflows, audit logs, and youth data governance.",
  },
  {
    slug: "quizapp",
    path: "/case-studies/quizapp",
    canonicalUrl: `${siteUrl}/case-studies/quizapp`,
    client: "QuizApp",
    category: "Learning Platform",
    hero: "Structured citizenship learning for newcomers preparing with limited time and support.",
    summary: "Empowering newcomers with accessible, structured citizenship learning.",
    cardChallenge: "Fragmented resources",
    cardOutcome: "Structured learning",
    problem:
      "Newcomers preparing for the Canadian citizenship test often face dense materials, inconsistent study routines, language barriers, and limited ways to measure readiness.",
    approach:
      "We built a focused learning platform that turns citizenship study content into bite-sized quizzes, progress tracking, immediate feedback, and accessible self-paced review.",
    outcome:
      "Learners get a clearer way to study consistently, build confidence, and use structured practice in workshops, classrooms, or independent preparation.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "React", "Tailwind"],
    industryContext: "Adult learning, newcomer support, citizenship preparation, and accessible education.",
    ctaLabel: "Plan a learning platform",
    seoTitle: "QuizApp Case Study | Citizenship Learning Platform",
    seoDescription:
      "Read the QuizApp case study about accessible citizenship test preparation, structured quizzes, progress tracking, and newcomer learning support.",
    image: "https://images.boringtechsolutions.com/quizapp_portfolio_screenshot_tablet.webp",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/case-studies/quizapp#softwareapplication`,
      name: "QuizApp",
      url: `${siteUrl}/case-studies/quizapp`,
      description:
        "A focused learning platform for Canadian citizenship test preparation, practice quizzes, progress tracking, and self-paced review.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      publisher: {
        "@id": "https://www.boringtechsolutions.com/#organization",
      },
    },
  },
  {
    slug: "yaco",
    path: "/case-studies/yaco",
    canonicalUrl: `${siteUrl}/case-studies/yaco`,
    client: "YACO",
    category: "Custom Software",
    hero: "A unified software foundation for youth advocacy and community organizing.",
    summary: "Building robust infrastructure for advocacy coordination, events, and field work.",
    cardChallenge: "Disconnected systems",
    cardOutcome: "Unified platform",
    problem:
      "Youth Advocacy and Community Organizing needed a better way to coordinate programs, people, events, and field information across work that had outgrown scattered tools.",
    approach:
      "We shaped a custom platform around the operating model: shared communication, event coordination, volunteer workflows, and reporting structures that support organizers in the field.",
    outcome:
      "The organization gained a more coherent digital workspace, clearer coordination patterns, and a foundation that can grow with future program needs.",
    techStack: ["React", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    industryContext: "Youth advocacy, community organizing, nonprofit operations, and civic technology.",
    ctaLabel: "Scope custom software",
    seoTitle: "YACO Case Study | Community Organizing Software",
    seoDescription:
      "See how Boring Tech Solutions approached custom software for YACO, supporting youth advocacy coordination, events, and nonprofit operations.",
  },
  {
    slug: "northern-landing",
    path: "/case-studies/northern-landing",
    canonicalUrl: `${siteUrl}/case-studies/northern-landing`,
    client: "Northern Landing",
    category: "Community Initiative",
    hero: "Community-first support for newcomers, shaped by lived experience arriving in Canada.",
    summary:
      "A BTS community initiative that gathered trusted newcomer information, practical navigation support, and civic participation resources.",
    cardChallenge: "Newcomer navigation gaps",
    cardOutcome: "Trusted community guidance",
    problem:
      "Creig and Shradha saw how much time newcomers could lose searching for reliable information, especially when systems, language, and local context were all moving at once.",
    approach:
      "The work focused on clear, community-rooted information, simple learning resources, and practical navigation support shaped by lived experience rather than a sales pitch.",
    outcome:
      "Northern Landing gave BTS a way to share community help in a grounded, accessible format that stayed close to the needs of newcomers and the people supporting them.",
    techStack: ["Content Strategy", "Accessibility", "Community Research", "Information Architecture", "React"],
    industryContext: "Newcomer support, civic participation, and community information.",
    ctaLabel: "Explore related community work",
    seoTitle: "Northern Landing Case Study | Community-Focused Newcomer Support",
    seoDescription:
      "Read about Northern Landing, a BTS community initiative shaped by lived experience arriving in Canada and focused on trusted newcomer information and practical navigation support.",
    bgColor: "bg-[#1B3540]",
    textColor: "text-primary",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${siteUrl}/case-studies/northern-landing#creativework`,
      name: "Northern Landing",
      url: `${siteUrl}/case-studies/northern-landing`,
      description:
        "A BTS community initiative shaped by lived experience arriving in Canada and focused on trusted newcomer information and practical navigation support.",
      keywords: "newcomer support, community information, civic participation, accessibility",
      publisher: {
        "@id": "https://www.boringtechsolutions.com/#organization",
      },
    },
  },
];

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((study) => [study.slug, study]),
);

export function getCaseStudyBySlug(slug) {
  return caseStudiesBySlug[slug] ?? null;
}
