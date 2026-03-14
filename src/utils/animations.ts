import { animate, stagger } from "animejs"

export type FadeOptions = {
  delay?: number
  duration?: number
  translateY?: [number, number]
  translateX?: [number, number]
  scale?: [number, number]
  easing?: string
}

const DURATION_BASE = 600
const EASING_OUT = "easeOutQuad"
const STAGGER_BASE = 100

function isBrowser() {
  return typeof window !== "undefined"
}

export function prefersReducedMotion() {
  if (!isBrowser() || typeof window.matchMedia !== "function") {
    return false
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function toArray(
  target: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>
) {
  if (target instanceof NodeList) return Array.from(target)
  return Array.isArray(target) ? target : [target]
}

export function animateFade(
  target: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
  options?: FadeOptions
) {
  const elements = toArray(target).filter(Boolean)
  if (!elements.length) return

  if (!isBrowser() || prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "none"
    })
    return
  }

  const config: any = {
    opacity: [0, 1],
    duration: options?.duration ?? DURATION_BASE,
    delay: options?.delay ?? 0,
    easing: options?.easing ?? EASING_OUT,
  }

  if (options?.translateY) config.translateY = options.translateY
  if (options?.translateX) config.translateX = options.translateX
  if (options?.scale) config.scale = options.scale

  animate(elements, config)
}

export function animateStaggered(
  target: HTMLElement[] | NodeListOf<HTMLElement>,
  options?: FadeOptions & { staggerDelay?: number }
) {
  const elements = toArray(target).filter(Boolean)
  if (!elements.length) return

  if (!isBrowser() || prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "none"
    })
    return
  }

  const staggerDelay = options?.staggerDelay ?? STAGGER_BASE

  const config: any = {
    opacity: [0, 1],
    duration: options?.duration ?? DURATION_BASE,
    delay: stagger(staggerDelay, { start: options?.delay ?? 0 }),
    easing: options?.easing ?? EASING_OUT,
  }

  if (options?.translateY) config.translateY = options.translateY
  if (options?.translateX) config.translateX = options.translateX
  if (options?.scale) config.scale = options.scale

  animate(elements, config)
}

export function animateSectionReveal(target: HTMLElement) {
  animateFade(target, {
    translateY: [12, 0],
  })
}
