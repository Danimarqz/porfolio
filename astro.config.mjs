import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/static'
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    tranlsations: {
      en: './src/i18n/en.json',
      es: './src/i18n/es.json'
    }
  },
  site: 'https://danimarqz.dev/',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
