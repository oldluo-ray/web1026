/*
 * 简单文件读取：
 *   fs.readFile(path[, options], callback)
 *           --path:要读取的文件路径+文件名+文件后缀
 *           --options：配置对象
 *               --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *               --encoding ：编码，默认是：'utf-8'
 *           --callback：回调函数  err, data
 *
 */

//  1. 引入fs模块
const fs = require('fs')
//  2. 直接读取文件: 
fs.readFile('./hello.txt',(err, data)=>{
    if(err) console.log(err)
    // 注意: 拿到的data默认是一个buffer,转成字符串,就使用toString
    else console.log(data.toString())
})
