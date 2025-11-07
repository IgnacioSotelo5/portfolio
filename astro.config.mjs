import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import shikiTheme from './src/styles/shiki-theme.json';

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
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: shikiTheme,
      wrap: true
    }
  }
})