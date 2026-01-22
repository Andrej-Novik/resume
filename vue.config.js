const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // GitHub Pages serves the site from a subpath (e.g. /resume/),
  // so use relative asset URLs in production builds.
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: './docs'
})
