// 需求: 将music.mp3读取,并且写入到一个叫music1.mp3文件中

// 封装函数,用于读取写入文件
// 函数三要素: 函数名 参数 返回值
function copyFile(sourceFile, targetFile){
    // 1. 采用流的方式读取mp3 
    // 1.1 引入fs模块
    const fs = require('fs')
    // 1.2 创建可读流
    const rs = fs.createReadStream(sourceFile)
    
    // 2. 通过流的形式写入到music1.mp3中
    // 2.1 创建可写流
    const ws = fs.createWriteStream(targetFile)

    // 将源文件,写入到目标文件
    // 注意: 任何的流对象,都可以调用这个pipe方法
    rs.pipe(ws)

}

copyFile('./music.mp3', './music3.mp3')
// copyFile('./hello.txt', './hello1.txt')

