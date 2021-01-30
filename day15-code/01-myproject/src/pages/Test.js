import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Test extends Component {
  render() {
    console.log(this.props)
    return <div>Test组件</div>
  }
}

export default withRouter(Test)
