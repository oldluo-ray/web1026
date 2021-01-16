// 1. 创建Router对象
const express = require('express')
const path = require('path')
const router = express.Router()

// 定义返回登录和注册页面的路由
router.get('/register', (req, res) => {
  // 将public文件夹里面的register.html文件直接响应给浏览器
  //拼接路径
  const regPath = path.resolve(__dirname, '../public/register.html')
  res.sendFile(regPath)
})
router.get('/login', (req, res) => {
  // 将public文件夹里面的login.html文件直接响应给浏览器
  //拼接路径
  const regPath = path.resolve(__dirname, '../public/login.html')
  res.sendFile(regPath)
})

router.get('/userCenter', (req, res) => {
  // 把ejs渲染之后的内容返回即可
  const { username } = req.query
  // res.render(模板名称,数据)
  res.render('userCenter', { username: username })
})

module.exports = router
