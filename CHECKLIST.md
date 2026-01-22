# ✅ LISTA DE VERIFICACIÓN - MIGRACIÓN SUPABASE + REALTIME

## ANTES DE INICIAR

- [ ] Tienes acceso al Dashboard de Supabase
- [ ] Conoces tu `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Estos están en `.env.local`
- [ ] El proyecto Next.js está corriendo (`npm run dev`)

---

## PASO 1: CREAR TABLAS (5 min)

**En Supabase Dashboard:**

1. [ ] Abre **SQL Editor**
2. [ ] Copia contenido de `scripts/001_create_tables.sql`
3. [ ] Pega en el editor
4. [ ] Haz clic en **"Run"**
5. [ ] Verifica sin errores ✓

**Verificación:**
- [ ] Tabla `products` existe
- [ ] Tabla `quantity_variants` existe
- [ ] Tabla `flavor_variants` existe
- [ ] Enum `stock_status` existe
- [ ] RLS está habilitado en las 3 tablas

---

## PASO 2: HABILITAR REALTIME (5 min)

**En Supabase Dashboard:**

1. [ ] Ve a **Replication** (o **Database** → **Publications**)
2. [ ] Abre **Manage publication** (o similar)
3. [ ] Busca tabla `products` → ✓ Activar
4. [ ] Busca tabla `quantity_variants` → ✓ Activar
5. [ ] Busca tabla `flavor_variants` → ✓ Activar
6. [ ] **Save** cambios

**Verificación:**
- [ ] En Replication, ves las 3 tablas marcadas como activas

---

## PASO 3: VERIFICAR CONEXIÓN (2 min)

**En navegador:**

1. [ ] Abre `http://localhost:3000/health`
2. [ ] Verifica que muestre:
   - [ ] ✅ Conexión a Supabase
   - [ ] ✅ Tabla products
   - [ ] ✅ Tabla quantity_variants
   - [ ] ✅ Tabla flavor_variants
   - [ ] ✓ Realtime Habilitado

**Si hay problemas:**
- [ ] Revisa `.env.local` (URLs correctas)
- [ ] Verifica que RLS esté habilitado
- [ ] Consulta logs en DevTools

---

## PASO 4: EJECUTAR MIGRACIÓN (5-10 min)

**En navegador:**

1. [ ] Abre `http://localhost:3000/migration`
2. [ ] Lee la advertencia ⚠️
3. [ ] Haz clic en **"Iniciar Migración"**
4. [ ] Espera a que complete (mostrará progreso)
5. [ ] Verifica resultado:
   - [ ] Productos insertados > 0
   - [ ] Errores = 0 (o aceptables)

**Verificación en Supabase:**
1. [ ] Abre **Table Editor**
2. [ ] Selecciona tabla `products`
3. [ ] Verifica que tenga filas (ej: 50+)
4. [ ] Mira que `quantity_variants` y `flavor_variants` tengan datos

---

## PASO 5: PROBAR ADMIN PANEL (5 min)

**En navegador:**

1. [ ] Abre `http://localhost:3000/admin`
2. [ ] Ingresa credenciales (según tu `admin-login`)
3. [ ] Verifica que vea productos (50+)
4. [ ] Busca un producto por nombre
5. [ ] Haz clic en **"Editar"** en cualquier producto
6. [ ] Cambia algo pequeño (ej: precio)
7. [ ] Haz clic en **"Guardar"**
8. [ ] ✓ El cambio se refleja sin refresh

---

## PASO 6: PROBAR REALTIME (5 min)

**Test en 2 navegadores:**

1. [ ] Abre `http://localhost:3000/admin` en navegador A
2. [ ] Abre `http://localhost:3000/admin` en navegador B (otra ventana)
3. [ ] En navegador A: Edita un producto
4. [ ] En navegador B: ✓ El cambio aparece al instante (sin refresh)

**Si no funciona Realtime:**
- [ ] Verifica que Realtime esté habilitado en Dashboard
- [ ] Abre DevTools → Network → busca "realtime"
- [ ] Debe haber conexión WebSocket

---

