import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required." })
    .min(2, { message: "Please enter your full name." })
    .trim(),

  email: z
    .string({ required_error: "Email address is required." })
    .email({ message: "Please enter a valid email address." })
    .trim(),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[0-9+()\-\\s]{7,20}$/.test(val),
      { message: "Please enter a valid phone number." }
    ),

  resume: z
    .instanceof(File, { message: "Please upload your resume." })
    .optional(),

  coverNote: z
    .string({ required_error: "Please tell us why you're applying." })
    .min(50, {
      message: "Please provide a bit more detail (minimum 50 characters).",
    })
    .trim(),

  position: z
    .string({ required_error: "Position is required." })
    .min(1, { message: "Please select a position." }),
});


export type ApplicationFormValues = z.infer<typeof applicationSchema>
