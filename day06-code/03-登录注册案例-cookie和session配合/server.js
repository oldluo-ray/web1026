;(async function () {
  const express = require('express')
  // 导入连接数据库的promise
  const db = require('./moogoose/db/db')
  // 引入操作cookie的中间件
  const cookieParser = require('cookie-parser')

  // 引入express操作session的包
  const session = require('express-session')
  // 引入把session数据存储道mongodb中的包
  const MongoStore = require('connect-mongo')(session)

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
    // 使用cookie-parser这个中间件
    app.use(cookieParser())

    // 处理session的代码
    app.use(
      session({
        name: 'userid', //设置cookie的键，默认值是：connect.sid
        secret: 'atguigu', //参与加密的字符串（又称签名）
        saveUninitialized: false, //是否在存储内容之前创建会话
        resave: true, //是否在每次请求时，强制重新保存session，即使他们没有变化
        store: new MongoStore({
          url: 'mongodb://localhost:27017/sessions_container',
          touchAfter: 24 * 3600, //修改频率（例：//在24小时之内只更新一次）
        }),
        cookie: {
          httpOnly: true, // 开启后前端无法通过 JS 操作cookie
          maxAge: 1000 * 30, // 设置cookie的过期时间
        },
      })
    )

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
