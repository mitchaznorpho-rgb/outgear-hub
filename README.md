# OutGear Hub — Leaflet Starter (Prisma fix + GitHub workflows)

This package is pre-wired so you only need to:
1) Upload to a new GitHub repo
2) Add two repo secrets
   - `DATABASE_URL` = Supabase **pooled** URL (port 6543, `pgbouncer=true`)
   - `DIRECT_URL` = Supabase **direct** URL (port 5432)
3) Go to **Actions → Migrate DB → Run workflow** (then optionally run **Seed DB**)

Deployed on Vercel? Add only `DATABASE_URL` there (pooled). No map tokens required.

## Local dev (optional)
```bash
docker compose up -d
npm install
cp .env.example .env
# fill DATABASE_URL (local or Supabase)
npx prisma migrate dev --name init
npm run dev
```
