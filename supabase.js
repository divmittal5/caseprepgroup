// supabase.js



// Initialize Supabase connection
const SUPABASE_URL = 'https://rcjpzwpoyxgqyazourla.supabase.co';  // Replace with your Supabase URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjanB6d3BveXhncXlhem91cmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MzgyNzYsImV4cCI6MjA1MTUxNDI3Nn0.bl0y1oyf9fiyhGL2xyNNpsthrqMax1QFbK0nmotF9uo';  // Replace with your Supabase API key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

