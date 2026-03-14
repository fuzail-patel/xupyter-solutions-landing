import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  website: z.string().url("Enter a valid URL (e.g., https://example.com)").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
