const path = require('path')
const webpack = require('webpack')
const apiConfig = require('./api.config')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Takstar',
    titleTemplate: '%s - Guangdong Takstar Electronic Co., Ltd.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e80f20' },
  plugins: [
    { src: '~plugins/js/nuxt-swiper-plugin.js', ssr: true },
    { src: '~plugins/js/vue2-google-maps.js', ssr: false }
  ],
  // 公共全局CSS
  css: [
    'assets/css/bootstrap.css',
    'assets/css/swiper.min.css',
    'assets/css/style.css',
    'assets/fonts/iconfont.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
     * vendor libraries (依赖库)
     */
    vendor: [
      '~plugins/js/jquery.min.js',
      '~plugins/js/bootstrap.min.js',
      'axios',
      '~plugins/js/zoom.js'
    ],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    extend(config, { isClient }) {
      if (isClient) {
        config.entry.vendor.push('babel-polyfill')
      }
    }
  },

  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: apiConfig.baseUrl,
    prefixImg: apiConfig.prefixImg
  }
}
