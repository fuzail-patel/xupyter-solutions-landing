"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ApplyModalForm } from "./ApplyModalForm"
import { CtaButton } from "@/components/ui"
import { applicationSchema, type ApplicationFormValues } from "@/utils/schemas/application.schema"
import type { ApplyModalProps } from "@/types/careers"
import { cn } from "@/utils/common"
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi"

export function ApplyModal({ mode, job, triggerLabel }: ApplyModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

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
    setSubmissionStatus("idle")
    setErrorMessage("")
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
    if (isSubmitting) return
    setOpen(false)
  }

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true)
    setSubmissionStatus("idle")
    try {
      const formData = new FormData()
      formData.append("fullName", data.fullName)
      formData.append("email", data.email)
      formData.append("phone", data.phone || "")
      formData.append("position", mode === "specific" && job ? job.title : data.position)
      formData.append("coverNote", data.coverNote)
      if (data.resume) {
        formData.append("resume", data.resume)
      }

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmissionStatus("success")
        setTimeout(() => {
          handleClose()
        }, 2000)
      } else {
        setSubmissionStatus("error")
        setErrorMessage(result.error || "Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmissionStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSpecific = mode === "specific" && job
  const modalTitle = isSpecific ? `Apply for ${job!.title}` : "Apply for a role"

  return (
    <>
      <CtaButton variant="primary" className="font-semibold" onClick={handleOpen}>
        {triggerLabel}
      </CtaButton>

      {/* Manual Modal Implementation */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={handleClose}
        />

        {/* Modal Content */}
        <div 
          className={cn(
            "relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card p-6 border border-border/50 shadow-2xl transition-all duration-300",
            open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          )}
        >
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {modalTitle}
              </h2>
              {isSpecific && job ? (
                <p className="mt-1 text-xs text-muted-foreground/80">
                  {job.type} • {job.location} • {job.department}
                </p>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground/80">
                  Please fill out the form below and upload your resume. Our team will get back to you shortly.
                </p>
              )}
            </div>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="rounded-full p-2 hover:bg-foreground/5 transition-colors disabled:opacity-50"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {submissionStatus === "success" ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4 text-primary animate-bounce">
                <FiCheckCircle className="h-12 w-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Application Submitted!</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Thank you for applying. Our team will review your application and get back to you soon.
                </p>
              </div>
            </div>
          ) : (
            <>
              {submissionStatus === "error" && (
                <div className="mb-6 rounded-lg bg-destructive/10 p-4 text-destructive flex items-center gap-3">
                  <FiAlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}
              <ApplyModalForm
                form={form}
                onSubmit={onSubmit}
                onCancel={handleClose}
                isSpecific={!!isSpecific}
                isSubmitting={isSubmitting}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}
