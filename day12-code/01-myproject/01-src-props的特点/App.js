// 定义一个根组件
import React from 'react'

import Test from './components/Test'

class App extends React.Component {
  // 上面构造函数的一种解析形式
  state = { count: 0, masg: 'hehe' }

  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    // render函数中的this,一定指向当前组件的实例
    return (
      <div id="app">
        <div>{this.state.count}</div>
        <button onClick={this.handle}>按钮</button>
        <Test
          count={this.state.count}
          element={<h3>测试</h3>}
          obj={{ name: 'zs' }}
        />
      </div>
    )
  }
}
export default App

// 实例属性: 就是加到实例身上的属性 只有实例可以方位.类访问不了
// 静态属性: 就是直接加到类/构造函数上的属性,只有类/构造函数自己可以访问. 实例无法访问
// java :
// class Person {
//   public name
//   private age
// }
