import React, { Component } from 'react'
import Test from './Test'
import Demo from './Demo'

const xxxRef = React.createRef()
const yyyRef = React.createRef()
const zzzRef = React.createRef()
export default class App extends Component {
  handle = () => {
    console.log(xxxRef.current)
    console.log(yyyRef.current)
    console.log(zzzRef.current)
  }
  render() {
    return (
      <div>
        <p ref={xxxRef}>p标签</p>
        <Test ref={yyyRef}></Test>
        <Demo ref={zzzRef}></Demo>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
