import { CtaButton } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center bg-background px-6 text-center py-20">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-medium">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton
            variant='secondary'
            href="/portfolio"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            View our work
          </CtaButton>
          <CtaButton href="/" variant="primary">
            Back to Home
          </CtaButton>
        </div>
      </div>
    </main>
  )
}
