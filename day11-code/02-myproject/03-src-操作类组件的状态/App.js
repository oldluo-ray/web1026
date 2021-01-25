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
  render() {
    // render函数中的this,一定指向当前组件的实例
    return (
      <div id="app">
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // 注意: 直接修改state里的值,这样数据是变了,但是视图没有变化
            // 我们希望得到的结果是: 数据变化了,视图也跟着变化了
            // this.state.count++
            // console.log(this.state.count)
            // setState是组件实例的方法. 作用有两个: 1. 修改实例的状态数据, 2. 更新视图
            this.setState({
              // 状态中有很多数据,但是这个对象中,只需要些修改的数据即可
              count: this.state.count + 1,
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}

export default App
