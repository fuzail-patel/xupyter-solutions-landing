import Link from "next/link"

export default function AboutHeader() {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="space-y-4">
            <div className="text-xs text-muted-foreground/80">
              <span className="inline-flex items-center gap-1">
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <span className="text-muted-foreground/60">/</span>
                <span>About</span>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-[var(--font-satoshi)] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-foreground max-w-3xl">
                The Thinking Behind How We Build
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-xl">
                We design and develop scalable business systems built for
                long-term clarity and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
