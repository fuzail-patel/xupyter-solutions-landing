import { use } from "react"
import Link from "next/link"
import { ServiceDetail } from "@/components/services"
import { SERVICES } from "@/lib/constants/services"
import { SITE_URL } from "@/lib/seo/site"
import type { Metadata } from "next"
import { generateServiceBreadcrumb } from "@/utils/schema/breadcrumb"
import { generateServiceSchema } from "@/utils/schema/service"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.href === `/services/${slug}`)
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }
  
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE_URL}/services/${slug}`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.href.split('/').pop() || '',
  }))
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  
  // Find service from constants
  const service = SERVICES.find((s) => s.href === `/services/${slug}`)

  if (!service) {
    return <ServiceNotFound />
  }

  const breadcrumbSchema = generateServiceBreadcrumb(service.title, slug)
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${slug}`,
  })

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetail
        title={service.title}
        description={service.description}
        slug={slug}
      />
    </main>
  )
}

function ServiceNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-8">
      <h1 className="text-[28px] font-medium text-foreground mb-4">
        Service Not Found
      </h1>
      <p className="text-[15px] text-muted-foreground mb-8">
        The service you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/#services"
        className="px-6 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-[14px]"
      >
        View all services
      </Link>
    </div>
  )
}
