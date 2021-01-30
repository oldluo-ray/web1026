import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg: 'one',
  }
  render() {
    // console.log(111111)
    return (
      <div>
        <button
          onClick={() => {
            // this.setState({
            //   count: this.state.count + 1,
            //   msg: 'two',
            // })
            // setState修改数据的行为是一个异步的行为.所以setState后面直接获取,是上一次的数据
            // console.log(this.state.count)
            // 如果连续调用了多次setState会合并
            // this.setState({
            //   count: this.state.count + 2,
            // })
            // this.setState({
            //   count: this.state.count + 3,
            // })
            // 第一个参数,可以是一个函数.这个函数是当上一次修改的数据修改完成之后,调用
            // this.setState((nextState) => {
            //   console.log(nextState)
            //   return {
            //     count: nextState.count + 1,
            //   }
            // })
            // this.setState((nextState) => {
            //   console.log(nextState)
            //   return {
            //     count: nextState.count + 2,
            //   }
            // })
            // this.setState((nextState) => {
            //   console.log(nextState)
            //   return {
            //     count: nextState.count + 3,
            //   }
            // })

            // 第一个参数,可以是对象,也可以是函数
            // 第二个参数,就是一个函数. 触发时机: 当数据修改完毕,并且视图更新完毕
            this.setState(
              (nextState) => {
                return {
                  count: nextState.count + 1,
                }
              },
              () => {
                console.log(this.state.count)
                console.log(document.getElementById('box'))
              }
            )
          }}
        >
          按钮
        </button>
        <div id="box">{this.state.count}</div>
        <div>{this.state.msg}</div>
      </div>
    )
  }
}
