/** 
1. 引入http模块,用于搭建服务器
   const http = require('http')
2. 创建服务器对象
   const server = http.createServer((request, response) => {
   2.0 
   客户端的所有请求,都会被这个回调函数监听到
   2.1
   request 是请求对象,包含客户端传递过来的所有数据
   response 是响应对象,用于给客户端响应数据
   2.2 
   request.url 可以获取客户端通过get请求传递过来的数据
   2.3
   const queryString = require('querystring') querystring可以将查询字符串,转成一个对象
   const obj = queryString.parse(str) 将查询字符串转成对象的方法
   2.4 设置响应头
   response.setHeader('content-type', 'text/html;charset=utf-8')
   2.5 设置响应信息,并且响应给客户端
   response.end('<h3>服务器返回的结果</h3>')
})

3. 开启服务器
server.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/

// 使用node原生快速搭建服务
// 1. 导入http模块
const http = require('http')

// 2. 创建一个服务对象
const server = http.createServer((request, response) => {
  // 户户端发送给服务器的所有请求,被接收到之后,都会调用这个函数
  // request 表示请求对象
  const path = request.url // 返回的是路径和路径后面的参数(查询字符串)
  console.log(path)
  //   const arr = path.split('?')
  //   const queryStr = arr[1]
  //   // 想要把字符串转成对象,使用node中提供的一个叫做querystring的包,帮我们把查询字符串,转成对象
  //   const querystring = require('querystring')
  //   // parse方法可以把一个查询字符串,转成对象
  //   const res = querystring.parse(queryStr)
  //   console.log(res.name)
  // response表示相应对象
  // 如果相应中文会乱码. 原因:浏览器并没有使用utf8解码
  // 解决: 告诉浏览器应该使用utf8解码
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('<h3>中文<h3>')
})

// 3. 监听服务器开启
// 一个应用启动了之后,会占用一个端口号,这个端口号,其他应用就不可以使用了
server.listen(5000, (err) => {
  if (err) console.log('服务器启动错误', err)
  else console.log('服务器启动成功')
})
