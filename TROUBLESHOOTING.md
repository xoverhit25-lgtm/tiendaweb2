# 🐛 TROUBLESHOOTING - SOLUCIÓN DE PROBLEMAS

## Índice Rápido
1. [Errores de Instalación](#errores-de-instalación)
2. [Errores de Base de Datos](#errores-de-base-de-datos)
3. [Errores de Realtime](#errores-de-realtime)
4. [Errores de TypeScript](#errores-de-typescript)
5. [Errores en Runtime](#errores-en-runtime)
6. [Errores de Deployment](#errores-de-deployment)

---

## Errores de Instalación

### ❌ "npm: command not found"
**Síntoma:**
```
zsh: command not found: npm
```

**Causa:** Node.js no está instalado

**Solución:**
```bash
# En Windows:
# Descargar de https://nodejs.org y ejecutar installer

# En Mac:
brew install node

# En Linux:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verificar:**
```bash
node --version  # debe ser v18+ o v20+
npm --version   # debe ser v9+ o v10+
```

---

### ❌ "Cannot find module @supabase/supabase-js"
**Síntoma:**
```
Error: Cannot find module '@supabase/supabase-js'
```

**Causa:** npm install no se ejecutó

**Solución:**
```bash
npm install
npm install @supabase/supabase-js @supabase/ssr
```

**Verificar:**
```bash
ls node_modules/@supabase/
```

---

### ❌ ".env.local file not found"
**Síntoma:**
```
NEXT_PUBLIC_SUPABASE_URL is not defined
```

**Causa:** Falta archivo .env.local

**Solución:**
```bash
# Windows
type nul > .env.local

# Linux/Mac
touch .env.local
```

Luego añade:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

**Verificar:**
```bash
cat .env.local  # debe mostrar tus variables
```

---

## Errores de Base de Datos

### ❌ "FATAL: remaining connection slots reserved for non-replication superuser connections"
**Síntoma:**
```
ERROR: remaining connection slots reserved
```

**Causa:** Demasiadas conexiones simultáneas (típico en dev)

**Solución:**
1. Cierra navegadores extra
2. Reinicia el servidor Next.js
3. En Supabase Dashboard → Connection Pooling → Aumento límite

---

### ❌ "relation \"products\" does not exist"
**Síntoma:**
```
ERROR: relation "products" does not exist
```

**Causa:** No ejecutaste el SQL schema

**Solución:**
1. Ve a: https://supabase.com/dashboard
2. Selecciona tu proyecto
3. SQL Editor → New query
4. Copia contenido de `scripts/001_create_tables.sql`
5. Click en "Run"

**Verificar:**
```bash
# En Supabase SQL Editor:
SELECT table_name FROM information_schema.tables WHERE table_schema='public';
```

Debe mostrar:
```
products
quantity_variants
flavor_variants
```

---

### ❌ "permission denied for schema public"
**Síntoma:**
```
ERROR: permission denied for schema public
```

**Causa:** RLS denegando acceso

**Solución:**
1. Supabase Dashboard → Authentication → Policies
2. Verifica que las políticas permitan SELECT en products:

```sql
CREATE POLICY "public_select_products" ON products
  FOR SELECT USING (true);
```

---

### ❌ "duplicate key value violates unique constraint"
**Síntoma:**
```
ERROR: duplicate key value violates unique constraint "products_slug_key"
```

**Causa:** Intentando crear producto con slug duplicado

**Solución 1 - En Formulario:**
```typescript
// En product-form-supabase.tsx:
if (products.some(p => p.slug === formData.slug && p.id !== productId)) {
  setError("Slug ya existe");
  return;
}
```

**Solución 2 - Limpiar base:**
```sql
-- En Supabase SQL Editor:
DELETE FROM products WHERE slug = 'duplicado';
```

---

## Errores de Realtime

### ❌ "Realtime no sincroniza entre navegadores"
**Síntoma:**
```
Creo producto en Browser A, pero no aparece en Browser B
```

**Causa 1:** Realtime no está habilitado

**Solución:**
1. Supabase Dashboard → Project Settings
2. Realtime → Replication
3. Habilita las 3 tablas:
   - ☑️ products
   - ☑️ quantity_variants
   - ☑️ flavor_variants

**Causa 2:** Subscripción no se activa

**Solución:**
```typescript
// En hooks/use-products-realtime.ts, verifica:
const subscription = supabase
  .channel('products')  // Nombre del canal
  .on('postgres_changes',
    {
      event: '*',  // INSERT, UPDATE, DELETE
      schema: 'public',
      table: 'products'
    },
    (payload) => {
      console.log('Realtime event:', payload); // Debug
      setProducts([...]);
    }
  )
  .subscribe();
```

**Debug:**
Abre F12 → Console y deberías ver logs como:
```
Realtime event: {new: {...}, old: null, type: 'INSERT'}
```

---

### ❌ "Realtime channel error: {\"error\": \"Unauthorized\"}"
**Síntoma:**
```
Channel error: {"error": "Unauthorized"}
```

**Causa:** API key no es pública o RLS está muy restrictivo

**Solución:**
```typescript
// En tu código, usa ANON_KEY (pública):
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // ← Esta debe ser la ANON_KEY pública
);
```

**Verificar en Supabase Dashboard:**
- Settings → API
- Copia "anon" key (pública)
- Asegúrate que .env.local tenga NEXT_PUBLIC_SUPABASE_ANON_KEY

---

### ❌ "WebSocket connection timeout"
**Síntoma:**
```
WebSocket failed to connect
Timeout waiting for connection
```

**Causa:** Problema de conexión a internet o firewall

**Solución:**
```bash
# Verifica conexión a Supabase
curl -I https://your-project.supabase.co

# Debe retornar 200
```

Si falla:
1. Verifica que tu NEXT_PUBLIC_SUPABASE_URL sea correcto
2. Desactiva VPN/proxy
3. Verifica firewall

---

## Errores de TypeScript

### ❌ "Type 'any' is not assignable to type 'Product'"
**Síntoma:**
```
Type 'any' is not assignable to type 'Product'
```

**Causa:** Falta type annotation en parámetros

**Solución:**
```typescript
// ❌ Mal
const items = products.map(p => ({...p}));

// ✅ Bien
const items = products.map((p: Product) => ({...p}));

// O mejor:
interface Product {
  id: string;
  name: string;
  // ...
}

const items = products.map((p: Product) => ({...p}));
```

---

### ❌ "Cannot find name 'ProductWithVariants'"
**Síntoma:**
```
TS2304: Cannot find name 'ProductWithVariants'
```

**Causa:** Falta import del tipo

**Solución:**
```typescript
// Agregar en el archivo:
import { ProductWithVariants } from '@/types/product';
```

**Verificar que exista:**
```bash
cat types/product.ts
```

---

### ❌ "'supabase' is not defined"
**Síntoma:**
```
TS2304: 'supabase' is not defined
```

**Causa:** Falta import o cliente no creado

**Solución:**
```typescript
// Agregar en el archivo:
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// O si es Server Action:
import { createServerClient } from '@supabase/ssr';
```

---

## Errores en Runtime

### ❌ "Hydration mismatch"
**Síntoma:**
```
Error: Hydration mismatch
Server content did not match client
```

**Causa:** Cliente y servidor renderizan diferente

**Solución:**
```typescript
// Usa useEffect para Realtime data:
'use client';

import { useEffect, useState } from 'react';

export function MyComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Cargar datos aquí, no en render
    loadProducts();
  }, []);
  
  return <div>{products.length} productos</div>;
}
```

---

### ❌ "Maximum call stack size exceeded"
**Síntoma:**
```
RangeError: Maximum call stack size exceeded
```

**Causa:** Loop infinito o componente que se renderiza infinitamente

**Solución:**
```typescript
// ❌ Malo - crea nuevo array cada render
useEffect(() => {
  setupRealtime(products); // products cambia → efecto corre → products cambia → loop infinito
}, [products]);

// ✅ Bien - dependencies correctas
useEffect(() => {
  setupRealtime();
}, []); // Solo una vez
```

---

### ❌ "Cannot read property 'id' of undefined"
**Síntoma:**
```
TypeError: Cannot read property 'id' of undefined
```

**Causa:** Datos no cargados aún

**Solución:**
```typescript
// ❌ Malo
const productId = product.id;

// ✅ Bien
const productId = product?.id || '';

// O mejor, verifica primero:
if (!product) return <p>Cargando...</p>;
const productId = product.id;
```

---

### ❌ "Error: NEXT_RUNTIME environment variable must be 'edge' or 'nodejs'"
**Síntoma:**
```
Error: NEXT_RUNTIME must be 'edge' or 'nodejs'
```

**Causa:** Variable de entorno incorrecta

**Solución:**
```bash
# En .env.local, NO necesitas esta variable
# Elimina si existe:
# NEXT_RUNTIME=... (borra esta línea)

# Solo necesitas:
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## Errores de Deployment

### ❌ "Build failed: missing environment variables"
**Síntoma:**
```
Error: NEXT_PUBLIC_SUPABASE_URL is not defined
```

**Causa:** Variables no configuradas en plataforma de deployment

**Solución - Vercel:**
1. Ve a: vercel.com/dashboard
2. Selecciona tu proyecto
3. Settings → Environment Variables
4. Añade:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Re-deploy

**Solución - Railway:**
1. Railway.app dashboard
2. Project → Variables
3. Mismo proceso

**Solución - Self-hosted:**
```bash
# En tu servidor, crea .env.local
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
EOF

npm run build
npm start
```

---

### ❌ "Supabase connection timeout on deployment"
**Síntoma:**
```
Timeout connecting to database
```

**Causa:** Firewall del servidor bloquea Supabase

**Solución:**
1. Verifica que tu URL de Supabase sea correcta
2. En Supabase Dashboard, habilita CORS para tu dominio:

```javascript
// Supabase Dashboard → Project Settings → CORS
Allowed origins:
- http://localhost:3000
- https://tudominio.com
```

---

### ❌ "Build takes too long or crashes"
**Síntoma:**
```
Build timeout (>30 minutes)
Out of memory
```

**Causa:** Proyecto muy pesado

**Solución:**
```bash
# 1. Limpia node_modules
rm -rf node_modules
npm install

# 2. Optimiza imports
# En lugar de: import * as everything from ...
# Usa: import { specific } from ...

# 3. Reduce tamaño de bundle
npm run build -- --analyze

# 4. En Vercel, aumenta recursos:
# Configuración → General → Build settings → Memory
```

---

## Checklist de Debugging

Si algo falla, sigue este orden:

1. **¿npm install ejecutó sin errores?**
   ```bash
   npm install
   npm list @supabase/supabase-js
   ```

2. **¿.env.local está configurado?**
   ```bash
   cat .env.local
   ```

3. **¿Server inicia sin errores?**
   ```bash
   npm run dev
   # Debe mostrar: "ready - started server on 0.0.0.0:3000"
   ```

4. **¿Puedo acceder a http://localhost:3000?**
   - Abre en navegador
   - Abre F12 → Console
   - Debe estar limpia o solo warnings

5. **¿Health check funciona?**
   ```bash
   curl http://localhost:3000/health
   ```

6. **¿SQL schema existe?**
   - Supabase Dashboard → SQL Editor
   - `SELECT * FROM products;`
   - Debe funcionar (vacía si no migraste)

7. **¿Realtime está habilitado?**
   - Supabase Dashboard → Project Settings → Realtime
   - Verifica las 3 tablas estén habilitadas

8. **¿API key es la correcta?**
   ```bash
   # En .env.local:
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   # Debe ser la ANON_KEY (pública), no SECRET_KEY
   ```

---

## Obtener Ayuda

Si nada funciona:

1. **Lee los logs:**
   ```bash
   npm run dev 2>&1 | tee app.log
   ```

2. **Revisa Supabase logs:**
   - Dashboard → Logs → Edge Functions / Database

3. **Abre F12 → Console** en navegador:
   - Búsca errores rojos
   - Revisa Network tab

4. **Ejecuta validación:**
   ```bash
   bash validate.sh        # Linux/Mac
   .\validate.ps1          # Windows
   ```

5. **Lee documentación:**
   - [MIGRACION_GUIA.md](MIGRACION_GUIA.md)
   - [IMPLEMENTACION.md](IMPLEMENTACION.md)
   - [EJEMPLOS.md](EJEMPLOS.md)

---

## Comandos Útiles para Debug

```bash
# Ver logs completos
npm run dev -- --debug

# Limpiar caché
rm -rf .next node_modules
npm install
npm run build

# Ver errores TypeScript
npx tsc --noEmit

# Ver tamaño de bundle
npm run build -- --analyze

# Test API directamente
curl http://localhost:3000/api/products

# Check Supabase connection
curl https://tuproject.supabase.co
```

---

## Recursos

- 📖 [Next.js Troubleshooting](https://nextjs.org/docs/messages)
- 📖 [Supabase Docs](https://supabase.com/docs)
- 📖 [Supabase GitHub Issues](https://github.com/supabase/supabase/issues)
- 💬 [Supabase Community](https://discord.supabase.com)

---

**Última actualización**: Enero 2026  
**Versión**: 1.0.0
