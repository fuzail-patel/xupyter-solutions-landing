import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudinaryStorage } from 'payload-cloudinary'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { Authors } from './collections/authors'
import { Tags } from './collections/tags'
import { Posts } from './collections/posts'
import { Projects } from './collections/projects'
import { CaseStudies } from './collections/caseStudies'
import { Jobs } from './collections/jobs'
import { Industries } from './collections/industries'
import { Testimonials } from './collections/testimonials'

export default buildConfig({
    admin: {
        user: Users.slug,
    },

    collections: [
        Users,
        Media,
        Authors,
        Tags,
        Posts,
        Projects,
        CaseStudies,
        Jobs,
        Industries,
        Testimonials,
    ],

    editor: lexicalEditor(),

    upload: {
        limits: {
            fileSize: 1024 * 1024 * 5, // 5MB
        },
    },

    plugins: [
        cloudinaryStorage({
            config: {
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
                api_key: process.env.CLOUDINARY_API_KEY!,
                api_secret: process.env.CLOUDINARY_API_SECRET!,
            },
            collections: {
                media: true,
            },
            folder: "payload-media",
              disableLocalStorage: true
        }),
    ],

    secret: process.env.PAYLOAD_SECRET!,

    typescript: {
        outputFile: 'payload-types.ts',
    },

    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL!,
        },
    }),
})