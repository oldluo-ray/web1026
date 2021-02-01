import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// redux的三个核心概念:
// store:
// - 有一个state属性,集中存储了项目中所需的所有的数据.
// - 要修改数据.是要通过store.dispatch(需求)去修改的

// reducer:
// - reducer是真正去修改数据的角色
// - reducer在创建store的时候,会调用一次,为了初始化数据. 后面每次调用了dispatch,reducer会调用.为了修改数据
// - 定义: function 函数名(state={},action){switch...}
// reducer要求是一个纯函数(输入同样的值,得到同样的结果)
//

// action:
// - action是一个普通的对象 表示需求数据的需求
// - action对象上至少有一个type属性.值用来描述需求类型(一般写成大写的字符串)
// - 除了type属性必须写之外,其他属性根据自己的情况,都是可写可不写

// 使用redux
// 此时写的redux根react没有关系,写在这里只是为了在浏览器中可以查看数据
// 1. 下载  npm i redux / yarn add redux
// 2. 导入一个函数
// import { createStore } from 'redux'
// 3. 根据这个函数,创建对象
// const store = createStore(reducer函数)
// 定义一个reducer函数
// reducer函数要求是一个纯函数
function reducer(state = { count: 0, msg: '呵呵呵' }, action) {
  switch (action.type) {
    case 'INCREMENT':
      // 注意:reducer函数中return什么,store中state的值就变成什么
      return {
        // 为了保证数据的完整性,要在return的对象里最上面的位置写...state
        ...state,
        // count: 0,
        // msg: 'hehehe',
        count: state.count + action.data,
      }

    case 'DECREMENT':
      return {
        count: state.count - action.data,
      }
    // 必须写一个default.返回值就是state
    default:
      return state
  }
}
// 注意: 在创建store对象的时候,内部会调用一次reducer函数,目的是为了初始化store对象中的数据. 如果后面想要让reducer函数再次执行,就只能调用dispatch方法
// createStore的时候,可以传入第二个参数, 第二个参数默认是给store的state初始化数据(优先级也比较高)但是,一般不会这样去写.因为未来会写很多的reducer函数,每一个reducer函数都管理一份自己的数据.所以,都是在reducer上面初始化数据的
// const store = createStore(reducer, { hahaha: '123' })
const store = createStore(reducer)

// // 想要查看数据
console.log(store.getState()) // count: 0
// // 调用了dispatch,reducer就会执行
// // 调用dispatch,将action传递给reducer
store.dispatch({ type: 'INCREMENT', data: 5 })
console.log(store.getState()) //count :5
store.dispatch({ type: 'DECREMENT', data: 3 })
console.log(store.getState()) // count: 2
