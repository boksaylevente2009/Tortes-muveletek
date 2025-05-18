import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    sourcemap: true,
  },
  server: {
    port: 8080,
    open: false,
  },
});
