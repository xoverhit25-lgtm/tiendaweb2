import type { Product } from "@/types/product"
import { tvAudioProducts } from "@/data/products/tv-audio"
import { tecnologiaProducts } from "@/data/products/tecnologia"
import { accesoriosCelularProducts } from "@/data/products/accesorios-celular"
import { electrodomesticosProducts } from "@/data/products/electrodomesticos"
import { hogarProducts } from "@/data/products/hogar"
import { seguridadProducts } from "@/data/products/seguridad"
import { scooterMotosProducts } from "@/data/products/scooter-motos"
import { bellezaProducts } from "@/data/products/belleza"
import { perfumeriaProducts } from "@/data/products/perfumeria"
import { celularesProducts } from "@/data/products/celulares"
import { vapersProducts } from "@/data/products/vapers"
import { maquillajeProducts } from "@/data/products/maquillaje"
import { ofertasProducts } from "@/data/products/ofertas"

export const homePageProducts: Product[] = [
  // Redmi A5 6/128GB
  celularesProducts.find((p) => p.slug === "redmi-a5-6-128gb"),
  // Redmi A5 3/64GB
  celularesProducts.find((p) => p.slug === "redmi-a5-3-64gb"),
  // POCO C75 8/256GB
  celularesProducts.find((p) => p.slug === "poco-c75-8-256gb"),
  // TV LUO 43"
  tvAudioProducts.find((p) => p.slug === "tv-luo-43"),
  // Skyworth 32 Pulgadas S-Mart TV Google TV
  tvAudioProducts.find((p) => p.slug === "skyworth-32-google-tv"),
  // iPhone 17 Pro Max 512GB
  celularesProducts.find((p) => p.slug === "iphone-17-pro-max-512gb"),
  // Emaan de Lattafa
  perfumeriaProducts.find((p) => p.slug === "emaan-lattafa"),
].filter(Boolean) as Product[]

// Combine all products from all categories
export const allProducts: Product[] = [
  ...tvAudioProducts,
  ...tecnologiaProducts,
  ...accesoriosCelularProducts,
  ...electrodomesticosProducts,
  ...hogarProducts,
  ...seguridadProducts,
  ...scooterMotosProducts,
  ...bellezaProducts,
  ...perfumeriaProducts,
  ...celularesProducts,
  ...vapersProducts,
  ...maquillajeProducts,
  ...ofertasProducts,
]
