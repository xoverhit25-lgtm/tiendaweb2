import Link from "next/link"
import Image from "next/image"
import { memo } from "react"

const featuredCategories = [
  {
    name: "Perfumeria",
    slug: "perfumeria",
    image: "/images/luxury-perfume-bottles-elegant-display.webp",
  },
  {
    name: "Maquillaje",
    slug: "maquillaje",
    image: "/images/makeup-cosmetics-lipstick-eyeshadow-palette.webp",
  },
  {
    name: "Belleza y Cuidado Personal",
    slug: "belleza-y-cuidado-personal",
    image: "/images/beauty-skincare-products-cream-serum.webp",
  },
]

function FeaturedCategories() {
  return (
    <section className="w-full bg-card py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, 33vw"
                loading="eager"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              <div className="absolute inset-0 flex items-end p-4 sm:p-5 md:p-8">
                <div className="w-full">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-serif font-medium text-background group-hover:translate-y-[-4px] transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(FeaturedCategories)
