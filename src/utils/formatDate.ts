const LOCALE = "en-US"
const LONG_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
}
const SHORT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
}

/**
 * Format a date for display. Returns fallback for null/undefined/invalid dates.
 */
export function formatDate(
  value: string | Date | null | undefined,
  fallback = "Recently",
  options: { month: "long" | "short" } = { month: "long" }
): string {
  if (value == null) return fallback
  const date = typeof value === "string" ? new Date(value) : value
  if (Number.isNaN(date.getTime())) return fallback
  const opts = options.month === "short" ? SHORT_OPTIONS : LONG_OPTIONS
  return date.toLocaleDateString(LOCALE, opts)
}
