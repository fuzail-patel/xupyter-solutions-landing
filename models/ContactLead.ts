import { Schema, model, models, type Model, type Document } from "mongoose"

export interface ContactLeadDocument extends Document {
  firstName: string
  lastName: string
  emailOrPhone: string
  message: string
  status: string
  createdAt: Date
}

const contactLeadSchema = new Schema<ContactLeadDocument>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    emailOrPhone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, default: "new", trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "contact_leads",
  }
)

export const ContactLead: Model<ContactLeadDocument> =
  (models.ContactLead as Model<ContactLeadDocument>) ||
  model<ContactLeadDocument>("ContactLead", contactLeadSchema)

