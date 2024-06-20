import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['~/assets/scss/general.scss'],
  $development: {
    app: {
      head: {
        title: "DEV",
      },
    },
  },
  $production: {
    app: {
      head: {
        title: "nuxt 3 task managements",
      },
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

  ],
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/scss/general.scss" as *;',
    //     },
    //   },
    // },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
