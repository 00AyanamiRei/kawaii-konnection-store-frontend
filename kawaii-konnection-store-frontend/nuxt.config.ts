// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    'nuxt-primevue'
  ],
  primevue: {
    options: {
        ripple: true
    },
    comments: {
        include: ['Button']
    }
  },
  css: ['primevue/resources/themes/lara-light-teal/theme.css']
})
