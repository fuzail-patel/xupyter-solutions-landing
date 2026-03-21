"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import {
  BodyText,
  Button,
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
import {
  serviceQuoteSchema,
  type ServiceQuoteFormValues,
} from "@/utils/schemas/service-quote.schema"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface QuoteCardProps {
  serviceSlug: string
}

export const QuoteCard = ({ serviceSlug }: QuoteCardProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ServiceQuoteFormValues>({
    resolver: zodResolver(serviceQuoteSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companySize: "",
      budgetRange: "",
      message: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (data: ServiceQuoteFormValues) => {
    setErrorMessage(null)

    try {
      const response = await fetch(`/api/services/${serviceSlug}/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        if (response.status === 400) {
          setErrorMessage("Please check the form fields and try again.")
        } else {
          setErrorMessage("Something went wrong. Please try again.")
        }
        return
      }

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting quote request:", error)
      setErrorMessage("Network error. Please try again.")
    }
  }

  return (
    <aside className="w-full bg-card  rounded-[12px] p-6 h-fit hover:border-foreground transition-colors duration-200">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircleIcon className="mx-auto mb-4 h-14 w-14 text-primary" />
          <h4 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
            Quote Request Received
          </h4>
          <BodyText className="mb-8 text-sm text-muted-foreground font-medium">
            Thank you! Our experts will review your details and prepare a tailored quote for you within 24 hours.
          </BodyText>
          <Button
            onClick={() => {
              setIsSuccess(false)
              setErrorMessage(null)
            }}
            variant="outline"
            size="sm"
            className="text-xs font-semibold"
          >
            Send another request
          </Button>
        </div>
      ) : (
        <>
          <h3 className="text-[17px] font-medium text-foreground mb-1">
            Request a quote
          </h3>
          <p className="text-[13px] text-muted-foreground mb-6">
            Fill in the details and we&apos;ll get back to you within one business day.
          </p>

          {errorMessage && (
            <p className="mb-4 text-[12px] text-red-500">{errorMessage}</p>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-5"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingField id="fullName" label="Full name">
                        <Input
                          {...field}
                          id="fullName"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-sm md:text-base font-semibold text-foreground/90"
                          autoComplete="name"
                        />
                      </FloatingField>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingField id="workEmail" label="Work email">
                        <Input
                          {...field}
                          id="workEmail"
                          type="email"
                          placeholder=" "
                          variant="minimal"
                          className="peer text-sm md:text-base font-semibold text-foreground/90"
                          autoComplete="email"
                        />
                      </FloatingField>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <FormField
                  control={form.control}
                  name="companySize"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[52px] bg-background/50 border-border/50 focus:border-primary/50 text-sm font-semibold text-foreground/90 transition-colors">
                            <SelectValue placeholder="Company size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-border shadow-xl">
                          <SelectItem
                            value="1-10"
                            className="focus:bg-primary/10"
                          >
                            1-10 employees
                          </SelectItem>
                          <SelectItem
                            value="11-50"
                            className="focus:bg-primary/10"
                          >
                            11-50 employees
                          </SelectItem>
                          <SelectItem
                            value="51-200"
                            className="focus:bg-primary/10"
                          >
                            51-200 employees
                          </SelectItem>
                          <SelectItem
                            value="201-500"
                            className="focus:bg-primary/10"
                          >
                            201-500 employees
                          </SelectItem>
                          <SelectItem
                            value="501+"
                            className="focus:bg-primary/10"
                          >
                            501+ employees
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[52px] bg-background/50 border-border/50 focus:border-primary/50 text-sm font-semibold text-foreground/90 transition-colors">
                            <SelectValue placeholder="Budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-border shadow-xl">
                          <SelectItem
                            value="5k-10k"
                            className="focus:bg-primary/10"
                          >
                            $5k - $10k
                          </SelectItem>
                          <SelectItem
                            value="10k-25k"
                            className="focus:bg-primary/10"
                          >
                            $10k - $25k
                          </SelectItem>
                          <SelectItem
                            value="25k-50k"
                            className="focus:bg-primary/10"
                          >
                            $25k - $50k
                          </SelectItem>
                          <SelectItem
                            value="50k-100k"
                            className="focus:bg-primary/10"
                          >
                            $50k - $100k
                          </SelectItem>
                          <SelectItem
                            value="100k+"
                            className="focus:bg-primary/10"
                          >
                            $100k+
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingField id="message" label="Project details">
                        <Textarea
                          {...field}
                          id="message"
                          placeholder=" "
                          variant="minimal"
                          className="peer min-h-[100px] resize-none text-sm md:text-base font-semibold text-foreground/90 py-4"
                        />
                      </FloatingField>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <CtaButton
                buttonType="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full h-[52px] text-base font-bold tracking-tight bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Request a quote"}
              </CtaButton>
            </form>
          </Form>
        </>
      )}
    </aside>
  )
}
