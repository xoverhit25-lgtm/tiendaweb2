"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const bannerSlides = [
  {
    id: 1,
    title: "Desde el mundo",
    subtitle: "Para vos",
    description: "CELULARES AL MEJOR PRECIO",
    desktopImage: "/images/banner-1-desktop.webp",
    mobileImage: "/images/banner-1-mobile.webp",
  },
  {
    id: 2,
    title: "El mundo es tu proveedor",
    subtitle: "Nosotros tu puente",
    description: "",
    desktopImage: "/images/banner-2-desktop.webp",
    mobileImage: "/images/banner-2-mobile.webp",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-foreground overflow-hidden">
      <div className="relative w-full aspect-[4/5] md:aspect-[21/9]">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.desktopImage || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover hidden md:block"
              priority={index === 0}
            />
            <Image
              src={slide.mobileImage || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover md:hidden"
              priority={index === 0}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight tracking-tight">
                {bannerSlides[currentSlide].title}
                <span className="block text-accent mt-2">{bannerSlides[currentSlide].subtitle}</span>
              </h1>
              {bannerSlides[currentSlide].description && (
                <p className="mt-4 text-xs md:text-sm text-background/70 max-w-md tracking-widest uppercase">
                  {bannerSlides[currentSlide].description}
                </p>
              )}
              <Link
                href="/categoria/celulares"
                className="mt-8 inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-none font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wide uppercase"
              >
                Explorar productos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-background" : "w-4 bg-background/30"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
