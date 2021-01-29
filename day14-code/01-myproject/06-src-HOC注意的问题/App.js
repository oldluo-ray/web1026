import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

import withForm from './withForm'

const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin count={0} msg={123} test={'test'} />
        <WithRegister />
      </div>
    )
  }
}

// react devTools 这个调试工具,展示组件名的时候,默认先读取组件的静态属性displayName,如果有,就展示displayName.如果没有就展示静态属性name的值. 默认组件的名称就是name的值.
// 如果组件没有名称,默认值就是_temp
// console.log(App.name)
// console.log(App.displayName)
// App.displayName = 'YYYYY'

export default App
