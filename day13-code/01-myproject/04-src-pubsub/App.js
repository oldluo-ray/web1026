import React, { Component } from 'react'
import Far from './Far'
import Pubsub from 'pubsub-js'
export default class App extends Component {
  state = { msg: '五毛钱' }
  // 发布数据事件处理函数
  handle = () => {
    // 第一个参数就是话题: 其实就是订阅者和发布者建立关系的一个关键字
    Pubsub.publish('money', this.state.msg)
  }

  // 取消指定话题
  handleTopic = () => {
    Pubsub.unsubscribe('rich-women')
  }
  // 取消所有话题
  handleAllTopic = () => {
    Pubsub.clearAllSubscriptions()
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>发布信息-money</button>
        <button onClick={this.handleTopic}>取消指定话题</button>
        <button onClick={this.handleAllTopic}>取消所有话题</button>
        <Far />
      </div>
    )
  }
}
