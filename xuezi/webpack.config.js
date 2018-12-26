//webpack的主配置文件
module.exports = {
    // mode: 'development',  //开发模式
    mode: 'production',  //产品模式  
    // 入口(entry)
    entry: './public/js/index.js',
    // 输出(output)
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    // 加载器(loader)——打包各种非js文件
    module: {
        rules: [
            // css模块文件的加载规则
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
    // 插件(plugin)
}