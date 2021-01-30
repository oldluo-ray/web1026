import React, { Component } from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
//导入react-router-dom 里面的重要组件
// BrowserRouter 这个组件里面,封装了history.listen
// Route组件,定义了路径和对应视图的规则
// Link组件, 修改了浏览器地址栏的路径,但是不让浏览器发送请求
// BrowserRouter as Router 给BR起个别名.原来的BR就不能用了,应该使用新的名字
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'

import './App.css'
export default class App extends Component {
  render() {
    return (
      // BrowserRouter必须包裹整个应用. 而且只需要些一次
      <Router>
        <div>
          <h1>app根组件</h1>
          {/* link组件,相当于a标签,但是阻止了a的默认行为 */}
          <NavLink to="/home" activeClassName="select">
            首页
          </NavLink>
          <NavLink to="/detail" activeClassName="select">
            详情页
          </NavLink>
          {/* Switch组件: 用于包裹Route组件. 默认前面的Route组件修改成功,后面的还是会继续匹配. 但是如果用Switch包裹了之后,那么前面的Route匹配成功了,后面就不再匹配了 */}
          {/* Redirect是重定向组件:  from表示当路径是次路径时重定向 to表示重定向的路径  
          注意: from属性和Switch配合的使用才有意义
          */}
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            {/* <Redirect from="/a" to="/b"></Redirect> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
