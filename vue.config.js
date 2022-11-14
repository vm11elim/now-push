const { defineConfig } = require('@vue/cli-service')

var path = require('path')
module.exports = defineConfig({
  // compress: true,
  // disableHostCheck: true,

  transpileDependencies: true,

  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
