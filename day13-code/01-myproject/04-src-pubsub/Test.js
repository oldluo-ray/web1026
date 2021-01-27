import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
export default class Test extends Component {
  componentDidMount() {
    // 注意:组件挂载成功了,才去订阅
    // msg:其实就是话题
    // data:才是真正要拿的数据
    Pubsub.subscribe('money', (msg, data) => {
      console.log(msg, data)
    })

    Pubsub.subscribe('rich-women', (msg, data) => {
      console.log('test', data)
    })
  }
  render() {
    return <div>Test组件</div>
  }
}
