import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  server: { https: true },
  plugins: [react(), basicSsl(), eslint()],
});
