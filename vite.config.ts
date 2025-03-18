import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/schminho.github.io/", // 👈 Important: Match your GitHub repo name
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-bundle.js", // 👈 Rename main JS files
        chunkFileNames: "assets/[name]-chunk.js", // 👈 Rename chunked JS files
        assetFileNames: "assets/[name].[ext]" // Keeps assets organized
      }
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  preview: {
    port: 5173,
  },
});
