import type { CareersBenefit, CareersPageContent, Job } from "@/lib/types/careers"

export const careersPageContent: CareersPageContent = {
  title: "Careers",
  subtitle:
    "Open roles and long-term positions within our engineering and systems teams.",
  emptyStateMessage: "There are currently no open positions.",
  emptyStateCtaLabel: "Submit General Application",
  emptyStateHref: "/careers/general-application",
}

export const careersBenefits: CareersBenefit[] = [
  {
    id: "remote-structure",
    title: "Remote-first structure",
    description:
      "Work from where you are most effective, with clear overlap windows instead of fixed office hours.",
    icon: "remote",
  },
  {
    id: "stable-weeks",
    title: "Stable 5-day weeks",
    description:
      "No weekend sprints or ad-hoc late nights as a default expectation.",
    icon: "clock",
  },
  {
    id: "ownership",
    title: "Clear ownership, no micromanagement",
    description:
      "Small teams, direct communication, and responsibility aligned to systems you help design.",
    icon: "briefcase",
  },
  {
    id: "learning-growth",
    title: "Continuous learning and growth",
    description:
      "Exposure to complex systems work, regular feedback, and space to deepen your craft.",
    icon: "sparkles",
  },
]

export const jobs: Job[] = [
  {
    id: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    meta: {
      employmentType: "Full-time",
      location: "Remote, Europe",
      department: "Engineering",
      experienceLevel: "Senior",
    },
    shortDescription:
      "Design and maintain core APIs, data flows, and background services for internal business systems.",
    salary: {
      value: "25-30k",
    },
    href: "/careers/senior-backend-engineer",
    overview:
      "This role focuses on core services that support internal operations, integrations, and reporting.",
    techStack: [
      "TypeScript services",
      "Relational databases",
      "Message-based workflows",
    ],
    responsibilities: [
      "Maintain and extend backend services used in daily operations.",
      "Coordinate with frontend and operations teams on system interfaces.",
      "Support monitoring, logging, and structured incident handling.",
    ],
    requirements: [
      "Experience designing and operating production APIs.",
      "Comfort working with relational data models and integrations.",
      "Ability to work in a small, engineering-led team.",
    ],
    benefits: [
      "Remote-first environment with structured communication.",
      "Stable, long-term projects focused on internal systems.",
    ],
    successIndicators: [
      "Operational systems remain reliable and predictable.",
      "Changes are introduced in a controlled and well-documented way.",
    ],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    meta: {
      employmentType: "Full-time",
      location: "Remote, UK or EU",
      department: "Engineering",
      experienceLevel: "Mid-level",
    },
    shortDescription:
      "Implement structured interfaces for admin panels, dashboards, and operations tools.",
    salary: {
      value: "Range aligned with internal engineering bands.",
    },
    href: "/careers/frontend-engineer",
    overview:
      "This role focuses on interfaces that expose system capabilities in a clear, predictable way.",
    techStack: ["TypeScript", "React", "Component-based UI systems"],
    responsibilities: [
      "Implement structured, accessible interfaces for internal tools.",
      "Work with backend engineers to define stable API contracts.",
      "Contribute to shared components used across systems.",
    ],
    requirements: [
      "Experience building frontends backed by APIs.",
      "Comfort working with design systems and component libraries.",
      "Attention to state management and data loading patterns.",
    ],
    benefits: [
      "Work on internal tools used daily by operations teams.",
      "Clear focus on stability and structure over visual effects.",
    ],
    successIndicators: [
      "Interfaces remain clear and stable as systems evolve.",
      "Users can find and complete key actions without friction.",
    ],
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    meta: {
      employmentType: "Full-time",
      location: "Remote, timezone overlap with UK",
      department: "Engineering",
      experienceLevel: "Lead",
    },
    shortDescription:
      "Coordinate delivery across multiple systems, support engineers, and maintain clear technical plans.",
    salary: {
      value: "Compensation discussed with shortlisted candidates.",
    },
    href: "/careers/engineering-manager",
    overview:
      "This role keeps delivery structured across systems, scopes, and engineering workstreams.",
    techStack: ["Planning tools", "System diagrams", "Delivery workflows"],
    responsibilities: [
      "Coordinate scope, sequencing, and expectations across initiatives.",
      "Support engineers with clear priorities and feedback loops.",
      "Maintain visibility on dependencies and operational risk.",
    ],
    requirements: [
      "Experience leading engineering delivery across multiple projects.",
      "Comfort working with stakeholders who depend on internal systems.",
      "Ability to communicate trade-offs clearly and directly.",
    ],
    benefits: [
      "Focus on long-term systems rather than short-lived initiatives.",
      "Close collaboration with engineering and operations leads.",
    ],
    successIndicators: [
      "Workflows remain predictable across teams and projects.",
      "Scopes are understood, documented, and delivered consistently.",
    ],
  },
]