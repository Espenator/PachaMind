# Supabase schema and migrations

This directory holds the SQL schema used by PachaMind in production.

## Link your Supabase project

1. Install the Supabase CLI: `npm i -g supabase`
2. Login: `supabase login`
3. Link this repo to your project:
   - `supabase link --project-ref <YOUR_SUPABASE_PROJECT_REF>`

## Run migrations

Apply all migrations to the linked project:

```bash
supabase db push
```

Or apply locally with a local Supabase stack:

```bash
supabase start
supabase db reset
```

## Schema summary

- `profiles`: per-user profile data (`display_name`)
- `lessons_progress`: per-user lesson completion, last opened lesson time, and per-lesson reflective note
- `reflections`: per-user reflection journal entries

All three tables have Row Level Security enabled with owner-only policies.
