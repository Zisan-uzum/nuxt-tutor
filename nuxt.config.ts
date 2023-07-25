// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    openAi: {
      secretKey: process.env.NUXT_OPEN_AI_SECRET_KEY
    }
  },
  devtools: { enabled: true },

})

