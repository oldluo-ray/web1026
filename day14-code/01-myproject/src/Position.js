//render定义的是一个组件
import React from 'react'
export default class Position extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  mouseMoveHandle = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMoveHandle)
    // window.onmousemove = this.mouseMoveHandle
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMoveHandle)
    // window.onmousemove = null
  }

  render() {
    return this.props.render(this.state)
  }
}
