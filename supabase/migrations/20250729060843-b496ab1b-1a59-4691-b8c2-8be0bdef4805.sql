-- Create email_list table for collecting email subscriptions
CREATE TABLE IF NOT EXISTS public.email_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_list ENABLE ROW LEVEL SECURITY;

-- Create policies for email list
CREATE POLICY "Allow public read of email_list" 
ON public.email_list 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert of email_list" 
ON public.email_list 
FOR INSERT 
WITH CHECK (true);