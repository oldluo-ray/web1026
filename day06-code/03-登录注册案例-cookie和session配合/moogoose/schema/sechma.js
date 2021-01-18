// 用于创建Schema的模块
const mongoose = require('mongoose')

// 获取Schema构造函数
const Schema = mongoose.Schema

// 创建Schema对象
module.exports = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    enable: {
      type: String,
      default: 'Y',
    },
  },
  { collection: 'userData' }
)
