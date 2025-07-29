import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://ozrbzymbfhblbxgmpwal.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cmJ6eW1iZmhibGJ4Z21wd2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MDg0NTMsImV4cCI6MjA2OTI4NDQ1M30.FOJg30VtHh_exB1XhKToTswQ70IvIDNM9MsyWEVTlFs';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);