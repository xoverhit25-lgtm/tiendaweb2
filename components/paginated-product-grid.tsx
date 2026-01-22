"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { getCategorySlug } from "@/lib/utils/category-slug"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  image: string
  category: string
  description?: string
  stock?: "out" | "low" | "medium" | "high"
}

interface PaginatedProductGridProps {
  products: Product[]
  productsPerPage?: number
  showCategory?: boolean
}

function getStockBadge(stock?: "out" | "low" | "medium" | "high") {
  if (!stock || stock === "high") return null

  const variants = {
    out: { label: "Agotado", className: "bg-black text-white" },
    low: { label: "Ultimas unidades", className: "bg-orange-500 text-white" },
    medium: { label: "Stock limitado", className: "bg-yellow-500 text-black" },
  }

  const config = variants[stock]
  return <span className={`${config.className} text-[10px] font-semibold px-2 py-1 rounded-full bg-destructive`}>{config.label}</span>
}

export default function PaginatedProductGrid({
  products,
  productsPerPage = 12,
  showCategory = false,
}: PaginatedProductGridProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  
  // Get current page from URL, default to 1
  const currentPage = Number(searchParams.get("page")) || 1

  const totalPages = Math.ceil(products.length / productsPerPage)
  
  // Ensure currentPage is within valid range
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages || 1)

  const paginatedProducts = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    return products.slice(startIndex, endIndex)
  }, [products, validCurrentPage, productsPerPage])

  // Create URL with page parameter while preserving other params
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete("page")
    } else {
      params.set("page", page.toString())
    }
    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = []
    
    if (totalPages <= 5) {
      // Show all pages if 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      if (validCurrentPage > 3) {
        pages.push("ellipsis")
      }
      
      // Show pages around current page
      const start = Math.max(2, validCurrentPage - 1)
      const end = Math.min(totalPages - 1, validCurrentPage + 1)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (validCurrentPage < totalPages - 2) {
        pages.push("ellipsis")
      }
      
      // Always show last page
      pages.push(totalPages)
    }
    
    return pages
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div>
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {paginatedProducts.map((product) => (
          <Link key={product.id} href={`/categoria/${getCategorySlug(product.category)}/${product.slug}`} prefetch={false} className="group block">
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-black/5">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain p-2 sm:p-3 group-hover:scale-105 transition-transform duration-500"
                />
                {product.stock && product.stock !== "high" && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                    {getStockBadge(product.stock)}
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                {showCategory && (
                  <p className="text-[10px] sm:text-xs text-black/40 mb-1">{product.category}</p>
                )}
                <h3 className="text-xs sm:text-sm font-medium text-black mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-base sm:text-xl font-bold text-black">
                  ${product.price.toLocaleString("es-AR")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 sm:mt-10 md:mt-12">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  href={validCurrentPage > 1 ? createPageUrl(validCurrentPage - 1) : "#"}
                  className={validCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  aria-label="Pagina anterior"
                />
              </PaginationItem>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href={createPageUrl(page)}
                      isActive={validCurrentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  href={validCurrentPage < totalPages ? createPageUrl(validCurrentPage + 1) : "#"}
                  className={validCurrentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  aria-label="Pagina siguiente"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          {/* Page Info */}
          <p className="text-center text-black/40 text-xs sm:text-sm mt-4">
            Mostrando {((validCurrentPage - 1) * productsPerPage) + 1} - {Math.min(validCurrentPage * productsPerPage, products.length)} de {products.length} productos
          </p>
        </div>
      )}
    </div>
  )
}
