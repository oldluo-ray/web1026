// 导入分别导出的模块
import { fn1, fn2, data } from './module1'

// 导入统一导出的模块
import { data1, foo, data4 } from './module2'

fn1(1)
fn2(2)
// 导入默认导出的模块
import num, { data2, data3 } from './module3'
console.log(data)
console.log(data1)
foo()
console.log(num)
console.log(data2)
console.log(data3)
console.log(data4)

/***
 *
 *  总结:
 *
 *   导出:
 *      分别导出: export 语句  比如 export const a = 1 或 export 有名字的函数
 *      统一导出: export {变量名,函数名,常量名}  可以写多次(没必要)
 *      默认导出: export default 字面量
 *      注意: 以上三种导出模式在一个模块中,都可以混合使用. 只是默认导出在一个模块中只能写一次
 *
 *
 *   导入:
 *      如果一个模块中使用了分别导出/统一导出
 *      import {导出时的变量名,导出时的函数名} from '模块的路径'
 *      如果是默认导出
 *      import 自定义的名字 from '模块的路径'
 *      如果混合的默认导出和统一导出/分别导出
 *      import 自定义的名字, {导出的变量名,导出的函数名} from '模块路径'
 *
 *
 *      如果导入的是第三方的模块, 那么导入时,只需要写模块的名称,不需要写路径
 *
 *
 *      commonjs中,可以在逻辑代码后面去引入模块
 *      const 模块 = require('模块')
 *      一堆js逻辑代码...
 *      const 模块 = require('其他模块')
 *
 *      那么es6中可以在js逻辑代码之后,导入吗?
 *      默认是可以的
 *      但是,未来在react的脚手架中,使用es6模块化语法的时候,不允许在js逻辑后面引入es6模块.
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
