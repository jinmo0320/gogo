import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co`,
  import.meta.env.VITE_SUPABASE_PROJECT_API_KEY
);

const getData = async () => await supabase.from("countries").select();

function Temp() {
  useEffect(() => {
    getData().then(console.log);
  }, []);

  return <div />;
}

export default Temp;
