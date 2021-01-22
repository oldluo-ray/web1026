const gulp = require('gulp')

// 添加gulp的插件
// 检查js语法是否符合规范的插件
const jshint = require('gulp-jshint')
// 使用babel编译es6模块代码的插件
const babel = require('gulp-babel')
// 将commonjs编译成浏览器认识的语法
const browserify = require('gulp-browserify')
// 给文件重命名的
const rename = require('gulp-rename')

// 给gulp添加任务

// gulp.task('任务名称', 执行这个任务时的回调函数)
gulp.task('test', async function () {
  console.log('gulp的test任务执行了')
})

// 检查js语法规范的任务
gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
})

// 将es6模块解析成commonjs的任务
gulp.task(
  'babel',
  () =>
    gulp
      .src('./src/js/*.js')
      .pipe(
        babel({
          //进行语法转换
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest('build/js')) //输出到指定目录
)

// 解析commonjs的任务
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/index.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
})

//配置了一个任务: 执行了这个default任务的时候,其实就是将制定任务依次执行
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'))
