import { foo, bar } from './module1'
import { add, mul } from './module2'
import msg from './module3'
import '@babel/polyfill' // 这种导入形式:表示这个模块中没有导出任务数据,这样写,只是为了让这个模块中的代码执行一下

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

// 引入字体图标的样式文件
import '../less/iconfont.less'

// console.log(1 == 2)
// alert(123)
new Promise((resolve) => {
  resolve('成功了')
}).then((res) => {
  console.log(res)
})

console.log('嘿嘿嘿')
console.log('hehe')
