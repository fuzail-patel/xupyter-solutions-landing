"use client"
import { BodyText } from "@/components/ui"
import { Button } from "@/components/ui"    
import { CheckCircleIcon } from "@heroicons/react/24/solid"


type ContactSuccessProps = {
    onReset?: () => void
}

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
    return (
        <div className="flex w-full h-full min-h-100 items-center justify-center p-6 bg-transparent">
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
