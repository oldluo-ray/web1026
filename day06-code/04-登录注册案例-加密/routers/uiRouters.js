// 1. 创建Router对象
const express = require('express')
const path = require('path')
const router = express.Router()
const userModel = require('../moogoose/model/model')

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

router.get('/userCenter', async (req, res) => {
  // 把ejs渲染之后的内容返回即可
  // 这里要获取cookie的信息, 如果有指定的信息,认为之前登陆过了,直接渲染页面接口
  // 如果没有指定数据,则认为之前没有登录,就重定向到登录页面
  // console.log(req.cookies)
  console.log(req.session)
  // req.session.xxx 这行代码执行,做了什么呢?
  // 1. 服务器会根据cookie传过来的sessionid去session中查找指定的数据
  // 2. 查找完毕之后,有一个session对象,如果找到指定数据了,这个对象中就会有对应的这个数据,
  // 如果没有这个数据,则没有对应的属性
  const { uid } = req.session
  if (uid) {
    // 有uid表示登录生效.所以要去数据库中根据id,查找当前用户数据,动态渲染用户名
    // 根据uid找到用户名
    const user = await userModel.findOne({ _id: uid }, { name: 1 })
    res.render('userCenter', { username: user.name })
  } else {
    //重定向
    res.redirect('http://localhost:5000/login')
  }
  // if (username) {
  //   // 表示之前登陆过
  //   // res.render(模板名称,数据)
  //   res.render('userCenter', { username })
  // } else {
  //   // 表示之前没有登录
  //   res.redirect('http://localhost:5000/login')
  // }
})

module.exports = router
