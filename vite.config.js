import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://komiku-api.fly.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
