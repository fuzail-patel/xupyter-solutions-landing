import type { Metadata } from "next"
import { SITE_URL } from "./site"

export const pageSEO: Record<string, Metadata> = {
  home: {
    title: "Custom ERP, CRM & SaaS Development Company | India",
    description:
      "We design and build scalable SaaS platforms, internal tools, and complex web systems for growing companies. Architecture-driven development from India.",
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: "Custom ERP, CRM & SaaS Development Company | India",
      description: "We design and build scalable SaaS platforms, internal tools, and complex web systems for growing companies.",
      url: SITE_URL,
    },
  },
  services: {
    title: "Custom Business Systems & SaaS Development",
    description:
      "Custom SaaS platforms, internal tools, automation systems, and complex business software.",
    alternates: {
      canonical: `${SITE_URL}/services`,
    },
    openGraph: {
      title: "Custom Business Systems & SaaS Development",
      description: "Custom SaaS platforms, internal tools, automation systems, and complex business software.",
      url: `${SITE_URL}/services`,
    },
  },
  portfolio: {
    title: "Case Studies & Shipped Projects",
    description:
      "Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind.",
    alternates: {
      canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
      title: "Case Studies & Shipped Projects",
      description: "Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind.",
      url: `${SITE_URL}/portfolio`,
    },
  },
  about: {
    title: "About Xupyter | Custom Software Development Company",
    description:
      "We design and build scalable business systems engineered for long-term operational clarity. Architecture-first approach to ERP, CRM, and SaaS development.",
    alternates: {
      canonical: `${SITE_URL}/about`,
    },
    openGraph: {
      title: "About Xupyter | Custom Software Development Company",
      description: "We design and build scalable business systems engineered for long-term operational clarity.",
      url: `${SITE_URL}/about`,
    },
  },
  contact: {
    title: "Contact Xupyter Solutions",
    description:
      "Get in touch to discuss SaaS platforms, internal tools, and custom business systems.",
    alternates: {
      canonical: `${SITE_URL}/#contact`,
    },
    openGraph: {
      title: "Contact Xupyter Solutions",
      description: "Get in touch to discuss SaaS platforms, internal tools, and custom business systems.",
      url: `${SITE_URL}/#contact`,
    },
  },
  careers: {
    title: "Careers | Join the Xupyter Systems Engineering Team",
    description:
      "We're looking for architects, engineers, and operators who want to build high-performance business systems and internal tools.",
    alternates: {
      canonical: `${SITE_URL}/careers`,
    },
    openGraph: {
      title: "Careers | Join the Xupyter Systems Engineering Team",
      description: "We're looking for architects, engineers, and operators who want to build high-performance business systems and internal tools.",
      url: `${SITE_URL}/careers`,
    },
  },
  blog: {
    title: "Engineering Insights & Technical Blog",
    description: "Deep dives and notes from our team on systems, architecture, and automation.",
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
      title: "Engineering Insights & Technical Blog",
      description: "Deep dives and notes from our team on systems, architecture, and automation.",
      url: `${SITE_URL}/blog`,
    },
  },
  privacyPolicy: {
    title: "Privacy Policy | Xupyter Solutions",
    description: "Our policies on data collection, usage, and security for our clients and visitors.",
    alternates: {
      canonical: `${SITE_URL}/privacy-policy`,
    },
    openGraph: {
      title: "Privacy Policy | Xupyter Solutions",
      description: "Our policies on data collection, usage, and security for our clients and visitors.",
      url: `${SITE_URL}/privacy-policy`,
    },
  },
  termsOfService: {
    title: "Terms of Service | Xupyter Solutions",
    description: "Terms and conditions governing our software development and consulting services.",
    alternates: {
      canonical: `${SITE_URL}/terms-of-service`,
    },
    openGraph: {
      title: "Terms of Service | Xupyter Solutions",
      description: "Terms and conditions governing our software development and consulting services.",
      url: `${SITE_URL}/terms-of-service`,
    },
  },
}
