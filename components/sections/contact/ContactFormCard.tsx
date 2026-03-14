"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FloatingField } from "@/components/shared/FloatingField"

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
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact.schema"
import ContactSuccess from "./ContactSuccess"
import ContactError from "./ContactError"

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
    <div className="p-0 flex items-center">
      {/* Form State */}
      {!isSubmitted && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-6 w-full"
          >
            {errorMessage && (
              <ContactError message={errorMessage} />
            )}
            {/* First + Last Name */}
            <div className="grid gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingField id="firstName" label="Enter your name">
                          <Input
                            {...field}
                            id="firstName"
                            placeholder=" "
                            variant="minimal"
                            className="peer text-base md:text-xl font-bold text-foreground/90"
                          />
                        </FloatingField>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingField id="lastName" label="Enter your last name">
                          <Input
                            {...field}
                            id="lastName"
                            placeholder=" "
                            variant="minimal"
                            className="peer text-base md:text-xl font-bold text-foreground/90"
                          />
                        </FloatingField>
                      </FormControl>
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
                    <FormControl>
                      <FloatingField id="contactDetail" label="Enter your email address">
                        <Input
                          {...field}
                          id="contactDetail"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-base md:text-xl font-bold text-foreground/90"
                        />
                      </FloatingField>
                    </FormControl>
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
                    <FormControl>
                      <FloatingField id="projectDescription" label="Go ahead, we are listening...">
                        <Textarea
                          {...field}
                          id="projectDescription"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-base md:text-xl font-bold text-foreground/90 pt-6 min-h-[120px]"
                        />
                      </FloatingField>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="pt-5 flex items-center justify-start">
                <CtaButton
                  variant="primary"
                  buttonType="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-50 text-lg py-6"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Submit"
                  )}
                </CtaButton>
              </div>
            </form>
          </Form>
        )}

        {isSubmitted && <ContactSuccess />}
      </div>
    )
  }
