import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Project sites use /<repository>/; sites with a custom domain use /.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": rootDir },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, "index.html"),
        privacyPolicy: path.resolve(rootDir, "privacy-policy/index.html"),
      },
    },
  },
});
