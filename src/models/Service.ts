import { model, models, Schema, type Document, type Model } from "mongoose"

export interface ServiceDocument extends Document {
  slug: string
  name: string
  category: string
  description: string
  stats: { value: string; label: string }[]
  features: { title: string; description: string }[]
  process: { title: string; description: string; timeRange: string }[]
  faqs: { question: string; answer: string }[]
  relatedServices: { slug: string; name: string; description: string }[]
}

const serviceSchema = new Schema<ServiceDocument>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    stats: [
      {
        value: { type: String, required: true },
        label: { type: String, required: true },
      },
    ],
    features: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    process: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        timeRange: { type: String, required: true },
      },
    ],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    relatedServices: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    collection: "services",
    timestamps: true,
  }
)

export const Service: Model<ServiceDocument> =
  (models.Service as Model<ServiceDocument>) ||
  model<ServiceDocument>("Service", serviceSchema)
