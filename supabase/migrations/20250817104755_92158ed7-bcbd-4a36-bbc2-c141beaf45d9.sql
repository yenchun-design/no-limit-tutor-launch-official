-- Remove the public read policy that allows anyone to harvest email addresses
DROP POLICY IF EXISTS "Allow public read of email_list" ON public.email_list;

-- Create a secure policy that only allows authenticated admin users to read email addresses
-- This prevents spam harvesting while maintaining functionality for legitimate admin access
CREATE POLICY "Only authenticated users can read email_list" 
ON public.email_list 
FOR SELECT 
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Keep the public insert policy so visitors can still subscribe
-- The existing "Allow public insert of email_list" policy remains unchanged