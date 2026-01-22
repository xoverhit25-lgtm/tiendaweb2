# validate-simple.ps1 - Validación simple (Windows PowerShell)

Write-Host "🔍 Validando proyecto Supabase Realtime..." -ForegroundColor Cyan
Write-Host ""

$passed = 0
$failed = 0

# Función simple de verificación
function Check {
  param([string]$desc, [string]$path)
  
  $exists = Test-Path $path
  if ($exists) {
    Write-Host "✓ $desc" -ForegroundColor Green
    $script:passed++
  }
  else {
    Write-Host "✗ $desc" -ForegroundColor Red
    $script:failed++
  }
}

# 1. Carpetas principales
Write-Host "📁 Estructura de carpetas..." -ForegroundColor Yellow
Check "Carpeta app" "app"
Check "Carpeta components" "components"
Check "Carpeta hooks" "hooks"
Check "Carpeta scripts" "scripts"
Check "Carpeta types" "types"

# 2. Archivos de configuración
Write-Host ""
Write-Host "⚙️  Archivos de configuración..." -ForegroundColor Yellow
Check "package.json" "package.json"
Check "tsconfig.json" "tsconfig.json"
Check "next.config.mjs" "next.config.mjs"

# 3. Server Actions
Write-Host ""
Write-Host "⚙️  Server Actions..." -ForegroundColor Yellow
Check "product-crud.ts" "app/actions/product-crud.ts"
Check "migrate-products.ts" "app/actions/migrate-products.ts"

# 4. Realtime Hooks
Write-Host ""
Write-Host "🔄 Realtime Hooks..." -ForegroundColor Yellow
Check "use-products-realtime.ts" "hooks/use-products-realtime.ts"

# 5. Componentes
Write-Host ""
Write-Host "🎨 Componentes..." -ForegroundColor Yellow
Check "product-form-supabase.tsx" "components/admin/product-form-supabase.tsx"
Check "page-realtime.tsx" "app/admin/page-realtime.tsx"

# 6. API Routes
Write-Host ""
Write-Host "🌐 API Routes..." -ForegroundColor Yellow
Check "products route.ts" "app/api/products/route.ts"
Check "health route.ts" "app/api/health/route.ts"

# 7. SQL
Write-Host ""
Write-Host "🗄️  Base de Datos..." -ForegroundColor Yellow
Check "SQL schema" "scripts/001_create_tables.sql"

# 8. Tipos
Write-Host ""
Write-Host "📝 Tipos TypeScript..." -ForegroundColor Yellow
Check "product.ts types" "types/product.ts"

# 9. Documentación
Write-Host ""
Write-Host "📚 Documentación..." -ForegroundColor Yellow
Check "RESUMEN.md" "RESUMEN.md"
Check "QUICK_START.txt" "QUICK_START.txt"
Check "MIGRACION_GUIA.md" "MIGRACION_GUIA.md"
Check "CHECKLIST.md" "CHECKLIST.md"
Check "DESPLIEGUE.md" "DESPLIEGUE.md"
Check "ESTADO_FINAL.md" "ESTADO_FINAL.md"

# 10. Scripts
Write-Host ""
Write-Host "🚀 Scripts de Deploy..." -ForegroundColor Yellow
Check "setup.sh" "setup.sh"
Check "setup.ps1" "setup.ps1"
Check "validate.sh" "validate.sh"
Check "validate.ps1" "validate.ps1"

# Resultado
Write-Host ""
Write-Host "════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "Validación completada" -ForegroundColor Green
Write-Host "════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✓ Pasadas: $passed" -ForegroundColor Green
Write-Host "✗ Fallidas: $failed" -ForegroundColor Red
Write-Host ""

if ($failed -eq 0) {
  Write-Host "✓ ¡TODO LISTO PARA DESPLEGAR!" -ForegroundColor Green
  Write-Host ""
  Write-Host "Próximos pasos:" -ForegroundColor Yellow
  Write-Host "1. npm install" -ForegroundColor White
  Write-Host "2. Configurar .env.local" -ForegroundColor White
  Write-Host "3. Ejecutar SQL en Supabase" -ForegroundColor White
  Write-Host "4. npm run dev" -ForegroundColor White
  Write-Host "5. Probar http://localhost:3000/health" -ForegroundColor White
  exit 0
}
else {
  Write-Host "✗ Faltan $failed archivos" -ForegroundColor Red
  exit 1
}
