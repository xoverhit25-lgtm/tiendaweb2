#!/bin/bash
# validate.sh - Validar que todo esté listo para desplegar

echo "🔍 Validando proyecto Supabase Realtime..."
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contadores
PASSED=0
FAILED=0

# Función para verificar
check() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} $1"
    ((PASSED++))
  else
    echo -e "${RED}✗${NC} $1"
    ((FAILED++))
  fi
}

# 1. Verificar estructura de carpetas
echo "📁 Verificando estructura..."
[ -d "app" ] && [ -d "components" ] && [ -d "scripts" ]
check "Carpetas principales existen"

[ -f "package.json" ] && [ -f "tsconfig.json" ]
check "Archivos de configuración existen"

# 2. Verificar archivos SQL
echo ""
echo "🗄️  Verificando SQL..."
[ -f "scripts/001_create_tables.sql" ]
check "SQL schema existe"

grep -q "CREATE TABLE products" scripts/001_create_tables.sql
check "Tabla products está definida"

grep -q "CREATE TABLE quantity_variants" scripts/001_create_tables.sql
check "Tabla quantity_variants está definida"

grep -q "CREATE TABLE flavor_variants" scripts/001_create_tables.sql
check "Tabla flavor_variants está definida"

# 3. Verificar Server Actions
echo ""
echo "⚙️  Verificando Server Actions..."
[ -f "app/actions/product-crud.ts" ]
check "CRUD Server Actions existe"

grep -q "export async function createProduct" app/actions/product-crud.ts
check "createProduct() está definido"

grep -q "export async function updateProduct" app/actions/product-crud.ts
check "updateProduct() está definido"

grep -q "export async function deleteProduct" app/actions/product-crud.ts
check "deleteProduct() está definido"

# 4. Verificar Realtime hooks
echo ""
echo "🔄 Verificando Realtime..."
[ -f "hooks/use-products-realtime.ts" ]
check "useProductsRealtime hook existe"

grep -q "useProductsRealtime" hooks/use-products-realtime.ts
check "useProductsRealtime está exportado"

grep -q "useProductRealtime" hooks/use-products-realtime.ts
check "useProductRealtime está exportado"

# 5. Verificar componentes
echo ""
echo "🎨 Verificando componentes..."
[ -f "components/admin/product-form-supabase.tsx" ]
check "Product form existe"

[ -f "app/admin/page-realtime.tsx" ]
check "Admin panel con Realtime existe"

# 6. Verificar API routes
echo ""
echo "🌐 Verificando API routes..."
[ -f "app/api/products/route.ts" ]
check "Products API route existe"

[ -f "app/api/health/route.ts" ]
check "Health check API existe"

# 7. Verificar migration script
echo ""
echo "📤 Verificando migración..."
[ -f "app/actions/migrate-products.ts" ]
check "Migration script existe"

grep -q "migrateProductsToSupabase" app/actions/migrate-products.ts
check "migrateProductsToSupabase está definido"

# 8. Verificar documentación
echo ""
echo "📚 Verificando documentación..."
[ -f "MIGRACION_GUIA.md" ]
check "MIGRACION_GUIA.md existe"

[ -f "CHECKLIST.md" ]
check "CHECKLIST.md existe"

[ -f "QUICK_START.txt" ]
check "QUICK_START.txt existe"

[ -f "DESPLIEGUE.md" ]
check "DESPLIEGUE.md existe"

# 9. Verificar setup scripts
echo ""
echo "🔧 Verificando setup scripts..."
[ -f "setup.sh" ]
check "setup.sh existe"

[ -f "setup.ps1" ]
check "setup.ps1 existe"

# 10. Verificar tipos TypeScript
echo ""
echo "📝 Verificando tipos..."
[ -f "types/product.ts" ]
check "ProductWithVariants type existe"

grep -q "interface Product" types/product.ts
check "Product interface está definida"

grep -q "interface QuantityVariant" types/product.ts
check "QuantityVariant interface está definida"

# Resultado final
echo ""
echo "════════════════════════════════════════"
echo -e "${GREEN}Validación completada${NC}"
echo "════════════════════════════════════════"
echo -e "${GREEN}✓ Pasadas: $PASSED${NC}"
echo -e "${RED}✗ Fallidas: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ ¡TODO LISTO PARA DESPLEGAR!${NC}"
  echo ""
  echo "Próximos pasos:"
  echo "1. npm install"
  echo "2. Ejecutar SQL en Supabase Dashboard"
  echo "3. npm run dev"
  echo "4. Ir a http://localhost:3000/health"
  echo "5. Ir a http://localhost:3000/migration"
  exit 0
else
  echo -e "${RED}✗ Faltan archivos o configuración${NC}"
  echo ""
  echo "Revisa los archivos que fallaron."
  exit 1
fi
