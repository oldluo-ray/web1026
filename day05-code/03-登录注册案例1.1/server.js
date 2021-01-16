;(async function () {
  const express = require('express')
  // 导入连接数据库的promise
  const db = require('./moogoose/db/db')
  //导入model对象
  const usrModel = require('./moogoose/model/model')

  try {
    // 先去等待数据库连接,数据库连接成功,再去开启服务器
    await db

    const app = express()

    // 用于响应静态资源
    app.use(express.static('public'))
    // 引用内置的中间件,使我们可以通过req.body获取到post上传的数据
    app.use(express.urlencoded({ extended: true }))

    // 定义路由
    // 注册的路由
    app.post('/register', async (req, res) => {
      // 获取req.body的数据
      // 用户名,密码,确认密码, 但是只需要存储用户名和密码
      // console.log(req.body)
      const { username, password } = req.body
      // 获取用户上传的数据,添加到数据库中
      await usrModel.create({
        name: username,
        password,
      })

      // 如果代码可以执行到这里,表示数据添加成功
      res.send('注册成功')
    })
    // 登录的路由
    app.post('/login', async (req, res) => {
      // 1. 接收数据 req.body
      const { username, password } = req.body
      // 2. 根据数据去数据库中查询
      // 如果查找成功,就是一个对象,否则是一个null
      const user = await usrModel.findOne({ name: username, password })
      // 3. 根据查询结果,判断,提示用户
      if (user) {
        // 表示登录成功,重定向到一个个人中心
        res.redirect('http://localhost:5000/userCenter.html?name='+user.name)
      } else {
        res.send('用户名或密码错误')
      }
    })

    app.listen(5000, (err) => {
      if (err) console.log(err)
      else console.log('服务器启动成功')
    })
  } catch (error) {
    console.log('数据库连接失败', error)
  }
})()
