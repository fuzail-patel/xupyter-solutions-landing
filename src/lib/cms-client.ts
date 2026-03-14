import { getPayload } from 'payload'
import config from '@payload-config'
import { Post, Project, CaseStudy, Job, Industry, Tag, Testimonial } from '@/payload-types'

export const getPayloadInstance = async () => {
  return await getPayload({
    config,
  })
}

export async function getProjects(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'projects',
    ...options,
  }) as unknown as { docs: Project[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return (docs[0] as Project) || null
}

export async function getCaseStudyByProject(projectId: number): Promise<CaseStudy | null> {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: {
      project: {
        equals: projectId,
      },
    },
  })
  return (docs[0] as CaseStudy) || null
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return (docs[0] as CaseStudy) || null
}

export async function getCaseStudies(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'case-studies',
    ...options,
  }) as unknown as { docs: CaseStudy[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}

export async function getPosts(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'posts',
    ...options,
  }) as unknown as { docs: Post[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}

export async function getTags(options: { limit?: number; sort?: string } = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'tags',
    sort: options.sort ?? 'name',
    limit: options.limit ?? 100,
  }) as unknown as { docs: Tag[]; totalDocs: number }
}

export async function getJobs(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'jobs',
    ...options,
  }) as unknown as { docs: Job[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}

export async function getJobById(id: number): Promise<Job | null> {
  const payload = await getPayloadInstance()
  return await payload.findByID({
    collection: 'jobs',
    id,
  }) || null
}

export async function getTestimonials(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'testimonials',
    ...options,
  }) as unknown as { docs: Testimonial[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}

export async function getIndustries(options: any = {}) {
  const payload = await getPayloadInstance()
  return await payload.find({
    collection: 'industries',
    ...options,
  }) as unknown as { docs: Industry[], totalDocs: number, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null }
}
