"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

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
      <Button variant="default" onClick={handleOpen}>
        <span>{triggerLabel}</span>
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-md text-left">
          <div className="w-full max-w-xl rounded-xl bg-background p-6 shadow-lg">
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
                        <div className="relative rounded-lg bg-background">
                          <FormControl>
                            <Input
                              {...field}
                              id="fullName"
                              placeholder=" "
                              className="peer h-12 md:h-14 text-base placeholder-transparent border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <label
                            htmlFor="fullName"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                            peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                          >
                            Full Name
                          </label>
                        </div>
                        <FormMessage className="text-xs text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative rounded-lg bg-background">
                          <FormControl>
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              placeholder=" "
                              className="peer h-12 md:h-14 text-base placeholder-transparent border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <label
                            htmlFor="email"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                            peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                          >
                            Email
                          </label>
                        </div>
                        <FormMessage className="text-xs text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Resume</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            className="h-12 md:h-14 pt-4 border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            onChange={(event) => {
                              const file = event.target.files?.[0]
                              field.onChange(file)
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative rounded-lg bg-background">
                          <FormControl>
                            <Input
                              {...field}
                              id="phone"
                              placeholder=" "
                              className="peer h-12 md:h-14 text-base placeholder-transparent border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <label
                            htmlFor="phone"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                            peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                          >
                            Phone (optional)
                          </label>
                        </div>
                        <FormMessage className="text-xs text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative rounded-lg bg-background">
                      <FormControl>
                        <Input
                          {...field}
                          id="position"
                          disabled={isSpecific}
                          placeholder=" "
                          className="peer h-12 md:h-14 text-base placeholder-transparent border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>
                      <label
                        htmlFor="position"
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                        peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                      >
                        {isSpecific ? "Position" : "Position (optional)"}
                      </label>
                    </div>
                    <FormMessage className="text-xs text-left" />
                  </FormItem>
                )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="coverNote"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative rounded-lg bg-background">
                        <FormControl>
                          <Textarea
                            {...field}
                            id="whyApplying"
                            rows={4}
                            placeholder=" "
                            className="peer min-h-[140px] text-base resize-none placeholder-transparent border-border ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <label
                          htmlFor="whyApplying"
                          className="pointer-events-none absolute left-3 top-4 -translate-y-1/2 bg-background px-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-all duration-200
                          peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.65rem] peer-focus:text-foreground
                          peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-[0.65rem]"
                        >
                          Why are you applying?
                        </label>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground/80 text-left">
                        Include relevant experience, portfolio links, LinkedIn, or anything that
                        helps us understand your fit.
                      </p>
                      <FormMessage className="text-xs text-left" />
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
                  <Button type="submit">Apply Now</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}
