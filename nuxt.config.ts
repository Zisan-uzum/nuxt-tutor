// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  runtimeConfig: {
    openAi: {
      secretKey: process.env.NUXT_OPEN_AI_SECRET_KEY
    },
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  devtools: { enabled: true },

})

