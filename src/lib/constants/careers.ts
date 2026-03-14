import type { CareersBenefit, CareersPageContent, Job } from "@/types/careers"

export const careersPageContent: CareersPageContent = {
  title: "Careers",
  subtitle:
    "Open roles and long-term positions within our engineering and systems teams.",
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
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote, Europe",
    type: "full-time",
    summary: "Design and maintain core APIs, data flows, and background services for internal business systems.",
    description: {
      root: {
        type: "root",
        children: [],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      },
    },
    requirements: [
      { id: "1", requirement: "Experience designing and operating production APIs." },
      { id: "2", requirement: "Comfort working with relational data models and integrations." },
      { id: "3", requirement: "Ability to work in a small, engineering-led team." },
    ],
    status: "open",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote, UK or EU",
    type: "full-time",
    summary: "Implement structured interfaces for admin panels, dashboards, and operations tools.",
    description: {
      root: {
        type: "root",
        children: [],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      },
    },
    requirements: [
      { id: "1", requirement: "Strong proficiency in React and TypeScript." },
      { id: "2", requirement: "Experience building internal tools or dashboards." },
    ],
    status: "open",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
]
