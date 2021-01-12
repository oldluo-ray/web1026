/*
 * 1.流是什么？
 *     类似于现实生活中的水流，可以传输数据（液体）
 * 2.特点：将要写入的数据，放在文件流中，连续不断的向指定位置传输，节约内存空间，而且效率高。
 *     fs.createWriteStream(path[, options])
 *         --path : 要写入的文件路径+文件名+文件后缀
 *         --options：配置对象
 *                 --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *                 --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *                 --encoding ：编码，默认是：'utf-8'
 *                 --fd ：文件描述符（文件内部编码），默认值是null
 *                 --autoClose ：自动关闭，当数据写入完毕后，自动关闭文件描述符，默认值true
 *                 --start：写入文件的起始点（开始位置）
 * 
 * 3. 其他方法:
 *    写入流.on('open',回调) 监听流开启
 *    写入流.on('close',回调) 监听流关闭
 *    写入流.write(data) 写入数据
 *    写入流.end() 写入完毕
 * 
 * */

 
//  1. 引入fs模块
const fs = require('fs')
// 2. 创建可写流
const ws = fs.createWriteStream('./test.txt', {
    start: 10
})

// 3. 写入数据
ws.write('海静头像硅谷logo')
ws.write('沛华渣男锡纸烫')
ws.write('哈哈哈哈')

// 写入完毕要关闭流
ws.end()

// 监听流的开启和关闭
ws.on('open',()=>{
    console.log('流开启了')
})
ws.on('close',()=>{
    console.log('流关闭了')
})

