
-- Fix the RLS policy to allow the count function to work properly
-- Remove the restrictive policy that blocks all selects
DROP POLICY IF EXISTS "Allow public count only" ON public.email_list;

-- Create a policy that allows the count function to access the data
-- This policy allows SELECT for counting purposes but still protects individual email data
CREATE POLICY "Allow count access" 
  ON public.email_list 
  FOR SELECT 
  USING (true);

-- Revoke direct table access from anon users to prevent direct email reading
REVOKE SELECT ON public.email_list FROM anon;
REVOKE SELECT ON public.email_list FROM authenticated;

-- But ensure the count function can still be executed by anyone
GRANT EXECUTE ON FUNCTION public.get_email_count() TO anon;
GRANT EXECUTE ON FUNCTION public.get_email_count() TO authenticated;

-- Make sure the function has the right permissions to access the table
GRANT SELECT ON public.email_list TO postgres;
