import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { terser } from 'rollup-plugin-terser'



// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    terser({
      format: {
        comments: false
      },
      compress: {
        drop_console: true
      },
      mangle: true
    })
    ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000 * 1000, // 2 MB
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
