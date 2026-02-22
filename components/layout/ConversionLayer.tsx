import { CtaButton } from "../custom/CtaButton";

export default function ConversionLayer() {
  return (
    <section className="border-y border-secondary py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm sm:text-base text-foreground font-medium">
          Building something that needs to operate properly?
        </p>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
          Let&apos;s structure it correctly.
        </p>
        <div className="mt-6">
          <CtaButton variant="primary" href="#strategy-call">
            Discuss Your Project
          </CtaButton>
        </div>
      </div>
    </section>
  )
}