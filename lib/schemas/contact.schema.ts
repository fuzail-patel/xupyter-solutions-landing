import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  emailOrPhone: z
    .string()
    .min(1, "Contact detail is required")
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^\+?[0-9\s\-()]{7,}$/.test(value),
      "Enter a valid email address or phone number"
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
