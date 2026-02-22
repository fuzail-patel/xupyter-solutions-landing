import { Button } from "@/components/ui/button"
import type { BlogFilterProps } from "@/lib/types/blog"
import { BLOG_CATEGORIES } from "@/lib/constants/blog"

export function BlogFilter({
  categories = [...BLOG_CATEGORIES],
  selectedCategory,
  onCategoryChange,
  resultCount,
  searchQuery,
}: BlogFilterProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-border/60 bg-background/60 pb-4 pt-3">
      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground/90">
        <p>
          {resultCount} post{resultCount === 1 ? "" : "s"}
          {searchQuery
            ? ` matching “${searchQuery.trim()}”`
            : null}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === selectedCategory
          return (
            <Button
              key={category}
              type="button"
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={
                isActive
                  ? "rounded-full px-4"
                  : "rounded-full border-dashed px-4"
              }
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
