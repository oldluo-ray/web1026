;(async function () {
  // 1. 引入
  const mongoose = require('mongoose')

  try {
    // 2. 连接数据库
    await mongoose.connect('mongodb://127.0.0.1:27017/web1026', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // 3. 因为mongoose.connect返回的是promise.所以await后面的代码一定是成功的
    // 可以去操作数据库了
    console.log('mongoose数据库连接成功')

    // 4. 创建Schema(约束: 约束插入到文档中数据的格式以及数据类型)
    const Schema = mongoose.Schema
    const stuSchema = new Schema(
      {
        id: {
          type: String, // 当前字段的数据类型
          required: true, // 必填项
          unique: true, // 唯一
        },
        name: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: true,
        },
        gender: {
          type: String,
          default: '男', // 不写的时候默认值
        },
        hobby: {
          type: [String],
        },
        info: {
          type: Schema.Types.Mixed, //表示所有类型
        },
        date: {
          type: Date,
          default: Date.now(), // 一般表示注册时间
        },
        enable: {
          type: String, // 表示这条用户数据有效
          default: 'Y',
        },
      },
      { collection: 'student' }
    )

    // 5. 创建model对象(创建集合)
    // 参数: 第一个是集合名, 第二个是约束对象
    // 注意: mongoose会自动将集合名转成小写并且加一个s
    // 解决办法: 在new Schema的时候,第二个参数加上 {collection: '集合名'}
    const stuModel = mongoose.model('student', stuSchema)

    // 利用model创建document对象,但是我们后面不用document这种方式,所以document的方式,了解即可
    // 创建document对象 是 去 new model构造函数
    const stuDocument = new stuModel({
      id: Date.now(),
      name: '派大星',
      age: 3,
      gender: true,
      hobby: ['抽烟', '喝酒', '找富婆'],
      info: '渣男',
    })

    // 将document存储到集合中
    stuDocument.save()
  } catch (error) {
    // 如果连接不成功,直接进入catch
    console.log('数据库连接失败', error)
  }
})()
