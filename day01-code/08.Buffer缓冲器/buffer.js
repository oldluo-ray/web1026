/*
 * 1.什么是Buffer？
 *     1.它是一个类数组的对象，用于存储数据（存储的全部是二进制数据）(像一双万能的手,用来接收任何类型的数据)
 *     2.Buffer的效率很高，存储和读取的速度都很快，本质就是对内存的直接操作
 *     3.Buffer的大小一旦确定了，不可修改。
 *     4.每个元素占用内存的空间是1字节。
 *     5.Buffer是Node中非常核心的模块，无需下载，无需引入，直接可以使用
 * 
 * 
 *    01010101 每数字就是一位 
 *    8位就是一个字节
 *    1024字节就是1kb
 *    1024kb就是1mb
 *    1024mb就是1gb
 * */
// 即将废弃
// const buf = new Buffer(10)
// 推荐使用Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
// const buf = Buffer.alloc(10)
const buf = Buffer.allocUnsafe(10)
buf.fill(0)
// const buf = Buffer.from('hello world你好')
console.log(buf)
console.log(buf.length)

