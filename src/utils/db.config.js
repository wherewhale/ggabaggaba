import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://aetalrnekdtgfuqdtlvl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldGFscm5la2R0Z2Z1cWR0bHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMzQ2MjksImV4cCI6MjA1NjcxMDYyOX0.w4cNlxOljWQ7ayN32Db4WCnUY2fHSvTv3nPlwmHGl4c"
);

export default supabase;