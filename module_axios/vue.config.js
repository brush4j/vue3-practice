module.exports = {
  publicPath: './',
  outputDir: 'dist',
  runtimeCompiler: true,
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // devServer: {
  //     host: '0.0.0.0', //target host
  //     port: 8080,
  //     proxy: {
  //         '/api': {
  //             target: 'http://localhost:8081/api', // 代理地址，这里设置的地址会代替axios中设置的baseURL
  //             changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
  //             ws: true, // proxy websockets
  //             //pathRewrite方法重写url
  //             pathRewrite: {
  //                 '^/api': '/api' // 重写之后url为 http://localhost:8081/api/xxxx
  //             }
  //         }
  //     }
  // }
}