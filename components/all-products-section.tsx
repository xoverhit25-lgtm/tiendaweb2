"use client"

import Link from "next/link"
import { memo, useMemo } from "react"
import { accesoriosCelularProducts } from "@/data/products/accesorios-celular"
import { celularesProducts } from "@/data/products/celulares"
import { tvAudioProducts } from "@/data/products/tv-audio"
import { getCategorySlug } from "@/lib/utils/category-slug"

function AllProductsSection() {
  const curatedProducts = useMemo(
    () =>
      [
        accesoriosCelularProducts.find((p) => p.slug === "fundas-silicone-case"),
        accesoriosCelularProducts.find((p) => p.slug === "cubre-camara-con-strass"),
        celularesProducts.find((p) => p.slug === "redmi-a5-6-128gb"),
        celularesProducts.find((p) => p.slug === "redmi-a5-3-64gb"),
        celularesProducts.find((p) => p.slug === "redmi-15c-8-256gb"),
        celularesProducts.find((p) => p.slug === "poco-c75-8-256gb"),
        tvAudioProducts.find((p) => p.slug === "parlante-karaoke"),
        tvAudioProducts.find((p) => p.slug === "go-4-rgb"),
      ].filter(Boolean),
    [],
  )

  return (
    <section className="w-full bg-neutral-50 py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Nuestros Productos
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {curatedProducts.map((product) => (
            <Link key={product!.id} href={`/categoria/${getCategorySlug(product!.category)}/${product!.slug}`} prefetch={false} className="group flex flex-col">
              <div className="aspect-square mb-3 sm:mb-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden relative">
                <img
                  src={product!.image || "/placeholder.svg"}
                  alt={product!.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <h4 className="text-xs sm:text-sm md:text-base font-medium text-neutral-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product!.name}
              </h4>

              <p className="text-base sm:text-lg md:text-xl font-bold text-black">
                ${product!.price.toLocaleString("es-AR")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(AllProductsSection)
