"use client"

import { useState, useEffect, useCallback, memo, useMemo } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { maquillajeProducts } from "@/data/products/maquillaje"
import { seguridadProducts } from "@/data/products/seguridad"
import { tvAudioProducts } from "@/data/products/tv-audio"
import { tecnologiaProducts } from "@/data/products/tecnologia"
import Link from "next/link"
import { getCategorySlug } from "@/lib/utils/category-slug"

function NewArrivalsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  const newArrivalsProducts = useMemo(
    () =>
      [
        maquillajeProducts.find((p) => p.slug === "blush-sfr-colors"),
        maquillajeProducts.find((p) => p.slug === "labial-chocolate-matte-ink"),
        maquillajeProducts.find((p) => p.slug === "magic-lip-oil-con-llavero"),
        maquillajeProducts.find((p) => p.slug === "mascara-de-pestanas-yara-kiss-beauty"),
        seguridadProducts.find((p) => p.slug === "camara-seguridad-luo-smart-wifi-lu-e105"),
        tvAudioProducts.find((p) => p.slug === "go-4-rgb"),
        tecnologiaProducts.find((p) => p.slug === "drone-cuadricoptero-con-camara"),
        tvAudioProducts.find((p) => p.slug === "parlante-karaoke"),
      ].filter(Boolean),
    [],
  )

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

  const maxIndex = Math.max(0, newArrivalsProducts.length - itemsPerView)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const visibleProducts = useMemo(
    () => newArrivalsProducts.slice(currentIndex, currentIndex + itemsPerView),
    [newArrivalsProducts, currentIndex, itemsPerView],
  )

  return (
    <section className="w-full bg-[hsl(220_25%_12%)] py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-secondary uppercase tracking-wider">Nuevos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ingresos
            </h2>
            <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-primary" />
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full border border-white/20 text-white/60 hover:border-white hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full border border-white/20 text-white/60 hover:border-white hover:text-white transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {visibleProducts.map((product) => (
            <Link key={product.id} href={`/categoria/${getCategorySlug(product.category)}/${product.slug}`} prefetch={false} className="group flex flex-col">
              <div className="aspect-square mb-3 sm:mb-4 bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden relative border border-white/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-secondary text-black text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  NUEVO
                </span>
              </div>

              <h3 className="text-xs sm:text-sm md:text-base font-medium text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                ${product.price.toLocaleString("es-AR")}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-2 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-white/20 text-white/60"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-white/20 text-white/60"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default memo(NewArrivalsSection)
