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
  handle = () => {
    // 只有被Route组件渲染的组件,才能通过props获取到history,location,match这三个对象
    console.log(this.props)
  }
  render() {
    return (
      // BrowserRouter必须包裹整个应用. 而且只需要些一次

      <div>
        <h1>app根组件</h1>

        {/* <Link to="/detail/1/10"></Link> */}

        <button onClick={this.handle}>按钮</button>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          {/* 
               路由参数总结: 
               1. 定义路由参数. 在Route组件的path属性里面定义 /:参数名 
               2. 路由参数定义了之后,就必须要传.如果要定义可选的路由参数 /:参数名? 
               3. 传递路由参数: 
                  3.1 <Link to="/路径/参数/参数"></Link>
                  3.2 props.history.push/replace('/路径/参数/参数')
               4. 获取:props.match.params可以获取到路由参数
            */}
          <Route path="/detail/:page/:pageSize?" component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}

const WithApp = withRouter(App)

export default WithApp
