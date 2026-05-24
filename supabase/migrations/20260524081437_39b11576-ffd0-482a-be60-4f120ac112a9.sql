
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text,
  email text not null,
  phone text,
  country text,
  product_category text,
  product_requirement text,
  quantity text,
  shipping_preference text,
  budget_range text,
  message text,
  source text default 'website',
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "Anyone can submit an inquiry"
  on public.inquiries for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can read inquiries"
  on public.inquiries for select
  to authenticated
  using (true);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can read subscribers"
  on public.newsletter_subscribers for select
  to authenticated
  using (true);
