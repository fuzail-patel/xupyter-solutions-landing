import type { EngagementModel } from "@/types/content"

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    key: "dedicated-par tner",
    name: "Dedicated System Partner",
    primary: true,
    positioning: "Long-term ownership of core internal systems.",
    engagementType: "Embedded, ongoing partnership with shared accountability.",
    scopeStructure: "Multi-quarter roadmap with rolling scopes and priorities.",
    collaborationModel: [
      "Shared planning and roadmap cadence",
      "Direct access to engineering leadership",
      "Joint decision-making on trade-offs",
    ],
    deliverables: [
      "Continuous platform evolution and refactors",
      "Architecture stewardship and reviews",
      "Operational tooling and automation",
    ],
    bestFit: [
      "Core internal systems that cannot go down",
      "Teams needing a long-term technical counterpart",
    ],
  },
  {
    key: "scoped-project",
    name: "Scoped Project Delivery",
    positioning: "Well-defined initiatives with clear start and end.",
    engagementType: "Fixed scope delivery with structured milestones.",
    scopeStructure: "Phased delivery plan with explicit acceptance criteria.",
    collaborationModel: [
      "Weekly or bi-weekly working sessions",
      "Clear ownership across both teams",
      "Formal checkpoints at each phase",
    ],
    deliverables: [
      "Project-specific system or module",
      "Implementation documentation and handover",
      "Deployment and launch support",
    ],
    bestFit: [
      "Initiatives with bounded scope and timeline",
      "Teams with internal capacity post-launch",
    ],
  },
  {
    key: "architecture-advisory",
    name: "Architecture & Advisory",
    positioning: "System design and technical direction without full build-out.",
    engagementType: "Targeted strategy and architecture engagement.",
    scopeStructure: "Time-boxed engagements or recurring advisory blocks.",
    collaborationModel: [
      "Workshops with leadership and engineering",
      "Reviews of existing systems and proposals",
      "As-needed support for internal teams",
    ],
    deliverables: [
      "Architecture and integration blueprints",
      "Risk, scalability, and migration recommendations",
      "Technical due diligence and audit outputs",
    ],
    bestFit: [
      "Teams with in-house engineering delivery",
      "Organizations planning large system changes",
    ],
  },
]

