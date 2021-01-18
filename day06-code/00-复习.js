/**
 *
 *  1. 利用express快速搭建静态资源服务器
 *  app.use(express.static(存放静态资源的文件夹路径))
 *
 *  2. 路由器中间件
 *  2.1 在执行的定义路由的模块中,创建路由器对象
 *  const router = express.Router()
 *
 *  2.2 定义路由
 *  router.get/post/all
 *
 *  2.3 导出这个路由器
 *  module.exports = router
 *
 *  2.4 在开启服务器的模块中,使用这个路由器
 *  app.use(路由器)
 *
 *  3. ejs node平台下,用来动态渲染页面的一个工具
 *
 *  1. 下载安装  npm i ejs
 *  2. 设置ejs
 *      app.set('view engine', 'ejs') 告诉express,当前使用ejs模板引擎
 *      app.set('views', 存放的模板的路径) 告诉express,ejs模板存放在哪个文件夹下面
 *
 *  3. 动态的渲染模板,并且将渲染后的结果返回给客户端:
 *      响应对象.render('模板名', 数据对象)
 *
 *
 */
