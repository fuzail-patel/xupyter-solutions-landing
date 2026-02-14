import { animate, stagger } from "animejs"

type FadeOptions = {
  delay?: number
  duration?: number
}

type HeroIntroTargets = {
  eyebrow: HTMLElement
  heading: HTMLElement
  description: HTMLElement
  ctaGroup: HTMLElement
  media: HTMLElement
}

const DURATION_FAST = 600
const DURATION_BASE = 700
const DURATION_SLOW = 800
const EASING_OUT = "easeOutQuad"

function isBrowser() {
  return typeof window !== "undefined"
}

function prefersReducedMotion() {
  if (!isBrowser() || typeof window.matchMedia !== "function") {
    return false
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function toArray(target: HTMLElement | HTMLElement[]) {
  return Array.isArray(target) ? target : [target]
}

export function animateFadeUp(
  target: HTMLElement | HTMLElement[],
  options?: FadeOptions
) {
  const elements = toArray(target)

  if (!isBrowser() || prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
    return
  }

  animate(elements, {
    opacity: [0, 1],
    translateY: [10, 0],
    duration: options?.duration ?? DURATION_BASE,
    delay: options?.delay ?? 0,
    easing: EASING_OUT,
  })
}

export function animateFadeOnly(
  target: HTMLElement | HTMLElement[],
  options?: FadeOptions
) {
  const elements = toArray(target)

  if (!isBrowser() || prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = "1"
    })
    return
  }

  animate(elements, {
    opacity: [0, 1],
    duration: options?.duration ?? DURATION_BASE,
    delay: options?.delay ?? 0,
    easing: EASING_OUT,
  })
}

export function animateSectionReveal(target: HTMLElement) {
  animateFadeUp(target, {
    duration: DURATION_BASE,
  })
}

export function animateHeroIntro(targets: HeroIntroTargets) {
  const sequenceDelay = 60

  animateFadeUp(targets.eyebrow, {
    duration: DURATION_FAST,
  })

  animateFadeUp(targets.heading, {
    duration: DURATION_SLOW,
    delay: sequenceDelay,
  })

  animateFadeUp(targets.description, {
    duration: DURATION_BASE,
    delay: sequenceDelay * 2,
  })

  animateFadeUp(targets.ctaGroup, {
    duration: DURATION_BASE,
    delay: sequenceDelay * 3,
  })

  animateFadeOnly(targets.media, {
    duration: DURATION_SLOW,
    delay: sequenceDelay * 3,
  })
}

export function animateStaggeredFadeUp(
  targets: HTMLElement[] | NodeListOf<HTMLElement>,
  options?: {
    step?: number
    baseDelay?: number
    duration?: number
  }
) {
  const elements = Array.from(targets ?? []).filter(Boolean) as HTMLElement[]

  if (!elements.length) return

  if (!isBrowser() || prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
    return
  }

  const step = options?.step ?? 80
  const baseDelay = options?.baseDelay ?? 0
  const duration = options?.duration ?? DURATION_BASE

  animate(elements, {
    opacity: [0, 1],
    translateY: [8, 0],
    duration,
    delay: stagger(step, { start: baseDelay }),
    easing: EASING_OUT,
  })
}
