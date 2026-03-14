import { getMediaUrl } from "@/utils/common"
import type { Project, CaseStudy, Industry } from "@/payload-types"
import { portfolioProjects } from "@/lib/constants/portfolio"
import type { DisplayProject, PortfolioProject } from "@/types/portfolio"

export const mapCMSToDisplayProject = (
  project: Project,
  caseStudies: CaseStudy[] = []
): DisplayProject => {
  const relatedCaseStudy = caseStudies.find((cs) =>
    (typeof cs.project === 'object' && cs.project !== null ? cs.project.id : cs.project) === project.id
  )

  const industryName = (typeof project.industry === 'object' && project.industry !== null)
    ? (project.industry as Industry).name
    : 'Tech'

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    industry: industryName,
    technologies: project.technologies?.map(t => ({
      technology: t.technology || '',
      id: t.id || ''
    })) || [],
    coverImage: project.coverImage,
    featured: !!project.featured,
    liveUrl: project.liveUrl,
    caseStudyUrl: relatedCaseStudy ? `/case-studies/${relatedCaseStudy.slug}` : null,
  }
}

export const mapConstantToDisplayProject = (p: PortfolioProject, idx: number): DisplayProject => ({
  id: p.slug || idx,
  slug: p.slug,
  title: p.name,
  summary: p.outcome,
  industry: p.industry,
  technologies: [],
  coverImage: p.image,
  featured: !!p.featured,
  liveUrl: p.liveUrl,
  caseStudyUrl: p.caseStudyUrl,
})

export const getDisplayProjects = (
  projects: Project[] = [],
  caseStudies: CaseStudy[] = []
): DisplayProject[] => {
  if (projects.length > 0) {
    return projects.map((p) => mapCMSToDisplayProject(p, caseStudies))
  }
  return portfolioProjects.map((p, idx) => mapConstantToDisplayProject(p, idx))
}
