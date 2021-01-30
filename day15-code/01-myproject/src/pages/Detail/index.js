import React, { Component } from 'react'
import Test from '../Test'

export default class Detail extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <h5>detail的路由参数内容~~~{this.props.match.params.id}</h5>
        <h5>
          上个视图传递过来的~~~
          {this.props.location.state && this.props.location.state.msg}
        </h5>
        <Test></Test>
      </>
    )
  }
}

// 历史记录: /=>/home/news=>/home/message=>/home/message/4
// 历史记录: /=>/home/news=>/home/message/5
