import { repositoryName } from "./slicemachine.config.json";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/prismic"],
  
  i18n: {
    locales: ['en-us', 'fr-fr'],
    defaultLocale: 'en-us'
  },

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: "home",
          path: "/:lang?",
        },
        {
          type: "article",
          path: "/:lang?/:uid",
        },
      ]
    }
  },
})