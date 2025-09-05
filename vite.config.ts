import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/squizzer/", // ← Ajouté pour GitHub Pages
  plugins: [react(), tailwindcss()],
});
