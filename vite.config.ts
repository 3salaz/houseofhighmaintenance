import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add this if you're using the TypeScript setup with Vite
  build: {
    target: "esnext", // Use the latest supported JavaScript syntax for the build
  },
  server: {
    // Customize the development server options if needed
    port: 3000, // You can change the port if 3000 is already in use
  },
  resolve: {
    alias: {
      // Optional: You can add custom aliases for convenience
      "@components": "/src/components",
      "@assets": "/src/assets",
    },
  },
});
