"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/ui/button"
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
import { applicationSchema, type ApplicationFormValues } from "@/schemas/application.schema"
import type { Job } from "@/types/careers"
import { CtaButton } from "../custom/CtaButton"
import { FloatingField } from "@/components/custom/FloatingField"

type ApplyModalMode = "specific" | "general"

type ApplyModalProps = {
  mode: ApplyModalMode
  job?: Job
  jobs: Job[]
  triggerLabel: string
}

export function ApplyModal({ mode, job, jobs, triggerLabel }: ApplyModalProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      resume: undefined,
      coverNote: "",
      position: mode === "specific" && job ? job.title : "",
    },
  })

  const handleOpen = () => {
    if (mode === "specific" && job) {
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        resume: undefined,
        coverNote: "",
        position: job.title,
      })
    }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (values: ApplicationFormValues) => {
    console.log("Application submitted", values)
    handleClose()
  }

  const isSpecific = mode === "specific" && job
  const modalTitle = isSpecific ? `Apply for ${job.title}` : "Apply for a role"

  return (
    <>
      <CtaButton variant="primary" className="font-semibold" onClick={handleOpen}>{triggerLabel}</CtaButton>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-md text-left">
          <div className="w-full max-w-xl rounded-xl bg-background p-6 border">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {modalTitle}
                </h2>
                {isSpecific && (
                  <p className="mt-1 text-xs text-muted-foreground/80">
                    {job.meta.employmentType} • {job.meta.location} •{" "}
                    {job.meta.department}
                  </p>
                )}
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FloatingField id="fullName" label="Full Name">
                          <FormControl>
                            <Input
                              {...field}
                              id="fullName"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FloatingField id="email" label="Email">
                          <FormControl>
                            <Input
                              {...field}
                              id="email"
                              type="email"
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
                    name="resume"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-sm font-medium text-foreground/80">Resume</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            className="h-12 md:h-14 rounded-md border-border/60 bg-background/80 px-4 text-foreground focus:border-primary focus:ring-0 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                            onChange={(event) => {
                              const file = event.target.files?.[0]
                              field.onChange(file)
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FloatingField id="phone" label="Phone (optional)">
                          <FormControl>
                            <Input
                              {...field}
                              id="phone"
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
                    name="position"
                render={({ field }) => (
                  <FormItem>
                    <FloatingField id="position" label={isSpecific ? "Position" : "Position (optional)"}>
                      <FormControl>
                        <Input
                          {...field}
                          id="position"
                          disabled={isSpecific}
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

                <FormField
                  control={form.control}
                  name="coverNote"
                  render={({ field }) => (
                    <FormItem>
                      <FloatingField id="whyApplying" label="Why are you applying?">
                        <FormControl>
                          <Textarea
                            {...field}
                            id="whyApplying"
                            rows={4}
                            placeholder=" "
                            variant="minimal"
                            className="peer text-[0.95rem] text-foreground/90 pt-2 resize-none min-h-[140px]"
                          />
                        </FormControl>
                      </FloatingField>
                      <p className="mt-1 text-xs text-muted-foreground/80">
                        Include relevant experience, portfolio links, LinkedIn, or anything that
                        helps us understand your fit.
                      </p>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <div className="pt-2 flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <CtaButton variant="primary" className="ms-auto" onClick={form.handleSubmit(onSubmit)}>Submit</CtaButton>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}
