/**
 * Renders Payload Lexical RichText content (root.children) as HTML.
 * Handles paragraph, heading, and list nodes with basic bold/italic.
 */
type LexicalChild = { text?: string; format?: number }
type LexicalListItem = { children?: Array<{ text?: string }> }
type LexicalNode = {
  type?: string
  tag?: string
  children?: Array<LexicalChild> | Array<LexicalListItem>
}

export function RichText({
  content,
  className = "space-y-4",
}: {
  content: { root?: { children?: LexicalNode[] } } | null | undefined
  className?: string
}) {
  if (!content?.root?.children) return null

  const nodes = content.root.children as LexicalNode[]

  return (
    <div className={className}>
      {nodes.map((node, i) => {
        const nodeType = node.type ?? ""
        const children = node.children as Array<LexicalChild> | undefined

        if (nodeType === "paragraph") {
          return (
            <p key={i}>
              {children?.map((child, j) => {
                const format = child.format ?? 0
                if (format & 1) return <strong key={j}>{child.text}</strong>
                if (format & 2) return <em key={j}>{child.text}</em>
                return child.text
              })}
            </p>
          )
        }
        if (nodeType === "heading") {
          const Tag = ((node.tag as string) || "h2") as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
          return (
            <Tag key={i} className="text-foreground font-bold">
              {children?.map((child, j) => child.text)}
            </Tag>
          )
        }
        if (nodeType === "list") {
          const Tag = node.tag === "ol" ? "ol" : "ul"
          const items = node.children as LexicalListItem[] | undefined
          return (
            <Tag key={i} className="list-inside list-disc space-y-2">
              {items?.map((item: LexicalListItem, j: number) => (
                <li key={j}>
                  {item.children?.map((child, k) => child.text)}
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
