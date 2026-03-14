import { BlogSection as BlogsSection } from "@/components/blog"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"
import { getCaseStudies, getPosts, getTestimonials } from "@/lib/cms-client"
import {
  HeroSection,
  IndustrySection as IndustriesSection,
  Services,
  TestimonialsSection as Testimonials,
  IndustryImpactSection,
  WhyXupyterSection,
  ExpertiseMarquee,
} from "@/components/marketing"

export default async function Home() {
  const [caseStudiesData, postsData, testimonialsData] = await Promise.all([
    getCaseStudies({
      limit: 3,
      sort: '-createdAt',
      depth: 2,
    }),
    getPosts({
      limit: 6,
      sort: '-publishedAt',
      depth: 1,
    }),
    getTestimonials({
      limit: 6,
      sort: '-createdAt',
      depth: 1,
    }),
  ]).catch(() => [{ docs: [] }, { docs: [] }, { docs: [] }])

  return (
    <main className="flex flex-col">
      <div className="hero-gradient">
        <HeroSection />
        <ExpertiseMarquee />
      </div>

      <IndustriesSection />
      <IndustryImpactSection />
      <WhyXupyterSection />
      <Services />
      <CaseStudies studies={caseStudiesData.docs} />
      <Testimonials testimonials={testimonialsData.docs} />
      <BlogsSection posts={postsData.docs} />
      <Contact />
    </main>
  )
}
