import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ofertasProducts } from "@/data/products/ofertas"
import type { Metadata } from "next"
import { getCategorySlug } from "@/lib/utils/category-slug"

// Force static generation
export const dynamic = "force-static"
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Ofertas | USA IMPORT",
  description:
    "Descubre las mejores ofertas y promociones en USA IMPORT. Combos mayoristas con los mejores precios para emprender.",
}

function getStockBadge(stock?: "out" | "low" | "medium" | "high") {
  if (!stock || stock === "high") return null

  const variants = {
    out: { label: "Agotado", className: "bg-black text-white" },
    low: { label: "Últimas unidades", className: "bg-orange-500 text-white" },
    medium: { label: "Stock limitado", className: "bg-yellow-500 text-black" },
  }

  const config = variants[stock]
  return <span className={`${config.className} text-[10px] font-semibold px-2 py-1 rounded-full`}>{config.label}</span>
}

export default function OfertasPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="min-h-screen bg-white">
        {/* Minimal Breadcrumb */}
        <div className="border-b border-black/5">
          <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
            <nav className="flex items-center gap-2 text-xs sm:text-sm">
              <Link href="/" className="text-black/40 hover:text-black transition-colors">
                Inicio
              </Link>
              <ChevronRight className="h-3 w-3 text-black/30" />
              <span className="text-black/60 truncate">Ofertas</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-16">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-black tracking-tight">
              Ofertas
            </h1>
            <p className="text-black/50 text-sm sm:text-base md:text-lg">
              {ofertasProducts.length} productos disponibles
            </p>
          </div>

          {/* Products Grid */}
          {ofertasProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {ofertasProducts.map((product) => (
                <Link key={product.id} href={`/categoria/${getCategorySlug(product.category)}/${product.slug}`} className="group block">
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
          ) : (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <p className="text-black/50 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                No hay ofertas disponibles en este momento.
              </p>
              <Link
                href="/"
                className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors font-medium text-sm sm:text-base"
              >
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
