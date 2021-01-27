import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  constructor() {
    super()
    console.log('挂载阶段', '构造器')
    this.state = {
      count: 0,
    }
  }
  render() {
    console.log('挂载/更新', 'render')
    return (
      <div>
        app
        {this.state.count}
        <button
          onClick={() => {
            this.setState({
              count: 1,
            })
          }}
        >
          按钮
        </button>
        {this.state.count === 0 && <Test />}
      </div>
    )
  }
  componentDidMount() {
    console.log('挂载阶段', 'cdm')
  }

  componentDidUpdate() {
    console.log('更新阶段', 'cdu')
  }
}
