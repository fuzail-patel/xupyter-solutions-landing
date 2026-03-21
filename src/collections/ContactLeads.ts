import type { CollectionConfig } from 'payload'

export const ContactLeads: CollectionConfig = {
  slug: 'contact-leads',
  admin: {
    useAsTitle: 'emailOrPhone',
    defaultColumns: ['firstName', 'lastName', 'emailOrPhone', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // API can write publicly
    read: ({ req: { user } }) => !!user, // Only admins/users can read
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'emailOrPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        {
          label: 'New',
          value: 'new',
        },
        {
          label: 'Contacted',
          value: 'contacted',
        },
        {
          label: 'Resolved',
          value: 'resolved',
        },
      ],
    },
    {
      name: 'isQuote',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'companySize',
      type: 'text',
    },
    {
      name: 'budgetRange',
      type: 'text',
    },
    {
      name: 'serviceSlug',
      type: 'text',
    },
  ],
  timestamps: true,
}
