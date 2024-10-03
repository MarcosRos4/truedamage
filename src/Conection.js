import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ugxusywyxbmxpjocbpdk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVneHVzeXd5eGJteHBqb2NicGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5MDc4NzYsImV4cCI6MjA0MzQ4Mzg3Nn0.wM7tQg_NGaowBU7gp0d7m5cmA-DV3KBU637_NOvidjY"
export const supabase = createClient(supabaseUrl, supabaseKey)