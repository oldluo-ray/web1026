// 入口文件
// 引入react, 引入reactDom

import React from 'react'
import ReactDOM from 'react-dom'

// 定义一个函数组件
function Div() {
  return <div>hello 函数组件</div>
}

// 定义一个类组件
class Header extends React.Component {
  render() {
    return <h1>hello 类组件</h1>
  }
}

// 总结:
// 1. 组件名必须首字母大写
// 2. 函数组件里面或者类组件的render里面,必须写return. return的值就是要渲染的html结构
// 3. 类组件必须继承React.Component
// 4. 使用组件时都是当做标签使用
// ReactDOM.render(<Div />, document.getElementById('root'))
ReactDOM.render(<Header />, document.getElementById('root'))
