import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // Replace with the production domain before launch.
  output: 'static',
  build: {
    format: 'directory',
  },
});
