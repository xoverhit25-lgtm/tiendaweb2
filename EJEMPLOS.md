# 📚 EJEMPLOS DE USO

## 1. Usar Realtime en un Componente

```typescript
'use client'

import { useProductsRealtime } from '@/hooks/use-products-realtime'
import { Card } from '@/components/ui/card'

export default function ProductList() {
  const { products, loading, error } = useProductsRealtime()

  if (loading) return <div>Cargando productos...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <Card key={product.id} className="p-4">
          <h3>{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price}</p>
          <p className="text-xs">{product.category}</p>
        </Card>
      ))}
    </div>
  )
}
```

---

## 2. Filtrar por Categoría con Realtime

```typescript
'use client'

import { useProductsRealtime } from '@/hooks/use-products-realtime'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const { products } = useProductsRealtime(selectedCategory)

  const categories = ['Celulares', 'TV y Audio', 'Tecnología']

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        {products.map((p) => (
          <div key={p.id}>
            <p className="font-medium">{p.name}</p>
            <p className="text-sm">${p.price.toLocaleString('es-AR')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## 3. Crear Producto con Server Action

```typescript
'use client'

import { useState } from 'react'
import { createProduct } from '@/app/actions/product-crud'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CreateProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await createProduct({
        name,
        price: parseInt(price),
        category: 'Celulares',
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        stock: 'medium',
      })

      if (result.error) {
        setError(result.error)
        return
      }

      // Reset form
      setName('')
      setPrice('')
      alert('Producto creado exitosamente!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Nombre</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: iPhone 15"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Precio</label>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Creando...' : 'Crear Producto'}
      </Button>
    </form>
  )
}
```

---

## 4. Actualizar Producto

```typescript
'use client'

