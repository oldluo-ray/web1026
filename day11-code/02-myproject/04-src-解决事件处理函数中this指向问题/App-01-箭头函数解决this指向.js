// 定义一个根组件
import React from 'react'

class App extends React.Component {
  // 定义状态
  constructor() {
    super()
    this.state = {
      count: 0,
      msg: '呵呵',
    }
  }

  // 一般事件处理函数都写在类里面,这样写,就加到了当前组件的原型上了
  handle() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    // render函数中的this,一定指向当前组件的实例
    return (
      <div id="app">
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            this.handle() // 这个时候handle函数调用就是对象调用模式.handle中的this就是调用的对象
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
export default App
