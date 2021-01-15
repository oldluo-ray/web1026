/**
 *  mongoose
 *
 *      1. 哪里需要,就在哪里引入
 *      2. 连接数据库   mongoose.connect('mongodb://127.0.0.1:27017/数据库名')
 *           返回一个promise
 *      3. 创建约束:
 *           3.1 获取Schema构造函数  const Schema = mongoose.Schema
 *           3.2 创建Schema.   const xxxSchema = new Schema({
 *                                   属性名: {
 *                                       type: 控制属性的类型
 *                                       required: 必填
 *                                       default: 默认值
 *                                       unique: 表示当前值不可重复
 *                                   }
 *                             })
 *      4. 创建model
 *          mongoose.model('集合名', 约束对象)
 *          注意: mongoose会自动给集合名加s, 还会转成小写
 *          解决: 在new Schema的时候,第二个参数写: {collection: '集合名'}
 *
 *
 *     5. 利用model做增删改查:
 *
 *           增加:
 *              集合对象.create(文档, 回调)
 *
 *           查询:
 *              集合对象.findOne(查询条件, 投影, 回调) 返回的就是一个文档对象,没有找到就是null
 *              集合对象.find(查询条件, 投影, 回调) 返回的是一个数组,没找到是空数组
 *
 *           修改:
 *              集合对象.updateOne(查询条件, 修改的内容,回调)
 *              集合对象.updateMany(查询条件, 修改的内容, 回调)
 *
 *           移除:
 *              集合对象.deleteOne(查询条件,回调)
 *              集合对象.deleteMany(查询条件,回调)
 *
 *    注意: 如果这些方法,都不传回调,就返回一个promise
 *
 *  node原生快速搭建服务器
 *
 *      1. 引入http模块
 *          const http = require('http')
 *      2. 创建服务器对象
 *          const server = http.createServer((request,response)=>{
 *              // 这个回调函数,监听了客户端的请求
 *              // request 可以获取到客户端发送请求中包含的所有信息
 *              request.url 可以获取到路径及后面的参数
 *              // response 响应对象. 用于响应客户端
 *              response.end(响应数据)
 *          })
 *      3. 开启监听服务器
 *          server.listen(端口号,(err)=>{
 *          })
 *
 *
 *
 *
 *
 *
 */
