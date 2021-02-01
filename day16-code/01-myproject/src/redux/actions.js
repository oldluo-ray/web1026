import { INCREMENT } from './constants'
// 封装每一个任务需求对应的函数
// 封装的这种函数,最终其实就是返回了一个action对象
// 所以这类函数有一个名称,叫做actionCreator
function increment(data) {
  return { type: INCREMENT, data }
}

export { increment }
