"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import type { ApplyModalProps } from "@/lib/types/careers"
import { CtaButton } from "@/components/shared/CtaButton"
import { applicationSchema, type ApplicationFormValues } from "@/lib/schemas/application.schema"
import { ApplyModalForm } from "./ApplyModalForm"

export function ApplyModal({ mode, job, triggerLabel }: ApplyModalProps) {
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

  const onSubmit = () => {
    handleClose()
  }

  const isSpecific = mode === "specific" && job
  const modalTitle = isSpecific ? `Apply for ${job!.title}` : "Apply for a role"

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
                {isSpecific && job ? (
                  <p className="mt-1 text-xs text-muted-foreground/80">
                    {job.meta.employmentType} • {job.meta.location} • {job.meta.department}
                  </p>
                ) : null}
              </div>
            </div>

            <ApplyModalForm
              form={form}
              onSubmit={onSubmit}
              onCancel={handleClose}
              isSpecific={!!isSpecific}
            />
          </div>
        </div>
      )}
    </>
  )
}
