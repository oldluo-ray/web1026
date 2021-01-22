const { resolve } = require('path') //node内置核心模块，用来设置路径。
module.exports = {
  entry: './src/js/app.js', // 入口文件配置（简写）
  //   完整写法：
  // 	entry:{
  // 	  main:'./src/js/app.js'
  // 	}

  output: {
    // 输出配置
    filename: './js/app.js', // 输出文件名
    path: resolve(__dirname, 'dist'), //输出文件路径配置
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
          'style-loader', // 创建style标签，添加上js中的css代码
          'css-loader', // 将css以commonjs方式整合到js文件中
          'less-loader', // 将less文件解析成css文件
        ],
      },
    ],
  },

  mode: 'development', //开发环境(二选一)
  //   mode: 'production'   //生产环境(二选一)
}
