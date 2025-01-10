import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.bgm.tv/", // 目标服务器地址
        changeOrigin: true, // 修改请求的 origin 为目标服务器的 origin
        rewrite: (path) => path.replace(/^\/api/, "https://api.bgm.tv/"), // 重写路径（可选）
      },
    },
  },
});
