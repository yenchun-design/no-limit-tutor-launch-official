-- Clean up any potential issues and ensure clean state
DROP TABLE IF EXISTS public.email_subscriptions CASCADE;

-- Ensure email_list table has proper structure and constraints
ALTER TABLE public.email_list 
ADD CONSTRAINT IF NOT EXISTS email_list_email_unique UNIQUE (email);

-- Verify RLS is enabled and policies are correct
ALTER TABLE public.email_list ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow reading email subscriptions" ON public.email_list;
DROP POLICY IF EXISTS "Anyone can subscribe to email list" ON public.email_list;

-- Recreate clean RLS policies
CREATE POLICY "public_read_email_list" ON public.email_list
FOR SELECT USING (true);

CREATE POLICY "public_insert_email_list" ON public.email_list
FOR INSERT WITH CHECK (true);

-- Add helpful comment
COMMENT ON TABLE public.email_list IS 'Email subscription list for No Limit Tutor platform';