
// 张三的代码

let username = '海静'
let age = 18
let info = '没有头发'
// commonjs模块化规范下, 每一个js文件都有一个自己的作用域.所以想将数据暴露出去,
// 就必须要导出
// 使用module.exports 直接导出
// module.exports 默认值是一个空的对象
module.exports = {
    xxx : username,
   
}

module.exports.age = age
//注意:可以导出多次,但是有覆盖问题,所以要注意
module.exports = {
    info
}