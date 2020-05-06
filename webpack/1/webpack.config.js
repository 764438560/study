const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:5*1024,
                    esModule:false,
                    name:'[hash:10].[ext]'//图片名称长度
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'production'
}