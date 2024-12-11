import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/apostrophe-astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'APOS');

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    apostrophe({
      aposHost: 'http://localhost:3000',
      widgetsMapping: './src/widgets',
      templatesMapping: './src/templates',
      forwardHeaders: [
        'content-security-policy',
        'strict-transport-security',
        'x-frame-options',
        'referrer-policy',
        'cache-control',
        'host'
      ]
    })
  ],
  vite: {
    ssr: {
      // Ne pas externaliser le plugin @apostrophecms/apostrophe-astro, nous avons besoin
      // pour pouvoir y utiliser des URL virtuels :.
      noExternal: [ '@apostrophecms/apostrophe-astro' ],
    },
    define: {
      'process.env.APOS_EXTERNAL_FRONT_KEY': JSON.stringify(env.APOS_EXTERNAL_FRONT_KEY),
      'process.env.APOS_HOST': JSON.stringify(env.APOS_HOST)
    }
  }
});
