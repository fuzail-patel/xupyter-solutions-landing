import Header from "@/components/layout/Header"
import HeroSection from "@/components/sections/HeroSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import Process from "@/components/sections/Process"
import Services from "@/components/sections/Services"
import CaseStudies from "@/components/sections/CaseStudies"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    // can be use bg as bg-[#f7f1e6]
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
