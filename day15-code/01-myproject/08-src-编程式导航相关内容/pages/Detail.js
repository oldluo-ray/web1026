import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // 如何获取到利用编程式导航push/replace传递过来的数据?
    // 解决: this.props.location.state可以获取到
    // console.log(this.props.location)
    console.log(this.props.match)

    return (
      <div>
        <h1>详情页</h1>
      </div>
    )
  }
}
