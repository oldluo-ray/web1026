import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Item from './components/Item/Item'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 3,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 2,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 1,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  componentDidMount() {
    this.token = Pubsub.subscribe('add', (msg, data) => {
      // 如果这个回调执行了,说明任务名传过来了.可以直接添加数据了
      let { list } = this.state
      let newList = [...list]

      let id = list.length ? list[0].id + 1 : 1
      let obj = {
        id,
        todoName: data,
        isDone: false,
      }

      newList.unshift(obj)
      this.setState({
        list: newList,
      })
    })
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          {
            <div>
              <List name="123">
                <Item></Item>
                <Item></Item>
                <Item></Item>
              </List>
              <Footer></Footer>
            </div>
          }
        </div>
      </div>
    )
  }
}
