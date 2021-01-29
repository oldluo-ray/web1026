import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>注册</h1>
        <form>
          用户名:
          <input type="text" />
          <br />
          密码:
          <input type="password" />
          <br />
          确认密码:
          <input type="password" />
          <input type="button" value="注册" />
        </form>
      </div>
    )
  }
}
