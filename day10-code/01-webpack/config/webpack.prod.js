// 生产环境下使用的配置项
const { resolve } = require('path') //node内置核心模块，用来设置路径。

//引入处理html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将css单独抽取成一个文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入压缩css的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: ['./src/js/app.js', './src/index.html'], // 入口文件配置（简写）
  output: {
    // 输出配置
    filename: './js/app.js', // 输出文件名
    path: resolve(__dirname, '../dist'), //输出文件路径配置
  },
  // 配置loader
  module: {
    rules: [
      // 处理less,并且将样式直接添加到页面上.
      // 如果使用了多个loader,按照从下到上的顺序执行
      {
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [
          // 数组中loader执行是从下到上，从右到左顺序执行
          // 'style-loader', // 创建style标签，添加上js中的css代码
          MiniCssExtractPlugin.loader, // 将css以外链的形式加到html中
          'css-loader', // 将css以commonjs方式整合到js文件中
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009', // display:flex之前个时期写的是display:flexbox. 这种写法现在不用了.所以要写no-2009
                  },
                  stage: 3, // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                }),
                require('postcss-normalize')(),
              ],
              sourceMap: true, //也要生成一个map文件
            },
          },
          'less-loader', // 将less文件解析成css文件
        ],
      },
      // 将js中es6的普通语法转成es5的
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          // 注意: presets是一个数组,里面又套了一个数组
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
                  corejs: { version: 3 }, // 解决warning警告
                  targets: {
                    // 指定兼容性处理哪些浏览器
                    chrome: '58',
                    ie: '9',
                  },
                },
              ],
            ],
            cacheDirectory: true, // 开启babel缓存
          },
        },
      },
      // 处理样式图片资源的loader
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            outputPath: 'imgs', // 决定文件本地输出路径
            publicPath: '../imgs', // 决定图片的url路径, 默认webpack处理完之后,从src下面查找图片.所以修改查找时的图片路径
            name: '[hash:8].[ext]', // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
          },
        },
      },
      // 处理html中的图片
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      // 处理其他静态资源
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]',
        },
      },
    ],
  },
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      cssProcessorOptions: {
        // 解决没有source map问题
        map: {
          inline: false,
          annotation: true,
        },
      },
    }),
  ],
  mode: 'production', //生产环境(二选一)
}
