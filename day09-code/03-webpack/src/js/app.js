import { foo, bar } from './module1'
import { add, mul } from './module2'
import msg from './module3'

foo()
bar()
console.log(add(1, 2))
console.log(mul(1, 2))
console.log(msg.getMsg())
msg.setMsg('hehe')
console.log(msg.getMsg())

//导入json使用
//json 可以直接以默认导入的形式,引入
import data from '../json/data.json'
console.log(data)

setTimeout(() => {
  console.log('箭头函数')
})

// 引入样式
// 注意: 直接在import后面跟着样式文件的路径即可
import '../less/index.less'
