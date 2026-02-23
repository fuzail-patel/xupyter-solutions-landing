"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CiWarning } from "react-icons/ci"

type FormErrorAlertProps = {
  message?: string
}

export default function ContactError({ message }: FormErrorAlertProps) {
  if (!message) return null

  return (
    <Alert variant="destructive" className="mb-6">
      <CiWarning className="h-4 w-4" />
      <AlertTitle>Submission failed</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}