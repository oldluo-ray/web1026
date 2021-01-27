import React, { Component } from 'react'
import context from './context'
const { Consumer } = context
export default class Son extends Component {
  render() {
    // return <div>孙子组件</div>
    return <Consumer>{(data) => <div>孙子组件,{data}</div>}</Consumer>
  }
}
