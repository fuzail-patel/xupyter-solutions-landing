"use client"

import { BodyText } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

type ContactSuccessProps = {
    onReset?: () => void
}

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
    return (
        <div className="flex w-full items-center justify-center py-8 px-6 bg-card rounded-xl">
            <div className="mx-auto max-w-xl text-center">
                <CheckCircleIcon className="mx-auto mb-6 h-16 w-16 text-primary" />

                <h2 className="mb-1 text-3xl font-semibold tracking-tight">
                    Message sent successfully
                </h2>

                <BodyText className="mb-8 text-muted-foreground font-semibold">
                    Next, our team will review your context, route it to the right lead, and follow up with clear next steps—typically within 1–2 business days.
                </BodyText>

                {onReset && (
                    <Button onClick={onReset} size="lg">
                        Send another message
                    </Button>
                )}
            </div>
        </div>
    )
}