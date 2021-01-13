const mongoose = require('mongoose')
// 导入Schema,因为创建model需要绑定
const stuSchema = require('../Schemas/stuSchema')
// 创建model对象
const stuModel = mongoose.model('student',stuSchema)
// 增删改查的模块中需要这个model对象,所以导出
module.exports = stuModel