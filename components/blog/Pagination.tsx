import type React from "react"

import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import type { PaginationProps } from "@/lib/types/blog"

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handleChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) {
      return
    }
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    if (totalPages <= 7) {
      return pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={page === currentPage}
            onClick={(event) => {
              event.preventDefault()
              handleChange(page)
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))
    }

    const items: React.ReactNode[] = []

    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={currentPage === 1}
          onClick={(event) => {
            event.preventDefault()
            handleChange(1)
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>
    )

    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)

    if (startPage > 2) {
      items.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={page === currentPage}
            onClick={(event) => {
              event.preventDefault()
              handleChange(page)
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      )
    }

    if (endPage < totalPages - 1) {
      items.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }

    items.push(
      <PaginationItem key={totalPages}>
        <PaginationLink
          href="#"
          isActive={currentPage === totalPages}
          onClick={(event) => {
            event.preventDefault()
            handleChange(totalPages)
          }}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    )

    return items
  }

  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <ShadPagination className="mt-8 pt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              isPreviousDisabled
                ? "pointer-events-none opacity-50"
                : undefined
            }
            onClick={(event) => {
              event.preventDefault()
              if (!isPreviousDisabled) {
                handleChange(currentPage - 1)
              }
            }}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              isNextDisabled ? "pointer-events-none opacity-50" : undefined
            }
            onClick={(event) => {
              event.preventDefault()
              if (!isNextDisabled) {
                handleChange(currentPage + 1)
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  )
}
