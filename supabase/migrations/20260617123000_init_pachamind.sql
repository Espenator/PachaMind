create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lessons_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  is_completed boolean not null default false,
  note text,
  last_opened_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_slug)
);

create table if not exists public.reflections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  prompt text not null,
  text text not null,
  saved_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_slug)
);

create trigger profiles_set_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

create trigger lessons_progress_set_updated_at
before update on public.lessons_progress
for each row
execute function public.set_updated_at();

create trigger reflections_set_updated_at
before update on public.reflections
for each row
execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.lessons_progress enable row level security;
alter table public.reflections enable row level security;

create policy "Profiles are readable by owner"
  on public.profiles
  for select
  using ((select auth.uid()) = id);

create policy "Profiles are insertable by owner"
  on public.profiles
  for insert
  with check ((select auth.uid()) = id);

create policy "Profiles are updatable by owner"
  on public.profiles
  for update
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "Lesson progress is readable by owner"
  on public.lessons_progress
  for select
  using ((select auth.uid()) = user_id);

create policy "Lesson progress is insertable by owner"
  on public.lessons_progress
  for insert
  with check ((select auth.uid()) = user_id);

create policy "Lesson progress is updatable by owner"
  on public.lessons_progress
  for update
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Lesson progress is deletable by owner"
  on public.lessons_progress
  for delete
  using ((select auth.uid()) = user_id);

create policy "Reflections are readable by owner"
  on public.reflections
  for select
  using ((select auth.uid()) = user_id);

create policy "Reflections are insertable by owner"
  on public.reflections
  for insert
  with check ((select auth.uid()) = user_id);

create policy "Reflections are updatable by owner"
  on public.reflections
  for update
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Reflections are deletable by owner"
  on public.reflections
  for delete
  using ((select auth.uid()) = user_id);
