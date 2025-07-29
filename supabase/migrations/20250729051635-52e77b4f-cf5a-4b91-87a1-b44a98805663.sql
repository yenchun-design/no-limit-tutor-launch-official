
-- Create the email_list table that the EmailSubscription component expects
CREATE TABLE public.email_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.email_list ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (for public subscription)
CREATE POLICY "Anyone can subscribe to email list" 
  ON public.email_list 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading email subscriptions (for admin purposes)
CREATE POLICY "Allow reading email subscriptions" 
  ON public.email_list 
  FOR SELECT 
  USING (true);
