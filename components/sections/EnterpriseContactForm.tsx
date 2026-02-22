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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CtaButton } from "@/components/custom/CtaButton"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { SystemList } from "@/components/custom/SystemList"
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema"
import { CheckCircle } from "lucide-react"

export function EnterpriseContactForm() {
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
    : "Tell us about your operations, challenges, and long-term goals. We'll respond with clarity — not a generic pitch."

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Column: Content */}
      <div className="space-y-8">
        <SectionHeader
          align="left"
          size="md"
          className="border-b border-border/60 pb-6"
          eyebrow="Contact"
          title={headerTitle}
          description={headerDescription}
        />

        {/* Process List */}
        {isSubmitted ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Request submitted successfully</span>
            </div>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <h4 className="font-semibold text-foreground">What happens next:</h4>
              <SystemList
                items={[
                  "We review your context and operational needs",
                  "We route it to the most relevant lead on our team",
                  "We respond with concrete next steps (1-2 business days)",
                ]}
                className="space-y-3"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-muted-foreground">
            <h4 className="font-semibold text-foreground">Our process:</h4>
            <SystemList
              items={[
                "We analyze your operational challenges",
                "We match you with the right technical expertise",
                "We provide clear, actionable next steps",
              ]}
              className="space-y-3"
            />
          </div>
        )}
      </div>

      {/* Right Column: Form Container */}
      <div className="lg:pt-4">
        <Card className="rounded-2xl border-border/60 bg-background/60 backdrop-blur-sm shadow-sm">
          <CardContent className="p-8 space-y-6">
            {!isSubmitted ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-foreground/80">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="rounded-md border-border/60 bg-background/80 h-12 px-4 text-foreground focus:border-primary focus:ring-0"
                              placeholder=""
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-foreground/80">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="rounded-md border-border/60 bg-background/80 h-12 px-4 text-foreground focus:border-primary focus:ring-0"
                              placeholder=""
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Contact Field */}
                  <FormField
                    control={form.control}
                    name="emailOrPhone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-foreground/80">
                          Email or Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-md border-border/60 bg-background/80 h-12 px-4 text-foreground focus:border-primary focus:ring-0"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-foreground/80">
                          Project Context
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="rounded-md border-border/60 bg-background/80 min-h-32 px-4 py-3 text-foreground focus:border-primary focus:ring-0 resize-vertical"
                            placeholder="Describe your project, challenges, and goals"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <CtaButton
                      variant="primary"
                      buttonType="submit"
                      className="w-full h-12 rounded-md font-semibold"
                      disabled={form.formState.isSubmitting}
                    >
                      Start the Conversation
                    </CtaButton>
                  </div>
                </form>
              </Form>
            ) : (
              /* Success State */
              <div className="text-center space-y-6 py-8">
                <div className="flex justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Request Received
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We've received your message and will be in touch within 1-2 business days 
                    with clear next steps.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}