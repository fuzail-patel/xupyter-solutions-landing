import Header from "@/components/layout/Header"
import { HeroSection, IndustriesSection, Process, Services, CaseStudies, Testimonials, Contact } from "@/components/sections"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroSection />
      <IndustriesSection />
      <Process />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </main>
  )
}
