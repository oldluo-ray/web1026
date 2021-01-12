//新增
db.students.insertMany([{name:'lucy',age:19,score:99,gender: '男'},{name:'jack',age:20,score:59,gender: '女'}])

// 查询
// 总结: db.集合.find(查询条件, 投影)
// 查询条件: 决定了查找到哪些数据
// 投影: 决定了展示哪些字段
db.students.find({age: 18}) // 查询年龄是18岁的数据
db.students.find({age: 6,name: '西门狗剩'}) // 可以多个查询条件,同时符合这两个条件
// 常用操作符: 
db.students.find({age: {$gte: 10}}) // 查找年龄大于等于18岁的
db.students.find({age:{$in: [6,18]}}) // 查找年龄是6和年龄是18岁的
db.students.find({$or: [{age: 6},{name: '樱木花道'}]}) // 查找年龄是6或名字是樱木花道
db.students.find({age: {$ne: 6}}) //非 找到年龄不是6的数据
db.students.find({name: /^l/}) // 使用正则,找到name是以l开头
//查找时,有多少条数据就会调用回调函数多少次, 
//每次调用的时候,this就是具体的每一条数据, 这个数据是一个对象.如果函数返回true,则这条数据,返回出去
db.students.find({$where: function() { 
	return this.age > 18
}})
// 查询中的投影
// 投影: 就是筛选查询到数据的字段 1:表示展示 0:表示不展示
db.students.find({},{name: 1, _id:0})
db.students.find({},{name: 0, _id:0})

//修改
db.students.update({age:6},{$set: {score: 88}}) // 修改所有符合条件的第一个
db.students.update({age:6},{$set: {score: 66}}, {multi: true}) // 修改所有符合条件的数据
db.students.updateOne({age:6},{$set: {score: 44}}) //修改所有符合条件的第一条 
db.students.updateMany({age:6},{$set: {score: 22}})  // 修改符合条件的所有数据

//移除
db.students.remove({score:{$lt: 60}}) // 移除符合条件的所有数据