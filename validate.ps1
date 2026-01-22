# validate.ps1 - Validación del proyecto (PowerShell Windows)

Write-Host "🔍 Validando proyecto Supabase Realtime..." -ForegroundColor Cyan
Write-Host ""

$passed = 0
$failed = 0

# 1. Carpetas principales
Write-Host "📁 Estructura de carpetas..." -ForegroundColor Yellow

$folders = @("app", "components", "hooks", "scripts", "types")
foreach ($folder in $folders) {
  if (Test-Path $folder) {
    Write-Host "✓ Carpeta $folder" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ Carpeta $folder" -ForegroundColor Red
    $failed++
  }
}

# 2. Archivos de configuración
Write-Host ""
Write-Host "⚙️  Archivos de configuración..." -ForegroundColor Yellow

$configs = @("package.json", "tsconfig.json", "next.config.mjs")
foreach ($config in $configs) {
  if (Test-Path $config) {
    Write-Host "✓ $config" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $config" -ForegroundColor Red
    $failed++
  }
}

# 3. Server Actions
Write-Host ""
Write-Host "⚙️  Server Actions..." -ForegroundColor Yellow

$actions = @("app/actions/product-crud.ts", "app/actions/migrate-products.ts")
foreach ($action in $actions) {
  if (Test-Path $action) {
    Write-Host "✓ $action" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $action" -ForegroundColor Red
    $failed++
  }
}

# 4. Realtime Hooks
Write-Host ""
Write-Host "🔄 Realtime Hooks..." -ForegroundColor Yellow

if (Test-Path "hooks/use-products-realtime.ts") {
  Write-Host "✓ use-products-realtime.ts" -ForegroundColor Green
  $passed++
} else {
  Write-Host "✗ use-products-realtime.ts" -ForegroundColor Red
  $failed++
}

# 5. Componentes
Write-Host ""
Write-Host "🎨 Componentes..." -ForegroundColor Yellow

$components = @("components/admin/product-form-supabase.tsx", "app/admin/page-realtime.tsx")
foreach ($component in $components) {
  if (Test-Path $component) {
    Write-Host "✓ $component" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $component" -ForegroundColor Red
    $failed++
  }
}

# 6. API Routes
Write-Host ""
Write-Host "🌐 API Routes..." -ForegroundColor Yellow

$apis = @("app/api/products/route.ts", "app/api/health/route.ts")
foreach ($api in $apis) {
  if (Test-Path $api) {
    Write-Host "✓ $api" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $api" -ForegroundColor Red
    $failed++
  }
}

# 7. SQL
Write-Host ""
Write-Host "🗄️  Base de Datos..." -ForegroundColor Yellow

if (Test-Path "scripts/001_create_tables.sql") {
  Write-Host "✓ SQL schema" -ForegroundColor Green
  $passed++
} else {
  Write-Host "✗ SQL schema" -ForegroundColor Red
  $failed++
}

# 8. Tipos
Write-Host ""
Write-Host "📝 Tipos TypeScript..." -ForegroundColor Yellow

if (Test-Path "types/product.ts") {
  Write-Host "✓ product.ts types" -ForegroundColor Green
  $passed++
} else {
  Write-Host "✗ product.ts types" -ForegroundColor Red
  $failed++
}

# 9. Documentación
Write-Host ""
Write-Host "📚 Documentación..." -ForegroundColor Yellow

$docs = @("RESUMEN.md", "QUICK_START.txt", "MIGRACION_GUIA.md", "CHECKLIST.md", "DESPLIEGUE.md", "ESTADO_FINAL.md")
foreach ($doc in $docs) {
  if (Test-Path $doc) {
    Write-Host "✓ $doc" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $doc" -ForegroundColor Red
    $failed++
  }
}

# 10. Scripts
Write-Host ""
Write-Host "🚀 Scripts de Deploy..." -ForegroundColor Yellow

$scripts = @("setup.sh", "setup.ps1", "validate.sh", "validate.ps1")
foreach ($script in $scripts) {
  if (Test-Path $script) {
    Write-Host "✓ $script" -ForegroundColor Green
    $passed++
  } else {
    Write-Host "✗ $script" -ForegroundColor Red
    $failed++
  }
}

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
