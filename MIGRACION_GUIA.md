# Guía de Ejecución: Migración Supabase + Realtime

## ✅ Lo que se completó

### 1. **Base de Datos (SQL)**
- ✓ Archivo SQL con tablas: `products`, `quantity_variants`, `flavor_variants`
- ✓ Enums para `stock_status` (out, low, medium, high)
- ✓ Relaciones con `ON DELETE CASCADE`
- ✓ Timestamps `created_at` y `updated_at`
- ✓ Índices para optimización
- ✓ Archivo: [scripts/001_create_tables.sql](../scripts/001_create_tables.sql)

### 2. **Realtime + RLS**
- ✓ Políticas RLS configuradas para desarrollo (SELECT/INSERT/UPDATE/DELETE públicos)
- ✓ Realtime habilitado en las 3 tablas
- ✓ Archivo SQL ya incluye todas las configuraciones

### 3. **Server Actions (Backend CRUD)**
- ✓ `createProduct()` - Crear producto con variantes
- ✓ `updateProduct()` - Actualizar producto y variantes (delete + insert)
- ✓ `deleteProduct()` - Eliminar (cascade automático)
- ✓ `getProductWithVariants()` - Obtener un producto con sus variantes
- ✓ `getAllProductsWithVariants()` - Obtener todos con JOINs
- ✓ Archivo: [app/actions/product-crud.ts](../app/actions/product-crud.ts)

### 4. **Server Action de Migración**
- ✓ Lee productos locales de `data/all-products.ts`
- ✓ Evita duplicados por slug
- ✓ Inserta: products + quantity_variants + flavor_variants
- ✓ Función: `migrateProductsToSupabase()`
- ✓ Archivo: [app/actions/migrate-products.ts](../app/actions/migrate-products.ts)

### 5. **Hook Realtime**
- ✓ `useProductsRealtime()` - Escucha cambios en todas las tablas
- ✓ `useProductRealtime()` - Escucha un producto específico
- ✓ Suscripción automática a: products, quantity_variants, flavor_variants
- ✓ Archivo: [hooks/use-products-realtime.ts](../hooks/use-products-realtime.ts)

### 6. **Admin Panel con Realtime**
- ✓ Usa `useProductsRealtime()` para sincronización automática
- ✓ Sin necesidad de refresh manual
- ✓ Indicador de conexión (✓ Sincronizando)
- ✓ Búsqueda en tiempo real
- ✓ Paginación
- ✓ Archivo: [app/admin/page-realtime.tsx](../app/admin/page-realtime.tsx)

### 7. **Product Form Mejorado**
- ✓ Usa Server Actions (`createProduct`, `updateProduct`, `deleteProduct`)
- ✓ Maneja quantity_variants y flavor_variants
- ✓ Validación de datos
- ✓ Sin Telegram, sin mocks locales
- ✓ Archivo: [components/admin/product-form-supabase.tsx](../components/admin/product-form-supabase.tsx)

### 8. **Página de Migración**
- ✓ UI simple para ejecutar la migración
- ✓ Muestra progreso y resultados
- ✓ Archivo: [app/migration/page.tsx](../app/migration/page.tsx)

### 9. **API Routes**
- ✓ GET `/api/products` - Obtener todos con variantes
- ✓ POST `/api/products` - Crear producto
- ✓ Soporta: category, limit, offset
- ✓ Archivo: [app/api/products/route.ts](../app/api/products/route.ts)

---

## 🚀 PASOS PARA EJECUTAR

### **PASO 1: Crear tablas en Supabase**
1. Abre el Dashboard de Supabase
2. Ve a SQL Editor
3. Copia el contenido de [scripts/001_create_tables.sql](../scripts/001_create_tables.sql)
4. Ejecuta el SQL
5. ✓ Verifica que las 3 tablas existan

### **PASO 2: Habilitar Realtime (en Supabase Dashboard)**
1. Ve a **Replication** → **Manage publication**
2. Activa Realtime para:
   - `products`
   - `quantity_variants`
   - `flavor_variants`
3. ✓ Guarda cambios

### **PASO 3: Ejecutar Migración**
1. Abre `http://localhost:3000/migration` en el navegador
2. Lee la advertencia (se ejecuta una sola vez)
3. Haz clic en **"Iniciar Migración"**
4. ✓ Espera a que complete (mostrará: insertados, duplicados, errores)
5. ✓ Verifica en el Dashboard de Supabase que existan los productos

### **PASO 4: Usar Admin Panel**
1. Abre `http://localhost:3000/admin`
2. Ingresa credenciales (según tu configuración)
3. ✓ Verá todos los productos desde Supabase
4. ✓ Los cambios se reflejan en TIEMPO REAL sin refresh

