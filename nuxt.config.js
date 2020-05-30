module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'g2test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  vendor: ['jquery', 'bootstrap-vue'],
  modules: ['bootstrap-vue/nuxt'],
  css: [
    { src: '~assets/sass/main.sass', lang: 'sass' },
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'catalog2',
        path: '/catalog*',
        component: resolve(__dirname, 'pages/catalog.vue')
      })
    }
  }
}

