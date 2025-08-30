// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    site: 'https://philipholy.com',
    integrations: [mdx(), sitemap()],

    // https://docs.astro.build/en/guides/routing/#configured-redirects
    redirects: {
        "/articles": "/",
    },

    // https://docs.astro.build/en/guides/prefetch/
    prefetch: true,

    adapter: cloudflare()
});