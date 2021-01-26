import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    text: '',
    ta: '',
    lunch: '',
    cb: true,
  }
  // 事件处理函数
  handle = (e) => {
    // e.target.getAttrubute('data-flag')
    // console.log(e.target.dataset.flag)
    let name = e.target.dataset.flag
    let value = name === 'cb' ? e.target.checked : e.target.value
    this.setState({
      [name]: value,
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
            data-flag="text"
          ></input>
          文本域:
          <textarea
            value={this.state.ta}
            onChange={this.handle}
            data-flag="ta"
          ></textarea>
          下拉框:
          <select
            value={this.state.lunch}
            onChange={this.handle}
            data-flag="lunch"
          >
            <option value="dcf">蛋炒饭</option>
            <option value="nrm">牛肉面</option>
            <option value="scy">酸菜鱼</option>
          </select>
          复选框:
          <input
            type="checkbox"
            checked={this.state.cb}
            onChange={this.handle}
            data-flag="cb"
          ></input>
        </form>
      </div>
    )
  }
}
