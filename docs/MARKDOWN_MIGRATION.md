# Migrating Existing Content to Markdown

If you have existing blog posts or case studies in Lexical Rich Text format and want to convert them to Markdown for storage efficiency, here's how.

## Why Migrate?

- **Storage Savings**: 85-90% reduction in database size
- **Performance**: Faster queries and backups
- **Portability**: Easier to export/import content
- **Version Control**: Cleaner Git diffs

## Manual Migration (Admin Panel)

1. Open the post/case study in Payload Admin
2. Copy the content from the rich text editor
3. Change **Content Type** dropdown to "Markdown"
4. Paste and reformat content using Markdown syntax
5. Save

## Programmatic Migration

### Step 1: Export Lexical Content

```javascript
// scripts/export-lexical.js
const payload = require('payload')

async function exportContent() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  posts.docs.forEach(post => {
    console.log(`\n--- ${post.slug} ---`)
    console.log(JSON.stringify(post.content, null, 2))
  })
}

exportContent()
```

### Step 2: Convert Lexical to Markdown

```javascript
// scripts/lexical-to-markdown.js
function lexicalToMarkdown(lexicalContent) {
  if (!lexicalContent?.root?.children) return ''
  
  let markdown = ''
  
  lexicalContent.root.children.forEach(node => {
    if (node.type === 'paragraph') {
      const text = node.children
        ?.map(child => {
          if (!child.text) return ''
          const format = child.format || 0
          let text = child.text
          if (format & 1) text = `**${text}**` // bold
          if (format & 2) text = `*${text}*`   // italic
          return text
        })
        .join('')
      markdown += text + '\n\n'
    }
    
    if (node.type === 'heading') {
      const level = node.tag?.replace('h', '') || '2'
      const text = node.children?.map(c => c.text).join('')
      markdown += '#'.repeat(level) + ' ' + text + '\n\n'
    }
    
    if (node.type === 'list') {
      const isOrdered = node.tag === 'ol'
      node.children?.forEach((item, i) => {
        const text = item.children?.map(c => c.text).join('')
        const prefix = isOrdered ? `${i + 1}. ` : '- '
        markdown += prefix + text + '\n'
      })
      markdown += '\n'
    }
  })
  
  return markdown.trim()
}

// Example usage
const lexical = {
  root: {
    children: [
      {
        type: 'heading',
        tag: 'h2',
        children: [{ text: 'Introduction' }]
      },
      {
        type: 'paragraph',
        children: [
          { text: 'This is ' },
          { text: 'bold', format: 1 },
          { text: ' text.' }
        ]
      }
    ]
  }
}

console.log(lexicalToMarkdown(lexical))
// Output:
// ## Introduction
//
// This is **bold** text.
```

### Step 3: Update Posts with Markdown

```javascript
// scripts/migrate-to-markdown.js
const payload = require('payload')

async function migrateToMarkdown() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  for (const post of posts.docs) {
    const markdown = lexicalToMarkdown(post.content)
    
    await payload.update({
      collection: 'posts',
      id: post.id,
      data: {
        contentType: 'markdown',
        markdownContent: markdown,
      },
    })
    
    console.log(`✓ Migrated: ${post.slug}`)
  }
  
  console.log(`\n✓ Migrated ${posts.docs.length} posts`)
}

migrateToMarkdown()
```

## Batch Migration Script

Create a complete migration script:

```javascript
// scripts/full-migration.js
const payload = require('payload')
require('dotenv').config()

function lexicalToMarkdown(lexicalContent) {
  // ... (use the converter function above)
}

async function migrate() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  // Migrate Posts
  console.log('Migrating Posts...')
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  for (const post of posts.docs) {
    if (post.content) {
      const markdown = lexicalToMarkdown(post.content)
      await payload.update({
        collection: 'posts',
        id: post.id,
        data: {
          contentType: 'markdown',
          markdownContent: markdown,
        },
      })
      console.log(`✓ Post: ${post.slug}`)
    }
  }

  // Migrate Case Studies
  console.log('\nMigrating Case Studies...')
  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 1000,
  })

  for (const cs of caseStudies.docs) {
    if (cs.content) {
      const markdown = lexicalToMarkdown(cs.content)
      
      await payload.update({
        collection: 'case-studies',
        id: cs.id,
        data: {
          contentType: 'markdown',
          markdownContent: markdown,
        },
      })
      console.log(`✓ Case Study: ${cs.slug}`)
    }
  }

  console.log('\n✅ Migration complete!')
  process.exit(0)
}

migrate().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
```

## Running the Migration

```bash
# Add script to package.json
"scripts": {
  "migrate:markdown": "node scripts/full-migration.js"
}

# Run migration
pnpm migrate:markdown
```

## Rollback Plan

If you need to rollback:

1. Keep the original `content` field data (don't delete it)
2. Change `contentType` back to "richText"
3. The original Lexical content will be used

## Testing Before Migration

Test with a single post first:

```bash
# Create test script
node scripts/test-single-migration.js
```

```javascript
// scripts/test-single-migration.js
const payload = require('payload')

async function test() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  // Get one post
  const post = await payload.findByID({
    collection: 'posts',
    id: 'YOUR_POST_ID',
  })

  console.log('Original Lexical:')
  console.log(JSON.stringify(post.content, null, 2))

  const markdown = lexicalToMarkdown(post.content)
  console.log('\nConverted Markdown:')
  console.log(markdown)

  // Don't save, just preview
}

test()
```

## Best Practices

1. **Backup First**: Export all content before migration
2. **Test Conversion**: Verify markdown output looks correct
3. **Migrate in Batches**: Do 10-20 posts at a time
4. **Keep Original Data**: Don't delete Lexical content immediately
5. **Verify Frontend**: Check that pages render correctly
6. **Monitor Performance**: Measure query speed improvements

## Database Backup

```bash
# PostgreSQL backup
pg_dump -U postgres -d your_database > backup_before_migration.sql

# Restore if needed
psql -U postgres -d your_database < backup_before_migration.sql
```

## Expected Results

After migration:
- Database size reduced by 85-90%
- Faster query performance
- Cleaner version control diffs
- Easier content portability

## Troubleshooting

### Issue: Complex formatting lost
**Solution**: Manually adjust markdown for complex layouts

### Issue: Images not converting
**Solution**: Add image conversion logic to handle image nodes

### Issue: Links broken
**Solution**: Extend converter to handle link nodes

## Need Help?

If you encounter issues during migration:
1. Check the conversion output manually
2. Test with a single post first
3. Keep backups of original content
4. Reach out to the development team
