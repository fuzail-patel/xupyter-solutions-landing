# Company Website

A modern, full-stack company website built with Next.js 16, PayloadCMS, and TypeScript. Features a headless CMS for content management, dynamic routing, and a comprehensive portfolio/blog system.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **CMS**: PayloadCMS 3.x
- **Database**: PostgreSQL (via @payloadcms/db-postgres)
- **Media Storage**: Cloudinary
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Lottie, Anime.js
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer
- **Booking**: Cal.com integration

## Features

- 📝 Blog with rich text editor (Lexical)
- 💼 Portfolio/Projects showcase
- 📊 Case studies with detailed architecture
- 👥 Team/Authors management
- 💬 Testimonials (text & video)
- 🏢 Client & Industry management
- 💼 Job postings
- 📧 Contact form with email notifications
- 🎨 Dynamic theming
- 📱 Fully responsive design
- 🔍 SEO optimized with sitemap generation
- 🖼️ Optimized image handling (WebP, Cloudinary)

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- Cloudinary account
- Gmail account (for email notifications)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd company_website
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- Database connection string
- Cloudinary credentials
- Gmail credentials for contact form
- PayloadCMS secret
- Site URLs

4. Run database migrations (if needed):
```bash
# PayloadCMS will auto-create tables on first run
```

5. Start the development server:
```bash
pnpm dev
```

6. Access the application:
- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

### First Time Setup

1. Navigate to http://localhost:3000/admin
2. Create your first admin user
3. Start adding content through the CMS

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (app)/             # Public-facing routes
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── careers/
│   │   │   ├── case-studies/
│   │   │   ├── portfolio/
│   │   │   └── services/
│   │   ├── (payload)/         # CMS routes
│   │   │   └── admin/
│   │   └── api/               # API routes
│   ├── collections/           # PayloadCMS collections
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and constants
│   ├── models/                # Data models
│   ├── types/                 # TypeScript types
│   └── utils/                 # Helper functions
├── public/                    # Static assets
│   ├── animations/
│   ├── favicons/
│   ├── fonts/
│   └── images/
└── docs/                      # Documentation
```

## Available Scripts

```bash
# Development
pnpm dev                    # Start dev server

# Production
pnpm build                  # Build for production
pnpm start                  # Start production server

# Code Quality
pnpm lint                   # Run ESLint

# PayloadCMS
pnpm generate:types         # Generate TypeScript types from CMS
pnpm generate:importmap     # Generate import map
```

## CMS Collections

The project uses PayloadCMS with the following collections:

- **Authors**: Blog post authors with bio and avatar
- **Posts**: Blog posts with rich content, tags, and SEO
- **Projects**: Portfolio projects with client and industry info
- **Case Studies**: Detailed project case studies
- **Clients**: Client information and logos
- **Industries**: Industry categories
- **Testimonials**: Customer testimonials (text/video)
- **Jobs**: Job postings with requirements
- **Tags**: Content categorization
- **Media**: Image/file uploads (stored in Cloudinary)
- **Users**: Admin users with role-based access

For detailed collection schemas and API usage, see [docs/CMS_COLLECTIONS.md](./docs/CMS_COLLECTIONS.md)

## Environment Variables

See `.env.example` for all required environment variables:

- `NEXT_PUBLIC_SERVER_URL`: Your app URL
- `DATABASE_URL`: PostgreSQL connection string
- `PAYLOAD_SECRET`: Secret key for PayloadCMS
- `CLOUDINARY_*`: Cloudinary credentials
- `GMAIL_USER` & `GMAIL_PASS`: Email configuration
- `NEXT_PUBLIC_CAL_LINK`: Cal.com booking link

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Ensure your platform supports:
- Node.js 20+
- PostgreSQL database
- Environment variables

Build command: `pnpm build`
Start command: `pnpm start`

## API Routes

- `POST /api/contact` - Contact form submission
- `GET /api/services` - Fetch services data
- PayloadCMS REST API: `/api/*` (auto-generated)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Private - All rights reserved

## Support

For issues or questions, contact the development team.
