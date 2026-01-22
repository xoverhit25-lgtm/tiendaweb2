# 🧪 GUÍA DE TESTING - VERIFICA QUE TODO FUNCIONA

## ✅ Pre-Testing Checklist

Antes de empezar, verifica:
- [ ] El servidor está corriendo (`npm run dev` en una terminal)
- [ ] Puedes acceder a http://localhost:3000 (sin errores de conexión)
- [ ] Tienes `.env.local` con credenciales de Supabase
- [ ] DevTools está abierto (F12) para ver errores

---

## 🧪 Test 1: Página Carga Dinámicamente

### Objetivo
Verificar que `/admin` es renderizado dinámicamente (NO estático).

### Pasos
1. Abre http://localhost:3000/admin en el navegador
2. Abre DevTools (F12) → Network
3. Busca un request a `/admin`
4. Verifica:
   - ❓ ¿Tiene header "x-edge-runtime"?
   - ❓ ¿El status es 200?
   - ❓ ¿El tamaño es > 1KB?

### Resultado Esperado
```
✅ Request a /admin
✅ Status: 200
✅ Size: 10-50KB (dependiendo de los datos)
✅ Tipo: document/html (no cached)
```

### Si Falla
```
❌ Status: 304 (cached) → El servidor no está sirviendo dinámicamente
❌ Error: Network error → El servidor no está corriendo
❌ Status: 500 → Error en el servidor
```

---

## 🧪 Test 2: Tabla de Productos Carga

### Objetivo
Verificar que los productos se cargan desde la BD.

### Pasos
1. En el navegador, en la página `/admin`
2. Espera 2-3 segundos a que cargue
3. Verifica:
   - ¿Aparece una tabla con productos?
   - ¿La tabla tiene columnas: Nombre, Precio, Categoría, Stock, Acciones?
   - ¿Hay al menos 1 producto visible?

### Resultado Esperado
```
┌─────────────────────────────────┐
│ Búsqueda:  [_______] [+ Nuevo] │
├─────────────────────────────────┤
│ Nombre    │ Precio │ Stock │ ... │
│ ─────────────────────────────── │
│ iPhone 15 │ $999   │ Alto  │ ... │
│ Samsung   │ $899   │ Medio │ ... │
└─────────────────────────────────┘
```

### Si Falla
```
❌ Tabla vacía → Los productos no se cargan
❌ Tabla no aparece → El componente no renderiza
❌ Error en Console → Revisar DevTools → Console
```

**Troubleshooting**:
```javascript
// En DevTools → Console, ejecuta:
fetch('/api/products?page=1')
  .then(r => r.json())
  .then(d => console.log(d))
```

---

## 🧪 Test 3: Crear Producto

### Objetivo
Verificar que puedes crear un nuevo producto.

### Pasos
1. En `/admin`, click en botón "➕ Nuevo Producto"
2. Se abre un modal con formulario
3. Completa los campos:
   - Nombre: "Test Product 123"
   - Precio: "99.99"
   - Categoría: "Celulares"
   - Stock: "high"
4. Click "Guardar"
5. Espera 2-3 segundos
6. Verifica:
   - ¿El modal se cerró?
   - ¿Aparece el nuevo producto en la tabla?

### Resultado Esperado
```
✅ Modal se cierra después de guardar
✅ Nuevo producto aparece en la tabla
✅ La lista se actualiza automáticamente
```

### Si Falla
```
❌ Modal no se cierra → Error al guardar
❌ Producto no aparece → BD no guardó
❌ Error "Campo requerido" → Revisar que completaste todos los campos *
```

**Troubleshooting**:
```javascript
// En DevTools → Console:
fetch('/api/products')
  .then(r => r.json())
  .then(d => console.log('Productos en BD:', d.items.length))
```

---

## 🧪 Test 4: Editar Producto

### Objetivo
Verificar que puedes editar un producto existente.

