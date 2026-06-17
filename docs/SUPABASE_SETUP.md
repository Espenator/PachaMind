# Supabase setup (production-ready)

Follow these steps to connect PachaMind to a real Supabase backend.

## 1) Create a Supabase project

1. Go to https://supabase.com/ and create a new project.
2. Save your project reference and region.
3. In **Project Settings → API**, copy:
   - `Project URL` **(NEEDS_REAL_CREDENTIALS)**
   - `anon public key` **(NEEDS_REAL_CREDENTIALS)**
   - `service_role key` **(NEEDS_REAL_CREDENTIALS)**

## 2) Configure local environment

1. Create `/home/runner/work/PachaMind/PachaMind/.env.local`.
2. Copy values from `.env.example` and replace placeholders with your real values.
3. Required variables:
   - `NEXT_PUBLIC_SUPABASE_URL` **(NEEDS_REAL_CREDENTIALS)**
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` **(NEEDS_REAL_CREDENTIALS)**
   - `SUPABASE_SERVICE_ROLE_KEY` **(NEEDS_REAL_CREDENTIALS, server-only)**

If any variable is missing, the app throws a clear runtime error and stops.

## 3) Link Supabase CLI and run migrations

From repository root (`/home/runner/work/PachaMind/PachaMind`):

```bash
supabase login
supabase link --project-ref <YOUR_PROJECT_REF>   # NEEDS_REAL_CREDENTIALS
supabase db push
```

This applies the schema in `/home/runner/work/PachaMind/PachaMind/supabase/migrations`.

## 4) Enable email authentication

1. Open Supabase Dashboard → **Authentication → Providers → Email**.
2. Enable Email provider.
3. Configure email templates and redirect URL(s) as needed.
4. Ensure your site URL is set for magic-link redirect handling.

## 5) Verify integration

- Signed-out users: progress/reflections continue in local browser storage.
- Signed-in users: lesson progress, reflections, and profile name persist in Supabase.
- Sign in/out controls appear in the header.

## 6) Tables created by migration

- `profiles` (per-user display name)
- `lessons_progress` (per-user completion + reflective note + last opened)
- `reflections` (per-user saved reflection entries)

All tables enforce owner-only RLS policies.
