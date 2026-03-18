export interface PrivacySubSection {
  id: string
  title: string
  content: string[]
}

export interface PrivacySection {
  id: string
  label: string
  title: string
  content?: string[]
  subSections?: PrivacySubSection[]
}

export const PRIVACY_POLICY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      "Xupyter Solutions is an architecture-first software development firm based in India. We are committed to protecting your privacy and ensuring the security of your personal information.",
      "This policy explains how we collect, use, and safeguard data across our website and services. We prioritize transparency and data integrity in every system we design.",
    ],
  },
  {
    id: "information-we-collect",
    label: "Information We Collect",
    title: "Information We Collect",
    subSections: [
      {
        id: "website-visitors",
        title: "Website Visitors",
        content: [
          "We collect standard log information and details of visitor behavior patterns when you visit our website. This helps us determine things such as the number of visitors to various parts of the site and improve user experience.",
        ],
      },
      {
        id: "inquiry-contact-data",
        title: "Inquiry & Contact Data",
        content: [
          "When you reach out via our contact forms, we collect your name, email, company, and project details. This information is used solely to respond to your inquiry and discuss potential collaboration.",
        ],
      },
      {
        id: "client-project-data",
        title: "Client & Project Data",
        content: [
          "For active clients, we collect project requirements, technical documents, and communication logs. This data is essential for the architectural design and development of your custom software systems.",
        ],
      },
      {
        id: "payment-information",
        title: "Payment Information",
        content: [
          "Payments are processed securely via Razorpay, Stripe, or direct bank transfer. We do not store credit card numbers or sensitive financial credentials on our internal servers.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    label: "How We Use Your Information",
    title: "How We Use Your Information",
    content: [
      "We use your data to provide our software development services and maintain project clarity. This includes communication regarding project updates, technical support, and administrative billing.",
      "Your information also helps us refine our internal processes and improve our service delivery. We use feedback to optimize our engineering workflows and system architectures.",
    ],
  },
  {
    id: "data-sharing",
    label: "Data Sharing & Third Parties",
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell or lease your personal information to third parties for marketing purposes. Data is only shared with trusted service providers to facilitate our services, such as payment processors.",
      "These partners are contractually obligated to maintain the confidentiality and security of your data. We only share the minimum information necessary for the specific service being provided.",
    ],
  },
  {
    id: "data-retention",
    label: "Data Retention",
    title: "Data Retention",
    content: [
      "We retain inquiry data for 12 months to manage follow-up communications. Project-related data is kept for 3 years post-delivery to support long-term maintenance and scaling needs.",
      "Financial records are retained for 7 years to comply with statutory accounting and tax regulations. Once these periods expire, your data is securely deleted or anonymized.",
    ],
  },
  {
    id: "cookies",
    label: "Cookies & Analytics",
    title: "Cookies & Analytics",
    content: [
      "Our website uses cookies to enhance functionality and collect anonymous usage statistics. We use analytics tools to understand how users interact with our site and to optimize performance.",
      "You can manage or disable cookies through your browser settings at any time. Please note that some features of our site may not function correctly without cookies.",
    ],
  },
  {
    id: "data-security",
    label: "Data Security",
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your data from unauthorized access. This includes encrypted data transmission, secure server environments, and strict internal access controls.",
      "Our architecture-first approach ensures that security is integrated into the foundation of every system we build. We regularly review our security protocols to address emerging threats.",
    ],
  },
  {
    id: "your-rights",
    label: "Your Rights",
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or request the deletion of your personal data held by us. If you wish to exercise these rights, please contact our privacy team.",
      "We will respond to all legitimate requests within a reasonable timeframe. You also have the right to withdraw consent for data processing at any time.",
    ],
  },
  {
    id: "legal-compliance",
    label: "Legal Compliance",
    title: "Legal Compliance",
    content: [
      "Our data practices are governed by the laws of India, specifically the Information Technology Act 2000. We comply with all applicable regulations regarding data protection and electronic governance.",
      "Any disputes arising from this policy will be subject to the jurisdiction of Indian courts. We maintain compliance with international standards where relevant to our global clients.",
    ],
  },
  {
    id: "changes",
    label: "Changes to This Policy",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised 'Last updated' date.",
      "We encourage you to review this policy regularly to stay informed about how we protect your privacy. Continued use of our services after updates constitutes acceptance of the new policy.",
    ],
  },
  {
    id: "contact-us",
    label: "Contact Us",
    title: "Contact Us",
    content: [
      "If you have any questions regarding this Privacy Policy, please reach out to us at contact@xupyter.in. You can also contact us via our main contact form.",
      "We are dedicated to resolving any privacy-related issues promptly and transparently. Our team is available to clarify any aspects of our data handling practices.",
    ],
  },
]
