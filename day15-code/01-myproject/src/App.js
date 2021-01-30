import React, { Component } from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
//导入react-router-dom 里面的重要组件
// BrowserRouter 这个组件里面,封装了history.listen
// Route组件,定义了路径和对应视图的规则
// Link组件, 修改了浏览器地址栏的路径,但是不让浏览器发送请求
// BrowserRouter as Router 给BR起个别名.原来的BR就不能用了,应该使用新的名字
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      // BrowserRouter必须包裹整个应用. 而且只需要些一次
      <Router>
        <div>
          <h1>app根组件</h1>
          {/* link组件,相当于a标签,但是阻止了a的默认行为 */}
          <Link to="/home">首页</Link>
          <Link to="/detail">详情页</Link>

          {/* 使用Route组件,配置路径和视图的对应规则 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
