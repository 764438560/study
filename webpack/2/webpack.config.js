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
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    mode:'production',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:8080,
        open:true
    }
}