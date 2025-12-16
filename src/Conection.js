import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hgtoahxdhlkthddjnqjo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhndG9haHhkaGxrdGhkZGpucWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4OTY1NTIsImV4cCI6MjA4MTQ3MjU1Mn0.nJ8vh7Qu_tlZAilc7qo6NxgJUkSHtKnxREY07ZzcRJA'
export const supabase = createClient(supabaseUrl, supabaseKey)