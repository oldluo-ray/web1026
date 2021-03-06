/**
 *  1. express 快速搭建服务器
 *
 *      express是一个在node平台下,搭建服务的一个第三方的框架
 *      express主要就由路由和中间件组成
 *      使用:
 *      1. 下载
 *      2. 引入
 *      3. 利用express创建应用对象   const app = express()
 *      4. 开启服务 app.listen(端口号, 回调)
 *
 *  2. http协议
 *
 *      http协议是: 超文本传输协议. 规定了客户端和服务器之间交互的规则
 *
 *      请求报文:
 *          请求首行  get请求的数据,在路径后面拼接
 *          请求头
 *          请求空行
 *          请求主体  get请求没有请求主体
 *
 *      响应报文:
 *          响应首行
 *              200 成功
 *              301 重定向
 *              302  重定向
 *              304  缓存
 *              404  资源找不到,一般是客户端的问题
 *              500  服务器端的错误
 *          响应头
 *          响应空行
 *          响应主体   服务器要返回给客户端的数据
 *
 *
 *      get请求和post的请求的区别:
 *
 *          1. get请求的参数会显示在地址栏, post请求的参数在请求主体中
 *          2. get请求数据相对不安全, post请求的数据,相对安全
 *          3. 由于get请求的参数,在地址栏,地址栏是有大小限制的.所以get请求只能传递少量数据. 但是post请求的数据,在请求主体.理论上没有大小限制.但是服务器会限制
 *
 *          上传数据用post, 获取数据用get
 *
 *
 *
 *  3. express路由
 *
 *      路由: 就是一套一一对应的映射规则
 *      后端路由: 客户端发送请求和后端处理这个请求一一对应的一些规则
 *      app.get/post/all(路径/:路由参数?, 回调)
 *      回调接收到两个参数: 请求对象  响应对象
 *
 *      请求对象:
 *          req.query  查询字符串
 *          req.body   post请求主体的数据
 *          req.params   路由参数
 *          req.get('属性名')
 *
 *      响应对象:
 *          res.send() 用于响应字符串
 *          res.download('相对/绝对路径') 用于下载
 *          res.sendFile('绝对路径') 浏览器可以识别则展示,否则下载.只能写绝对路径
 *          res.redirect()重定向
 *          res.set(属性,值) 设置响应头,只能在响应之前设置. 值不能是中文
 *          res.get(属性) 获取响应头信息
 *
 *  4. express中间件
 *
 *          express的中间件,其实就是一个函数
 *          这个函数接收三个参数: 请求对象, 响应对象, 下一个中间件
 *          中间件里面的请求对象和响应对象. 和后面的中间件中的请求对象以及响应对象是同一个
 *          中间件的分类:
 *              应用级:  自己定义的中间件
 *              第三方: 别人写好的中间件
 *              内置:  express自带的
 *              路由器: Router
 *          使用:
 *              1. app.use(中间件)
 *                   这种用法,客户端发过来的所有请求,这个中间件都会执行,但是get请求的时候,其实这个中间件不需要执行
 *                  app.use(bodyParser.urlencoded({extends: true}))
 *
 *              2. 写在定义路由的路径后面
 *                  客户端发送了指定路径的post请求,先执行内置的中间件,然后执行回调
 *                  app.post(路径,express.urlencoded({extends:true}),回调)
 *
 *   5. 补充的重要知识:
 *
 *          path模块: 是node原生的模块. 用来拼接路径
 *          path.resolve(路径,路径,..) 自动加斜杠,支持../等相对路径的符号
 *
 *
 *          网络知识:
 *
 *              url: 统一资源定位器(网络中的资源的地址)
 *              组成: 协议://域名:端口号/路径?查询字符串#hash值
 *              ip地址: 网络中是计算机的唯一标识符
 *              域名:ip地址不好记忆,所以使用域名包裹
 *              域名存储在dns服务器中,浏览器会先查看dns服务器中域名对应的ip地址,然后通过ip找到指定的计算机
 *
 *              127.0.0.1 本地回调地址 指向本机
 *              192.168.x.x 局域网
 *              localhost 域名表示本机
 *              查看本机ip: 命令行窗口中输入:ipconfig 回车
 *
 */
