-- Clean up any potential schema conflicts
DROP TABLE IF EXISTS public.email_subscriptions CASCADE;

-- Clean up existing policies first
DROP POLICY IF EXISTS "Allow reading email subscriptions" ON public.email_list;
DROP POLICY IF EXISTS "Anyone can subscribe to email list" ON public.email_list;

-- Ensure proper unique constraint on email
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'email_list_email_unique' 
        AND table_name = 'email_list'
    ) THEN
        ALTER TABLE public.email_list ADD CONSTRAINT email_list_email_unique UNIQUE (email);
    END IF;
END $$;

-- Ensure RLS is enabled
ALTER TABLE public.email_list ENABLE ROW LEVEL SECURITY;

-- Create clean, simple RLS policies
CREATE POLICY "public_read_email_list" ON public.email_list
FOR SELECT USING (true);

CREATE POLICY "public_insert_email_list" ON public.email_list
FOR INSERT WITH CHECK (true);