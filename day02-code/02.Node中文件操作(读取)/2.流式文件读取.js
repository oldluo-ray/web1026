/*
 * 流式文件读取：
 *   fs.createReadStream(path[, options])
 *       --path:要读取的文件路径+文件名+文件后缀
 *       --options：配置对象
 *           --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *            --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *            --encoding ：编码，默认是：'utf-8'
 *            --fd ：文件描述符（文件内部编码），默认值是null
 *            --autoClose ：自动关闭，当数据写入完毕后，自动关闭操作完的文件，默认值true
 *            --start：读取文件的起始位置，默认是0
 *            --end ：读取文件结束的位置，默认是highWaterMark
 *            --highWaterMark：每次读取数据的大小（水管的粗细），默认值 64（字节byte） * 1024
 * 
 *  其他方法: 
 *    读取流.on('open',回调) 监听流开启
 *    读取流.on('close',回调) 监听流关闭
 *    读取流.on('data',回调) 读取的过程中拿到每次读取的数据
 *   
 * */

//  1. 引入fs 
 const fs = require('fs')

 // 2. 创建 可读流
 const rs = fs.createReadStream('./music.mp3', {
     highWaterMark: 4 * 1024 * 1024
 })

 // 监听可读流的开启和关闭以及读取
 rs.on('open',()=>{
     console.log('可读流开启了')
 })
 rs.on('close',()=>{
     console.log('可读流关闭了')
 })
 rs.on('data',(data)=>{
    console.log(data)
 })
