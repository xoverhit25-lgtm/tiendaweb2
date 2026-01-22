# 🚀 GUÍA DE DESPLIEGUE - PRODUCCIÓN

## Opciones de Despliegue

### OPCIÓN 1: Vercel (Recomendado - Más fácil)

#### Paso 1: Preparar repositorio
```bash
git init
git add .
git commit -m "Initial commit: Supabase + Realtime"
git push origin main
```

#### Paso 2: Conectar a Vercel
1. Ve a: https://vercel.com
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Selecciona el proyecto

#### Paso 3: Configurar variables de entorno
En Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL = tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = tu_clave_publica
```

#### Paso 4: Desplegar
```bash
git push origin main
```
✓ Vercel desplegará automáticamente

---

### OPCIÓN 2: Docker + Cloud Run / Railway / Render

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Desplegar en Railway
1. Ve a: https://railway.app
2. New Project → Deploy from GitHub
3. Configura variables de entorno
4. Deploy

---

### OPCIÓN 3: Self-hosted (VPS / Servidor propio)

#### Preparar servidor
```bash
# SSH a tu servidor
ssh user@your-server.com

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clonar repositorio
git clone https://github.com/tuusuario/supabase-realtime.git
cd supabase-realtime
```

#### Instalar y compilar
```bash
npm install
npm run build
```

#### Configurar variables de entorno
```bash
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave
EOF
```

#### Usar PM2 para mantenerlo ejecutándose
```bash
npm install -g pm2

pm2 start "npm start" --name supabase-app
pm2 save
pm2 startup
```

#### Configurar nginx como reverse proxy
```nginx
server {
    listen 80;
    server_name tudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Checklist Pre-Despliegue

- [ ] Código compilado sin errores
- [ ] Variables de entorno configuradas
- [ ] SQL ejecutado en Supabase
- [ ] Realtime habilitado (3 tablas)
- [ ] RLS configurado apropiadamente
- [ ] Base de datos migrada (100+ productos)
- [ ] Health check pasa (http://tudominio.com/health)
- [ ] Admin panel funciona
- [ ] Realtime sincroniza correctamente

---

## Optimizaciones para Producción

### 1. RLS (Row Level Security)
Cambiar de públicas a autenticadas:

```sql
-- En lugar de:
CREATE POLICY "public_select_products" ON products FOR SELECT USING (true);

-- Usar:
CREATE POLICY "authenticated_select_products" ON products
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 2. Imágenes en Supabase Storage
```typescript
// En lugar de URLs externas, usar Supabase Storage
const { data } = supabase.storage
  .from('products')
  .getPublicUrl('image.webp')
```

### 3. Búsqueda Full-Text
```sql
ALTER TABLE products ADD COLUMN search_text tsvector;

CREATE TRIGGER products_search_update
  BEFORE INSERT OR UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION
  tsvector_update_trigger(search_text, 'pg_catalog.spanish', name, description);

CREATE INDEX idx_search ON products USING gin(search_text);
```

### 4. Caché con Next.js
```typescript
// app/api/products/route.ts
export const revalidate = 60; // Revalidar cada 60 segundos
```

### 5. Monitoreo
Usar Sentry para errores:

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "tu_sentry_dsn",
  environment: "production",
});
```

---

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Compilación
npm run build

# Producción
npm start

# Lint
npm run lint

# Tests (si añades después)
npm test
```

---

## URLs Importantes

- **Dashboard Supabase**: https://supabase.com/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Sentry**: https://sentry.io

---

## Troubleshooting

### "NEXT_PUBLIC_SUPABASE_URL not found"
✓ Asegúrate que .env.local esté en root del proyecto

### "Realtime no funciona"
✓ Verifica que Realtime esté habilitado en Supabase Dashboard

### "Errores de RLS"
✓ Revisa que las políticas RLS permitan la acción

### "Imágenes no cargan"
✓ Usa rutas relativas o URLs públicas de Supabase Storage

---

## Soporte

- 📖 [MIGRACION_GUIA.md](MIGRACION_GUIA.md)
- 📋 [CHECKLIST.md](CHECKLIST.md)
- 📚 [EJEMPLOS.md](EJEMPLOS.md)

---

**Última actualización**: Enero 2026  
**Estado**: Production-Ready
