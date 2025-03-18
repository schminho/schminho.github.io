import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",  // ✅ Fix: GitHub Pages auto-detects the correct path
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html", // ✅ Ensures Vite processes `index.html` correctly
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
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
