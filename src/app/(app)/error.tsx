'use client'

import { useEffect } from 'react'
import { CtaButton } from '@/components/ui'
import Link from 'next/link'
import { Cable } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto w-fit">
          <Cable size={60} className='text-destructive' />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-foreground sm:text-4xl">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          An unexpected error occurred. We've been notified and are working to fix it.
        </p>

        {error.digest && (
          <code className="mt-4 inline-block rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
            Error ID: {error.digest}
          </code>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton
            variant='secondary'
            href="/"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            Back to Home
          </CtaButton>
          <CtaButton
            onClick={() => reset()}
            variant="primary"
          >
            Try again
          </CtaButton>

        </div>
      </div>
    </main>
  )
}
