/**
 *
 *
 *  模块化
 *
 *      在浏览器中使用commonjs:
 *      浏览器默认不支持commonjs语法,所以需要使用browserify的包将commonjs解析成浏览器任务的代码
 *
 *      es6模块化:
 *      浏览器默认有不支持. 先使用babel的包,将es6转成commonjs,然后再根据browserify转成浏览器认识的
 *
 *       导出:
 *       export default 1
 *       export {username, fun}
 *       对应的导入:
 *       import xxx, {username, fun} from '路径'
 *
 *  gulp
 *
 *      是前端一个自动化构建工具.主要依靠各种插件
 *
 *      使用:
 *       1. 定义gulpfile.js配置文件
 *       2. 定义任务  gulp.task('任务名', 回调函数)
 *       3. gulp-uglify 压缩js
 *          gulp-cssmin 压缩css
 *          gulp-concat 合并js/css文件
 *          gulp-rename 重命名
 *
 *       4. gulp的api:
 *
 *              gulp.src(文件的路径) 读取文件
 *              gulp.dest(文件夹的路径) 将解析后的代码输出到指定的文件夹里面
 *              gulp.watch(文件的路径) 监听文件变化
 *
 *
 *      默认任务: gulp.task('default', 回调) 执行默认任务时,可以直接使用gulp
 *
 *
 *
 *  webpack
 *
 *      也是一个自动化的构建工具
 *      将项目中所有的静态资源打包到一起
 *
 *      五大核心:
 *
 *          入口: 指定webpack工作的入口文件 entry
 *          出口: 打包完毕之后,输出到哪个文件  output
 *          加载器: webpack自身可以处理json和es6模块语法.其他资源文件无法处理.这时使用加载器
 *          插件: 如果加载器也无法满足需求,这时去找插件
 *          模式: 生产模式/开发模式
 *
 *
 *
 *    webpack的配置文件: webpack.config.js
 *
 *          module.exports = {
 *
 *                  entry: '入口文件路径',
 *                  output: {
 *                      filename: '文件名'
 *                      path: 文件的路径
 *                  },
 *
 *                  mode: development,
 *
 *                  module: {
 *
 *                      rules: [
 *                          {
 *                              test:  /\.less$/,
 *                              loader: '加载器名称' 只用一个加载器
 *                              use: ['加载器的名称', '加载器的名称'] 从右往左一次执行
 *                          }
 *
 *                      ]
 *                  }
 *
 *
 *
 *
 *
 *         }
 *
 *
 *
 *
 *
 *
 *
 */
