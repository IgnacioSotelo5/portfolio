import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite:{
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    }
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({context: 'server', access: 'secret'})
    }
  }
})