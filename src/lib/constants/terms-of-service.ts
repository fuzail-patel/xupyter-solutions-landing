export interface TermsSubSection {
  id: string
  title: string
  content: string[]
}

export interface TermsSection {
  id: string
  label: string
  title: string
  content?: string[]
  subSections?: TermsSubSection[]
}

export interface TermsHighlight {
  title: string
  description: string
  icon?: string
}

export const TERMS_HIGHLIGHTS: TermsHighlight[] = [
  {
    title: "IP Ownership",
    description: "Clients own all deliverables fully upon final payment.",
  },
  {
    title: "Governing Law",
    description: "Governed by Indian Law, with jurisdiction in Bharuch, Gujarat.",
  },
  {
    title: "Confidentiality",
    description: "A 2-year mutual NDA applies to every engagement.",
  },
  {
    title: "Deposit",
    description: "A 30–50% non-refundable deposit is required to start.",
  },
]

export const TERMS_OF_SERVICE_SECTIONS: TermsSection[] = [
  {
    id: "agreement",
    label: "Agreement to Terms",
    title: "Agreement to Terms",
    content: [
      "By engaging Xupyter Solutions for software development services, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and clients who access or use our services.",
      "These terms, along with any specific Statement of Work (SOW), constitute the entire agreement between the client and Xupyter Solutions regarding the project engagement.",
    ],
  },
  {
    id: "services",
    label: "Our Services",
    title: "Our Services",
    content: [
      "We provide architecture-first software development, technical strategy, and system integration services. Each engagement is defined by a specific SOW outlining deliverables and timelines.",
      "We reserve the right to modify or discontinue services with reasonable notice to active clients, ensuring minimal disruption to ongoing projects.",
    ],
  },
  {
    id: "obligations",
    label: "Client Obligations",
    title: "Client Obligations",
    content: [
      "Clients must provide accurate requirements, timely feedback, and necessary access to internal systems to facilitate development. Delays in providing these may impact project timelines.",
      "The client is responsible for the accuracy of all data and documents provided to Xupyter Solutions for the purpose of the engagement.",
    ],
  },
  {
    id: "payment",
    label: "Payment Terms",
    title: "Payment Terms",
    subSections: [
      {
        id: "payment-structure",
        title: "Payment Structure",
        content: [
          "A non-refundable deposit of 30–50% of the total project value is required to initiate development. Milestone-based payments will follow as defined in the SOW.",
        ],
      },
      {
        id: "payment-methods",
        title: "Payment Methods",
        content: [
          "Payments are accepted via Razorpay, Stripe, or direct bank transfer. All transaction fees are the responsibility of the client unless otherwise agreed.",
        ],
      },
      {
        id: "late-payments",
        title: "Late Payments",
        content: [
          "Invoices not paid within 15 days of issuance may incur late fees or result in a temporary suspension of development work until the account is settled.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
    title: "Intellectual Property",
    content: [
      "Upon final payment, the client owns full intellectual property rights to the custom deliverables produced. Xupyter Solutions retains rights to pre-existing tools, libraries, and boilerplate code used.",
      "The client grants Xupyter Solutions a limited license to showcase the completed work in our portfolio, unless a specific non-disclosure agreement prohibits it.",
    ],
  },
  {
    id: "confidentiality",
    label: "Confidentiality",
    title: "Confidentiality",
    content: [
      "Both parties agree to a mutual 2-year confidentiality obligation post-engagement. This covers all proprietary information, trade secrets, and project-specific technical details.",
      "Confidential information shall not be disclosed to any third party without prior written consent, except where required by law or to authorized sub-contractors under similar NDA terms.",
    ],
  },
  {
    id: "revisions",
    label: "Revisions & Change Requests",
    title: "Revisions & Change Requests",
    content: [
      "Each milestone includes a defined number of revision cycles. Significant changes to the project scope outside the initial SOW will require a separate change request and fee adjustment.",
      "We aim to be flexible with minor adjustments, but architectural changes after the design phase may impact the project timeline and cost.",
    ],
  },
  {
    id: "warranties",
    label: "Warranties & Disclaimer",
    title: "Warranties & Disclaimer",
    content: [
      "We warrant that our services will be performed with professional skill and care. However, we do not guarantee that software will be entirely error-free or uninterrupted.",
      "All third-party services used in the project are subject to their own warranties and terms. Xupyter Solutions is not responsible for the performance of external APIs or hosting providers.",
    ],
  },
  {
    id: "liability",
    label: "Limitation of Liability",
    title: "Limitation of Liability",
    content: [
      "Xupyter Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the developed software.",
      "Our total liability for any claim related to an engagement is limited to the total amount paid by the client for that specific project.",
    ],
  },
  {
    id: "termination",
    label: "Termination",
    title: "Termination",
    content: [
      "Either party may terminate the agreement with 30 days written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date.",
      "Xupyter Solutions will provide all work-in-progress materials and documentation to the client upon settlement of final outstanding invoices.",
    ],
  },
  {
    id: "disputes",
    label: "Governing Law & Disputes",
    title: "Governing Law & Disputes",
    content: [
      "These terms are governed by the laws of India, specifically the Arbitration and Conciliation Act 1996. All disputes will be settled through arbitration in Bharuch, Gujarat.",
      "Both parties agree to attempt an amicable resolution through mediation before proceeding to formal arbitration or legal action.",
    ],
  },
  {
    id: "changes",
    label: "Changes to These Terms",
    title: "Changes to These Terms",
    content: [
      "We may update our Terms of Service from time to time. We will notify active clients of any significant changes via email or through our project management portal.",
      "Continued engagement with our services after such changes constitutes acceptance of the new terms. We encourage clients to review these terms periodically.",
    ],
  },
  {
    id: "contact",
    label: "Contact",
    title: "Contact",
    content: [
      "If you have any questions regarding these Terms of Service, please contact us at contact@xupyter.in. We are happy to clarify any aspects of our project agreements.",
      "Our legal team is available to discuss specific contractual requirements for enterprise-level engagements and long-term partnerships.",
    ],
  },
]
