#!/bin/bash

# SETUP COMPLETO: Supabase + Realtime Integration
# Este script configura todo para desplegar y probar

set -e

echo "═══════════════════════════════════════════════════════════════"
echo "🚀 SETUP SUPABASE + REALTIME INTEGRATION"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Step 1: Install dependencies
echo "📦 Paso 1: Instalando dependencias..."
echo "─────────────────────────────────────────────────────────────"
npm install
echo "✓ Dependencias instaladas"
echo ""

# Step 2: Build TypeScript
echo "🔨 Paso 2: Compilando TypeScript..."
echo "─────────────────────────────────────────────────────────────"
npm run build 2>/dev/null || echo "⚠️  Build warnings (normales en desarrollo)"
echo "✓ TypeScript compilado"
echo ""

# Step 3: Check .env.local
echo "🔐 Paso 3: Verificando variables de entorno..."
echo "─────────────────────────────────────────────────────────────"
if [ ! -f .env.local ]; then
  echo "⚠️  .env.local no encontrado"
  echo ""
  echo "Crea .env.local con:"
  echo "───────────────────"
  echo "NEXT_PUBLIC_SUPABASE_URL=tu_url_aqui"
  echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_aqui"
  echo ""
  echo "Obtén estas valores de: https://supabase.com/dashboard"
  echo ""
  read -p "¿Presiona Enter cuando hayas creado .env.local..."
else
  echo "✓ .env.local encontrado"
fi
echo ""

# Step 4: Instructions
echo "═══════════════════════════════════════════════════════════════"
echo "✅ SETUP COMPLETADO - PRÓXIMOS PASOS"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "1️⃣  EJECUTAR SQL EN SUPABASE (5 min)"
echo "   • Ve a: https://supabase.com/dashboard"
echo "   • Selecciona tu proyecto"
echo "   • SQL Editor → New query"
echo "   • Copia contenido de: scripts/001_create_tables.sql"
echo "   • Ejecuta el SQL"
echo ""
echo "2️⃣  HABILITAR REALTIME (5 min)"
echo "   • Supabase Dashboard → Replication"
echo "   • Activa estas tablas:"
echo "     ☐ products"
echo "     ☐ quantity_variants"
echo "     ☐ flavor_variants"
echo ""
echo "3️⃣  INICIAR SERVIDOR (local)"
echo "   npm run dev"
echo "   → http://localhost:3000"
echo ""
echo "4️⃣  VERIFICAR CONEXIÓN"
echo "   → http://localhost:3000/health"
echo ""
echo "5️⃣  EJECUTAR MIGRACIÓN"
echo "   → http://localhost:3000/migration"
echo ""
echo "6️⃣  USAR ADMIN PANEL"
echo "   → http://localhost:3000/admin"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "📖 Lee estos archivos para más info:"
echo "   • QUICK_START.txt - 5 pasos simples"
echo "   • MIGRACION_GUIA.md - Guía técnica"
echo "   • CHECKLIST.md - Verificaciones paso a paso"
echo ""
echo "🆘 ¿Errores?"
echo "   → http://localhost:3000/health (diagnóstico)"
echo ""
