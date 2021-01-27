import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return <div>Test</div>
  }

  componentDidMount() {
    console.log('Test组件挂载了')
  }

  componentWillUnmount() {
    console.log('Test即将卸载')
  }
}
