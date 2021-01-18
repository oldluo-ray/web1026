// 创建model的模块
const mongoose = require('mongoose')
const userSchema = require('../schema/sechma')

module.exports = mongoose.model('userData', userSchema)
