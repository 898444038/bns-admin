/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
==========================================================================================*/
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // alias 配置
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  // CSS 相关选项
  css: {
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    modules: false
  },
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  configureWebpack: {
    plugins:[
      new CompressionWebpackPlugin({
        // filename: '[path].gz[query]',
        algorithm: 'gzip',
        // test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        test: /\.(js|css|svg|woff|ttf|json|html)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}