## PASO 7: PROBAR CREAR PRODUCTO (3 min)

**En Admin Panel:**

1. [ ] Haz clic en **"Agregar Producto"**
2. [ ] Completa campos:
   - [ ] Nombre: "Test Product"
   - [ ] Slug: "test-product"
   - [ ] Precio: 10000
   - [ ] Categoría: cualquiera
   - [ ] Stock: "high"
3. [ ] (Opcional) Agrega quantity_variants
4. [ ] (Opcional) Agrega flavor_variants
5. [ ] Haz clic en **"Crear"**
6. [ ] ✓ El producto aparece en la lista

**Verificación en Supabase:**
1. [ ] En Table Editor → `products`
2. [ ] Verifica que exista "Test Product"

---

## PASO 8: PROBAR ELIMINAR PRODUCTO (2 min)

**En Admin Panel:**

1. [ ] Busca "Test Product"
2. [ ] Haz clic en **"Editar"**
3. [ ] Haz clic en **"Eliminar"**
4. [ ] Confirma eliminación
5. [ ] ✓ El producto desaparece de la lista
6. [ ] ✓ Las variantes se eliminan automáticamente (CASCADE)

---

## PASO 9: VERIFICACIÓN FINAL (2 min)

### Frontend
- [ ] Componentes pueden usar `useProductsRealtime()`
- [ ] Admin Panel muestra productos desde Supabase
- [ ] Los cambios se reflejan en tiempo real

### Backend
- [ ] Server Actions (`createProduct`, `updateProduct`, `deleteProduct`) funcionan
- [ ] `/api/products` devuelve productos con variantes
- [ ] No hay errores de RLS en la consola

### Base de datos
- [ ] Productos tienen quantity_variants asociados
- [ ] Productos tienen flavor_variants asociados
- [ ] Eliminar un producto también elimina sus variantes

---

## PASO 10: LIMPIEZA (Opcional)

- [ ] Elimina "Test Product" si lo creaste
- [ ] Revisa que admin panel muestre solo productos reales
- [ ] Borra el archivo `README_MIGRATION.md` si prefieres

---

## 🎯 CHECKLIST DE ÉXITO

**Si todos estos están ✓, ¡la migración está completa!**

- [ ] SQL ejecutado sin errores
- [ ] Realtime habilitado en las 3 tablas
- [ ] Health Check muestra todo verde
- [ ] Migración completó con 0 errores
- [ ] Admin Panel muestra productos
- [ ] Cambios se reflejan en tiempo real (sin refresh)
- [ ] Puedo crear productos
- [ ] Puedo editar productos
- [ ] Puedo eliminar productos
- [ ] Las variantes se guardan correctamente
- [ ] No hay errores de RLS en DevTools

---

## 🆘 TROUBLESHOOTING

### "Conexión a Supabase fallida"
```
❌ Problem: .env.local incorrectos
✓ Solution: Verifica NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### "Tabla products no existe"
```
❌ Problem: SQL no se ejecutó correctamente
✓ Solution: Vuelve a ejecutar scripts/001_create_tables.sql en Supabase
```

### "Errores de RLS"
```
❌ Problem: Políticas RLS demasiado restrictivas
✓ Solution: En desarrollo, asegúrate que las políticas permitan acceso público
```

### "No veo cambios en tiempo real"
```
❌ Problem: Realtime no habilitado
✓ Solution: Supabase Dashboard → Replication → Activar las 3 tablas
```

### "La migración tiene errores"
```
❌ Problem: Duplicados o datos inconsistentes
✓ Solution: Revisa el error específico en la página de migración
           Puede ser normal omitir duplicados por slug
```

---

## 📞 NECESITAS AYUDA?

1. Consulta [MIGRACION_GUIA.md](MIGRACION_GUIA.md) para detalles técnicos
2. Revisa [README_MIGRATION.md](README_MIGRATION.md) para arquitectura
3. Abre DevTools → Console para ver errores específicos
4. Verifica el Dashboard de Supabase para estado de BD

---

**Estado**: ✅ Listo para completar  
**Tiempo estimado**: 30-40 minutos  
**Última actualización**: Enero 2026
