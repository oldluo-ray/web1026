import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handle = (name) => (e) => {
    this.setState({
      [name]: e.target.value,
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <h1>登录</h1>
        <form>
          用户名:
          <input
            type="text"
            value={username}
            onChange={this.handle('username')}
          />
          <br />
          密码:
          <input
            type="password"
            value={password}
            onChange={this.handle('password')}
          />
          <br />
          <input type="button" value="登录" />
        </form>
      </div>
    )
  }
}
