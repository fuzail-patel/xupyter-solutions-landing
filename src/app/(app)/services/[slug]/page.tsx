import { use } from "react"
import Link from "next/link"
import { ServiceDetail } from "@/components/services"
import { SERVICES } from "@/lib/constants/services"

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

  return (
    <main className="min-h-screen bg-background">
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
