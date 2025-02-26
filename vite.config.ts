import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@features": path.resolve(__dirname, "./src/features"),

      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@app": path.resolve(__dirname, "./src/app"),
    },
  },
});
