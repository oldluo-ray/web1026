import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()

    this.textRef = React.createRef()
    this.selRef = React.createRef()
  }

  handle = () => {
    // console.log(this.textRef.current.value)
    console.log(this.selRef.current.value)
  }
  render() {
    return (
      <div>
        {/* <form> */}
        用户名:
        <input type="text" ref={this.textRef}></input>
        下拉框:
        <select ref={this.selRef}>
          <option value="dcf">蛋炒饭</option>
          <option value="nrm">牛肉面</option>
          <option value="scy">酸菜鱼</option>
        </select>
        <button onClick={this.handle}>按钮</button>
        {/* </form> */}
      </div>
    )
  }
}
