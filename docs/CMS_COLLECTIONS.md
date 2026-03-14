# PayloadCMS Collections Documentation

This document provides detailed information about all CMS collections, their fields, and how to create content via API.

## Table of Contents

1. [Authors](#authors)
2. [Posts](#posts)
3. [Projects](#projects)
4. [Case Studies](#case-studies)
5. [Clients](#clients)
6. [Industries](#industries)
7. [Testimonials](#testimonials)
8. [Jobs](#jobs)
9. [Tags](#tags)
10. [Media](#media)
11. [Users](#users)

---

## Authors

Manage blog post authors and team members.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | Author's full name |
| `slug` | text | ✅ | URL-friendly identifier (unique) |
| `bio` | textarea | ❌ | Author biography |
| `avatar` | relationship | ❌ | Profile picture (relates to Media) |

### API Endpoint
```
GET    /api/authors
GET    /api/authors/:id
POST   /api/authors
PATCH  /api/authors/:id
DELETE /api/authors/:id
```

### Create Author (cURL)

```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "John Doe",
    "slug": "john-doe",
    "bio": "Senior software engineer with 10+ years of experience in web development.",
    "avatar": "MEDIA_ID_HERE"
  }'
```

### Example Response
```json
{
  "doc": {
    "id": "123",
    "name": "John Doe",
    "slug": "john-doe",
    "bio": "Senior software engineer...",
    "avatar": {
      "id": "456",
      "url": "https://cloudinary.com/...",
      "alt": "John Doe"
    },
    "createdAt": "2026-03-15T10:00:00.000Z",
    "updatedAt": "2026-03-15T10:00:00.000Z"
  }
}
```

---

## Posts

Blog posts with rich content, SEO, and categorization.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Post title |
| `slug` | text | ✅ | URL slug (unique) |
| `excerpt` | textarea | ❌ | Short summary |
| `content` | richText | ✅ | Main content (Lexical editor) |
| `coverImage` | relationship | ❌ | Featured image (Media) |
| `author` | relationship | ❌ | Post author (Authors) |
| `tags` | relationship | ❌ | Multiple tags (Tags) |
| `publishedAt` | date | ❌ | Publication date |
| `featured` | checkbox | ❌ | Featured post flag |
| `readTime` | text | ❌ | Estimated read time |
| `seoTitle` | text | ❌ | SEO meta title |
| `seoDescription` | textarea | ❌ | SEO meta description |

### API Endpoint
```
GET    /api/posts
GET    /api/posts/:id
POST   /api/posts
PATCH  /api/posts/:id
DELETE /api/posts/:id
```

### Create Post (cURL)

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Getting Started with Next.js 16",
    "slug": "getting-started-nextjs-16",
    "excerpt": "Learn the basics of Next.js 16 and its new features.",
    "content": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Next.js 16 introduces amazing new features..."
              }
            ]
          }
        ]
      }
    },
    "coverImage": "MEDIA_ID",
    "author": "AUTHOR_ID",
    "tags": ["TAG_ID_1", "TAG_ID_2"],
    "publishedAt": "2026-03-15T10:00:00.000Z",
    "featured": true,
    "readTime": "5 min read",
    "seoTitle": "Getting Started with Next.js 16 - Complete Guide",
    "seoDescription": "A comprehensive guide to Next.js 16 features and best practices."
  }'
```

---

## Projects

Portfolio projects with client and technology information.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Project name |
| `slug` | text | ✅ | URL slug (unique) |
| `summary` | textarea | ✅ | Project description/excerpt |
| `client` | relationship | ✅ | Client (Clients) |
| `liveUrl` | text | ❌ | Live project URL |
| `industry` | relationship | ✅ | Industry (Industries) |
| `technologies` | array | ❌ | Tech stack used |
| `coverImage` | relationship | ✅ | Project thumbnail (Media) |
| `featured` | checkbox | ❌ | Featured project flag |
| `published` | checkbox | ❌ | Visibility status (default: true) |

### API Endpoint
```
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PATCH  /api/projects/:id
DELETE /api/projects/:id
```

### Create Project (cURL)

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "E-Commerce Platform Redesign",
    "slug": "ecommerce-platform-redesign",
    "summary": "Complete redesign and modernization of a legacy e-commerce platform serving 100K+ users.",
    "client": "CLIENT_ID",
    "liveUrl": "https://example-store.com",
    "industry": "INDUSTRY_ID",
    "technologies": [
      { "technology": "Next.js" },
      { "technology": "TypeScript" },
      { "technology": "PostgreSQL" },
      { "technology": "Stripe" }
    ],
    "coverImage": "MEDIA_ID",
    "featured": true,
    "published": true
  }'
```

---

## Case Studies

Detailed project case studies with problem-solution format.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Case study title |
| `slug` | text | ✅ | URL slug (unique) |
| `project` | relationship | ✅ | Related project (Projects) |
| `problem` | richText | ✅ | Problem statement |
| `solution` | richText | ✅ | Solution description |
| `architecture` | richText | ❌ | Technical architecture |
| `results` | richText | ❌ | Outcomes and metrics |
| `images` | relationship | ❌ | Multiple images (Media) |

### API Endpoint
```
GET    /api/case-studies
GET    /api/case-studies/:id
POST   /api/case-studies
PATCH  /api/case-studies/:id
DELETE /api/case-studies/:id
```

### Create Case Study (cURL)

```bash
curl -X POST http://localhost:3000/api/case-studies \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Scaling E-Commerce to 1M Users",
    "slug": "scaling-ecommerce-1m-users",
    "project": "PROJECT_ID",
    "problem": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "The client'\''s platform was experiencing severe performance issues..."
              }
            ]
          }
        ]
      }
    },
    "solution": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "We implemented a microservices architecture with..."
              }
            ]
          }
        ]
      }
    },
    "architecture": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "The system uses Next.js for the frontend, Node.js microservices..."
              }
            ]
          }
        ]
      }
    },
    "results": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Page load times reduced by 70%, conversion rate increased by 25%..."
              }
            ]
          }
        ]
      }
    },
    "images": ["MEDIA_ID_1", "MEDIA_ID_2"]
  }'
```

---

## Clients

Client/company information and branding.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | Client name (unique) |
| `logo` | relationship | ❌ | Client logo (Media) |
| `industry` | text | ❌ | Industry sector |
| `website` | text | ❌ | Client website URL |

### API Endpoint
```
GET    /api/clients
GET    /api/clients/:id
POST   /api/clients
PATCH  /api/clients/:id
DELETE /api/clients/:id
```

### Create Client (cURL)

```bash
curl -X POST http://localhost:3000/api/clients \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Acme Corporation",
    "logo": "MEDIA_ID",
    "industry": "Technology",
    "website": "https://acme.com"
  }'
```

---

## Industries

Industry categories for projects and clients.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | Industry name (unique) |
| `slug` | text | ✅ | URL slug (unique) |
| `description` | textarea | ❌ | Industry description |

### API Endpoint
```
GET    /api/industries
GET    /api/industries/:id
POST   /api/industries
PATCH  /api/industries/:id
DELETE /api/industries/:id
```

### Create Industry (cURL)

```bash
curl -X POST http://localhost:3000/api/industries \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "E-Commerce",
    "slug": "ecommerce",
    "description": "Online retail and marketplace platforms"
  }'
```

---

## Testimonials

Customer testimonials with text or video format.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | Customer name |
| `type` | select | ❌ | "text" or "video" (default: text) |
| `role` | text | ❌ | Job title/position |
| `content` | textarea | ✅* | Testimonial text (*if type=text) |
| `videoThumbnail` | relationship | ❌ | Video thumbnail (Media, if type=video) |
| `videoUrl` | text | ❌ | Video URL (if type=video) |
| `rating` | number | ❌ | Rating 1-5 (default: 5) |
| `avatar` | relationship | ❌ | Customer photo (Media) |
| `featured` | checkbox | ❌ | Featured testimonial |
| `colSpan` | number | ❌ | Grid width (6=half, 12=full, default: 6) |

### API Endpoint
```
GET    /api/testimonials
GET    /api/testimonials/:id
POST   /api/testimonials
PATCH  /api/testimonials/:id
DELETE /api/testimonials/:id
```

### Create Text Testimonial (cURL)

```bash
curl -X POST http://localhost:3000/api/testimonials \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Jane Smith",
    "type": "text",
    "role": "CTO at TechCorp",
    "content": "Working with this team was an absolute pleasure. They delivered beyond our expectations.",
    "rating": 5,
    "avatar": "MEDIA_ID",
    "featured": true,
    "colSpan": 6
  }'
```

### Create Video Testimonial (cURL)

```bash
curl -X POST http://localhost:3000/api/testimonials \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "John Doe",
    "type": "video",
    "role": "CEO at StartupXYZ",
    "videoUrl": "https://youtube.com/watch?v=...",
    "videoThumbnail": "MEDIA_ID",
    "rating": 5,
    "avatar": "MEDIA_ID",
    "featured": false,
    "colSpan": 12
  }'
```

---

## Jobs

Job postings and career opportunities.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Job title |
| `department` | text | ✅ | Department/team |
| `location` | text | ✅ | Job location |
| `type` | select | ✅ | "full-time", "contract", or "remote" |
| `summary` | textarea | ✅ | Brief job description |
| `description` | richText | ✅ | Detailed job description |
| `requirements` | array | ✅ | List of requirements |
| `status` | select | ✅ | "open" or "closed" (default: open) |

### API Endpoint
```
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PATCH  /api/jobs/:id
DELETE /api/jobs/:id
```

### Create Job (cURL)

```bash
curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Senior Full Stack Developer",
    "department": "Engineering",
    "location": "Remote",
    "type": "full-time",
    "summary": "We are looking for an experienced full stack developer to join our growing team.",
    "description": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "As a Senior Full Stack Developer, you will..."
              }
            ]
          }
        ]
      }
    },
    "requirements": [
      { "requirement": "5+ years of experience with React and Node.js" },
      { "requirement": "Strong TypeScript skills" },
      { "requirement": "Experience with PostgreSQL" },
      { "requirement": "Excellent communication skills" }
    ],
    "status": "open"
  }'
```

---

## Tags

Content categorization tags for blog posts.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | Tag name |
| `slug` | text | ✅ | URL slug (unique) |

### API Endpoint
```
GET    /api/tags
GET    /api/tags/:id
POST   /api/tags
PATCH  /api/tags/:id
DELETE /api/tags/:id
```

### Create Tag (cURL)

```bash
curl -X POST http://localhost:3000/api/tags \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Next.js",
    "slug": "nextjs"
  }'
```

---

## Media

File uploads (images, videos, documents) stored in Cloudinary.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `alt` | text | ✅ | Alt text for accessibility |
| `caption` | textarea | ❌ | Image caption |
| `file` | upload | ✅ | File upload (auto-converted to WebP) |

### Configuration
- Max file size: 5MB
- Format: Auto-converted to WebP (quality: 80)
- Storage: Cloudinary
- Local storage: Disabled

### API Endpoint
```
GET    /api/media
GET    /api/media/:id
POST   /api/media
PATCH  /api/media/:id
DELETE /api/media/:id
```

### Upload Media (cURL)

```bash
curl -X POST http://localhost:3000/api/media \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/image.jpg" \
  -F "alt=Product screenshot" \
  -F "caption=Our new dashboard interface"
```

### Example Response
```json
{
  "doc": {
    "id": "789",
    "alt": "Product screenshot",
    "caption": "Our new dashboard interface",
    "url": "https://res.cloudinary.com/your-cloud/image/upload/v123/payload-media/filename.webp",
    "filename": "filename.webp",
    "mimeType": "image/webp",
    "filesize": 245678,
    "width": 1920,
    "height": 1080,
    "createdAt": "2026-03-15T10:00:00.000Z",
    "updatedAt": "2026-03-15T10:00:00.000Z"
  }
}
```

---

## Users

Admin users with authentication and role-based access.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | text | ✅ | User's full name |
| `email` | email | ✅ | Login email (auto-added by auth) |
| `password` | password | ✅ | Hashed password (auto-added by auth) |
| `role` | select | ✅ | "admin" or "editor" |

### API Endpoint
```
GET    /api/users
GET    /api/users/:id
POST   /api/users
PATCH  /api/users/:id
DELETE /api/users/:id
POST   /api/users/login
POST   /api/users/logout
```

### Create User (cURL)

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "SecurePassword123!",
    "role": "admin"
  }'
```

### Login (cURL)

```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "SecurePassword123!"
  }'
```

---

## Authentication

All API requests (except public reads) require authentication.

### Get Auth Token

```bash
# Login to get token
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'
```

Response includes a token:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}
```

### Use Token in Requests

```bash
curl -X GET http://localhost:3000/api/posts \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Query Parameters

PayloadCMS supports powerful query parameters:

### Pagination
```bash
# Get page 2 with 20 items per page
GET /api/posts?page=2&limit=20
```

### Filtering
```bash
# Get featured posts
GET /api/posts?where[featured][equals]=true

# Get posts by author
GET /api/posts?where[author][equals]=AUTHOR_ID

# Get posts with specific tag
GET /api/posts?where[tags][in]=TAG_ID
```

### Sorting
```bash
# Sort by publishedAt descending
GET /api/posts?sort=-publishedAt

# Sort by title ascending
GET /api/posts?sort=title
```

### Depth (Populate Relationships)
```bash
# Populate all relationships 2 levels deep
GET /api/posts?depth=2
```

### Select Fields
```bash
# Only return specific fields
GET /api/posts?select=title,slug,excerpt
```

### Combined Example
```bash
GET /api/posts?where[featured][equals]=true&sort=-publishedAt&limit=5&depth=2
```

---

## Rich Text Format (Lexical)

Rich text fields use Lexical editor format:

```json
{
  "root": {
    "type": "root",
    "children": [
      {
        "type": "heading",
        "tag": "h2",
        "children": [
          { "type": "text", "text": "Heading Text" }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          { "type": "text", "text": "Regular text " },
          { "type": "text", "text": "bold text", "format": 1 },
          { "type": "text", "text": " and " },
          { "type": "text", "text": "italic text", "format": 2 }
        ]
      },
      {
        "type": "list",
        "listType": "bullet",
        "children": [
          {
            "type": "listitem",
            "children": [
              { "type": "text", "text": "List item 1" }
            ]
          },
          {
            "type": "listitem",
            "children": [
              { "type": "text", "text": "List item 2" }
            ]
          }
        ]
      }
    ]
  }
}
```

Format codes:
- `1` = bold
- `2` = italic
- `3` = bold + italic

---

## AI Content Creation Helper

When asking AI to create content, provide this structure:

### Example Prompt for AI

```
Create a blog post about Next.js 16 features. Use this exact structure:

POST /api/posts
{
  "title": "[TITLE]",
  "slug": "[URL_SLUG]",
  "excerpt": "[SHORT_SUMMARY]",
  "content": {
    "root": {
      "type": "root",
      "children": [
        {
          "type": "paragraph",
          "children": [
            { "type": "text", "text": "[CONTENT]" }
          ]
        }
      ]
    }
  },
  "author": "[AUTHOR_ID]",
  "tags": ["[TAG_ID]"],
  "publishedAt": "[ISO_DATE]",
  "featured": true,
  "readTime": "[X min read]",
  "seoTitle": "[SEO_TITLE]",
  "seoDescription": "[SEO_DESC]"
}

Provide the complete cURL command with all fields filled.
```

---

## Tips & Best Practices

1. **Always upload media first** - Get the media ID before creating posts/projects
2. **Create relationships in order** - Authors → Tags → Posts, Clients → Industries → Projects
3. **Use depth parameter** - When fetching data for display, use `?depth=2` to populate relationships
4. **Slugs must be unique** - Ensure slugs are URL-friendly and unique
5. **Test with small data first** - Create one of each type to test your workflow
6. **Use featured flags** - Mark important content as featured for homepage display
7. **SEO fields are important** - Always fill seoTitle and seoDescription for better search rankings
8. **Rich text structure** - Use proper Lexical format for rich text fields
9. **Image optimization** - Images are auto-converted to WebP, but upload reasonable sizes
10. **Authentication tokens expire** - Re-login if you get 401 errors

---

## Common Workflows

### Creating a Complete Blog Post

1. Upload cover image → Get `MEDIA_ID`
2. Create author (if new) → Get `AUTHOR_ID`
3. Create tags (if new) → Get `TAG_IDs`
4. Create post with all IDs

### Creating a Project with Case Study

1. Upload project images → Get `MEDIA_IDs`
2. Create client (if new) → Get `CLIENT_ID`
3. Create industry (if new) → Get `INDUSTRY_ID`
4. Create project → Get `PROJECT_ID`
5. Create case study with `PROJECT_ID`

### Adding a Testimonial

1. Upload avatar image → Get `MEDIA_ID`
2. Create testimonial with `MEDIA_ID`

---

## Need Help?

- Check PayloadCMS docs: https://payloadcms.com/docs
- Review collection files in `src/collections/`
- Test endpoints in the admin panel
- Use Postman/Insomnia for API testing

---

**Last Updated**: March 15, 2026
