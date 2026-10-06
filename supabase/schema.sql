create table if not exists public.radar_profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 activity text default '', keywords text default '', region text default '', min_amount numeric default 0, max_amount numeric default 999999999,
 created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.opportunities (
 id text primary key, title text not null, buyer text, region text, amount numeric, deadline date, cpv text, tags text, source text, source_url text, raw jsonb, created_at timestamptz default now()
);
create table if not exists public.opportunity_scores (
 user_id uuid references auth.users(id) on delete cascade, opportunity_id text references public.opportunities(id) on delete cascade, score integer, factors jsonb, created_at timestamptz default now(), primary key(user_id,opportunity_id)
);
create table if not exists public.saved_opportunities (
 user_id uuid references auth.users(id) on delete cascade, opportunity_id text references public.opportunities(id) on delete cascade, created_at timestamptz default now(), primary key(user_id,opportunity_id)
);
create table if not exists public.decisions (
 user_id uuid references auth.users(id) on delete cascade, opportunity_id text references public.opportunities(id) on delete cascade, decision text check(decision in ('GO','NO-GO')), note text, created_at timestamptz default now(), primary key(user_id,opportunity_id)
);
create table if not exists public.ingestion_runs (
 id bigint generated always as identity primary key, source text, started_at timestamptz default now(), finished_at timestamptz, status text, records integer default 0, error text
);
alter table public.radar_profiles enable row level security;
alter table public.opportunity_scores enable row level security;
alter table public.saved_opportunities enable row level security;
alter table public.decisions enable row level security;
create policy "own radar" on public.radar_profiles for all using (auth.uid()=id) with check (auth.uid()=id);
create policy "own scores" on public.opportunity_scores for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "own saved" on public.saved_opportunities for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "own decisions" on public.decisions for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
