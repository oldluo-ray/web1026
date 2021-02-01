import { INCREMENT } from './constants'
// 封装每一个任务需求对应的函数
// 封装的这种函数,最终其实就是返回了一个action对象
// 所以这类函数有一个名称,叫做actionCreator
function increment(data) {
  return { type: INCREMENT, data }
}

// 为了配合redux-thunk.从而实现可以在redux中发送异步请求的目的.按照redux-thunk这个中间件的要求,应该在actions.js中定义一个异步的actionCreator
function incrementAsync() {
  return (dispatch) => {
    //发送请求的代码,写在这里
    // 假设执行setTimeout,就是发送请求
    setTimeout(() => {
      // 假设回调执行了,就是响应成功了
      // 假设拿到的是6
      dispatch(increment(6))
    }, 2000)
  }
}

export { increment, incrementAsync }
