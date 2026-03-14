import { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'problem',
      type: 'richText',
      required: true,
    },
    {
      name: 'solution',
      type: 'richText',
      required: true,
    },
    {
      name: 'architecture',
      type: 'richText',
    },
    {
      name: 'results',
      type: 'richText',
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
