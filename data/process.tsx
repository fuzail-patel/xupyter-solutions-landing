import {
  ArrowPathIcon,
  BeakerIcon,
  CursorArrowRaysIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"

import type { JourneyStep } from "@/types/journey"

export const PROCESS_STEPS: JourneyStep[] = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We understand your operations, workflows, constraints, and long-term goals. No assumptions. No surface-level briefs.",
    icon: <CursorArrowRaysIcon className="size-6" />,
  },
  {
    id: "02",
    title: "Architecture",
    description:
      "We define system structure, data models, integrations, and scalability paths before writing code.",
    icon: <Squares2X2Icon className="size-6" />,
  },
  {
    id: "03",
    title: "Design",
    description:
      "Interfaces are designed around workflows — not just visuals. Clarity, usability, and operational efficiency first.",
    icon: <WrenchScrewdriverIcon className="size-6" />,
  },
  {
    id: "04",
    title: "Testing",
    description:
      "Functional validation, edge cases, performance checks, and production readiness review.",
    icon: <BeakerIcon className="size-6" />,
  },
  {
    id: "05",
    title: "Delivery & Iteration",
    description:
      "Deployment is not the finish line. We refine, improve, and evolve as your operations grow.",
    icon: <ArrowPathIcon className="size-6" />,
  },
]

