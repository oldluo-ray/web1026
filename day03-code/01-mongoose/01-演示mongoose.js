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



    } catch (error) {
        // 如果连接不成功,直接进入catch
        console.log('数据库连接失败', error)
    }


})()