### Pasos
1. En `/admin`, click en la fila de un producto existente
2. Se abre modal con el formulario pre-completo
3. Modifica un campo:
   - Precio: Cambia a "199.99"
4. Click "Actualizar"
5. Espera 2-3 segundos
6. Verifica:
   - ¿El modal se cerró?
   - ¿El precio cambió en la tabla?

### Resultado Esperado
```
✅ Modal se cierra después de actualizar
✅ El producto se actualiza en la tabla
✅ El cambio es inmediato
```

### Si Falla
```
❌ Modal no se cierra → Error al actualizar
❌ Precio no cambió → BD no guardó el cambio
❌ Error al abrir modal → El producto no se cargó correctamente
```

---

## 🧪 Test 5: Buscar Productos

### Objetivo
Verificar que la búsqueda funciona en tiempo real.

### Pasos
1. En `/admin`, en el campo "Búsqueda" escribe: "iphone"
2. Verifica:
   - ¿La tabla se filtra en tiempo real?
   - ¿Solo aparecen productos que contienen "iphone"?
   - ¿Cuando borras el texto vuelven todos los productos?

### Resultado Esperado
```
Antes: [iPhone, Samsung, Google, Motorola, ...]
Escribe "iphone": [iPhone]
Borras el texto: [iPhone, Samsung, Google, Motorola, ...]
```

### Si Falla
```
❌ La búsqueda no filtra → Check Console para errores
❌ La búsqueda es lenta → Puede ser normal si hay muchos productos
```

---

## 🧪 Test 6: Eliminar Producto

### Objetivo
Verificar que puedes eliminar un producto.

### Pasos
1. En `/admin`, busca un producto que no necesites (ej: "Test Product 123")
2. Click en el icono 🗑️ en la fila
3. Espera a que aparezca un modal de confirmación
4. Click "Confirmar eliminación"
5. Espera 2-3 segundos
6. Verifica:
   - ¿El producto desapareció de la tabla?
   - ¿No aparece aunque scrollees?

### Resultado Esperado
```
✅ Producto eliminado de la tabla
✅ La lista se actualiza automáticamente
```

### Si Falla
```
❌ Producto no se elimina → Error al borrar
❌ Modal de confirmación no aparece → Check Console
```

---

## 🧪 Test 7: Paginación

### Objetivo
Verificar que la paginación funciona.

### Pasos
1. En `/admin`, verifica si hay más de 20 productos
2. Si aparecen los botones "← Anterior" y "Siguiente →":
   - Click en "Siguiente →"
3. Verifica:
   - ¿Aparecen productos diferentes?
   - ¿El contador dice "Página 2 de X"?
4. Click en "← Anterior"
5. Verifica:
   - ¿Volvieron los productos de la página 1?

### Resultado Esperado
```
Página 1: [Productos 1-20]
Click "Siguiente →"
Página 2: [Productos 21-40]
Click "← Anterior"
Página 1: [Productos 1-20]
```

### Si Falla
```
❌ No hay botones → Tienes menos de 20 productos (normal)
❌ Siguiente → no hace nada → Error en paginación
```

---

## 🧪 Test 8: Tab Health Check

### Objetivo
Verificar que el health check funciona.

### Pasos
1. En `/admin`, click en tab "🔍 Health Check"
2. Click en botón "[🔄 Verificar Conexión]"
3. Espera 2-3 segundos
4. Verifica:
   - ¿Aparece un mensaje con estado?
   - ¿Aparecen indicadores visuales (✅ o ❌)?
   - ¿El mensaje indica si la BD está conectada?

### Resultado Esperado
```
✅ [Conectado] o [Error]
✅ Mensaje: "Base de datos conectada. Status: ..."
✅ El botón vuelve a estar disponible
```

### Si Falla
```
❌ "Error de conexión" → Verifica .env.local
❌ El botón está disabled → Espera más o recarga la página
❌ No aparece mensaje → Check Console para errores
```

**Troubleshooting**:
```javascript
// En DevTools → Console:
fetch('/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```

---

