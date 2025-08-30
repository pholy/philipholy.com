// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://philipholy.com',
	integrations: [mdx(), sitemap()],
    redirects: {
        "/articles": "/",
    }
});
