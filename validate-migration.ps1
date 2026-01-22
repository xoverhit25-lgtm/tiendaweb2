#!/usr/bin/env pwsh

<#
.SYNOPSIS
    Valida que el proyecto esta listo para la migracion
.DESCRIPTION
    Verifica:
    1. Node.js y npm instalados
    2. .env.local configurado
    3. Supabase variables de entorno
    4. Estructura de carpetas
    5. Archivos necesarios
    6. Health check (conectividad Supabase)
#>

param(
    [switch]$Verbose = $false
)

# Colors
$GREEN = "[32m"
$RED = "[31m"
$YELLOW = "[33m"
$BLUE = "[34m"
$NC = "[0m"

$passed = 0
$failed = 0
$warnings = 0

function Write-Check {
    param(
        [string]$Name,
        [bool]$Status,
        [string]$Message
    )
    
    if ($Status) {
        Write-Host "$GREEN OK$NC $Name" -NoNewline
        $script:passed++
    } else {
        Write-Host "$RED FAIL$NC $Name" -NoNewline
        $script:failed++
    }
    
    if ($Message) {
        Write-Host " - $Message" -ForegroundColor Gray
    } else {
        Write-Host ""
    }
}

function Write-Warning-Check {
    param(
        [string]$Name,
        [string]$Message
    )
    
    Write-Host "$YELLOW WARN$NC $Name - $Message" -ForegroundColor Yellow
    $script:warnings++
}

function Write-Header {
    param([string]$Text)
    Write-Host ""
    Write-Host "$BLUE============================================$NC"
    Write-Host "$BLUE$Text$NC"
    Write-Host "$BLUE============================================$NC"
}

# Main Validation

Write-Header "VALIDACION PRE-MIGRACION"

# 1. Node.js y npm
Write-Host ""
Write-Host "1. Verificando Node.js y npm..."
$nodeExists = (Get-Command node -ErrorAction SilentlyContinue) -ne $null
$npmExists = (Get-Command npm -ErrorAction SilentlyContinue) -ne $null
Write-Check "Node.js instalado" $nodeExists
Write-Check "npm instalado" $npmExists

# 2. .env.local
Write-Host ""
Write-Host "2. Verificando archivo .env.local..."
$envExists = Test-Path -Path ".env.local"
Write-Check "Archivo .env.local existe" $envExists

if ($envExists) {
    $envContent = Get-Content -Path ".env.local" -Raw
    $hasUrl = $envContent -match "NEXT_PUBLIC_SUPABASE_URL"
    $hasKey = $envContent -match "NEXT_PUBLIC_SUPABASE_ANON_KEY"
    
    Write-Check "NEXT_PUBLIC_SUPABASE_URL configurado" $hasUrl
    Write-Check "NEXT_PUBLIC_SUPABASE_ANON_KEY configurado" $hasKey
    
    if (-not $hasUrl -or -not $hasKey) {
        Write-Warning-Check "Credenciales incompletas" "Asegura que las variables de Supabase estan configuradas correctamente"
    }
} else {
    Write-Warning-Check "Archivo .env.local no encontrado" "Crea el archivo .env.local con tus credenciales de Supabase"
}

# 3. Estructura de carpetas
Write-Host ""
Write-Host "3. Verificando estructura de carpetas..."
$folders = @(
    "app",
    "app/actions",
    "app/api",
    "app/migration",
    "app/health",
    "components",
    "data",
    "hooks",
    "lib",
    "scripts",
    "types"
)

foreach ($folder in $folders) {
    $exists = Test-Path -Path $folder -PathType Container
    Write-Check "Carpeta '$folder'" $exists
}

# 4. Archivos necesarios
Write-Host ""
Write-Host "4. Verificando archivos necesarios..."
$files = @(
    "package.json",
    "tsconfig.json",
    "next.config.mjs",
    "app/actions/migrate-products.ts",
    "app/api/health/route.ts",
    "app/migration/page.tsx",
    "data/all-products.ts",
    "scripts/001_create_tables.sql",
    "types/product.ts"
)

foreach ($file in $files) {
    $exists = Test-Path -Path $file -PathType Leaf
    Write-Check "Archivo '$file'" $exists
}

# 5. Dependencias npm
Write-Host ""
Write-Host "5. Verificando dependencias npm..."
$nodeModulesExists = Test-Path -Path "node_modules" -PathType Container
Write-Check "node_modules instalado" $nodeModulesExists

if (-not $nodeModulesExists) {
    Write-Warning-Check "Dependencias no instaladas" "Ejecuta 'npm install' antes de proceder"
}

# 6. Health Check
Write-Host ""
Write-Host "6. Intentando Health Check (requiere servidor corriendo)..."
Write-Host "   Para ejecutar el health check:"
Write-Host "   1. Abre otra terminal"
Write-Host "   2. Ejecuta: npm run dev"
Write-Host "   3. Espera hasta que diga 'Ready in Xs'"
Write-Host "   4. Luego abre: http://localhost:3000/health"
Write-Host ""

# Summary
Write-Header "RESUMEN DE VALIDACION"
Write-Host ""
Write-Host "$GREEN OK Pasados:$NC    $passed"
Write-Host "$RED FAIL Fallidos:$NC   $failed"
if ($warnings -gt 0) {
    Write-Host "$YELLOW WARN Advertencias:$NC $warnings"
}
Write-Host ""

if ($failed -eq 0) {
    Write-Host "$GREEN OK Proyecto listo para migracion$NC"
    Write-Host ""
    Write-Host "Proximos pasos:"
    Write-Host "  1. Asegura que las tablas existan en Supabase"
    Write-Host "     -> Ejecuta el SQL en: scripts/001_create_tables.sql"
    Write-Host "  2. Habilita Realtime en Supabase Dashboard"
    Write-Host "     -> Settings -> Replication -> Activar 3 tablas"
    Write-Host "  3. Inicia el servidor: npm run dev"
    Write-Host "  4. Abre: http://localhost:3000/health"
    Write-Host "  5. Abre: http://localhost:3000/migration"
    Write-Host ""
    exit 0
} else {
    Write-Host "$RED FAIL Se encontraron problemas$NC"
    Write-Host ""
    Write-Host "Por favor, corrige los errores anteriores y vuelve a ejecutar esta validacion"
    Write-Host ""
    exit 1
}