### **PASO 5: Crear/Editar/Eliminar (sin Telegram ni mocks)**
1. Haz clic en **"Agregar Producto"** o **"Editar"**
2. Completa el formulario
3. Agrega quantity_variants (si aplica)
4. Agrega flavor_variants (si aplica)
5. Haz clic en **"Crear"** o **"Guardar"**
6. ✓ El producto se guarda en Supabase
7. ✓ Los otros usuarios verán el cambio automáticamente

---

## 📋 ESTRUCTURA DE DATOS

### **Products**
```typescript
{
  id: number                    // PK autoincremental
  name: string
  description?: string
  full_description?: string
  price: number
  category: string
  slug: string                  // UNIQUE
  image?: string
  images: string[]              // JSON array
  features: string[]            // JSON array
  stock: 'out'|'low'|'medium'|'high'
  has_quantity_variants: boolean
  has_flavor_variants: boolean
  created_at: timestamp
  updated_at: timestamp
}
```

### **Quantity Variants**
```typescript
{
  id: number                    // PK autoincremental
  product_id: number            // FK → products(id) ON DELETE CASCADE
  min_quantity: number          // Ej: 6
  max_quantity?: number         // Ej: 10 (null = sin límite)
  price: number                 // Precio para este rango
  created_at: timestamp
  updated_at: timestamp
}
```

### **Flavor Variants**
```typescript
{
  id: number                    // PK autoincremental
  product_id: number            // FK → products(id) ON DELETE CASCADE
  name: string                  // Ej: "Rojo", "Azul", "Fresa"
  stock: 'out'|'low'|'medium'|'high'
  created_at: timestamp
  updated_at: timestamp
}
```

---

## 🔧 USO EN COMPONENTES

### **Obtener productos con Realtime**
```typescript
'use client'
import { useProductsRealtime } from '@/hooks/use-products-realtime'

export default function MyComponent() {
  const { products, loading, error } = useProductsRealtime('Celulares') // opcional: filter by category
  
  if (loading) return <div>Sincronizando...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  )
}
```

### **Crear producto**
```typescript
import { createProduct } from '@/app/actions/product-crud'

const result = await createProduct(
  {
    name: 'Nuevo Producto',
    price: 10000,
    category: 'Celulares',
    slug: 'nuevo-producto',
    stock: 'medium'
  },
  [
    { min_quantity: 6, max_quantity: 10, price: 9000 },
    { min_quantity: 11, max_quantity: null, price: 8000 }
  ],
  [
    { name: 'Rojo', stock: 'high' },
    { name: 'Azul', stock: 'low' }
  ]
)

if (result.error) console.error(result.error)
else console.log('Producto creado:', result.data)
```

### **Actualizar producto**
```typescript
import { updateProduct } from '@/app/actions/product-crud'

const result = await updateProduct(
  123, // product ID
  { name: 'Nombre actualizado', price: 15000 },
  [], // quantity_variants (nuevo array reemplaza)
  [] // flavor_variants (nuevo array reemplaza)
)
```

### **Eliminar producto**
```typescript
import { deleteProduct } from '@/app/actions/product-crud'

const result = await deleteProduct(123) // Elimina también sus variantes
```

---

## ⚠️ NOTAS IMPORTANTES

1. **RLS para Desarrollo**: Las políticas actuales permiten acceso público. Para producción, cambia a políticas más restrictivas con auth.

2. **Realtime**: Asegúrate de habilitar Realtime en el Dashboard de Supabase en las 3 tablas.

3. **Migración Una Sola Vez**: El script verifica duplicados por slug, pero idealmente solo ejecuta una vez.

4. **Sin Telegram**: Todo está en Supabase ahora. Elimina cualquier referencia a Telegram del código.

5. **Admin Panel**: Usa [app/admin/page-realtime.tsx](../app/admin/page-realtime.tsx) (la versión nueva). El anterior [app/admin/page.tsx](../app/admin/page.tsx) puede deletrearse o actualizarse.

6. **Cascada Automática**: Al eliminar un producto, sus variantes se eliminan automáticamente (ON DELETE CASCADE).

---

## 📊 FLUJO COMPLETO

```
Usuario edita producto en Admin Panel
        ↓
ProductForm llama a updateProduct() (Server Action)
        ↓
updateProduct() usa Supabase JS para actualizar DB
        ↓
Supabase emite evento Realtime
        ↓
useProductsRealtime() en todos los clientes recibe el cambio
        ↓
Admin Panel se actualiza automáticamente SIN refresh
```

---

## 🎯 RESUMEN

✅ **Base de datos**: 3 tablas con relaciones y enums
✅ **Realtime**: Suscripciones automáticas a cambios
✅ **Backend**: Server Actions para CRUD
✅ **Admin Panel**: Sincronización en tiempo real
✅ **Product Form**: Sin mocks, sin Telegram
✅ **Migración**: Script para importar todos los productos
✅ **API**: Routes para obtener/crear productos

**Estás listo para usar Supabase con Realtime en tu aplicación Next.js** 🚀
