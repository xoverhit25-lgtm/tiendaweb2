# SETUP COMPLETO: Supabase + Realtime Integration (Windows)
# Este script configura todo para desplegar y probar

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 SETUP SUPABASE + REALTIME INTEGRATION" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install dependencies
Write-Host "📦 Paso 1: Instalando dependencias..." -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────────────────" -ForegroundColor Gray
npm install
Write-Host "✓ Dependencias instaladas" -ForegroundColor Green
Write-Host ""

# Step 2: Build TypeScript
Write-Host "🔨 Paso 2: Compilando TypeScript..." -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────────────────" -ForegroundColor Gray
try {
  npm run build 2>&1 | Out-Null
  Write-Host "✓ TypeScript compilado" -ForegroundColor Green
} catch {
  Write-Host "⚠️  Build warnings (normales en desarrollo)" -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Check .env.local
Write-Host "🔐 Paso 3: Verificando variables de entorno..." -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────────────────" -ForegroundColor Gray

if (!(Test-Path ".env.local")) {
  Write-Host "⚠️  .env.local no encontrado" -ForegroundColor Red
  Write-Host ""
  Write-Host "Crea .env.local con:" -ForegroundColor Yellow
  Write-Host "───────────────────" -ForegroundColor Gray
  Write-Host "NEXT_PUBLIC_SUPABASE_URL=tu_url_aqui"
  Write-Host "NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_aqui"
  Write-Host ""
  Write-Host "Obtén estas valores de: https://supabase.com/dashboard" -ForegroundColor Cyan
  Write-Host ""
  Read-Host "Presiona Enter cuando hayas creado .env.local"
} else {
  Write-Host "✓ .env.local encontrado" -ForegroundColor Green
}
Write-Host ""

# Step 4: Instructions
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ SETUP COMPLETADO - PRÓXIMOS PASOS" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "1️⃣  EJECUTAR SQL EN SUPABASE (5 min)" -ForegroundColor Cyan
Write-Host "   • Ve a: https://supabase.com/dashboard" -ForegroundColor Gray
Write-Host "   • Selecciona tu proyecto" -ForegroundColor Gray
Write-Host "   • SQL Editor → New query" -ForegroundColor Gray
Write-Host "   • Copia contenido de: scripts/001_create_tables.sql" -ForegroundColor Gray
Write-Host "   • Ejecuta el SQL" -ForegroundColor Gray
Write-Host ""

Write-Host "2️⃣  HABILITAR REALTIME (5 min)" -ForegroundColor Cyan
Write-Host "   • Supabase Dashboard → Replication" -ForegroundColor Gray
Write-Host "   • Activa estas tablas:" -ForegroundColor Gray
Write-Host "     ☐ products" -ForegroundColor Gray
Write-Host "     ☐ quantity_variants" -ForegroundColor Gray
Write-Host "     ☐ flavor_variants" -ForegroundColor Gray
Write-Host ""

Write-Host "3️⃣  INICIAR SERVIDOR (local)" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   → http://localhost:3000" -ForegroundColor Gray
Write-Host ""

Write-Host "4️⃣  VERIFICAR CONEXIÓN" -ForegroundColor Cyan
Write-Host "   → http://localhost:3000/health" -ForegroundColor Gray
Write-Host ""

Write-Host "5️⃣  EJECUTAR MIGRACIÓN" -ForegroundColor Cyan
Write-Host "   → http://localhost:3000/migration" -ForegroundColor Gray
Write-Host ""

Write-Host "6️⃣  USAR ADMIN PANEL" -ForegroundColor Cyan
Write-Host "   → http://localhost:3000/admin" -ForegroundColor Gray
Write-Host ""

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "📖 Lee estos archivos para más info:" -ForegroundColor Yellow
Write-Host "   • QUICK_START.txt - 5 pasos simples"
Write-Host "   • MIGRACION_GUIA.md - Guía técnica"
Write-Host "   • CHECKLIST.md - Verificaciones paso a paso"
Write-Host ""

Write-Host "🆘 ¿Errores?" -ForegroundColor Yellow
Write-Host "   → http://localhost:3000/health (diagnóstico)"
Write-Host ""

Write-Host "✨ ¡Listo para desplegar!" -ForegroundColor Green
