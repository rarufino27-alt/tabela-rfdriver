/* =========================================================
   SUPABASE — INFRAESTRUTURA ÚNICA
   Arquivo: core/supabase.js
   Responsabilidade: conexão + auth
========================================================= */

if (typeof supabase === "undefined") {
  throw new Error("Supabase CDN não carregado.");
}

const SUPABASE_URL = "https://msnqiiwcityikslikbow.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbnFpaXdjaXR5aWtzbGlrYm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDM5OTgsImV4cCI6MjA4MzI3OTk5OH0.0KyaSuL5At4_Cfa4TOM7kvvkVYv-gmR2sb7vX6VHkaU";

/*
  GRUPO FIXO DO APP
*/
const GRUPO_ID_FIXO = "155c396c-0dec-4db8-ad61-cb680b4f00d7";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.SUPABASE = {
  client: supabaseClient,
  GRUPO_ID: GRUPO_ID_FIXO
};