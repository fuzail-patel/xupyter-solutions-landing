import Header from "@/components/layout/Header"
import { PageSectionHeader } from "@/components/custom/PageSectionHeader"
import PortfolioCard from "@/components/portfolio/PortfolioCard"
import { portfolioProjects } from "@/data/portfolio"

export default function PortfolioPage() {
  return (
    <main className="flex flex-col">
      <Header />

      <PageSectionHeader
        eyebrow="Portfolio"
        titlePrimary="Systems We’ve Designed"
        titleSecondary="& Shipped"
        subtitle="Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind."
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
