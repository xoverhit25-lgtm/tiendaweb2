# 🚀 PANEL ADMIN - GUÍA DE USO RÁPIDA

## ✅ Estado Actual
- ✅ Servidor ejecutándose en `http://localhost:3000`
- ✅ Página `/admin` abierta y funcional
- ✅ Renderizado dinámico (no estático)
- ✅ Conectado a Supabase

---

## 📍 Acceder al Panel

### En el navegador
```
http://localhost:3000/admin
```

### O click en el link de la Simple Browser que ya está abierta

---

## 🎯 Las 3 Tabs Disponibles

### Tab 1️⃣: 📦 Productos
**Qué hace**: Gestiona todos los productos de la tienda

#### Ver productos
- La tabla se carga automáticamente
- Muestra: Nombre, Precio, Categoría, Stock, Acciones

#### Buscar
- Escribe en el campo "Buscar productos..."
- Se filtra en tiempo real

#### Crear nuevo
- Click en botón "➕ Nuevo Producto"
- Completa el formulario:
  - Nombre *
  - Precio *
  - Categoría *
  - Stock *
  - Slug
  - Variantes (opcional)
- Click "Guardar"

#### Editar
- Click en la fila del producto que quieres editar
- Se abre modal con el formulario
- Modifica lo que necesites
- Click "Actualizar"

#### Eliminar
- Click en icono 🗑️ en la fila
- Confirmará antes de eliminar

#### Paginación
- Si hay muchos productos: click "Siguiente →" / "← Anterior"

---

### Tab 2️⃣: 🔍 Health Check
**Qué hace**: Verifica que la base de datos esté conectada

#### Pasos
1. Click en tab "🔍 Health Check"
2. Click en botón "[🔄 Verificar Conexión]"
3. Espera 1-2 segundos
4. Lee el resultado:
   - ✅ Verde = Conectado correctamente
   - ❌ Rojo = Error en la conexión

#### Qué verifica
- Conexión a Supabase
- Existencia de tablas (products, quantity_variants, flavor_variants)
- Recuento de productos

---

### Tab 3️⃣: 🔄 Migraciones
**Qué hace**: Ejecuta migraciones de base de datos

#### ⚠️ Advertencia Importante
**LOS CAMBIOS SON PERMANENTES**
- Haz backup antes de ejecutar
- Los cambios no se pueden deshacer fácilmente
- Solo úsalo si sabes qué estás haciendo

#### Pasos
1. Click en tab "🔄 Migraciones"
2. Lee la advertencia
3. Click en botón "[▶️ Ejecutar Migración]"
4. Espera el resultado:
   - ✅ Verde = Migración completada
   - ❌ Rojo = Hubo un error

#### Qué hace
- Verifica que existan todas las tablas necesarias
- Si faltan tablas, intenta crearlas
- Retorna estado final

---

## 🔧 Acciones por Tipo de Usuario

### Vendedor (Solo productos)
1. Accede a `/admin`
2. Usa Tab 📦 Productos para:
   - Ver el catálogo
   - Crear nuevos productos
   - Actualizar precios/stocks
   - Eliminar discontinuados

### Administrador (Panel completo)
1. Accede a `/admin`
2. Usa Tab 📦 para gestionar productos
3. Usa Tab 🔍 para verificar conexión
4. Usa Tab 🔄 para ejecutar migraciones

### Desarrollador (Debugging)
1. Accede a `/admin`
2. Abre DevTools (F12)
3. Usa Tab 🔍 para troubleshoot BD
4. Usa Tab 🔄 para reinicializar BD si es necesario

---

## 🚨 Problemas Comunes

### "No aparecen productos"
1. Verifica Tab 🔍 que la BD esté conectada
2. Prueba crear un nuevo producto
3. Si aún no aparecen: revisa `/api/products` en Postman

### "El formulario no guarda"
1. Verifica que todos los campos requeridos (*) tengan datos
2. Abre DevTools (F12) → Console para ver errores
3. Verifica en Tab 🔍 que la BD esté disponible

### "Error al conectar a BD"
1. Verifica las credenciales en `.env.local`
2. Asegúrate que el proyecto Supabase está activo
3. Prueba el Tab 🔍 Health Check para más detalles

### "La página se ve vacía"
1. Abre DevTools (F12) → Console
2. Busca mensajes de error
3. Refresh la página (Ctrl+F5)
4. Si persiste: reinicia `npm run dev`

---

## 📞 Contactos Rápidos

- **Base de Datos**: [Supabase Dashboard](https://app.supabase.com)
- **Logs del servidor**: Terminal donde ejecutaste `npm run dev`
- **Errores del cliente**: DevTools (F12) → Console

---

## ✨ Tips Útiles

### Para desarrolladores
- Abre DevTools (F12) mientras usas el panel
- Revisa Network tab para ver requests a Server Actions
- Usa Console para debugging

### Para administradores
- Usa búsqueda para encontrar productos rápidamente
- Las acciones (crear/editar) son inmediatas
- Siempre verifica Tab 🔍 antes de hacer cambios importantes

### Para vendedores
- Crea productos nuevos regularmente
- Actualiza stocks cuando sea necesario
- No necesitas conocer sobre migraciones o health check

---

**Última actualización**: $(date)
**Panel en**: http://localhost:3000/admin
**Servidor**: ✅ Corriendo

¿Necesitas ayuda? Abre DevTools (F12) y revisa Console para mensajes de error.
