import { z } from "zod"

import type { Job, JobMeta, Salary } from "@/types/careers"

export const jobMetaSchema: z.ZodType<JobMeta> = z.object({
  employmentType: z.string(),
  location: z.string(),
  department: z.string(),
  experienceLevel: z.string(),
})

export const salarySchema: z.ZodType<Salary> = z.object({
  value: z.string(),
})

export const jobSchema: z.ZodType<Job> = z.object({
  id: z.string(),
  title: z.string(),
  meta: jobMetaSchema,
  shortDescription: z.string(),
  salary: salarySchema.optional(),
  href: z.string().url().or(z.literal("#")).or(z.string().startsWith("/")),
  overview: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  successIndicators: z.array(z.string()).optional(),
})

export const jobListSchema = z.array(jobSchema)
