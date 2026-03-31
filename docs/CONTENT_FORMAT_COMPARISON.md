# Content Format Comparison: Lexical vs Markdown

## Storage Size Comparison

### Lexical Rich Text (JSON)
A simple paragraph with bold text:

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
            "text": "This is a ",
            "format": 0,
            "version": 1
          },
          {
            "type": "text",
            "text": "bold",
            "format": 1,
            "version": 1
          },
          {
            "type": "text",
            "text": " word.",
            "format": 0,
            "version": 1
          }
        ]
      }
    ]
  }
}
```
**Size**: ~450 bytes

### Markdown
Same content in Markdown:

```markdown
This is a **bold** word.
```
**Size**: ~25 bytes

## Storage Efficiency

| Content Type | Lexical JSON | Markdown | Savings |
|--------------|--------------|----------|---------|
| Simple paragraph | ~450 bytes | ~25 bytes | **94%** |
| 1000 word article | ~50-80 KB | ~5-8 KB | **85-90%** |
| Complex formatting | ~100-150 KB | ~10-15 KB | **85-90%** |

## When to Use Each Format

### Use Lexical Rich Text When:
- ✅ Content editors prefer visual WYSIWYG editing
- ✅ Need complex nested structures
- ✅ Non-technical team members create content
- ✅ Real-time collaborative editing is needed

### Use Markdown When:
- ✅ Storage efficiency is important
- ✅ Content is created by developers
- ✅ Need version control friendly format
- ✅ Content will be migrated between systems
- ✅ Programmatic content generation
- ✅ Large volume of content

## Real-World Example

### Blog Post: "Introduction to System Architecture"

**Lexical JSON**: 127 KB  
**Markdown**: 12 KB  
**Savings**: 90.5%

For a blog with 100 posts:
- Lexical: ~12.7 MB
- Markdown: ~1.2 MB
- **Total Savings**: ~11.5 MB (90%)

## Database Impact

With PostgreSQL storage:
- Smaller payload = faster queries
- Reduced backup sizes
- Lower storage costs
- Better cache efficiency

## Recommendation

For this project:
- **Marketing content** (created by team): Use Lexical
- **Technical blogs** (created by developers): Use Markdown
- **Case studies** (data-heavy): Use Markdown
- **Landing pages**: Use Lexical
