/*
* 中间件（middleWare）？
*   本质就是一个函数，有三个参数（request,response,next）
   app.use(中间件)
*
* 组成：
*   1.request对象
*   2.response对象
*   3.next函数
*
* 作用：
*   1)	执行任何代码。
    2)	修改请求和响应对象。
    3)	终结请求-响应循环。（当一个请求来到服务器的时候，服务器开始处理，终结本次请求）
    4)	调用（堆栈中的）下一个中间件。

  分类：
      1.应用级中间件
          --1.修改请求和响应对象  2.拦截非法请求
      2.第三方中间
          --不是express提供的，是我们自己下载的
          app.use(bodyParser.urlencoded({extended:true}))
      3.express内置中间件
          --express给我们提供的中间件
          --app.use(express.urlencoded({extended:true}))
          --app.use(express.static('public'))
      4.路由器中间件
          --后期在路由器章节详细解释


  备注：
      1.在服务器中，客户端的一个请求达到服务端后，服务器只会做出一次响应，做出响应以后，不可以再修改request，和response
      2.在express中，当你定义路由和中间件的时候，会把你定义的东西按照定义的顺序（代码的顺序）放在类似于数组的容器中
        当请求过来的时候，依次从类数组的容器中拿出进行匹配，一旦匹配成功交给当前的处理，后续的都失效。
      3.当一个请求到达express服务器时，不管经过多少次的加工，所有路由和中间件中的request以及response，都是对第一次的引用。
*
* */

const express = require('express')

const app = express()

// 应用级的中间件
// 自己写的中间件就是应用级的中间件
// app.use((req, res, next) => {
//   req.abc = '马上下课'
//   console.log('应用级中间件执行了')
//   next()
// })
// 第三方的中间件
// 1. 下载  npm i body-parser
// 2. 引入
// const bodyParser = require('body-parser')
// 3. 使用中间件
// 写法1: 不管是get还是post,都是执行这个中间件.如果有很多get请求,这里就会被无意义的调用多次
// app.use(bodyParser.urlencoded({ extended: true }))

// 写法2:
// const xxxBodyParser = bodyParser.urlencoded({ extended: true })

// function fnMiddleWare(req, res, next) {
//   console.log('应用级中间件执行了')
//   req.abc = '嘿嘿嘿'
//   next()
// }
// app.get('/index', fnMiddleWare, (req, res) => {
//   console.log(req.abc)
//   res.send('/index-get')
// })

// app.get('/detail', (req, res) => {
//   res.send('/detail-get')
// })

// 只有请求的方式是post,并且路径是/data, 才会先执行,将post请求上传的数据,解析添加到req.body的中间件函数.然后中间件函数执行完,再执行路由的回调函数
// app.post('/data', xxxBodyParser, (req, res) => {
//   console.log(req.body)
//   res.send('post响应成功')
// })

// 使用express内置的中间件
// app.use(express.urlencoded({ extended: true }))
app.post('/data', express.urlencoded({ extended: true }), (req, res) => {
  console.log(req.body)
  res.send('post响应成功')
})

app.listen(5000)
