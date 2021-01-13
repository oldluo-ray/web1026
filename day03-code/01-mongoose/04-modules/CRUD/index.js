// 因为用了await, 所以为了配合所以加一个自调用函数,将自调用函数声明为异步函数
(async function(){
    // 用于执行crud的模块
    // 问题: 
    //1. 要进行操作,要获取到model对象 
    const stuModel = require('../models/stuModel')
    try {
        //2. 什么情况下,才能对数据库进行增删改查的操作
        // 对数据库进行操作,需要保证数据库已经连接成功了
        // 导入连接数据库的promise对象
        // commonjs中导入模块,如果文件夹下面的文件名是index.js
        // 导入时,路径可以忽略文件名
        const db = require('../db')
        // await 后面的代码,表示数据库连接成功
        await db;
        console.log('数据库连接成功')

        // 这里写增删改查的代码
        // ...
        const stu1 = await stuModel.find({age:18})
        console.log(stu1)

        
    //表示连接成功
    } catch (error) {
        console.log('数据库连接失败',error)
    }



})()

