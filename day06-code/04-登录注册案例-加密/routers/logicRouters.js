// 这个模块用于定义登录和注册的路由
const express = require('express')
const md5 = require('md5')
//导入model对象
const usrModel = require('../moogoose/model/model')
// 创建路由器对象
const router = express.Router()

// 定义路由
// 注册的路由
router.post('/register', async (req, res) => {
  // 获取req.body的数据
  // 用户名,密码,确认密码, 但是只需要存储用户名和密码
  // console.log(req.body)
  const { username, password } = req.body
  // 获取用户上传的数据,添加到数据库中
  await usrModel.create({
    name: username,
    password: md5(password),
  })

  // 如果代码可以执行到这里,表示数据添加成功
  setTimeout(() => {
    res.send('注册成功')
  }, 3000)
})
// 登录的路由
router.post('/login', async (req, res) => {
  // 1. 接收数据 req.body
  const { username, password } = req.body
  // 2. 根据数据去数据库中查询
  // 如果查找成功,就是一个对象,否则是一个null
  const user = await usrModel.findOne({
    name: username,
    password: md5(password),
  })
  // 3. 根据查询结果,判断,提示用户
  if (user) {
    // 往session中存储一些用户信息
    // 一般都是存储用户的id
    // req.session.uid执行了之后,做了什么?
    // 1. 在session中开辟空间,储存用户信息
    // 2. 设置了响应头,将sessionid,作为cookie数据,响应给浏览器
    req.session.uid = user._id
    // 表示登录成功,重定向到一个个人中心
    res.redirect('http://localhost:5000/userCenter')
  } else {
    res.send('用户名或密码错误')
  }
})

module.exports = router
