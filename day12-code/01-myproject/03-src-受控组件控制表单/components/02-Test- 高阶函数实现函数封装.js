import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    text: '',
    ta: '',
    lunch: '',
    cb: true,
  }
  handle = (name) => {
    // 返回的这个function才是真正的事件处理函数
    return () => {
      const value = name === 'cb' ? e.target.checked : e.target.value
      this.setState({
        [name]: value,
      })
    }
  }
  render() {
    return (
      <div>
        <form>
          用户名:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handle('text')}
            data-flag="text"
          ></input>
          文本域:
          <textarea
            value={this.state.ta}
            onChange={this.handle('ta')}
          ></textarea>
          下拉框:
          <select value={this.state.lunch} onChange={this.handle('lunch')}>
            <option value="dcf">蛋炒饭</option>
            <option value="nrm">牛肉面</option>
            <option value="scy">酸菜鱼</option>
          </select>
          复选框:
          <input
            type="checkbox"
            checked={this.state.cb}
            onChange={this.handle('cb')}
          ></input>
        </form>
      </div>
    )
  }
}
