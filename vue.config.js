module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        service: '@/service',
        views: '@/views',
        utils: '@/utils'
      }
    }
  },
  devServer: {
    proxy: {
      //解决跨域问题
      '^/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
        target: 'https://autumnfish.cn/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
