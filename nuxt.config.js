var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tree-shaking-lodash',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      // Key concept: Scan whole project (for every .js file and <script> tag)
      // and then, split / recompile every existing global import (import _ from 'lodash' or import { something } from 'lodash' ) into modularized import
      // so it will allow the cherrypick process by lodash-webpack-plugin.
      // Please refer to https://www.npmjs.com/package/babel-plugin-lodash
      "plugins": ["lodash"],
      // End of Replace / Recompile existing import into modularized import
      presets() {
        return [
          // [
          //   '@nuxt/babel-preset-app',
          //   {
          //     corejs: { version: 3 }
          //   }
          // ], // Remarked for testing purposes only. (not a part of this topic / OoT)
          // #region (Documentation stated need this region, but no error shown after being remarked???)
          // ["@babel/env", { "targets": { "node": 6 } }] // (Documentation stated need this, but no error shown after being remarked???)
          // #endregion
        ]
      }
    },
    /* Cherry pick unused lodash modules */
    // Please refer to https://github.com/lodash/lodash-webpack-plugin
    // #region (Documentation stated need this region, but no error shown after being remarked???)
    // extend(config, _) { // 
    //   config.module.rules.push({
    //     'loader': 'babel-loader',
    //     'test': /\.js$/,
    //     'exclude': /node_modules/,
    //     'options': {
    //       'plugins': ['lodash'],
    //       'presets': [['@babel/env', { 'modules': false, 'targets': { 'node': 6 } }]]
    //     }
    //   })
    // },
    // #endregion
    'plugins': [
      // Automatically cherry pick
      new LodashModuleReplacementPlugin()
      // Whitelist modules (manually)
      // new LodashModuleReplacementPlugin({
      //   'shorthands': false,
      //   'cloning': false,
      //   'currying': false,
      //   'caching': false,
      //   'collections': false,
      //   'exotics': false,
      //   'guards': false,
      //   'metadata': false,
      //   'deburring': false,
      //   'unicode': false,
      //   'chaining': false,
      //   'memoizing': false,
      //   'coercions': false,
      //   'flattening': false,
      //   'paths': false,
      //   'placeholders': false,
      // })
    ]
    /* End of Cherry pick unused lodash modules */
  },
}
