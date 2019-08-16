// vue.config.js
module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production'
    //   ? '/production-sub-path/'
    //   : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://ybtest1.uicp.top/api', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
