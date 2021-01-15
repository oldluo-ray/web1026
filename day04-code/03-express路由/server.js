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


* 一、请求对象（request）
*     request.query  获取GET请求的查询字符串参数获取到的是一个对象
*     request.params 获取路由参数，拿到的是一个对象
*     request.body   获取POST请求的请求体中的参数（必须要借助一个中间件才可以）
*     request.get('xxx') 获取请求头中指定的信息
*
* 二、响应对象（response）
*     response.send('xxxxx') 给客户端一个回应,一般用来响应字符串
*     response.download('相对路径') 给浏览器返回一个下载的响应,可以是相对/绝对路径
*     response.sendFile('绝对路径') 给浏览器发送一个文件，浏览器根据文件的种类，决定如何去展示。必须是一个决定路径. 如果可以展示则直接展示,如果不可以,就下载
*     response.redirect('网址') 重定向到一个新的网址 重定向(在响应头里面加了一个location)
*     response.set('key','value') 自定义响应头 必须在响应之前
*     response.get('key') 获取响应头中的指定内容 写在哪里都可以
*
* 
     node平台下,提供了一个path模块. 这个模块,专门用来帮我们拼接路径
     path模块是node的内置模块, 无需下载,需要引入
     path.resolve()可以拼接路径
     会自动加斜杠,也可以动态的拼接(支持../,./这些路径写法)
*/

// 1. 引入express
const express = require('express')
const path = require('path')
// 2. 创建应用对象
const app = express()
// 3. 定义路由
// 定义路由参数: /路径/:参数名/:参数名
// 注意: 路由参数后面如果有?.表示这个参数是可选的
// 如果有一个参数是可选,有一个是不可选, 并且传递过来的数据就只有一个.那么默认认为传过来的是必选的参数
// 有几个必填的参数,就必须传递几个参数.否则路由匹配不到
app.get('/index/:page?', (req, res) => {
  // console.log(req.query) //获取get请求上传的查询字符串
  // console.log(req.get('user-agent')) // 可以忽略大小写
  console.log(req.params)
  // res.send('服务响应成功') // 一般用来响应一些字符串
  // res.download('./index.html')
  // res.download('./music.mp3')
  // __dirname  当前文件所处文件夹的绝对路径
  // __filename  当前文件的绝对路径
  // console.log(__dirname + '/music.mp3')
  // res.download(__dirname + '/music.mp3')
  // res.sendFile(__dirname + '/index.html')
  // res.sendFile(__dirname + '/队列.jpg')
  // res.sendFile(__dirname + '/防盗链.txt')
  // res.sendFile(__dirname + '../music.mp3')
  // const pathStr = path.resolve(__dirname, '../music.mp3')
  // console.log(pathStr)
  // res.sendFile(pathStr)

  // res.redirect('http://www.mi.com')

  res.set('abc', 'heiheihei') // 响应头中不可以写中文 // 设置响应头应该在响应之前操作
  res.send('服务器响应成功了')
  console.log(res.get('x-powered-by')) //获取响应头可以写在响应后面,忽略大小写
})
app.post('/index', (req, res) => {
  console.log(req.body) //默认拿不到数据
  res.send('服务响应成功')
})
// 4. 开启服务器
app.listen(5000, (err) => {
  if (err) console.log('服务器开启失败', err)
  else console.log('服务器开启成功')
})
