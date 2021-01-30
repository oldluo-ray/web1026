import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Test extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // document.body.appendChild(this.container)
    document.getElementById('box').appendChild(this.container)
  }
  render() {
    this.container = document.createElement('div')
    let node = <div>Test组件</div>
    return ReactDOM.createPortal(node, this.container)
  }
}
