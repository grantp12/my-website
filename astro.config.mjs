import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://my-website.grantpayne4.workers.dev',

  // Use the passthrough image service so the build does not depend on
  // `sharp` (a native module that cannot be bundled into a Cloudflare
  // Worker). Images are already optimized WebP with explicit dimensions.
  image: { service: passthroughImageService() },

  integrations: [mdx(), sitemap(), tailwind()],
  output: "hybrid",
  adapter: cloudflare()
});