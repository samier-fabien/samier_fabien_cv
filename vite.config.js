import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/samier_fabien_cv/",
  assetsInlineLimit: 0,
  build: {
    outDir: "docs",
  },
});
