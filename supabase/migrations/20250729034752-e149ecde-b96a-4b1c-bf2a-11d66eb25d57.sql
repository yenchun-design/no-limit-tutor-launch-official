
-- Create a table for email subscriptions
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Add Row Level Security (RLS) - this data should be accessible for analytics
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert emails (for subscription)
CREATE POLICY "Anyone can subscribe with email" 
  ON public.email_subscriptions 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policy that only allows authenticated users to view emails (for admin purposes)
CREATE POLICY "Only authenticated users can view subscriptions" 
  ON public.email_subscriptions 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create an index on email for better performance
CREATE INDEX idx_email_subscriptions_email ON public.email_subscriptions(email);

-- Create an index on subscribed_at for better performance when sorting
CREATE INDEX idx_email_subscriptions_subscribed_at ON public.email_subscriptions(subscribed_at);
