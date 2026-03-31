/**
 * Renders Markdown content as HTML with GitHub Flavored Markdown support.
 * Supports headings, lists, code blocks, tables, links, images, and more.
 */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

export function Markdown({
  content,
  className = "max-w-none text-foreground/90",
}: {
  content: string | null | undefined
  className?: string
}) {
  if (!content) return null

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-foreground" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground border-b border-border/50 pb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-foreground" {...props} />,
          p: ({ node, ...props }) => <p className="my-6 leading-relaxed text-foreground/95 font-normal" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc ml-6 my-6 space-y-4 text-foreground/95 font-normal" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal ml-6 my-6 space-y-4 text-foreground/95 font-normal" {...props} />,
          li: ({ node, ...props }) => <li className="pl-2" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary/50 pl-6 my-8 italic text-foreground/70 bg-muted/20 py-4 rounded-r-lg" {...props} />
          ),
          code: ({ node, inline, ...props }: any) => 
            inline ? (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
            ) : (
              <code className="block bg-muted/50 p-4 rounded-lg text-sm font-mono my-6 overflow-x-auto border border-border/50" {...props} />
            ),
          hr: () => <hr className="my-12 border-border/60" />,
          strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
          a: ({ node, ...props }) => <a className="text-primary hover:underline underline-offset-4 transition-all" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
