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
  
  console.log("[DETAIL] ProductPage - categoria:", categoria, "producto:", producto)
  
  // Verify category exists
  const category = allCategories.find((cat) => slugify(cat.name) === categoria)
  console.log("[DETAIL] Found category:", category?.name || "NOT FOUND")
  console.log("[DETAIL] Available categories:", allCategories.map(c => ({ name: c.name, slug: slugify(c.name) })))
  
  if (!category) {
    console.log("[DETAIL] Category not found, returning 404")
    notFound()
  }
  
  // Get product from database by slug
  const productResult = await getProductBySlug(producto)
  console.log("[DETAIL] Product query result status:", productResult.status)
  
  if (productResult.status === 404 || !productResult.data) {
    console.log("[DETAIL] Product not found in database, returning 404. Error:", productResult.error)
    notFound()
  }
  
  const product = productResult.data.product
  console.log("[DETAIL] Found product from DB:", {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    expectedCategory: category.name,
    match: product.category === category.name
  })
  
  // Verify product belongs to the requested category
  if (product.category !== category.name) {
    console.log("[DETAIL] Product category mismatch. Expected:", category.name, "Got:", product.category)
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
