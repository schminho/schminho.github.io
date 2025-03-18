import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/schminho.github.io/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  preview: {
    port: 5173,
  },
});
