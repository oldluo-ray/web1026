;(async function () {
  const express = require('express')
  // 导入连接数据库的promise
  const db = require('./moogoose/db/db')

  // 登录注册逻辑路由引入
  const logicRouter = require('./routers/logicRouters')
  // 登录注册页面响应的路由引入
  const uiRouter = require('./routers/uiRouters')

  try {
    // 先去等待数据库连接,数据库连接成功,再去开启服务器
    await db

    const app = express()

    // 用于响应静态资源
    app.use(express.static('public'))
    // 引用内置的中间件,使我们可以通过req.body获取到post上传的数据
    app.use(express.urlencoded({ extended: true }))
    //使用登录注册路由
    app.use(logicRouter)

    // 使用直接响应登录注册页面的路由
    app.use(uiRouter)

    // 告诉express. 当前使用的模板引擎是ejs
    app.set('view engine', 'ejs')
    // 告诉express. 我们定义的模板所处的文件夹是谁
    app.set('views', './views')

    app.listen(5000, (err) => {
      if (err) console.log(err)
      else console.log('服务器启动成功')
    })
  } catch (error) {
    console.log('数据库连接失败', error)
  }
})()
