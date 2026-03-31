# Markdown Quick Start Guide

Get started with Markdown content in 5 minutes!

## What Changed?

Your CMS now supports **Markdown** alongside the existing Lexical rich text editor. This gives you:
- ✅ 85-90% storage savings
- ✅ Faster database queries
- ✅ Developer-friendly plain text format
- ✅ Better version control

## How to Use (Admin Panel)

### Creating a New Blog Post with Markdown

1. Go to `/admin` → **Posts** → **Create New**
2. Fill in basic fields (title, slug, excerpt)
3. Find the **Content Type** dropdown
4. Select **"Markdown"** instead of "Rich Text (Lexical)"
5. Write your content in the **Markdown Content** textarea
6. Save!

### Creating a Case Study with Markdown

1. Go to `/admin` → **Case Studies** → **Create New**
2. Fill in basic fields (title, slug, project)
3. Find the **Content Type** dropdown
4. Select **"Markdown"**
5. Write your full case study in the **Markdown Content** textarea
   - Include sections like "## The Problem", "## Our Solution", etc.
6. Save!

## Markdown Syntax Cheat Sheet

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
***Bold and italic***

- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image alt text](https://example.com/image.jpg)

`inline code`

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`

> Blockquote text

---

Horizontal line
```

## Example Blog Post

```markdown
# Introduction to System Architecture

Building scalable systems requires careful planning and the right tools.

## Key Principles

When designing a system, consider these principles:

1. **Scalability** - Can it handle growth?
2. **Reliability** - Will it stay up?
3. **Maintainability** - Can we fix it easily?

## Code Example

Here's a simple microservice pattern:

\`\`\`typescript
interface Service {
  name: string;
  port: number;
  health: () => Promise<boolean>;
}

const apiGateway: Service = {
  name: "api-gateway",
  port: 3000,
  health: async () => true
};
\`\`\`

## Conclusion

Good architecture is about making the right tradeoffs for your specific needs.

---

*Written by the Engineering Team*
```

## When to Use Markdown vs Rich Text?

### Use Markdown for:
- ✅ Technical blog posts with code
- ✅ Long-form content (1000+ words)
- ✅ Content created by developers
- ✅ Content that needs version control
- ✅ High-volume content sites

### Use Rich Text for:
- ✅ Marketing content
- ✅ Content by non-technical team
- ✅ Complex nested layouts
- ✅ Visual editing preference

## API Usage

### Create Post with Markdown

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "My First Markdown Post",
    "slug": "my-first-markdown-post",
    "contentType": "markdown",
    "markdownContent": "# Hello World\n\nThis is **markdown**!",
    "publishedAt": "2026-03-30T10:00:00.000Z"
  }'
```

### Create Case Study with Markdown

```bash
curl -X POST http://localhost:3000/api/case-studies \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "E-Commerce Scaling",
    "slug": "ecommerce-scaling",
    "project": "PROJECT_ID",
    "contentType": "markdown",
    "markdownContent": "## The Challenge\n\nThe platform was slow and couldn'\''t handle traffic spikes...\n\n## Our Approach\n\nWe implemented a microservices architecture...\n\n## Results\n\n- 70% faster page loads\n- 99.9% uptime\n- Handled 10x traffic"
  }'
```

## Storage Comparison

### Before (Lexical JSON)
```json
{
  "root": {
    "type": "root",
    "format": "",
    "indent": 0,
    "version": 1,
    "children": [
      {
        "type": "paragraph",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "type": "text",
            "text": "Hello ",
            "format": 0,
            "version": 1
          },
          {
            "type": "text",
            "text": "world",
            "format": 1,
            "version": 1
          }
        ]
      }
    ]
  }
}
```
**Size**: ~450 bytes

### After (Markdown)
```markdown
Hello **world**
```
**Size**: ~15 bytes

**Savings**: 96.7%!

## FAQ

### Q: Can I mix both formats?
**A**: Yes! Each post/case study can use either format independently.

### Q: What happens to existing content?
**A**: Existing Lexical content continues to work. No migration needed unless you want the storage savings.

### Q: Can I convert existing posts to Markdown?
**A**: Yes! See [MARKDOWN_MIGRATION.md](./MARKDOWN_MIGRATION.md) for the migration guide.

### Q: Does Markdown support images?
**A**: Yes! Use standard markdown image syntax: `![alt](url)`

### Q: What about tables?
**A**: Yes! We support GitHub Flavored Markdown (GFM) including tables.

### Q: Is the markdown sanitized?
**A**: Yes! We use `rehype-sanitize` to prevent XSS attacks.

## Next Steps

1. ✅ Try creating a test post with Markdown
2. ✅ Compare the database size
3. ✅ Read [MARKDOWN_SUPPORT.md](./MARKDOWN_SUPPORT.md) for full syntax
4. ✅ Check [CONTENT_FORMAT_COMPARISON.md](./CONTENT_FORMAT_COMPARISON.md) for detailed comparison

## Need Help?

- Full documentation: [MARKDOWN_SUPPORT.md](./MARKDOWN_SUPPORT.md)
- Migration guide: [MARKDOWN_MIGRATION.md](./MARKDOWN_MIGRATION.md)
- Format comparison: [CONTENT_FORMAT_COMPARISON.md](./CONTENT_FORMAT_COMPARISON.md)
- Example post: [MARKDOWN_EXAMPLE.md](./MARKDOWN_EXAMPLE.md)
