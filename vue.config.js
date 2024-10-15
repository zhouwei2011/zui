const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production'].includes(process.env.NODE_ENV)

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/zrx-admin-ui/' : '/',
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias.set('@', resolve('src'))
    },
    configureWebpack: () => {
        const setting = {
            performance: {
                hints: false
            }
        }
        // IS_PROD &&
        //     Object.assign(setting, {
        //         plugins: [
        //             new BundleAnalyzerPlugin({
        //                 analyzerHost: 'localhost',
        //                 analyzerPort: '9001'
        //             })
        //         ]
        //     })
        return setting
    },
    productionSourceMap: !IS_PROD,
    css: {
        extract: IS_PROD,
        requireModuleExtension: true,
        // 去掉文件名中的 .module
        loaderOptions: {
            scss: {
                additionalData: `@import "@/style/common/variable.scss";`
            }
        }
    }
}
