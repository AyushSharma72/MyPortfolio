// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@swc/core": "@swc/core-win32-x64-msvc",
    },
  },
  optimizeDeps: {
    include: ["@swc/core"],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["@swc/core-win32-x64-msvc"],
    },
  },
});
