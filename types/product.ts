export interface Variant {
  id: string
  name: string
  storage?: string
  price: number
}

export interface QuantityVariant {
  id?: string | number
  min_quantity: number
  max_quantity?: number | null
  price: number
  quantity?: number
  unit_price?: number
  stock?: number
}

export interface FlavorVariant {
  id: string
  name: string
  stock: "out" | "low" | "medium" | "high"
}

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  slug: string
  description?: string
  fullDescription?: string
  images?: string[]
  features?: string[]
  stock?: "out" | "low" | "medium" | "high"
  variants?: Variant[]
  quantityVariants?: QuantityVariant[]
  flavorVariants?: FlavorVariant[]
  hasQuantityVariants?: boolean
  hasFlavorVariants?: boolean
}
