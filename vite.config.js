import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/NewYearWish/",
  plugins: [react()],
  server: {
    host: true,   // exposes network IP
    port: 5173,   // optional, default port
  },
});
