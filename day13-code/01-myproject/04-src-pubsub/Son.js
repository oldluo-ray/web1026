import React, { Component } from 'react'
import Pubsub, { publish } from 'pubsub-js'
export default class Son extends Component {
  componentDidMount() {
    this.token = Pubsub.subscribe('money', (msg, data) => {
      console.log('son', data)
    })
  }

  handle = () => {
    Pubsub.publish('rich-women', '500百万韩元')
  }

  handleClose = () => {
    Pubsub.unsubscribe(this.token)
  }

  render() {
    return (
      <div>
        孙子组件
        <button onClick={this.handle}>发布信息-rich-women</button>
        <button onClick={this.handleClose}>取消son组件的money订阅</button>
      </div>
    )
  }
}
