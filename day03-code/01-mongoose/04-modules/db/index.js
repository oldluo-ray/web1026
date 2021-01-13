// 用于连接数据库的模块
// mongoose.connect
// 引入mongoose模块
const mongoose = require('mongoose')

// 连接数据库,并且将连接返回的promies导出
// 导出的目的是为了让其他模块知道什么时候数据连接成功了
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web1026',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})