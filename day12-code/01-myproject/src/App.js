import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: true,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 3,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  getTodoName = (todoName) => {
    //  根据todoName生成一个对象
    let obj = {
      id: Date.now(),
      todoName,
      isDone: false,
    }

    let { list } = this.state
    // 注意: 未来使用的很多第三方的库/框架.对比数据都是浅层对比.随意养成一个好的习惯,不要直接修改复杂数据类型的本身的数据,应该根据原来的数据,创建一份新的数据,然后修改新的数据,最终将新的数据复制给原来存储数据的变量
    // 根据list,创建一个新的数组
    let newList = [...list]
    newList.unshift(obj)

    this.setState({
      list: newList,
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header fn={this.getTodoName}></Header>
          <List list={this.state.list}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
