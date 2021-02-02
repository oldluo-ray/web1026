import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todo: '',
  }
  handle = (e) => {
    this.setState({
      todo: e.target.value.trim(),
    })
  }
  // 按下回车,判断用户是否输入数据,如果有,直接修改redux里面的数据
  keyUpHandle = (e) => {
    let { todo } = this.state
    if (todo && e.keyCode === 13) {
      //修改redux数据
      this.props.addtodo(todo)
      this.setState({
        todo: '',
      })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handle}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
