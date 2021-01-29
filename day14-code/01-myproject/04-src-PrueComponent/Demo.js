import React, { Component, PureComponent } from 'react'

// PureComponent 叫做纯组件
// 作用:跟Component组件的功能基本相似.只是纯组件中的shouldComponentUpdate里面,自动帮助我们判断了所有的props数据和state的数据.如果有一个数据发生变化了,就更新,如果都没有变化,就不更新.
// 注意: 纯组件,内部比较的时候,是浅层对比!!!
export default class Demo extends PureComponent {
  state = {
    msg: 'one',
  }

  render() {
    console.log('demo组件更新了')
    return (
      <div>
        <p>demo组件</p>
        <p>{this.props.count}</p>
        <button
          onClick={() => {
            this.setState({
              msg: 'two',
            })
          }}
        >
          demo的按钮
        </button>
      </div>
    )
  }
}
