import React, { Component } from 'react'
import Far from './Far'
import context from './context'
const { Provider } = context
export default class App extends Component {
  state = { msg: '五毛钱' }
  render() {
    return (
      // <context.Provider>
      <div>
        <Far />
      </div>
      // </context.Provider>
    )
  }
}
