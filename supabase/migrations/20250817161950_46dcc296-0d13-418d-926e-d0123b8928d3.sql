
-- Create the email_signups table
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for counting and inserting
CREATE POLICY "Allow public count access" 
  ON public.email_signups 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert" 
  ON public.email_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Enable realtime for this table
ALTER TABLE public.email_signups REPLICA IDENTITY FULL;

-- Add table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.email_signups;

-- Create function to get signup count
CREATE OR REPLACE FUNCTION public.get_signup_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.email_signups);
END;
$function$;
