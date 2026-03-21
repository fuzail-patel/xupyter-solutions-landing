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
- **Email**: Nodemailer with HTML templates
- **Booking**: Cal.com integration

## Features

- 📝 Blog with rich text editor (Lexical)
- 💼 Portfolio/Projects showcase
- 📊 Case studies with detailed architecture
- 👥 Team/Authors management
- 💬 Testimonials (text & video)
- 🏢 Client & Industry management
- 💼 Job postings
- 📧 Contact & Quote forms with automated email delivery
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

Edit `.env` with your configuration (see [Environment Variables](#environment-variables) section).

4. Run database migrations:
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
│   │   ├── (payload)/         # CMS routes
│   │   └── api/               # API routes (Contact, Quote, Cron)
│   ├── collections/           # PayloadCMS collections
│   ├── components/            # React components
│   ├── lib/                   # Utilities (Mailer, Templates, CMS Client)
│   ├── utils/                 # Helper functions and Zod schemas
│   └── payload-types.ts       # Auto-generated types
├── templates/                 # Email HTML templates
├── public/                    # Static assets
└── docs/                      # Detailed documentation
```

## Email Delivery System

The project includes a robust email delivery system for handling leads.

### 1. Lead Collection
Leads are collected via two main endpoints:
- `POST /api/contact`: Standard contact form submissions.
- `POST /api/services/[slug]/quote`: Service-specific quote requests.

All leads are stored in the `contact-leads` collection with an initial `email_status` of `pending`.

### 2. Automated Delivery (Cron Job)
A background cron job processes pending leads and sends them to the configured administrator email.
- **Endpoint**: `GET /api/cron/send-leads`
- **Authorization**: Requires `Authorization: Bearer <CRON_SECRET>` header.
- **Batching**: Configurable via `EMAIL_BATCH_SIZE` (default: 5).
- **Prioritization**: Quote requests are automatically prioritized over standard contact messages.
- **Ordering**: Within each category, older leads are processed first.

### 3. Email Templates
Email templates are located in the `/templates` directory:
- `contact-template.html`: Used for standard contact messages.
- `quote-template.html`: Used for service quote requests.

Templates use `{{variable}}` syntax for dynamic data replacement.

## Environment Variables

The application requires the following environment variables. See `.env.example` for a template.

### Core
- `NEXT_PUBLIC_SERVER_URL`: Base URL of the application.
- `PAYLOAD_SECRET`: Secret key for PayloadCMS authentication.
- `DATABASE_URL`: PostgreSQL connection string.

### Media (Cloudinary)
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Email (Nodemailer)
- `GMAIL_USER`: Gmail address for sending emails.
- `GMAIL_PASS`: Gmail App Password.
- `MAIL_FROM`: Display name and email for outgoing mail.
- `CONTACT_NOTIFICATION_TO`: Recipient email for lead notifications.

### Cron & Batching
- `CRON_SECRET`: Secret key to authorize cron job executions.
- `EMAIL_BATCH_SIZE`: Number of emails to process per cron run (e.g., `5`).

## Deployment

### Vercel (Recommended)
1. Push code to GitHub.
2. Import project in Vercel.
3. Configure Environment Variables in Vercel Dashboard.
4. Set up a **Vercel Cron** to call `/api/cron/send-leads` periodically.

### Production Environment
Create a `.env.production` file for production-specific configurations. Ensure `EMAIL_BATCH_SIZE` and `CRON_SECRET` are properly set for production scale.

## License
Private - All rights reserved
