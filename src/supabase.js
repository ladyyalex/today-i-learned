import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mwmizwlqleszmudxkjaz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bWl6d2xxbGVzem11ZHhramF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyODA0NjYsImV4cCI6MjAxMjg1NjQ2Nn0.HinNEpWZharFDVSctw_yssjr66iAhF3UUTOfT2C5YUo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