import { updateProduct } from '@/app/actions/product-crud'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function UpdateProduct({ productId }: { productId: number }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdate = async () => {
    setIsLoading(true)
    try {
      const result = await updateProduct(productId, {
        name,
        price: parseInt(price),
      })

      if (result.error) {
        alert('Error: ' + result.error)
      } else {
        alert('Producto actualizado!')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nuevo nombre"
      />
      <Input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nuevo precio"
      />
      <Button onClick={handleUpdate} disabled={isLoading}>
        {isLoading ? 'Actualizando...' : 'Actualizar'}
      </Button>
    </div>
  )
}
```

---

## 5. Eliminar Producto

```typescript
'use client'

import { deleteProduct } from '@/app/actions/product-crud'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function DeleteProductButton({ productId }: { productId: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    if (!confirm('¿Estás seguro?')) return

    setIsLoading(true)
    try {
      const result = await deleteProduct(productId)

      if (result.error) {
        alert('Error: ' + result.error)
      } else {
        alert('Producto eliminado!')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
      {isLoading ? 'Eliminando...' : 'Eliminar'}
    </Button>
  )
}
```

---

## 6. Crear Producto CON Variantes

```typescript
'use client'

import { createProduct } from '@/app/actions/product-crud'
import { Button } from '@/components/ui/button'

export default function CreateProductWithVariants() {
  const handleCreate = async () => {
    const result = await createProduct(
      {
        name: 'Karseell Aceite',
        price: 16500,
        category: 'Belleza y Cuidado Personal',
        slug: 'karseell-aceite',
        stock: 'medium',
        description: 'Aceite 100% original',
      },
      // Quantity variants (descuentos por cantidad)
      [
        { min_quantity: 6, max_quantity: 10, price: 16000 },
        { min_quantity: 11, max_quantity: 20, price: 15500 },
        { min_quantity: 21, max_quantity: null, price: 14000 },
      ],
      // Flavor variants (colores, sabores)
      [
        { name: 'Original', stock: 'high' },
        { name: 'Maca', stock: 'medium' },
      ]
    )

    if (result.error) {
      console.error('Error:', result.error)
    } else {
      console.log('Producto creado:', result.data)
    }
  }

  return <Button onClick={handleCreate}>Crear Producto con Variantes</Button>
}
```

---

## 7. Obtener Producto con Variantes

```typescript
'use client'

import { getProductWithVariants } from '@/app/actions/product-crud'
import { useEffect, useState } from 'react'

export default function ShowProductDetails({ productId }: { productId: number }) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const result = await getProductWithVariants(productId)
      if (!result.error) {
        setProduct(result.data)
      }
      setLoading(false)
    }
    fetch()
  }, [productId])

  if (loading) return <div>Cargando...</div>
  if (!product) return <div>Producto no encontrado</div>

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{product.product.name}</h2>
        <p className="text-xl">${product.product.price}</p>
      </div>

      {product.quantityVariants.length > 0 && (
        <div>
          <h3 className="font-semibold">Precios por Cantidad</h3>
          <ul>
            {product.quantityVariants.map((qv: any) => (
              <li key={qv.id}>
                {qv.min_quantity}-{qv.max_quantity || '∞'}: ${qv.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.flavorVariants.length > 0 && (
        <div>
          <h3 className="font-semibold">Colores/Sabores</h3>
          <ul>
            {product.flavorVariants.map((fv: any) => (
              <li key={fv.id}>
                {fv.name} - {fv.stock}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
```

---

## 8. Usar API Route

```typescript
// Cliente
async function fetchProducts() {
  const response = await fetch('/api/products?category=Celulares&limit=10')
  const { data, count } = await response.json()
  console.log(`Encontrados ${count} productos`)
  return data
}
```

---

## 9. Sincronización Tiempo Real (Multi-usuario)

```typescript
'use client'

import { useProductsRealtime } from '@/hooks/use-products-realtime'
import { Card } from '@/components/ui/card'

export default function RealtimeProducts() {
  const { products, loading } = useProductsRealtime()

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        {loading ? '⏳ Sincronizando...' : '✓ Sincronizado'}
      </p>

      <div className="grid gap-4">
        {products.map((p) => (
          <Card key={p.id} className="p-4 border-l-4 border-l-blue-500">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-2xl font-bold">${p.price}</p>
            <p className="text-xs text-muted-foreground">
              Actualizado: {new Date(p.updated_at).toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}
```

---

## 10. Dashboard en Tiempo Real

```typescript
'use client'

import { useProductsRealtime } from '@/hooks/use-products-realtime'
import { Card } from '@/components/ui/card'

export default function Dashboard() {
  const { products } = useProductsRealtime()

  const stats = {
    total: products.length,
    inStock: products.filter((p) => p.stock !== 'out').length,
    outOfStock: products.filter((p) => p.stock === 'out').length,
    revenue: products.reduce((sum, p) => sum + p.price, 0),
  }

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">Total Productos</p>
        <p className="text-3xl font-bold">{stats.total}</p>
      </Card>

      <Card className="p-4">
        <p className="text-sm text-muted-foreground">En Stock</p>
        <p className="text-3xl font-bold text-green-600">{stats.inStock}</p>
      </Card>

      <Card className="p-4">
        <p className="text-sm text-muted-foreground">Sin Stock</p>
        <p className="text-3xl font-bold text-red-600">{stats.outOfStock}</p>
      </Card>

      <Card className="p-4">
        <p className="text-sm text-muted-foreground">Valor Total</p>
        <p className="text-3xl font-bold">
          ${stats.revenue.toLocaleString('es-AR')}
        </p>
      </Card>
    </div>
  )
}
```

---

## 🎯 TIPS

- Usa `useProductsRealtime()` en componentes `'use client'`
- Las Server Actions (`createProduct`, etc.) funcionan en Server Components
- El hook automáticamente se suscribe a cambios en tiempo real
- No necesitas manual refresh ni polling
- Las cascadas (ON DELETE) son automáticas

---

**Para más detalles, ver:**
- [MIGRACION_GUIA.md](MIGRACION_GUIA.md) - Guía técnica completa
- [README_MIGRATION.md](README_MIGRATION.md) - Arquitectura general
- [CHECKLIST.md](CHECKLIST.md) - Pasos de verificación
