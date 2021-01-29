import React, { Component } from 'react'
import Test from './Test'
import Demo from './Demo'
export default class App extends Component {
  state = {
    obj: { name: 'zs' },
  }
  render() {
    console.log('app更新了')
    return (
      <>
        <button
          onClick={() => {
            let { obj } = this.state
            obj.name = 'ls'
            this.setState({
              obj,
            })
            // this.setState({
            //   obj: { name: 'ls' },
            // })
          }}
        >
          按钮
        </button>
        <h3>hello </h3>
        <p>react</p>
        <p>{this.state.obj.name}</p>
        <Test></Test>
        <Demo obj={this.state.obj}></Demo>
      </>
    )
  }
}
