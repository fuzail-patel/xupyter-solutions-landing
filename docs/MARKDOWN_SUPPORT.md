# Markdown Support

This project now supports both **Lexical Rich Text** and **Markdown** formats for blog posts and case studies.

## Why Markdown?

- **Storage Efficiency**: Markdown is more compact than Lexical JSON format
- **Portability**: Easy to migrate content between systems
- **Developer Friendly**: Write content in plain text with simple syntax
- **Version Control**: Better diffs in Git

## How to Use

### In Payload CMS Admin

1. Navigate to Posts or Case Studies collection
2. When creating/editing, you'll see a **Content Type** dropdown
3. Choose between:
   - **Rich Text (Lexical)** - Visual editor with formatting toolbar
   - **Markdown** - Plain text editor with markdown syntax

### Markdown Syntax Examples

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list item 1
- Bullet list item 2

1. Numbered list item 1
2. Numbered list item 2

[Link text](https://example.com)

![Image alt text](https://example.com/image.jpg)

`inline code`

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`

> Blockquote

---

Horizontal rule
```

### GitHub Flavored Markdown (GFM)

We support GFM extensions including:

- **Tables**:
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

- **Task Lists**:
```markdown
- [x] Completed task
- [ ] Incomplete task
```

- **Strikethrough**: `~~strikethrough~~`
- **Autolinks**: URLs automatically become links

## Technical Details

### Collections with Markdown Support

- **Posts**: `markdownContent` field
- **Case Studies**: `problemMarkdown`, `solutionMarkdown`, `architectureMarkdown`, `resultsMarkdown` fields

### Components

- `<Markdown />` - Renders markdown content with GFM support
- `<RichText />` - Renders Lexical rich text (existing)

### Rendering

The frontend automatically detects the `contentType` field and renders accordingly:
- If `contentType === 'markdown'`, uses `<Markdown />` component
- Otherwise, uses `<RichText />` component (default)

### Styling

Both formats use Tailwind's `prose` classes for consistent typography:
- `prose prose-lg dark:prose-invert`

### Security

Markdown content is sanitized using `rehype-sanitize` to prevent XSS attacks.

## Migration

Existing content will continue to work as Rich Text. New content can use either format based on your preference.
