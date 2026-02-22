"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FloatingField } from "@/components/custom/FloatingField"

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
    if (submittedFlag === "true") setIsSubmitted(true)
  }, [])

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted:", values)

    form.reset()
    window.sessionStorage.setItem("contact_submitted", "true")
    setIsSubmitted(true)
  }

  const headerTitle = isSubmitted
    ? "Request Received"
    : "Start the Conversation"

  const headerDescription = isSubmitted
    ? "Next, our team will review your context, route it to the right lead, and follow up with clear next steps—typically within 1–2 business days."
    : "Tell us about your operations, challenges, and long-term goals. We’ll respond with clarity — not a generic pitch."

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="">
        <SectionHeader
          align="left"
          size="md"
          className="border-b border-border pb-6"
          eyebrow="Contact"
          title={headerTitle}
          description={headerDescription}
        />

        {/* Submitted State */}
        {isSubmitted && (
          <div className="space-y-5 text-sm md:text-base text-muted-foreground">
            <SystemList
              items={[
                "We review your message and operational context.",
                "We route it to the most relevant lead on our team.",
                "We reply with concrete next steps.",
              ]}
            />
          </div>
        )}

        {/* Form State */}
        {!isSubmitted && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-6"
            >
              {/* First + Last Name */}
              <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FloatingField id="firstName" label="First Name">
                        <FormControl>
                          <Input
                            {...field}
                            id="firstName"
                            placeholder=" "
                            variant="minimal"
                            className="peer text-[0.95rem] text-foreground/90"
                          />
                        </FormControl>
                      </FloatingField>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FloatingField id="lastName" label="Last Name">
                        <FormControl>
                          <Input
                            {...field}
                            id="lastName"
                            placeholder=" "
                            variant="minimal"
                            className="peer text-[0.95rem] text-foreground/90"
                          />
                        </FormControl>
                      </FloatingField>
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
                  <FormItem>
                    <FloatingField
                      id="contactDetail"
                      label="Email or Phone"
                    >
                      <FormControl>
                        <Input
                          {...field}
                          id="contactDetail"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-[0.95rem] text-foreground/90"
                        />
                      </FormControl>
                    </FloatingField>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FloatingField
                      id="projectDescription"
                      label="Project Context"
                    >
                      <FormControl>
                        <Textarea
                          {...field}
                          id="projectDescription"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-[0.95rem] text-foreground/90 pt-2"
                        />
                      </FormControl>
                    </FloatingField>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="pt-5 flex justify-end">
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
