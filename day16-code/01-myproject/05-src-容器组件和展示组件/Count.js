import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button
          onClick={() => {
            // 这个函数是connect函数封装后的函数,这个函数内部调用了dispatch
            this.props.increment(1)
          }}
        >
          按钮+1
        </button>
        <button
          onClick={() => {
            this.props.increment(5)
          }}
        >
          按钮+5
        </button>
      </div>
    )
  }
}
