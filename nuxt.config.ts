import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Daptee Challenge',
      meta: [
        { name: 'description', content: 'Prueba tecnica de Daptee'}
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-snackbar'
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000
  }
})