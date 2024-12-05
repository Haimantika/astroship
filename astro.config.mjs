import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix:
      "https://custom-webpage-static-assets-production.fermion.app/6740c123f9b2d21e732cde08-custom-zip-pages/",
  },
  output: "static",

  site: "https://learn.haimantika.com/",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
