import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detecta si el deploy es GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? "/Mini-Project1-React/" : "/",
});