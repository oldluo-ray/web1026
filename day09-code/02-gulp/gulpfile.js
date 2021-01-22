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
// 压缩js的插件
const uglify = require('gulp-uglify')
// 编译less的插件
const less = require('gulp-less')
// 处理css兼容性的插件
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼容2版本
//合并文件的插件
const concat = require('gulp-concat')
// 压缩css的插件
const cssmin = require('gulp-cssmin')
// 压缩html的插件
const htmlmin = require('gulp-htmlmin')
// 自动化的插件
const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')

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
    .pipe(livereload());
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
      .pipe(livereload())
)

// 解析commonjs的任务
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/index.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

// 压缩js的任务
gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

// 将less编译成css,然后添加兼容性的代码
gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 合并css文件的任务
gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 压缩css
gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})
// 压缩html的任务
gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})
// 自动化任务
gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})

//配置了一个任务: 执行了这个default任务的时候,其实就是将制定任务依次执行
//如果任务名是default. 则在执行这个任务的时候,可以忽略名字,直接执行gulp即可
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
