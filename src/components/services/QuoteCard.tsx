"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
      <h3 className="text-[17px] font-medium text-foreground mb-1">
        Request a quote
      </h3>
      <p className="text-[13px] text-muted-foreground mb-6">
        Fill in the details and we&apos;ll get back to you within one business day.
      </p>

      {errorMessage && (
        <p className="mb-4 text-[12px] text-red-500">{errorMessage}</p>
      )}

      {isSuccess ? (
        <div className="text-center py-4">
          <p className="text-[14px] text-green-600 mb-2">Message sent!</p>
          <button
            onClick={() => {
              setIsSuccess(false)
              setErrorMessage(null)
            }}
            className="text-[12px] text-blue-500 hover:underline"
          >
            Send another
          </button>
        </div>
      ) : (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">
                            11-50 employees
                          </SelectItem>
                          <SelectItem value="51-200">
                            51-200 employees
                          </SelectItem>
                          <SelectItem value="201+">
                            201+ employees
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="250" defaultChecked> &lt; $250</SelectItem>
                          <SelectItem value="250-500"> $250 - $500</SelectItem>
                          <SelectItem value="500-1000">
                            $500 - $1000
                          </SelectItem>
                          <SelectItem value="1000-2000">
                            $1000 - $2000
                          </SelectItem>
                          <SelectItem value="2000+">$2000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
                    <FloatingField
                      id="message"
                      label="Tell us about your project (optional)"
                    >
                      <Textarea
                        {...field}
                        id="message"
                        placeholder=" "
                        variant="minimal"
                        className="peer text-sm md:text-base font-semibold text-foreground/90 pt-2 min-h-24 resize-none"
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
              className="w-full h-11 md:h-12 text-sm md:text-base font-bold shadow-lg"
              variant="primary"
            >
              {isSubmitting ? "Sending..." : "Submit request"}
            </CtaButton>

            <p className="text-[11px] md:text-[12px] text-muted-foreground/70 text-center">
              No spam. Reply within 1 business day.
            </p>
          </form>
        </Form>
      )}
    </aside>
  )
}
