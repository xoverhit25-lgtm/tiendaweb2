'use server'

import { createServerClient } from '@/lib/supabase/server'

export interface ProductInsert {
  name: string
  description?: string
  full_description?: string
  price: number
  category: string
  slug: string
  image?: string
  images?: string[]
  features?: string[]
  stock?: 'out' | 'low' | 'medium' | 'high'
  has_quantity_variants?: boolean
  has_flavor_variants?: boolean
}

export interface QuantityVariantInsert {
  product_id: number
  min_quantity: number
  max_quantity?: number
  price: number
}

export interface FlavorVariantInsert {
  product_id: number
  name: string
  stock?: 'out' | 'low' | 'medium' | 'high'
}

// CREATE PRODUCT
export async function createProduct(
  product: ProductInsert,
  quantityVariants?: QuantityVariantInsert[],
  flavorVariants?: FlavorVariantInsert[]
) {
  const supabase = await createServerClient()
  
  try {
    // Check if slug already exists
    const { data: existing } = await supabase
      .from('products')
      .select('slug')
      .eq('slug', product.slug)
      .single()
    
    if (existing) {
      return { error: 'Product with this slug already exists' }
    }
    
    // Insert product
    const { data: newProduct, error: productError } = await supabase
      .from('products')
      .insert({
        name: product.name,
        description: product.description || null,
        full_description: product.full_description || null,
        price: product.price,
        category: product.category,
        slug: product.slug,
        image: product.image || null,
        images: product.images || [],
        features: product.features || [],
        stock: product.stock || 'medium',
        has_quantity_variants: quantityVariants && quantityVariants.length > 0,
        has_flavor_variants: flavorVariants && flavorVariants.length > 0,
      })
      .select()
      .single()
    
    if (productError || !newProduct) {
      return { error: productError?.message || 'Failed to create product' }
    }
    
    // Insert quantity variants
    if (quantityVariants && quantityVariants.length > 0) {
      const qvData = quantityVariants.map(qv => ({
        product_id: newProduct.id,
        min_quantity: qv.min_quantity,
        max_quantity: qv.max_quantity || null,
        price: qv.price,
      }))
      
      const { error: qvError } = await supabase
        .from('quantity_variants')
        .insert(qvData)
      
      if (qvError) {
        console.error('Error inserting quantity variants:', qvError)
      }
    }
    
    // Insert flavor variants
    if (flavorVariants && flavorVariants.length > 0) {
      const fvData = flavorVariants.map(fv => ({
        product_id: newProduct.id,
        name: fv.name,
        stock: fv.stock || 'medium',
      }))
      
      const { error: fvError } = await supabase
        .from('flavor_variants')
        .insert(fvData)
      
      if (fvError) {
        console.error('Error inserting flavor variants:', fvError)
      }
    }
    
    return { data: newProduct, error: null }
  } catch (error) {
    console.error('Create product error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// UPDATE PRODUCT
export async function updateProduct(
  productId: number,
  product: Partial<ProductInsert>,
  quantityVariants?: QuantityVariantInsert[],
  flavorVariants?: FlavorVariantInsert[]
) {
  const supabase = await createServerClient()
  
  try {
    // Update product
    const { data: updated, error: productError } = await supabase
      .from('products')
      .update({
        name: product.name,
        description: product.description,
        full_description: product.full_description,
        price: product.price,
        category: product.category,
        slug: product.slug,
        image: product.image,
        images: product.images,
        features: product.features,
        stock: product.stock,
      })
      .eq('id', productId)
      .select()
      .single()
    
    if (productError || !updated) {
      return { error: productError?.message || 'Failed to update product' }
    }
    
    // Delete and re-insert quantity variants (easier than managing updates)
    if (quantityVariants !== undefined) {
      await supabase
        .from('quantity_variants')
        .delete()
        .eq('product_id', productId)
      
      if (quantityVariants.length > 0) {
        const qvData = quantityVariants.map(qv => ({
          product_id: productId,
          min_quantity: qv.min_quantity,
          max_quantity: qv.max_quantity || null,
          price: qv.price,
        }))
        
        await supabase
          .from('quantity_variants')
          .insert(qvData)
      }
    }
    
    // Delete and re-insert flavor variants
    if (flavorVariants !== undefined) {
      await supabase
        .from('flavor_variants')
        .delete()
        .eq('product_id', productId)
      
      if (flavorVariants.length > 0) {
        const fvData = flavorVariants.map(fv => ({
          product_id: productId,
          name: fv.name,
          stock: fv.stock || 'medium',
        }))
        
        await supabase
          .from('flavor_variants')
          .insert(fvData)
      }
    }
    
    return { data: updated, error: null }
  } catch (error) {
    console.error('Update product error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// DELETE PRODUCT
export async function deleteProduct(productId: number) {
  const supabase = await createServerClient()
  
  try {
    // Delete product (cascades will delete variants)
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .eq('id', productId)
    
    if (deleteError) {
      return { error: deleteError.message }
    }
    
    return { data: { id: productId }, error: null }
  } catch (error) {
    console.error('Delete product error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// GET PRODUCT WITH VARIANTS
export async function getProductWithVariants(productId: number) {
  const supabase = await createServerClient()
  
  try {
    const [productRes, qvRes, fvRes] = await Promise.all([
      supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single(),
      supabase
        .from('quantity_variants')
        .select('*')
        .eq('product_id', productId)
        .order('min_quantity', { ascending: true }),
      supabase
        .from('flavor_variants')
        .select('*')
        .eq('product_id', productId)
        .order('name', { ascending: true }),
    ])
    
    if (productRes.error) {
      return { error: productRes.error.message }
    }
    
    return {
      data: {
        product: productRes.data,
        quantityVariants: qvRes.data || [],
        flavorVariants: fvRes.data || [],
      },
      error: null,
    }
  } catch (error) {
    console.error('Get product error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// GET ALL PRODUCTS WITH VARIANTS
export async function getAllProductsWithVariants(
  category?: string,
  limit?: number,
  offset?: number
) {
  const supabase = await createServerClient()
  
  try {
    let query = supabase
      .from('products')
      .select(
        `
        *,
        quantity_variants(*),
        flavor_variants(*)
        `
      )
    
    if (category) {
      query = query.eq('category', category)
    }
    
    if (limit) {
      query = query.limit(limit)
    }
    
    if (offset) {
      query = query.range(offset, offset + (limit || 10) - 1)
    }
    
    const { data, error, count } = await query
    
    if (error) {
      return { error: error.message }
    }
    
    return { data, count, error: null }
  } catch (error) {
    console.error('Get all products error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// GET PRODUCT BY SLUG
export async function getProductBySlug(slug: string) {
  const supabase = await createServerClient()
  
  try {
    // First get the product by slug
    const { data: productData, error: productError } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (productError || !productData) {
      return { data: null, error: 'Product not found', status: 404 }
    }
    
    // Then get variants
    const [qvRes, fvRes] = await Promise.all([
      supabase
        .from('quantity_variants')
        .select('*')
        .eq('product_id', productData.id)
        .order('min_quantity', { ascending: true }),
      supabase
        .from('flavor_variants')
        .select('*')
        .eq('product_id', productData.id)
        .order('name', { ascending: true }),
    ])
    
    return {
      data: {
        product: productData,
        quantityVariants: qvRes.data || [],
        flavorVariants: fvRes.data || [],
      },
      error: null,
      status: 200,
    }
  } catch (error) {
    console.error('Get product by slug error:', error)
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error', status: 500 }
  }
}

// GET PRODUCTS BY CATEGORY
export async function getProductsByCategory(category: string) {
  const supabase = await createServerClient()
  
  try {
    const { data, error } = await supabase
      .from('products')
      .select(
        `
        *,
        quantity_variants(*),
        flavor_variants(*)
        `
      )
      .ilike('category', category)
      .order('name', { ascending: true })
    
    if (error) {
      return { data: null, error: error.message }
    }
    
    return { data: data || [], error: null }
  } catch (error) {
    console.error('Get products by category error:', error)
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
