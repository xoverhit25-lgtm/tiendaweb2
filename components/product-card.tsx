"use client"

import type React from "react"

import { useState, memo, useCallback } from "react"
import Link from "next/link"
import type { Product } from "@/data/featured-products"
import { getCategorySlug } from "@/lib/utils/category-slug"

interface ProductCardProps {
  product: Product
}

function getStockBadge(stock?: "out" | "low" | "medium" | "high") {
  if (!stock || stock === "high") return null

  const variants = {
    out: { label: "Agotado", className: "bg-foreground text-background" },
    low: { label: "Últimas unidades", className: "bg-primary text-primary-foreground" },
    medium: { label: "Stock limitado", className: "bg-accent text-accent-foreground" },
  }

  const config = variants[stock]
  return (
    <span className={`${config.className} text-[10px] font-medium px-2.5 py-1 rounded-sm tracking-wide uppercase`}>
      {config.label}
    </span>
  )
}

function ProductCard({ product }: ProductCardProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>("")
  const [currentPrice, setCurrentPrice] = useState(product.price)

  const handleVariantChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const variantId = e.target.value
      setSelectedVariantId(variantId)

      const selectedVariant = product.variants?.find((v) => v.id === variantId)
      if (selectedVariant?.price) {
        setCurrentPrice(selectedVariant.price)
      } else {
        setCurrentPrice(product.price)
      }
    },
    [product.variants, product.price],
  )

  const categorySlug = getCategorySlug(product.category)

  return (
    <Link href={`/categoria/${categorySlug}/${product.slug}`} prefetch={false} className="group block">
      <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-border">
        {/* Image container */}
        <div className="aspect-square relative overflow-hidden bg-secondary">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          />
          {product.stock && product.stock !== "high" && (
            <div className="absolute top-3 left-3 z-10">{getStockBadge(product.stock)}</div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-xs sm:text-sm font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-relaxed">
            {product.name}
          </h3>

          {product.variants && product.variants.length > 0 && product.variants.some((v) => v.price) && (
            <div className="mb-4" onClick={(e) => e.preventDefault()}>
              <select
                value={selectedVariantId}
                onChange={handleVariantChange}
                onClick={(e) => e.stopPropagation()}
                className="w-full text-xs border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background text-foreground"
              >
                <option value="">Modelo base</option>
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name}
                    {variant.price && ` - $${variant.price.toLocaleString("es-AR")}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <p className="text-lg sm:text-xl font-semibold text-foreground">${currentPrice.toLocaleString("es-AR")}</p>
        </div>
      </div>
    </Link>
  )
}

export default memo(ProductCard)
