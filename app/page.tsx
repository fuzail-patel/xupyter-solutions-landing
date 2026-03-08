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

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="hero-gradient">
        <Header />
        <HeroSection />
        <ExpertiseMarquee />
      </div>

      <IndustriesSection />
      <IndustryImpactSection />
      <WhyXupyterSection />
      <Services />
      <CaseStudies />
      <Testimonials />
      <BlogsSection />
      <Contact />
    </main>
  )
}