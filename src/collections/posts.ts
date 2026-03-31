import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
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
      name: 'excerpt',
      type: 'textarea',
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
      },
    },
    {
      name: 'markdownContent',
      type: 'code',
      admin: {
        condition: (data) => data.contentType === 'markdown',
        description: 'Write your content in Markdown format',
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
      name: 'coverImage',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
    },
    {
      name: 'readTime',
      type: 'text',
      admin: {
        placeholder: 'e.g. 5 min read',
      },
    },
    {
      name: 'seoTitle',
      type: 'text',
    },
    {
      name: 'seoDescription',
      type: 'textarea',
    },
  ],
}
