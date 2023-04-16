import { NuxtConfig } from '@nuxt/types';
require('dotenv').config();
const environment = process.env.NODE_ENV || 'development';
const envSet = require(`./env.${environment}.ts`);

const nuxtConfig: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  dev: process.env.NODE_ENV !== 'production',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ai-coordination-front',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [],
  },
  env: envSet,
  server: {
    port:3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    redirect: {
      home: false,
      logout: false,
      callback: false
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: envSet.API_URL + '/api/login', method: 'post', propertyName: 'data', headers: {'content-Type': 'application/json'}},
          logout: false,
          user: { url: envSet.API_URL + '/api/member', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  }
}
//$authの型定義
declare module 'vue/types/vue' {
  interface Vue {
    $auth: any
  }
}

export default nuxtConfig
