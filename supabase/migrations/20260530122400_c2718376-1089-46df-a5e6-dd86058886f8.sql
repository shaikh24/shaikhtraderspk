CREATE TABLE public.sample_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text,
  country text,
  product_category text,
  product_specs text NOT NULL,
  courier_account text,
  courier_provider text,
  shipping_address text,
  request_type text NOT NULL DEFAULT 'single',
  notes text
);

GRANT INSERT ON public.sample_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.sample_requests TO authenticated;
GRANT ALL ON public.sample_requests TO service_role;

ALTER TABLE public.sample_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can request a sample"
ON public.sample_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can read sample requests"
ON public.sample_requests FOR SELECT
TO authenticated
USING (true);