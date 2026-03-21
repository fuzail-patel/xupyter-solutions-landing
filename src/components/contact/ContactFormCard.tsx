"use client"
import {
  CtaButton,
  FloatingField,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  contactSchema,
  type ContactFormValues,
} from "@/utils/schemas/contact.schema"
import ContactSuccess from "./ContactSuccess"
import ContactError from "./ContactError"
import { useEffect } from "react"

export default function ContactFormCard() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const submitted = sessionStorage.getItem("contact_submitted") === "true"
    if (submitted) {
      setIsSubmitted(true)
    }
  }, [])

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
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
            
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FloatingField id="name" label="Enter your name">
                      <Input
                        {...field}
                        id="name"
                        placeholder=" "
                        variant="minimal"
                        className="peer text-base md:text-xl font-bold text-foreground/90"
                        autoComplete="name"
                      />
                    </FloatingField>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FloatingField id="email" label="Enter your email">
                      <Input
                        {...field}
                        id="email"
                        placeholder=" "
                        variant="minimal"
                        className="peer text-base md:text-xl font-bold text-foreground/90"
                        type="email"
                        autoComplete="email"
                      />
                    </FloatingField>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Website */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FloatingField id="website" label="Enter your website (optional)">
                      <Input
                        {...field}
                        id="website"
                        placeholder=" "
                        variant="minimal"
                        className="peer text-base md:text-xl font-bold text-foreground/90"
                        type="url"
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
                    <FloatingField id="message" label="Tell us about your project">
                      <Textarea
                        {...field}
                        id="message"
                        placeholder=" "
                        variant="minimal"
                        className="peer text-base md:text-xl font-bold text-foreground/90 pt-6 min-h-30"
                      />
                    </FloatingField>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <CtaButton
              buttonType="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold shadow-lg"
              variant="primary"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </CtaButton>
          </form>
        </Form>
      )}

      {isSubmitted && <ContactSuccess />}
    </div>
  )
}

