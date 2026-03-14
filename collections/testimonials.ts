import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'text',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Video', value: 'video' },
      ],
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        condition: (data) => data.type === 'text',
      },
    },
    {
      name: 'videoThumbnail',
      type: 'relationship',
      relationTo: 'media',
      admin: {
        condition: (data) => data.type === 'video',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        condition: (data) => data.type === 'video',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'avatar',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'colSpan',
      type: 'number',
      defaultValue: 6,
      admin: {
        description: 'Width of the testimonial card (6 for half width, 12 for full width)',
      },
    },
  ],
}