## 🧪 Test 9: Tab Migraciones

### Objetivo
Verificar que el endpoint de migraciones funciona.

### Pasos
1. En `/admin`, click en tab "🔄 Migraciones"
2. Lee la advertencia (⚠️)
3. Click en botón "[▶️ Ejecutar Migración]"
4. Espera 2-3 segundos
5. Verifica:
   - ¿Aparece un mensaje con estado?
   - ¿Aparecen indicadores visuales (✅ o ❌)?

### Resultado Esperado
```
✅ [Completado] o [Error]
✅ Mensaje: "Todas las tablas están creadas y listas"
✅ El botón vuelve a estar disponible
```

### Si Falla
```
❌ "Error: Tabla X no existe" → Las tablas no fueron creadas
❌ El botón está disabled → Espera más
❌ No aparece mensaje → Check Console para errores
```

**Troubleshooting**:
```javascript
// En DevTools → Console:
fetch('/api/migration', { method: 'POST' })
  .then(r => r.json())
  .then(d => console.log(d))
```

---

## 🧪 Test 10: Errores DevTools

### Objetivo
Verificar que no hay errores no manejados.

### Pasos
1. Abre DevTools (F12)
2. Voy a Console
3. Realiza todos los tests anteriores
4. Verifica:
   - ¿Hay mensajes rojos (Errors)?
   - ¿Hay mensajes amarillos (Warnings)?
   - ¿Los mensajes son nuestros o del navegador?

### Resultado Esperado
```
✅ Console limpia (sin errores rojos)
✅ Puede haber warnings (pero no relacionados a nuestro código)
✅ Puede haber mensajes de desarrollo (dev.js, etc)
```

### Si Falla
```
❌ Errores rojos en Console → Hay un problema
❌ Muchos warnings → Revisar si son del app o del navegador
```

---

## 📋 Checklist de Testing Final

| Test | Resultado | Notas |
|------|-----------|-------|
| 1. Página carga dinámicamente | ✅❌ | |
| 2. Tabla de productos carga | ✅❌ | |
| 3. Crear producto | ✅❌ | |
| 4. Editar producto | ✅❌ | |
| 5. Buscar productos | ✅❌ | |
| 6. Eliminar producto | ✅❌ | |
| 7. Paginación | ✅❌ | |
| 8. Health check | ✅❌ | |
| 9. Migraciones | ✅❌ | |
| 10. Console limpia | ✅❌ | |

---

## 🐛 Si Algo Falla

### Paso 1: Revisar Console
```
DevTools (F12) → Console → ¿Hay errores rojos?
Copia el error y búscalo en la documentación
```

### Paso 2: Verificar Servidor
```
Terminal donde corre `npm run dev`
¿Muestra el servidor errores?
¿Dice "Ready in X.Xs"?
```

### Paso 3: Verificar BD
```
Ve a Supabase Dashboard
¿La tabla "products" existe?
¿Tiene datos?
¿Las credenciales en .env.local son correctas?
```

### Paso 4: Reiniciar
```bash
# Cancela npm run dev (Ctrl+C)
rm -r .next/
npm run dev
```

### Paso 5: Check Config
Verifica que `.env.local` tenga:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
```

---

## ✅ Test Completo

Si todos los tests pasan (✅), entonces:

```
✅ Panel Admin está FUNCIONANDO CORRECTAMENTE
✅ Renderizado es DINÁMICO (no estático)
✅ Datos vienen de SUPABASE
✅ Health Check FUNCIONA
✅ Migraciones FUNCIONA
✅ Listo para PRODUCCIÓN
```

---

**Instrucciones**:
1. Ejecuta cada test uno por uno
2. Marca ✅ o ❌ en el checklist
3. Si algo falla, sigue los troubleshooting
4. Si todavía falla, revisa la documentación
5. Si aún falla, revisa los logs (Console + Terminal)

**Tiempo estimado**: 15-20 minutos para todos los tests

¡Buena suerte! 🚀
