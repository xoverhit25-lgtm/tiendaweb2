import { notFound } from "next/navigation"
import { getProductBySlug, getProductsByCategory } from "@/app/actions/product-crud"
import { allCategories } from "@/lib/categories"
import { slugify } from "@/lib/utils/slugify"
import ProductDetail from "@/components/product-detail"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Force dynamic rendering - all data comes from database
export const dynamic = "force-dynamic"

interface ProductPageProps {
  params: Promise<{
    categoria: string
    producto: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { categoria, producto } = await params
  
  console.log("[v0] ProductPage - categoria:", categoria, "producto:", producto)
  
  // Verify category exists
  const category = allCategories.find((cat) => slugify(cat.name) === categoria)
  console.log("[v0] Found category:", category?.name || "NOT FOUND")
  
  if (!category) {
    console.log("[v0] Category not found, returning 404")
    notFound()
  }
  
  // Get product from database by slug
  const productResult = await getProductBySlug(producto)
  
  if (productResult.status === 404 || !productResult.data) {
    console.log("[v0] Product not found in database, returning 404")
    notFound()
  }
  
  const product = productResult.data.product
  console.log("[v0] Found product from DB:", product?.name || "NOT FOUND")
  
  // Verify product belongs to the requested category
  if (product.category !== category.name) {
    console.log("[v0] Product category mismatch. Expected:", category.name, "Got:", product.category)
    notFound()
  }

  // Get related products from the same category
  const { data: categoryProducts } = await getProductsByCategory(category.name)
  const relatedProducts = categoryProducts
    ?.filter((p: any) => p.id !== product.id)
    .slice(0, 4) || []

  return (
    <>
      <Header />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  )
}

// No pre-generation - all pages generated on-demand from database
export async function generateStaticParams() {
  return []
}
