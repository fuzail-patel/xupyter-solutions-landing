import type { JobDetailSectionsProps } from "@/lib/types/careers"
import { SystemList } from "@/components/shared/SystemList"

export function JobDetailSections({ job }: JobDetailSectionsProps) {
  const showSummary = !!job.summary
  const showRequirements = !!job.requirements && job.requirements.length > 0
  const showDescription = !!job.description && !!job.description.root && !!job.description.root.children && job.description.root.children.length > 0

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
        {showSummary && (
          <div className="space-y-3">
            <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
              Summary
            </h2>
            <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
              {job.summary}
            </p>
          </div>
        )}

        {showDescription && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
              About the Role
            </h2>
            <RichText content={job.description} />
          </div>
        )}

        {showRequirements && (
          <div className="space-y-3">
            <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
              Requirements
            </h2>
            <SystemList items={job.requirements.map(r => r.requirement).filter(Boolean) as string[]} />
          </div>
        )}
      </div>
    </section>
  )
}

// Helper component for Payload Lexical RichText
function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null

  return (
    <div className="space-y-4">
      {content.root.children.map((node: any, i: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={i} className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
              {node.children?.map((child: any, j: number) => {
                if (child.format & 1) return <strong key={j}>{child.text}</strong>
                if (child.format & 2) return <em key={j}>{child.text}</em>
                return child.text
              })}
            </p>
          )
        }
        if (node.type === 'heading') {
          const Tag = (node.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          return (
            <Tag key={i} className="text-foreground font-bold pt-2">
              {node.children?.map((child: any) => child.text)}
            </Tag>
          )
        }
        if (node.type === 'list') {
          const Tag = node.tag === 'ol' ? 'ol' : 'ul'
          return (
            <Tag key={i} className={node.tag === 'ol' ? 'list-decimal list-inside space-y-2' : 'list-disc list-inside space-y-2'}>
              {node.children?.map((item: any, j: number) => (
                <li key={j} className="text-sm md:text-base text-muted-foreground/90">
                  {item.children?.map((child: any, k: number) => child.text)}
                </li>
              ))}
            </Tag>
          )
        }
        return null
      })}
    </div>
  )
}
