// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxt/fonts", "@nuxtjs/i18n"],
  fonts: {
    families: [
      {
        name: "Geist",
        provider: "google",
        weights: [300, 375, 400, 600, 800],
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    locales: [
      { code: "nl", name: "Nederlands", file: "nl.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
});
