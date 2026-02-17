"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { CtaButton } from "@/components/custom/CtaButton"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { SystemList } from "@/components/custom/SystemList"
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema"

export function ContactFormCard() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailOrPhone: "",
      message: "",
    },
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const submittedFlag = window.sessionStorage.getItem("contact_submitted")

    if (submittedFlag === "true") {
      setIsSubmitted(true)
    }
  }, [])

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted successfully: ", values)
    form.reset()

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("contact_submitted", "true")
    }

    setIsSubmitted(true)
  }

  const headerTitle = isSubmitted ? "Request Received" : "Start the Conversation"
  const headerDescription = isSubmitted
    ? "Next, our team will review your context, route it to the right lead, and follow up with a clear next step—typically within 1–2 business days, using the contact details you shared."
    : "Tell us about your operations, challenges, and long-term goals. We’ll respond with clarity — not a generic pitch."

  return (
    <Card className="border-none shadow-none py-8">
      <CardContent className="space-y-8 px-5 md:px-8">
        <SectionHeader
          align="left"
          size="md"
          className="border-b border-border pb-6"
          eyebrow="Contact"
          title={headerTitle}
          description={headerDescription}
        />

        {isSubmitted && (
          <div className="space-y-5 text-sm md:text-base text-muted-foreground">
            <SystemList
              items={[
                "We review your message and operational context.",
                "We route it to the most relevant lead on our team.",
                "We reply with concrete next steps, not a generic sales pitch.",
              ]}
            />

          </div>
        )}

        {!isSubmitted && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
            {/* First + Last Name */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="relative rounded-lg bg-background">
                      <FormControl>
                        <Input
                          {...field}
                          id="firstName"
                          placeholder=" "
                          className="peer h-12 md:h-14 text-base placeholder-transparent  border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>

                      <label
                        htmlFor="firstName"
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                        peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                      >
                        First Name
                      </label>
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="relative rounded-lg bg-background">
                      <FormControl>
                        <Input
                          {...field}
                          id="lastName"
                          placeholder=" "
                          className="peer h-12 md:h-14 text-base placeholder-transparent  border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>

                      <label
                        htmlFor="lastName"
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background rounded px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                        peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                      >
                        Last Name
                      </label>
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            {/* Email / Phone */}
            <FormField
              control={form.control}
              name="emailOrPhone"
              render={({ field }) => (
                <FormItem className="">
                  <div className="relative rounded-lg bg-background">
                    <FormControl>
                      <Input
                        {...field}
                        id="contactDetail"
                        placeholder=" "
                        className="peer h-12 md:h-14 text-base placeholder-transparent  border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>

                    <label
                      htmlFor="contactDetail"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                      peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                      peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                    >
                      Email or Phone
                    </label>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="">
                  <div className="relative rounded-lg bg-background">
                    <FormControl>
                      <Textarea
                        {...field}
                        id="projectDescription"
                        placeholder=" "
                        className="peer min-h-[140px] text-base resize-none placeholder-transparent  border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>

                    <label
                      htmlFor="projectDescription"
                      className="pointer-events-none absolute left-3 top-4 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                      peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                      peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                    >
                      Project Context
                    </label>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="pt-4 flex justify-end">
              <CtaButton
                variant="primary"
                buttonType="submit"
                className="h-14 px-8 rounded-md font-semibold"
                disabled={form.formState.isSubmitting}
              >
                Start the Conversation
              </CtaButton>
            </div>
          </form>
        </Form>
        )}
      </CardContent>
    </Card>
  )
}
