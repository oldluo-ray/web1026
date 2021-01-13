const mongoose = require('mongoose')

// 注意: 创建Schema,不需要等数据库连接成功再创建
// 拿到Schema构造函数
const Schema = mongoose.Schema
// 创建 Schema对象
const stuSchema = new Schema({
    id: {
        type: String, // 当前字段的数据类型
        required: true, // 必填项
        unique: true // 唯一
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true
    },
    gender: {
        type: String,
        default: '男'  // 不写的时候默认值
    },
    hobby: {
        type: [String]
    },
    info: {
        type: Schema.Types.Mixed //表示所有类型
    },
    date:{
        type: Date,
        default: Date.now() // 一般表示注册时间
    },
    enable:{
        type: String, // 表示这条用户数据有效
        default: 'Y'
    }
},{collection: 'student'})

// 导出Schema对象
module.exports = stuSchema