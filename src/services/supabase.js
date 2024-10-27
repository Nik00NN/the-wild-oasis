import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "lbusjbhxnqvgpsnpgfji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxidXNqYmh4bnF2Z3BzbnBnZmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNTI4NDgsImV4cCI6MjA0NTYyODg0OH0.GFQ9bMgoTkLPglyuMFulslEovRGd3S15P7hHoeDKRlE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
