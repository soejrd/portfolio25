// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxt/fonts", "nuxt-aos"],
  fonts: {
    families: [
      {
        name: "Geist",
        provider: "google",
        weights: [300, 375, 400, 600, 800],
      },
    ],
  },
    aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    duration: 400, // values from 0 to 3000, with step 50ms
    offset: 150,
    easing: 'ease-out-sine',
    once: true,
    anchorPlacement: 'top-center',

  }
});
