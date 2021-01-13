;(async function(){
    // 1. 引入 
    const mongoose = require('mongoose')
    
    try {
        
        // 2. 连接数据库
        await mongoose.connect('mongodb://127.0.0.1:27017/web1026',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        // 3. 因为mongoose.connect返回的是promise.所以await后面的代码一定是成功的
        // 可以去操作数据库了
        console.log('mongoose数据库连接成功')

        // 4. 创建Schema(约束: 约束插入到文档中数据的格式以及数据类型)
        const Schema = mongoose.Schema
        const stuSchema = new Schema({
            id: {
                type: String, // 当前字段的数据类型
                required: true, // 必填项
                unique: true // 唯一
            },
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required:true
            },
            gender: {
                type: String,
                default: '男'  // 不写的时候默认值
            },
            hobby: {
                type: [String]
            },
            info: {
                type: Schema.Types.Mixed //表示所有类型
            },
            date:{
                type: Date,
                default: Date.now() // 一般表示注册时间
            },
            enable:{
                type: String, // 表示这条用户数据有效
                default: 'Y'
            }
        },{collection: 'student'})

        // 5. 创建model对象(创建集合)
        // 参数: 第一个是集合名, 第二个是约束对象
        // 注意: mongoose会自动将集合名转成小写并且加一个s
        // 解决办法: 在new Schema的时候,第二个参数加上 {collection: '集合名'}
        const stuModel = mongoose.model('student',stuSchema)

        // 利用model的增删改查的方法,去操作数据库
        // 注意: 只有在查询的时候,要关心返回结果.其他操作,只关心是否成功
        // 增加
        // stuModel.create({
        //     id: Date.now(),
        //     name: 'zzz',
        //     age: 25,
        //     gender: '女',
        //     hobby: ['抽烟', '喝酒', '找富婆'],
        //     info: '渣男'
        // },(err)=>{
        //     if(err)console.log('数据插入失败',err)
        //     else console.log('数据插入成功')
        // })
        // 查询 
        // 第一个参数: 查询条件
        // 第二个参数: 投影
        // 第三个参数: 回调 err data data是一个数组
        // 注意:就算没有找到符合条件的数据,也会返回一个空的数组
        // stuModel.find({age:20},{name:1},(err,data)=>{
        //    if(err)console.log('查找错误',err)
        //    else console.log(data)
        // })
        // findOne找不到返回null,找到就返回第一条
        // stuModel.findOne({age:3},(err,data)=>{
        //     if(err)console.log('查找错误',err)
        //     else console.log(data)
        //  })

        // 修改
        // 修改符合条件里面的第一条
        // stuModel.updateOne({age: 3}, {$set: {age: 8}}, (err, data)=>{
        //    if(err)console.log('修改失败',err)
        //    else console.log('修改成功')
        // })
        // stuModel.updateMany({age: 3}, {$set: {age: 16}}, (err, data)=>{
        //    if(err)console.log('修改失败',err)
        //    else console.log('修改成功')
        // })

        //删除
        // 只删除符合条件的第一个
        // stuModel.deleteOne({age:16},(err,data)=>{
        //     if(err)console.log('删除失败', err)
        //     else console.log('删除成功')
        // })
        // stuModel.deleteMany({age:25},(err,data)=>{
        //     if(err)console.log('删除失败', err)
        //     else console.log('删除成功')
        // })
        


    } catch (error) {
        // 如果连接不成功,直接进入catch
        console.log('数据库连接失败', error)
    }


})()


