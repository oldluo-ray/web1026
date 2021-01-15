/**
 * 
1. 引入express
const express = require('express')
2. 使用express创建一个应用对象
const app = express()
// 在响应头中不显示后台是使用哪种开发语言或库
app.disable('x-powered-by')

3.监听get请求 第一个参数是请求的路径
app.get('/', (request, response) => {
  request.query //获取get请求的查询字符串
  // 响应数据
  response.send('<h3>express返回的数据</h3>')
})
4. 监听post请求
app.post('/',(request,response)=>{
  response.body 获取post请求上传的数据,但是默认拿不到,需要使用中间件配合
  response.send('接收到了post请求')
})

5. 开启服务器
app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/

// express是一个用来在node平台下,快速搭建服务器的第三方的包
// 1. 引入express
const express = require('express')
// 2. 创建一个应用对象(类似于node原生的server,但是比server功能强大)
const app = express()

// 定义处理请求的方法
// app.get/post/all
// app.get('/index', (request, response) => {
//   console.log('/index接收到get请求了')
// })
// app.get('/xxx', (request, response) => {
//   console.log('/xxx接收到get请求了')
// })
// app.post('/xxx', (request, response) => {
//   console.log('/xxx接收到post请求了')
// })
app.all('/xxx', (request, response) => {
  console.log('/xxx接收到请求了')
  response.send('<h3>中文</h3>')
})

// 3. 开启服务
app.listen(5000, (err) => {
  if (err) console.log('express服务器启动失败', err)
  else console.log('express服务器启动成功')
})
