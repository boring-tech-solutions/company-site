import lionAiAutomation from "@/assets/lion-ai-automation.webp";
import lionCompliance from "@/assets/lion-compliance.webp";

export interface ServicePageCard {
  label: string;
  copy: string;
}

export interface ServicePageData {
  title: string;
  description: string;
  canonicalUrl: string;
  h1: string;
  ctaLabel: string;
  image: string;
  heroAngle: string;
  heroBody: string;
  heroBullets: string[];
  concernsSection: {
    heading: string;
    cards: ServicePageCard[];
  };
  buildsSection: {
    heading: string;
    cards: ServicePageCard[];
  };
  principlesSection: {
    heading: string;
    cards: ServicePageCard[];
  };
  outcomesSection: {
    heading: string;
    items: string[];
  };
  cta: {
    heading: string;
    body: string;
    path: string;
  };
}

export const aiWorkflowAutomation: ServicePageData = {
  title: "AI Workflow Automation",
  description:
    "Workflow design and automation that helps teams reduce repetitive handoffs, keep review points in place, and move work forward with clarity.",
  canonicalUrl: "https://www.boringtechsolutions.com/services/ai-workflow-automation",
  h1: "AI Workflow Automation",
  ctaLabel: "Talk through a workflow",
  image: lionAiAutomation,
  heroAngle: "Make repeatable work easier to move, review, and complete.",
  heroBody:
    "We map the work that slows teams down, then design automation that supports people rather than hiding decisions.",
  heroBullets: [
    "Fits approvals and exceptions",
    "Keeps human review where it matters",
    "Designed for practical rollout",
  ],
  concernsSection: {
    heading: "Common problems and concerns",
    cards: [
      {
        label: "Too many handoffs",
        copy:
          "Repeated manual transfer between systems and people can slow delivery and create avoidable follow-up work.",
      },
      {
        label: "Unclear exceptions",
        copy:
          "Teams need a simple way to route unusual cases without losing context or creating hidden workarounds.",
      },
      {
        label: "Too much status chasing",
        copy:
          "When updates live in too many places, leaders spend time piecing together where work actually stands.",
      },
      {
        label: "Automation without review",
        copy:
          "Useful automation still needs clear checkpoints so people can step in when judgment or approval is needed.",
      },
    ],
  },
  buildsSection: {
    heading: "What BTS builds and provides",
    cards: [
      {
        label: "Workflow mapping",
        copy:
          "We trace the real path of work so the automation plan matches how the team already operates.",
      },
      {
        label: "Automation design",
        copy:
          "We design practical flows that reduce repetitive steps and make the next action easier to see.",
      },
      {
        label: "Systems integration",
        copy:
          "We connect the tools that need to share data so teams do not have to re-enter the same information.",
      },
      {
        label: "Testing and rollout support",
        copy:
          "We help teams validate the flow, refine it with feedback, and introduce it in a way that fits daily operations.",
      },
    ],
  },
  principlesSection: {
    heading: "Industries and principles we keep in view",
    cards: [
      {
        label: "Operations and admin teams",
        copy:
          "Common repeatable work in service delivery, coordination, intake, and reporting is often a strong starting point.",
      },
      {
        label: "Document-heavy organizations",
        copy:
          "Workflows with forms, approvals, records, and status tracking can benefit from clearer handoff design.",
      },
      {
        label: "People-first rollout",
        copy:
          "We keep people in the loop, design for oversight, and make it easier to review exceptions before they escalate.",
      },
      {
        label: "Practical fit over novelty",
        copy:
          "The goal is to support real operations, not add complexity that only looks impressive in a demo.",
      },
    ],
  },
  outcomesSection: {
    heading: "Outcomes clients look for",
    items: [
      "Less repetitive admin work to manage",
      "Cleaner handoffs and better status visibility",
      "Automation that still supports review and approvals",
      "A realistic path from pilot to production",
    ],
  },
  cta: {
    heading: "Want to see where automation helps most?",
    body:
      "Share one workflow and we can help you identify practical steps that reduce friction without losing control.",
    path: "/contact",
  },
};

export const responsibleAIConsulting: ServicePageData = {
  title: "Responsible AI Consulting",
  description:
    "Advisory support that helps teams choose AI approaches, set guardrails, and align adoption with privacy, policy, and trust.",
  canonicalUrl: "https://www.boringtechsolutions.com/services/responsible-ai-consulting",
  h1: "Responsible AI Consulting",
  ctaLabel: "Start a responsible AI conversation",
  image: lionCompliance,
  heroAngle: "Use AI with clearer guardrails, better questions, and fewer surprises.",
  heroBody:
    "We help leaders evaluate opportunities, surface concerns early, and define a path that matches responsibilities to users, staff, and communities.",
  heroBullets: [
    "Supports policy and governance work",
    "Keeps oversight in the room",
    "Makes vendor review easier",
  ],
  concernsSection: {
    heading: "Common problems and concerns",
    cards: [
      {
        label: "Unclear policy",
        copy:
          "Teams need practical guidance on what is allowed, what should be reviewed, and what needs an escalation path.",
      },
      {
        label: "Privacy and handling questions",
        copy:
          "AI projects often stall when data use, retention, and access controls have not been thought through early.",
      },
      {
        label: "Vendor claims that are hard to verify",
        copy:
          "Decision-makers need a clearer way to compare tools and ask the right questions before they commit time or budget.",
      },
      {
        label: "Team readiness",
        copy:
          "Adoption works better when staff understand the use case, boundaries, and what human oversight still looks like.",
      },
    ],
  },
  buildsSection: {
    heading: "What BTS builds and provides",
    cards: [
      {
        label: "Readiness reviews",
        copy:
          "We help assess where AI could fit, where it should wait, and which decisions need more context first.",
      },
      {
        label: "Guardrails and use policy",
        copy:
          "We help define boundaries for data handling, review steps, and practical oversight so people know how to proceed.",
      },
      {
        label: "Vendor and model evaluation",
        copy:
          "We support comparison work so leaders can judge claims against the needs of the organization.",
      },
      {
        label: "Adoption roadmap",
        copy:
          "We help sequence the work so teams can move from exploration to a pilot without skipping the basics.",
      },
    ],
  },
  principlesSection: {
    heading: "Industries and principles we keep in view",
    cards: [
      {
        label: "Public sector and nonprofit teams",
        copy:
          "Organizations with public trust responsibilities often need a more careful conversation about adoption and accountability.",
      },
      {
        label: "Sensitive service environments",
        copy:
          "Where privacy, dignity, and user trust matter, the review process should be clearer before any pilot begins.",
      },
      {
        label: "Leadership and governance groups",
        copy:
          "Decision-makers benefit from a shared way to talk about value, boundaries, and the tradeoffs involved.",
      },
      {
        label: "Practical governance",
        copy:
          "The goal is not more process for its own sake, but a simpler path to thoughtful decisions.",
      },
    ],
  },
  outcomesSection: {
    heading: "Outcomes clients look for",
    items: [
      "Clearer decision criteria for AI opportunities",
      "A shared vocabulary for risk, value, and oversight",
      "Documented guardrails for pilots and evaluations",
      "A more defensible adoption path",
    ],
  },
  cta: {
    heading: "Need a clearer starting point?",
    body:
      "We can help you frame the questions, narrow the options, and decide what belongs in a pilot before you spend time or budget.",
    path: "/contact",
  },
};
