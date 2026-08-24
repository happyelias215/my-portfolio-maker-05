import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // GitHub Pages project URL:
  // https://happyelias215.github.io/my-portfolio-maker-05/
  vite: {
    base: "/my-portfolio-maker-05/",
    plugins: [
      // Important:
      // Use a Node-compatible Nitro preset for TanStack prerendering.
      nitro({
        preset: "node-server",
      }),
    ],
  },

  tanstackStart: {
    // Your custom SSR/server entry
    server: {
      entry: "server",
    },

    // Generate static HTML for GitHub Pages
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});