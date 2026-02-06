"use client"

import { useState, useEffect, useCallback, memo, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { bellezaProducts } from "@/data/products/belleza"
import { tecnologiaProducts } from "@/data/products/tecnologia"
import { tvAudioProducts } from "@/data/products/tv-audio"
import { perfumeriaProducts } from "@/data/products/perfumeria"
import { celularesProducts } from "@/data/products/celulares"
import Link from "next/link"
import { getCategorySlug } from "@/lib/utils/category-slug"

function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  const limitedFeaturedProducts = useMemo(() => {
    const featuredProducts = [
      bellezaProducts.find((p) => p.slug === "combo-karseell"),
      tecnologiaProducts.find((p) => p.slug === "apple-watch-serie-10"),
      tvAudioProducts.find((p) => p.slug === "television-tv-pulgadas"),
      tvAudioProducts.find((p) => p.slug === "airpod-max"),
      tecnologiaProducts.find((p) => p.slug === "proyector-hy300-pro"),
      perfumeriaProducts.find((p) => p.slug === "body-splash-victorias-secret"),
      celularesProducts.find((p) => p.slug === "Iphone-pro-max"),
    ].filter(Boolean)
    return featuredProducts.slice(0, 8)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, limitedFeaturedProducts.length - itemsPerView)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const visibleProducts = useMemo(
    () => limitedFeaturedProducts.slice(currentIndex, currentIndex + itemsPerView),
    [limitedFeaturedProducts, currentIndex, itemsPerView],
  )

  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight">
              Destacados
            </h2>
            <div className="mt-4 sm:mt-6 h-px w-16 sm:w-20 bg-primary" />
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 sm:p-4 rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 sm:p-4 rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {visibleProducts.map((product) => (
            <Link key={product.id} href={`/categoria/${getCategorySlug(product.category)}/${product.slug}`} prefetch={false} className="group flex flex-col">
              <div className="aspect-square mb-4 sm:mb-6 bg-card rounded-lg overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <h3 className="text-xs sm:text-sm md:text-base font-medium text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-relaxed">
                {product.name}
              </h3>

              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                ${product.price.toLocaleString("es-AR")}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-border text-muted-foreground"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-border text-muted-foreground"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default memo(FeaturedProducts)
