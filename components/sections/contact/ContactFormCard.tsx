"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FloatingField } from "@/components/shared/FloatingField"

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
import { CtaButton } from "@/components/shared/CtaButton"
import SectionHeader from "@/components/shared/SectionHeader"
import { SystemList } from "@/components/shared/SystemList"
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact.schema"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ContactSuccess from "./ContactSuccess"

export function ContactFormCard() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.sessionStorage.getItem("contact_submitted") === "true"
  })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailOrPhone: "",
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        if (response.status === 400) {
          setErrorMessage("Please check the form fields and try again.")
        } else {
          setErrorMessage("Something went wrong. Please try again.")
        }
        return
      }

      form.reset()

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("contact_submitted", "true")
      }

      setIsSubmitted(true)
    } catch {
      setErrorMessage("Network error. Please try again.")
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Card className="border-none shadow-none bg-transparent p-0">
      <CardContent className="p-0">
        <SectionHeader
          align="left"
          size="md"
          className="border-b border-border pb-6"
          eyebrow="Contact"
          accent={false}
          title={"Start the Conversation"}
          description={"Tell us about your operations, challenges, and long-term goals. We’ll respond with clarity — not a generic pitch."}
        />

        {/* Form State */}
        {!isSubmitted && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-6"
            >
              {errorMessage && (
                <Alert variant="destructive">
                  <AlertTitle>Something went wrong</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
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
                            className="peer text-sm text-foreground/90"
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
                            className="peer text-sm text-foreground/90"
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
                          className="peer text-sm text-foreground/90"
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
                          className="peer text-sm text-foreground/90 pt-2"
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
                  disabled={isSubmitting}
                  icon={null}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Continue"
                  )}
                </CtaButton>
              </div>
            </form>
          </Form>
        )}

        {isSubmitted && <ContactSuccess />}
      </CardContent>
    </Card>
  )
}
