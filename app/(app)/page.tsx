import Header from "@/components/layout/Header"
import {
  HeroSection,
  IndustriesSection,
  Services,
  Testimonials,
  Contact,
  BlogsSection,
  IndustryImpactSection,
  WhyXupyterSection,
  CaseStudies,
} from "@/components/sections"
import { ExpertiseMarquee } from "@/components/sections/ExpertiseMarquee"
import { getCaseStudies, getPosts, getTestimonials } from "@/lib/cms-client"

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
  ])

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