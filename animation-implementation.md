# Animation Implementation Strategy

## Core Philosophy
Our animation ideology focuses on **Architecture-First Motion**. Animations should enhance the perception of structure and hierarchy without being distracting.

## Technical Stack
- **Anime.js**: Primary engine for precise, performance-oriented animations.
- **Intersection Observer**: Managed via `useSectionReveal` for scroll-triggered activations.
- **Tailwind Animate**: Used for simple, state-driven component transitions (e.g., tab switching).

## Standard Patterns

### 1. Section Entrance (Reveal)
Most sections use `useSectionReveal` to trigger animations when 10-20% of the section is visible.
- **Heading/Eyebrow**: Fade-in + `translateY(12px → 0)`.
- **Description**: Subtle fade-in with a slight delay (100-200ms).

### 2. Staggered Grids
For collections (Services, Industries, Process Steps, Testimonials), items are staggered to create a "flow" effect.
- **TranslateY**: `16px → 0` or `20px → 0`.
- **Stagger Delay**: `80ms` to `120ms` per item.
- **Duration**: `600ms` (Base).

### 3. Hero & Page Headers
Top-level entry points use more aggressive translations to establish momentum.
- **Eyebrow**: `10px → 0` (Immediate).
- **Heading**: `16px → 0` (100ms delay).
- **CTA Buttons**: Staggered `8px → 0` (340ms delay).

## Implementation Helpers
- `src/utils/animations.ts`: Contains `animateFade` and `animateStaggered` primitives.
- `src/hooks/useSectionReveal.ts`: Standard hook for scroll detection.
- `src/hooks/useHeroAnimations.ts`: Specialized hook for complex hero layouts.

## Accessibility
All animations automatically bypass execution if `prefers-reduced-motion` is detected, ensuring a compliant and comfortable experience for all users.
