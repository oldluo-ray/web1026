/**
 *  文件读写: 
 *      
 *    简单的读写:
 *         1. 引入fs模块 
 * 
 *         2. 简写写入: fs.writeFile(文件路径,数据[,配置项],回调)
 *         3. 简写读取: fs.readFile(文件路径[,配置项],回调) 回调的参数 err, data data是buffer
 *          
 *    流式读写: 
 *          
 *        创建可读流: fs.createReadStream(文件路径[,配置项]) 
 *          highWaterMark是配置项中控制流读取每一次的大小 单位是字节 
 *        如何获取到读取数据: rs.on('data', (data)=>{}) data就是每次读取的数据 
 *         
 *        创建可写流: fs.createWriteStream(文件路径[,配置项])
 *        如何将数据写入到目标文件: ws.write(数据)
 * 
 * 
 *       可读流什么时候开启,什么时候关闭? 创建的时候开启,读取完毕,自动关闭
 *       可写流什么时候开启,什么时候关闭? 创建的时候开启,调用的ws.end()的时候关闭
 * 
 * 
 *       监听流的开启和关闭:  流.on('open/close', 回调)
 * 
 *       流有一个pipe方法,可以快实现读取文件写入到目标文件中
 * 
 * 
 *  mongodb: 
 * 
 * 
 *       是一个非关系型数据库软件
 * 
 * 
 *       关系型数据库软件的组成:
 *       多个数据库 
 *       多个表
 *       行
 *       字段
 *      
 *       非关系型数据库软件的组成:
 *       多个数据库
 *       集合
 *       文档(类似json)
 * 
 * 
 *        mongod.exe 启动mongodb数据库软件 (由于我们安装了4.2或以上版本,所以直接设置为了系统服务器
 *        会开机自启动,所以不需要手动开启了)
 *        mongo.exe  就是操作mongodb数据库软件的客户端
 * 
 *  操作mongodb的指令:
 * 
 *        show dbs 展示所有的数据库
 *        show collections 展示当前数据库下面的所有的集合
 *        use 数据库名  切换数据库
 *        db  展示当前使用的数据库是谁 
 * 
 * 
 *       CURD指令: 
 * 
 *          增加:  
 *             db.集合.insert(文档)
 *             db.集合.insertOne(文档)
 *             db.集合.insertMany([文档, 文档])
 *          
 *          查询: 
 *              db.集合.find(查询条件, 投影)
 *              查询条件决定了返回的数据
 *              投影决定了要展示的字段  1 表示展示  0 表示不展示
 * 
 *              db.集合.find({age: 18})
 *              db.集合.find({age: 18, score: 100}) 表示查找的数据,要同时满足这两个条件
 *              < $lt,  <= $lte,  > $gt, >= $gte, != $ne, 与 $in, 或 $or
 *              db.集合.find({age: 正则})
 *              db.集合.find({$where: function(){
 *                   return true/false  true表示符合条件, false表示不符合条件
 *              }})
 * 
 *           更新:   
 *               db.集合.updateOne(查询条件,{$set: {age: 值}})  
 *               db.集合.updateMany(查询条件,{$set: {age: 值}})  
 * 
 *           移除: 
 *               db.集合.remove(查询条件)
 *              
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */