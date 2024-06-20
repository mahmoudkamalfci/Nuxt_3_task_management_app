/* eslint-disable import/no-unresolved */
// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import  defaultTheme  from './theme'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    defaultTheme,
  })

  app.vueApp.use(vuetify)
})
