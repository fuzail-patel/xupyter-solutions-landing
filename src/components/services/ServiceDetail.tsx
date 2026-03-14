"use client"

import { ServiceHero } from "./ServiceHero"
import { QuoteCard } from "./QuoteCard"
import { ServiceRelated } from "./ServiceRelated"

interface ServiceDetailProps {
    title: string
    description: string
    slug: string
}

export const ServiceDetail = ({
    title,
    description,
    slug,
}: ServiceDetailProps) => {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-28 md:pt-32 pb-12 md:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                {/* Left: Service Info + Other Services */}
                <div className="lg:col-span-3 space-y-4 md:space-y-6">
                    <ServiceHero
                        name={title}
                        category="Services"
                        description={description}
                    />

                    <ServiceRelated />
                </div>

                {/* Right: Quote Form */}
                <div className="lg:col-span-2">
                    <QuoteCard serviceSlug={slug} />
                </div>
            </div>
        </div>
    )
}
