import { ContactFormCard } from "@/components/sections/ContactFormCard"
import { ContactInfoCard } from "@/components/sections/ContactInfoCard"

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-10 md:mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          <ContactFormCard />
          <ContactInfoCard />
        </div>
      </div>
    </section>
  )
}
