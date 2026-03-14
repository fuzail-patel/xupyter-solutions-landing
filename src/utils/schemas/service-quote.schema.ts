import { z } from "zod"

export const serviceQuoteSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required." })
    .min(2, { message: "Please enter your full name." })
    .trim(),

  workEmail: z
    .string({ required_error: "Work email is required." })
    .email({ message: "Please enter a valid work email." })
    .trim(),

  companySize: z
    .string({ required_error: "Company size is required." })
    .min(1, { message: "Please select your company size." }),

  budgetRange: z
    .string({ required_error: "Budget range is required." })
    .min(1, { message: "Please select your budget range." }),

  message: z
    .string()
    .trim()
    .optional(),
})

export type ServiceQuoteFormValues = z.infer<typeof serviceQuoteSchema>

