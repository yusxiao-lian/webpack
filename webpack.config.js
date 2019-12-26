//加载模板
const path = require('path')
//  导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


//暴露
module.exports = {
    //打包文件的入口
    entry: './src/index.js',
    output: {
        //打包输出的目录
        path: path.resolve(__dirname,'dist'),  //打包后的文件目录,必须为绝对路径
        filename: 'bundle.js'  //打包后的文件名
    },

    //错误映射
    devtool: "source-map", // + 生成映射源代码文件

    // + 开发服务配置
    devServer: {
    port: 8000 // 默认端口是8080
    },

     // 模块加载器配置项
     module: {
        rules: [
            //css
            // {
            //     test: /\.css$/,			// 匹配css扩展名文件
            //     use:[					// 配置loader加载器
            //         'style-loader',		// 把css代码写入到网页中
            //         'css-loader'		// 读取css的代码
            //     ]	
            // },
            //提取css版
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({	// 提取css
                    fallback: "style-loader",
                    use: ["css-loader"]
                  })
            },
            //less
            // {
            //     test: /\.less$/,		// 匹配less扩展名文件
            //     use:[				
            //         'style-loader',		// 把less代码写入到网页中
            //         'css-loader',		// 读取less的代码
            //         'less-loader'		// 解释编译less代码
            //     ]	
            // },
            //提取less版
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                  })
            },
            //图片加载
            {
                test: /\.(png|svg|jpg|gif)$/,	// 匹配图片文件
                use: [
                    {
                        loader: "file-loader",              // 处理图片文件返回链接
                        options: {
                            publicPath: "./images/",   		//  引入图片时会在路径前面加上该选项
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    } 
                ]
            }
        ]
    },


    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取css到dist的style文件夹中

         // 调用清除打包目录插件,先清除再生成
         new CleanWebpackPlugin(),

        //指定默认html模板
        new HtmlWebpackPlugin({
            template: "public/index.html"	// template指定默认html模板
        })
    ]



}