import type { TocItem } from "@/lib/types/blog"

export function getArticleToc(slug: string): TocItem[] {
  switch (slug) {
    case "designing-scalable-saas-architecture":
      return [
        {
          id: "start-with-responsibilities",
          label: "Start with responsibilities, not microservices",
          level: 2,
        },
        {
          id: "a-simple-framing",
          label: "A simple framing",
          level: 3,
        },
        {
          id: "make-data-flows-explicit",
          label: "Make data flows explicit",
          level: 2,
        },
        {
          id: "design-for-operational-visibility",
          label: "Design for operational visibility",
          level: 2,
        },
      ]
    default:
      return [
        {
          id: "establish-clear-system-boundaries",
          label: "Establish clear system boundaries",
          level: 2,
        },
        {
          id: "questions-to-ask",
          label: "Questions to ask",
          level: 3,
        },
        {
          id: "treat-automation-as-part-of-the-system",
          label: "Treat automation as part of the system",
          level: 2,
        },
      ]
  }
}
