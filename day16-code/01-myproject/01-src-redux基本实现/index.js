import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 使用redux
// 此时写的redux根react没有关系,写在这里只是为了在浏览器中可以查看数据
// 1. 下载  npm i redux / yarn add redux
// 2. 导入一个函数
// import { createStore } from 'redux'
// 3. 根据这个函数,创建对象
// const store = createStore(reducer函数)
// 定义一个reducer函数
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }

    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    // 必须写一个default.返回值就是state
    default:
      return state
  }
}
const store = createStore(reducer)

// 想要查看数据
console.log(store.getState())
// 调用了dispatch,reducer就会执行
// 调用dispatch,将action传递给reducer
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())
