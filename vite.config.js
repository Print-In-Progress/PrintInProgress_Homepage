// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/\.json$/],
    },
  },
  optimizeDeps: {
    include: ["*.json"],
  },
  // Enable JSON imports
  json: {
    stringify: true,
  },
});
