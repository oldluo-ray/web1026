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
          {/* Route组件和浏览器地址栏路径匹配,默认使用模糊匹配规则: 
              只要pathname以path开头即可.注意: 按照path的级别为最小单位去比较,不是字符中包含就可以的
              pathname: 浏览器地址栏的路径/
              path: 就是每一个Route组件的path属性的值
          
              pathame: / 
              path: / 
              path: /home
              path: /detail

              pathname: /home
              path: /
              path: /homexxx  匹配不上
              path: /detail

              pathname: /detail
              path: /
              path: /home
              path: /detail


              路径: /a/b/c/d

              精确匹配规则: pathname和path一样
              Route组件上写了exact.那么这个Route在匹配的时候,使用精确匹配,但是其他的Route没有写,那么还是模糊匹配

              pathname: /home 
              path(exact): /
              path:/home
              path:/detail
          */}
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
