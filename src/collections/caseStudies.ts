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
      name: 'contentType',
      type: 'select',
      options: [
        { label: 'Rich Text (Lexical)', value: 'richText' },
        { label: 'Markdown', value: 'markdown' },
      ],
      defaultValue: 'richText',
      admin: {
        description: 'Choose content format. Markdown is more compact and efficient for storage.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        condition: (data) => data.contentType === 'richText' || !data.contentType,
        description: 'Full case study content',
      },
    },
    {
      name: 'markdownContent',
      type: 'code',
      admin: {
        condition: (data) => data.contentType === 'markdown',
        description: 'Full case study content in Markdown format',
        language: 'markdown',
      },
      hooks: {
        beforeChange: [
          ({ value }) => {
            // Ensure we are storing the raw string without any unexpected transformations
            if (typeof value === 'string') {
              return value;
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
