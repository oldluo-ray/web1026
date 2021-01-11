// 自己的代码

const module1 = require("./module1")

let username = '熊大'
let info = '头发飘逸'

// 导出
// exports并不是module.exports的简写 .
// 注意: module.exports 可以直接赋值,可以给对象添加属性
// 但是exports 只能给对象添加属性
exports.yyy = username



module.exports.aaa = 'test'
module.exports = {
    bbb: '哈哈'
}
exports.zzz = info
// 注意: 如果module.exports 和 exports 指向了不同的对象.那么导出的时候,
// 导出的其实是module.exports
// exports = module.exports = {}