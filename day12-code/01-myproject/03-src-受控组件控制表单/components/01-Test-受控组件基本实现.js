import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    text: '',
    ta: '',
    lunch: '',
    cb: true,
  }
  // 文本框的onchange的事件处理函数
  handle = (e) => {
    // console.log(e.target.value)
    this.setState({
      text: e.target.value,
    })
  }
  // 文本域的onchange的事件处理函数
  textareaHandle = (e) => {
    this.setState({
      ta: e.target.value,
    })
  }
  // 下拉框的onchange的事件处理函数
  selectHandle = (e) => {
    this.setState({
      lunch: e.target.value,
    })
  }
  // 复选框的onchange的事件处理函数
  checkHandle = (e) => {
    this.setState({
      cb: e.target.checked,
    })
  }
  render() {
    return (
      <div>
        <form>
          用户名:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handle}
          ></input>
          文本域:
          <textarea
            value={this.state.ta}
            onChange={this.textareaHandle}
          ></textarea>
          下拉框:
          <select value={this.state.lunch} onChange={this.selectHandle}>
            <option value="dcf">蛋炒饭</option>
            <option value="nrm">牛肉面</option>
            <option value="scy">酸菜鱼</option>
          </select>
          复选框:
          <input
            type="checkbox"
            checked={this.state.cb}
            onChange={this.checkHandle}
          ></input>
        </form>
      </div>
    )
  }
}
