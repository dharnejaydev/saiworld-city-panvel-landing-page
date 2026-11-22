
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://saiworldcitypanvel.net.in",

  output: "static",

  build: {
    format: "directory",
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you/"),
    }),
  ],
});
