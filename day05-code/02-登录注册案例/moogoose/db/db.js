// 用于连接数据库的模块
// 引入mongoose
const mongoose = require('mongoose')

// 连接数据库
// 直接导出连接的promise对象
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/users',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
