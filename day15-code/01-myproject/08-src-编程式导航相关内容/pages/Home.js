import React, { Component } from 'react'

export default class Home extends Component {
  handle = () => {
    // console.log(this.props)
    // this.props.history.push(跳转的目标视图的路径, 传递过去的参数)
    // this.props.history.replace(跳转的目标视图的路径, 传递过去的参数)
    this.props.history.push('/detail/1', { msg: '呵呵', count: 0 })
    // this.props.history.replace('/detail')
  }
  render() {
    return (
      <div>
        <h1>首页</h1>
        <button onClick={this.handle}>Home的按钮</button>
      </div>
    )
  }
}
