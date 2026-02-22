import { VisionPrinciple } from "../types/about";

export const VISION_PRINCIPLES: readonly VisionPrinciple[] = [
  {
    num: "01",
    title: "Systems Over Tools",
    description:
      "Modern companies operate on fragmented stacks; businesses should run on unified systems—not scattered apps.",
  },
  {
    num: "02",
    title: "Architecture Before Speed",
    description:
      "Fast builds without structure create long-term friction; foundations come before features.",
  },
  {
    num: "03",
    title: "Scale Without Rebuild",
    description:
      "Growth should not require starting over; systems must be designed for increasing complexity.",
  },
  {
    num: "04",
    title: "Clarity Over Complexity",
    description:
      "Operational software should reduce chaos, not introduce it; structure creates visibility and control.",
  },
] as const
