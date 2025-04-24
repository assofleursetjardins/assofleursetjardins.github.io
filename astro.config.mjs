// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

const { PUBLIC_SITE_URL } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },
  site: PUBLIC_SITE_URL || 'https://salon-fleurs-et-jardins.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), mdx()],
});
