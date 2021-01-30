import React, { Component } from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
//导入react-router-dom 里面的重要组件
// BrowserRouter 这个组件里面,封装了history.listen
// Route组件,定义了路径和对应视图的规则
// Link组件, 修改了浏览器地址栏的路径,但是不让浏览器发送请求
// BrowserRouter as Router 给BR起个别名.原来的BR就不能用了,应该使用新的名字
import {
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  withRouter,
} from 'react-router-dom'

import './App.css'
class App extends Component {
  render() {
    return (
      // BrowserRouter必须包裹整个应用. 而且只需要些一次

      <div>
        <h1>app根组件</h1>
        {/* pathname: /home/item2 */}
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}

const WithApp = withRouter(App)

export default WithApp
